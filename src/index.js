import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES_COUNT: 312,
  PLACES: [
    {
      name: `Beautiful & luxurious apartment at great location`,
      mark: `Premium`,
      price: `€120`,
      image: `img/apartment-01.jpg`,
      id: `100`,
      type: `Apartment`
    },
    {
      name: `Wood and stone place`,
      mark: ``,
      price: `€80`,
      image: `img/room.jpg`,
      id: `200`,
      type: `Private room`},
    {
      name: `Canal View Prinsengracht`,
      mark: ``,
      price: `€132`,
      image: `img/room.jpg`,
      id: `300`,
      type: `Apartment`},
    {
      name: `Nice, cozy, warm big bed apartment`,
      mark: `Premium`,
      price: `€180`,
      image: `img/apartment-03.jpg`,
      id: `400`,
      type: `Apartment`
    },
    {
      name: `Wood and stone place`,
      mark: ``,
      price: `€80`,
      image: `img/room.jpg`,
      id: `500`,
      type: `Private room`
    },
  ]
};


ReactDOM.render(
    <App
      placesCount={Setting.PLACES_COUNT}
      places={Setting.PLACES}
    />,
    document.querySelector(`#root`)
);

