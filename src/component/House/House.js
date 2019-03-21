import React from 'react';
import './House.css';

export default function House(props) {
  return (
    <article className='house-card'>
      <img src={props.home.img} alt="home" className='house-card-img'/>
      
      <section className='house-description'>
        <div className="house-info">
          <div>Property Name: {props.home.house_name}</div>
          <div className="house-description-item">Address: {props.home.street_line_one}</div>
          <div className="house-description-item">City: {props.home.city}</div>
          <div className="house-description-item">State: {props.home.state}</div>
          <div className="house-description-item">Zip: {props.home.zip_code}</div>
        </div>
        <div className="house-price-info">
          <div className="house-description-item">Monthly Mortgage: {props.home.mortgage}</div>
          <div className="house-description-item">Desired Rent: {props.home.rent}</div>
        </div>
      </section>

    </article>
  )
}
