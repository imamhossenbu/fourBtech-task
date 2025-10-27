export default function Head() {
    const themeInit = `
  (function () {
    try {
      var ls = localStorage.getItem("theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var shouldDark = ls ? (ls === "dark") : prefersDark;
      var root = document.documentElement;
      if (shouldDark) root.classList.add("dark"); else root.classList.remove("dark");
    } catch(e) {}
  })();
  `;

    return (
        <>
            <title>EasyPay — Smarter Payments</title>
            <meta name="description" content="Fast, secure, global payments for modern finance." />
            <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        </>
    );
}
