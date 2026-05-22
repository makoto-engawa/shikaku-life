# 資格Life（SHIKAKU-LIFE）

資格取得応援メディア。20〜50代に向けて「AI時代に手に職をつける」を発信するサイト。

- **本番URL**：https://shikaku-life.jp/（取得予定）
- **姉妹サイト**：[ビルメンアカデミー](https://bilumen.jp/)（第二種電気工事士の学習教材）

## サイト構成

| パス | 役割 |
|---|---|
| `/` | トップページ（ヒーロー・カテゴリ・新着・ピックアップ・姉妹サイト誘導） |
| `/articles/` | 記事一覧 |
| `/articles/<slug>` | 個別記事（PR表記・目次・進捗バー・中間CTA・末尾教材まとめ） |
| `/comparison/` | 教材比較ハブ |
| `/comparison/denko2/` | 第二種電工 通信講座比較（サイト最大の収益ページ） |
| `/categories/` | カテゴリ一覧 |
| `/story/` | 父さんとAIで電工アプリを作った物語 |
| `/about` | 運営者情報 |

## デザイン

- **テーマ**：明るく親しみ／応援
- **フォント**：Zen Maru Gothic（見出し）／ Zen Kaku Gothic New（本文）
- **カラー**：スカイブルー＋オレンジ＋ミント＋イエロー＋ピンク＋バイオレット
- **設計**：CSS変数で一元管理（`styles.css`）
- **改行**：`word-break: auto-phrase` で日本語の自然な文節改行

Claude Designer での初期実装、Claude Code でローカル展開・デプロイ運用。

## 収益化

- **もしもアフィリエイト**：資格教材（ユーキャン／フォーサイト／スタディング等）
- 各教材リンクは `/go/<slug>` 経由（広告ブロッカー回避＋計測一元化）
- ステマ規制対応：PR表記・`rel="nofollow sponsored noopener"` 必須
- **Google AdSense**（審査後）
- 姉妹サイト「ビルメンアカデミー」への送客

## 技術スタック

- 現状：素の HTML/CSS/JS（静的ファイル）
- 将来：Astro 移行（Markdown 記事管理）検討
- ホスティング：Render Static（無料）
- ドメイン：お名前.com で取得予定

## ローカル開発

```bash
# 簡易プレビュー（Python標準のHTTPサーバー）
cd /path/to/shikaku-life
python3 -m http.server 8080
# http://localhost:8080/index.html
```

## デプロイ

`master` ブランチに push すると Render Static が自動でデプロイ。

## ライセンス

私的プロジェクト。許諾なき複製・転載を禁じます。
