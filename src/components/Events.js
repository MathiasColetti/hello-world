const Events = () => {
  const handleMyEvent = (e) => {
    alert("Evento Ativo");
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
    </div>
  );
};

export default Events;
