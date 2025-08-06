function Sobre() {
  return (
    <section id="sobre" className="sobre-nos">
      <h2 className="titulo-sobre">Sobre Nós</h2>
      <div className="linha-sobre"></div>
      <div className="equipe">
        <div className="membro">
          <img src="src/assets/fototrick.jpg" alt="Patrick Hosana" />
          <div className="info">
            <h3><strong>TPCode</strong> &nbsp; (Talita Silva e Patrick Hosana)</h3>
            <p>Patrick Hosana, 26 anos. Sou formado em Análise e Desenvolvimento de Sistemas pela Unifacs. Atuo principalmente no desenvolvimento back-end, com domínio em Python, bancos de dados relacionais e não relacionais, Java, além de conhecimentos sólidos em HTML e CSS. Minha trajetória na programação foi impulsionada pela curiosidade em entender a lógica por trás de sistemas complexos, especialmente jogos de RPG, o que me motivou a me aprofundar em arquitetura de software e lógica de programação.
            </p>
          </div>
        </div>
        <div className="membro">
          <img src="src/assets/fototai.jpg" alt="Talita Silva" />
          <div className="info">
            <p>Eu sou a Talita, tenho 21 anos e sou graduada em Análise e Desenvolvimento de Sistemas na Unijorge. Sou responsável pelo front-end dos projetos, com foco em estrutura, responsividade e experiência do usuário. Trabalho principalmente com HTML, CSS e JavaScript, aplicando boas práticas de desenvolvimento e design. Também possuo formação em Design Gráfico pelo Instituto Saga, o que me permite alinhar estética e usabilidade em interfaces modernas e funcionais.
            </p>
            <p style={{ textAlign: "right", fontWeight: "bold" }}>Salvador - BA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Sobre;
