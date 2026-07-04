---
name: seo-maintenance
description: 資格LifeのSEOメンテナンス規約。meta description・OGP・JSON-LD・sitemap.xml・canonical の追加や修正、Search Console 対応、SEO一括更新の作業のときに使う。
---

# 資格Life SEOメンテナンススキル

## 全ページ共通の必須要素

すべてのHTMLページの `<head>` に以下が揃っていること：

1. AdSense タグ（ca-pub-2973529127244385）— 消さない
2. GA4 タグ（G-DKX8X254ZP）— 消さない
3. `<title>ページ固有タイトル｜資格Life</title>`
4. `meta name="description"`（80〜120字、ページ固有の内容）
5. `link rel="canonical"`（`https://shikaku-life.jp/<ファイル名>.html`）
6. OGP一式：og:title / og:description / og:image / og:url / og:type / og:site_name（資格Life）/ og:locale（ja_JP）
7. Twitter Card：summary_large_image、twitter:site は `@shikakulife`

記事ページはさらに JSON-LD Article schema（author=資格Life編集部、publisher=資格Life、logo=images/logo-shikakulife.webp）。

## よくある間違い（修正対象）

- JSON-LD の `datePublished` / `dateModified` が「2026年7月1日」のような和文表記になっている
  → **ISO 8601（`2026-07-01`）に直す**。schema.org の Date 型は和文を受け付けない
- OGP画像がフルURL（`https://shikaku-life.jp/images/...`）になっていない（相対パスはSNSで解決されない）
- 新ページ追加時の sitemap.xml 追記漏れ

## sitemap.xml の規約

- priority：記事 0.8／資格個別・比較ページ 0.7／about 等 0.6／トップ 1.0
- changefreq：基本 monthly
- lastmod：最終更新日（ISO 8601）
- ページを追加・大幅更新したら必ず該当 `<url>` を更新

## robots.txt / Search Console

- robots.txt は全許可＋sitemap 参照。むやみに変えない
- Search Console の所有権確認ファイルやタグは消さない

## 一括点検の手口

```bash
# canonical が抜けているページを探す
grep -L 'rel="canonical"' *.html

# description が抜けているページを探す
grep -L 'name="description"' *.html

# sitemap に載っていないHTMLを探す
for f in *.html; do grep -q "$f" sitemap.xml || echo "sitemap漏れ: $f"; done
```
