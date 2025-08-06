function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>TPCode</h3>
          <p>Desenvolvimento de Websites</p>
          <p>tpcodeoficial@gmail.com</p>
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#cases">Cases</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
          </ul>
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com/tpcode_oficial" target="_blank" rel="noreferrer" aria-label="Instagram">
            <img src="src/assets/logoigpreta.png" alt="Instagram TPCode" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 TPCode. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
export default Footer;
