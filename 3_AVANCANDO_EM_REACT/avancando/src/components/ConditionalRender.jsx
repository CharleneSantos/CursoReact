import React, { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(true);

  const [name] = useState('John')


  return (
    <div>
      <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
      </div>
      <div>
        <h1>IF ternário</h1>
        {name === 'João' ? (
          <div>
            <p>O meu nome é João</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado</p>
          </div>
        )}
      </div>
    </div>

  );
};

export default ConditionalRender
