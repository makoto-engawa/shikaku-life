// Shared header/footer injectors + small interactions for 資格Life

(function () {
  const HEADER_HTML = (active) => `
    <header class="site-header site-header--sticky">
      <div class="container inner">
        <a href="index.html" class="brand">
          <img src="images/logo-shikakulife.webp" alt="資格Life" class="brand-mark">
          <span>
            資格Life
            <span class="sub">SHIKAKU-LIFE</span>
          </span>
        </a>
        <button class="nav-toggle" aria-label="メニュー" onclick="document.querySelector('.site-nav').classList.toggle('is-open')">☰</button>
        <nav class="site-nav">
          <a href="index.html" ${active==='home'?'class="is-active"':''}>ホーム</a>
          <a href="articles.html" ${active==='articles'?'class="is-active"':''}>記事一覧</a>
          <a href="comparison.html" ${active==='comparison'?'class="is-active"':''}>教材比較</a>
          <a href="passion.html" ${active==='passion'?'class="is-active"':''}>やりたいを仕事に</a>
          <a href="about.html#contact" ${active==='contact'?'class="is-active"':''}>問い合わせ</a>
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
              <img src="images/logo-shikakulife.webp" alt="資格Life" class="brand-mark">
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
              <li><a href="comparison.html">教材比較</a></li>
              <li><a href="passion.html">やりたいを仕事に</a></li>
              <li><a href="about.html#contact">問い合わせ</a></li>
            </ul>
          </div>
          <div>
            <h4>カテゴリ</h4>
            <ul>
              <li><a href="category-bilmen.html">🔧 ビルメン系</a></li>
              <li><a href="category-it-ai.html">🤖 IT・AI</a></li>
              <li><a href="category-law.html">⚖️ 法律系</a></li>
              <li><a href="category-fin.html">💰 金融</a></li>
              <li><a href="category-lang.html">🗣️ 語学</a></li>
              <li><a href="category-med.html">💊 医療・福祉系</a></li>
              <li><a href="category-beauty.html">💄 美容・ファッション</a></li>
            </ul>
          </div>
          <div>
            <h4>このサイトについて</h4>
            <ul>
              <li><a href="about.html#about">運営者について</a></li>
              <li><a href="about.html#privacy">プライバシーポリシー</a></li>
              <li><a href="about.html#terms">利用規約</a></li>
              <li><a href="about.html#ad-policy">広告掲載ポリシー</a></li>
              <li><a href="about.html#contact">お問い合わせ</a></li>
            </ul>
          </div>
        </div>
        <div class="legal">
          <span>© 2026 SHIKAKU-LIFE. All rights reserved.</span>
          <span>姉妹サイト: <a href="https://bilumen.jp" target="_blank" rel="noopener">ビルメンアカデミー（bilumen.jp）</a></span>
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
