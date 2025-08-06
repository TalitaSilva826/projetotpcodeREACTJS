import CardDepoimento from "./CardDepoimento";

function Depoimentos() {
  return (
    <section id="depoimentos" className="depoimentos">
      <p className="depoimentos-tag">DEPOIMENTOS</p>
      <h2 className="titulo-depoimentos">Impacto real na jornada<br /><span>dos nossos clientes.</span></h2>
      <CardDepoimento
        texto="Era exatamente o que a gente queria, algo bem feito! Com cuidado nos detalhes e um visual que faz sentido com a nossa marca.
        Dá pra ver que foi tudo pensado com carinho e profissionalismo. A gente gostou muito do resultado!"
        autor="João Ângelo"
        empresa="J&S Assessoria e Serviços"
      />
    </section>
  );
}
export default Depoimentos;