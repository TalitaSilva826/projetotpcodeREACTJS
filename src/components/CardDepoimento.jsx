function CardDepoimento({ texto, autor, empresa }) {
  return (
    <div className="card-depoimento">
      <div className="estrelas">
        <img src="src/assets/stars.png" alt="Avaliação 5 estrelas" />
      </div>
      <p className="texto-depoimento">{texto}</p>
      <p className="autor-depoimento"><strong>{autor}</strong><br />{empresa}</p>
    </div>
  );
}
export default CardDepoimento;