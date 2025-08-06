import CardServico from "./CardServico";

function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <p className="servicos-tag">SERVIÇOS</p>
      <h2 className="titulo-servicos">
        Sites desenvolvidos com foco em<br />
        <span className="gradient-text1">usabilidade, estética e inovação tecnológica.</span>
      </h2>
      <div className="cards-servicos">
        <CardServico
          imagem="src/assets/ux.png"
          titulo="Website Institucional"
          descricao="Criação de sites profissionais para apresentar sua marca, valores e serviços com credibilidade."
        />
        <CardServico
          imagem="src/assets/landing.png"
          titulo="Landing Pages"
          descricao="Páginas otimizadas para conversões, ideais para campanhas, lançamentos e geração de leads."
        />
        <CardServico
          imagem="src/assets/web.png"
          titulo="Codificação web"
          descricao="Desenvolvimento front-end e back-end sob medida, com foco em performance, segurança e escalabilidade."
        />
      </div>
    </section>
  );
}
export default Servicos;