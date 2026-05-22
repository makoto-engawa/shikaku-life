// Shared header/footer injectors + small interactions for 資格Life

(function () {
  const HEADER_HTML = (active) => `
    <header class="site-header">
      <div class="container inner">
        <a href="index.html" class="brand">
          <span class="brand-mark">資</span>
          <span>
            資格Life
            <span class="sub">SHIKAKU-LIFE</span>
          </span>
        </a>
        <button class="nav-toggle" aria-label="メニュー" onclick="document.querySelector('.site-nav').classList.toggle('is-open')">☰</button>
        <nav class="site-nav">
          <a href="index.html" ${active==='home'?'class="is-active"':''}>ホーム</a>
          <a href="articles.html" ${active==='articles'?'class="is-active"':''}>記事一覧</a>
          <a href="categories.html" ${active==='categories'?'class="is-active"':''}>カテゴリ</a>
          <a href="comparison.html" ${active==='comparison'?'class="is-active"':''}>教材比較</a>
          <a href="story.html" ${active==='story'?'class="is-active"':''}>物語</a>
          <a href="comparison.html" class="nav-cta">教材を選ぶ →</a>
        </nav>
      </div>
    </header>
  `;

  const FOOTER_HTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="grid">
          <div>
            <a href="index.html" class="brand">
              <span class="brand-mark">資</span>
              <span>資格Life<span class="sub">SHIKAKU-LIFE</span></span>
            </a>
            <p class="tagline">
              AI時代に手に職をつけたい人、人生をやり直したい人のための、<br>
              <em>明るく親しみのある</em>資格応援メディア。
            </p>
          </div>
          <div>
            <h4>サイト</h4>
            <ul>
              <li><a href="index.html">ホーム</a></li>
              <li><a href="articles.html">記事一覧</a></li>
              <li><a href="categories.html">カテゴリ</a></li>
              <li><a href="comparison.html">教材比較</a></li>
              <li><a href="story.html">物語</a></li>
            </ul>
          </div>
          <div>
            <h4>カテゴリ</h4>
            <ul>
              <li><a href="categories.html">🔧 ビルメン系</a></li>
              <li><a href="categories.html">🤖 IT・AI</a></li>
              <li><a href="categories.html">⚖️ 法律系</a></li>
              <li><a href="categories.html">💰 金融</a></li>
              <li><a href="categories.html">🗣️ 語学</a></li>
              <li><a href="categories.html">📔 物語・コラム</a></li>
            </ul>
          </div>
          <div>
            <h4>このサイトについて</h4>
            <ul>
              <li><a href="about.html">運営者について</a></li>
              <li><a href="about.html">プライバシーポリシー</a></li>
              <li><a href="about.html">利用規約</a></li>
              <li><a href="about.html">広告掲載ポリシー</a></li>
              <li><a href="about.html">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div class="legal">
          <span>© 2026 SHIKAKU-LIFE. All rights reserved.</span>
          <span>姉妹サイト: <a href="#">ビルメンアカデミー（bilumen.jp）</a></span>
        </div>
      </div>
    </footer>
  `;

  window.SL = {
    mountHeader(active) {
      const slot = document.getElementById('header-slot');
      if (slot) slot.outerHTML = HEADER_HTML(active);
    },
    mountFooter() {
      const slot = document.getElementById('footer-slot');
      if (slot) slot.outerHTML = FOOTER_HTML;
    }
  };
})();
