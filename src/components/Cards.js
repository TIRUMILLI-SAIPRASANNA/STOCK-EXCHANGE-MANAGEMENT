import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Today's Stock Examples</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/reliance.jpg'
              text='Reliance stock        14 Oct, 2022'
              label='PLANS'
              path='/sign-up'
            />
            <CardItem
              src='images/stock-market.png'
              text='Tesla stock  13 oct,2022'
              label='MODERN'
              path='/services'
            />
            <CardItem
              src='images/Tata.png'
              text='Tata Stock Data 13 oct,2022'
              label='LOW-LEVEL'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Housing Dept.jpg'
              text='Housing Development Stock'
              label='HIGH-LEVEL'
              path='/services'
            />
            <CardItem
              src='images/Britannia.jpg'
              text='Britannia Industries Limited'
              label='CLASSIC'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;