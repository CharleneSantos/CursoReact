import { useState } from 'react';
import './App.css';
import Pedra from './assets/pedra2.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Jana"
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "Mercedes", color: "Preta", newCar: false, km: 10000 },
    { id: 3, brand: "Porche", color: "Vermelha", newCar: true, km: 0 },
  ]
  return (
    <div>
      <h1>Avançando em React</h1>
      { /* imagem em public */}
      <div>
        <img src="/pedra2.jpg" alt="imagem pedra" />
      </div>
      {/* imagem em asset */}
      <div>
        <img src={Pedra} alt="Wallpaper" />
      </div>
      <div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* Props */}
        <ShowUserName name={name} />
        {/* destructurin */}
        <CarDetails brand="VW" km={100000} color="Azul" />
        {/* Reutilização com loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails
            brand={car.brand}
            color={car.color}
            km={car.km}
            newCar={car.newCar}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
