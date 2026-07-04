---
name: new-article
description: 資格Lifeに新しい記事を公開するときの完全チェックリスト。新記事の作成、記事の追加、article-*.html の新規作成、articles.json・sitemap.xml・index.html 新着カードの更新を伴う作業のときに必ず使う。
---

# 資格Life 新記事公開スキル

新しい記事 `article-<slug>.html` を公開するには、**4ファイルの連動更新**が必須。
どれか1つでも漏れるとサイト上で記事が見つからない／SEOが欠ける。

## 公開チェックリスト（必ず全部やる）

1. `article-<slug>.html` を作成（最新記事をベースにコピーして書き換え）
2. `articles.json` の**先頭**にエントリを追加（新しい順）
3. `index.html` の「新着の記事。」セクション（`card-grid-4`）にカードを追加し、古いカードの `NEW` バッジを整理
4. `sitemap.xml` に `<url>` を追加（priority 0.8 / changefreq monthly / lastmod は公開日）
5. 関連するカテゴリページ・比較ページ・既存記事の「関連記事」から内部リンクを張る（該当あれば）
6. `python3 -m http.server 8080` でプレビューして表示・リンク切れ確認

## 1. 記事HTML（article-<slug>.html）

**必ず直近の記事（articles.json 先頭のもの）をコピーして開始する。** 全記事共通の構成：

- `<head>` 冒頭：AdSense（ca-pub-2973529127244385）＋ GA4（G-DKX8X254ZP）のスクリプトはそのまま残す
- SEO メタ：`<title>…｜資格Life`、`meta description`、`meta keywords`、`canonical`
- OGP＋Twitter Card：og:title / og:description / og:image / og:url、twitter:site は `@shikakulife`
- JSON-LD Article schema：headline / image / datePublished / dateModified / author（資格Life編集部）
  - **datePublished / dateModified は ISO 8601 形式（`2026-07-01`）で書く。**「2026年7月1日」のような和文表記は schema.org 的に不正
- 本文構成：進捗バー（`#progress`）→ PR表記バッジ（`pr-badge`・アフィリンクがある記事は必須）→ 導入 → `details.toc`（目次・open）→ 本文 → `mid-cta`（中間CTA）→ 末尾教材まとめ → `related`（関連記事）
- URL はすべて `https://shikaku-life.jp/` ベース

### サムネイル画像

- `images/art-<短い名前>.webp` に配置（webp形式）
- OGP・JSON-LD・articles.json・index.html カードの4箇所で同じ画像を参照

## 2. articles.json のエントリ

配列の**先頭**に追加。フィールドは全部必須：

```json
{
  "slug": "denko2-ginou-chokuzen",
  "title": "記事タイトル（HTMLのtitleから｜資格Lifeを除いたもの）",
  "excerpt": "一覧カードに出る要約。80〜120字目安",
  "date": "2026-07-01",
  "category": "bilmen",
  "category_label": "ビルメン系",
  "icon": "⚡",
  "thumb_color": "t-mint",
  "thumb_image": "images/art-denko.webp",
  "read_minutes": 11
}
```

- category / category_label の組み合わせ（既存値のみ使う）：
  `ai`=IT・AI、`bilmen`=ビルメン系、`lang`=語学、`law`=法律系、`medical`=医療・介護、`money`=金融、`story`=物語
- thumb_color：`t-mint` / `t-orange` / `t-pink` / `t-teal` / `t-violet` / `t-yellow`
- `articles.html` はこの JSON を fetch して一覧を動的描画するので、JSON が壊れると記事一覧が全滅する。編集後に `python3 -c "import json; json.load(open('articles.json'))"` で検証すること

## 3. index.html 新着カード

「NEW ARTICLES／新着の記事。」セクションの `card-grid-4` 先頭にカードを追加：

```html
<a class="card" href="article-<slug>.html" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;">
  <div class="card-thumb" style="background-image: url('images/art-xxx.webp'); background-position: center top;">
    <span class="new">NEW</span><span class="fav">♡</span>
  </div>
  <div class="card-body">
    <span class="pill bil">ビルメン系</span>
    <h3 class="card-title">記事タイトル</h3>
    <div class="card-meta"><span>2026.07.01</span><span class="read">⏱ 11分</span></div>
  </div>
</a>
```

- 日付表記はカード内では `2026.07.01`（ドット区切り）
- カードが増えすぎたら一番古いものを外す（新着は最新4〜6本目安）

## 4. sitemap.xml

```xml
<url>
  <loc>https://shikaku-life.jp/article-<slug>.html</loc>
  <lastmod>2026-07-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

記事は priority 0.8、資格個別ページは 0.7、about 等は 0.6。

## アフィリエイトリンクを入れる場合

`affiliate-links` スキルの規約に従う。最低限：

- リンクには `rel="nofollow sponsored noopener" target="_blank"` 必須
- 記事冒頭に PR 表記バッジ必須（ステマ規制対応）
- **実URLを記事HTMLに直接書く**（`/go/<slug>` は Render 側で未動作のため使わない）。ただし `_redirects` にも一覧として追記しておく

## デザイン・文体の約束

- 見出しフォント Zen Maru Gothic／本文 Zen Kaku Gothic New（styles.css の CSS変数を使う。色の直書きをしない）
- トーンは「明るく親しみ・応援」。読者は20〜50代の学び直し層
- 一次情報（試験データ・費用）は年度を明記（例：【2026年版】）

## デプロイ

`master` に push すると Render Static が自動デプロイ。ただし Claude Code のセッションでは**指定された作業ブランチにのみ push**し、master へのマージはユーザーが行う。
