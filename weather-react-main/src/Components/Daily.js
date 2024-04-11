import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Accordion from './Accordion';

const Daily = ({ city }) => {
    const [daily, setDaily] = useState({});

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=6f962a13ad54244b1caacafed48d160e`) //replace the appid with your own please!
            .then(res => setDaily(res.data))
            .catch(err => console.log(err));
    }, [city]);
    
    return (
        <div>
            <Accordion forecasts={daily.list} />
        </div>
    );
};

export default Daily;