export default function Footer() {
  return (
    <footer className="footer">
      {/* Sekcja informacji o prawach autorskich */}
      <div className="footer__copyright">
        © {new Date().getFullYear()} Michał "MikeL" Lipiak. All rights reserved.
      </div>

      {/* Sekcja linków społecznościowych */}
      <div className="footer__socials">
        <a
          href="https://github.com/mikel"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/mikel"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/mikel"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          Twitter
        </a>
      </div>
    </footer>
  );
}
