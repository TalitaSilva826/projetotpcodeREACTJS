function CardServico({ imagem, titulo, descricao }) {
  return (
    <div className="card-servico">
      <img src={imagem} alt={titulo} />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  );
}
export default CardServico;