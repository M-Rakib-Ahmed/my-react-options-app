import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] =useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            setPhones(data.data.data)
            const phoneData = data.data.data;
            const phonesWithFackData = phoneData.map(phone =>{
              const object ={
                name:phone.phone_name,
                price:parseInt(phone.slug.split('-')[1])
              }  
              return object;
            })
            setPhones(phonesWithFackData)
        })
        
        
    },[])
    console.log(phones);
    
    return (
        <div>
           <h1 className="text-3xl">Phones{phones.length}</h1>
           <BarChart width={1000} height={600} data={phones}>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart> 
        </div>
    );
};

export default Phones;