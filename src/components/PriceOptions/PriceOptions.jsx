import React, { useState } from 'react';
import Priceoption from '../Priceoption/Priceoption';

const PriceOptions = () => {
    const pricingOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free parking",
        "Wi-Fi access",
        "Water fountain access"
      ]
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free parking",
        "Group fitness classes",
        "Sauna access",
        "Wi-Fi access",
        "Access to virtual workout sessions"
      ]
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 79.99,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Free parking",
        "Group fitness classes",
        "Sauna access",
        "Personal trainer sessions",
        "Nutritional guidance",
        "Private locker",
        "Massage therapy sessions"
        
      ]
    },
    
  ];

 const [price, setPrice]=useState([])
  
    return (
        <div className='m-12'>
            <h2>Phones{pricingOptions.length}</h2>
            <div className='grid lg:grid-cols-3 gap-6'>
                {
             pricingOptions.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
            }
            </div>
        </div>
            
    );
};

export default PriceOptions;