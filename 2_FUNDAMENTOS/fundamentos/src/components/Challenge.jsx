
const Challenge = () => {
  const a = 2
  const b = 5

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <button onClick={() => console.log(a + b)}
      >Somar</button>
    </div>
  );
};

export default Challenge;




