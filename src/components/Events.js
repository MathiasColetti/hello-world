const Events = () => {
  const handleMyEvent = (e) => {
    alert("Evento Ativo");
  };
  const RenderSomething = (x) => {
    if (x) {
      return (
        <div>
          <h1>Renderizando isso</h1>
        </div>
      );
    } else {
      return <h1>Tambem posso Fazer isso</h1>;
    }
  };
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui</button>
      </div>
      <div>
        <button
          onClick={() => {
            if (true) {
              alert("Isso Não devia Existir");
            }
          }}
        >
          Clique Aqui Tambem
        </button>
      </div>
      {RenderSomething(true)}
      {RenderSomething(false)}
    </div>
  );
};

export default Events;
