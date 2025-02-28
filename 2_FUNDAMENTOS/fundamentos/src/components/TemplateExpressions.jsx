const TemplateExpressions = () => {
  const name = "Charlene";
  const data = {
    age: 40,
    job: "Programer"
  }

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como {data.job}</p>
    </div>
  );
};

export default TemplateExpressions;