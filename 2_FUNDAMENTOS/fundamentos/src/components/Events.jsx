const Events = () => {

  const handleMyEvent = (e) => {
    console.log(e);

    console.log("Ativou o evento")
  }
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou")}>onClick com func dentro do botão</button>
        <button
          // essa função já é muito grande para estar dentro do onClick
          onClick={() => {
            if (true) {
              console.log("Qualquer coisa");
            }
          }}>Clique, please</button>
      </div>
    </div>
  );
};

export default Events