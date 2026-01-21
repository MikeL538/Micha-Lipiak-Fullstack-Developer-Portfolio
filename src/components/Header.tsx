export default function Header() {
  return (
    // Semantyczny nagłówek strony
    <header className="header">
      {/* Lewa strona: logo / nazwa */}
      <div className="header__logo">
        <img className="header__image" src="./" />
        Michał Lipiak
      </div>

      {/* Prawa strona: nawigacja */}
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">Home</li>
          <li className="header__item">Projects</li>
          <li className="header__item">About</li>
          <li className="header__item">Lang</li>
        </ul>
      </nav>
    </header>
  );
}
