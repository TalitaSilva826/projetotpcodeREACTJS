function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/logosemfundo.png" alt="TPCode Logo" />
      </div>
      <nav>
        <ul className="navLinks">
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#cases">Cases</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;