import React, { useState } from 'react';
import { useEffect } from 'react';

const AccordionSection = ({ forecast, isActiveSection, setActiveIndex, sectionIndex }) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    }

    const date = new Date(forecast.dt * 1000);

    const getDay = (date) => {
        const day = date.toDateString().substring(0, 3);
        switch(day) {
            case 'Sun':
                return 'Sunday';
            case 'Mon':
                return 'Monday';
            case 'Tue':
                return 'Tuesday';
            case 'Wed':
                return 'Wednesday';
            case 'Thu':
                return 'Thursday';
            case 'Fri':
                return 'Friday';
            case 'Sat':
                return 'Saturday';
            default:
                return '';
        }
    }
    

    return (
        <div className='h-14 mb-4 drop-shadow-md'>
            <div className='flex mx-10 bg-gray-200 justify-between rounded-md h-16' onClick={toggleSection}>
                <div className='bg-gray-200 w-2/6 rounded-md w-80'>
                    <div className='w-1/3 float-left'>
                        <img className='ml-10' src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt='weather icon' />
                    </div>
                    <div className='w-1/3 float-right'>
                        <p className='mt-4 w-52'>{getDay(date)} {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p>
                    </div>
                    <div className='w-1/3 float-right'>
                        <p className='mt-4'>{forecast.main.temp.toFixed()}°F</p>
                    </div>
                </div>
                <div className='text-lg mr-10 pt-4'>{isActiveSection ? '' : '+'}</div>
                {isActiveSection && <div>
                    <div className='grid grid-rows-1 grid-cols-4 gap-x-8 p-2' >
                        <div>
                            <p>{forecast.main.feels_like.toFixed()}°F</p>
                            <p>Feels</p>
                        </div>

                        <div>
                            <p>{forecast.wind.speed}</p>
                            <p>Wind</p>
                        </div>

                        <div>
                            <p>{forecast.main.temp_max.toFixed()}°F</p>
                            <p>High</p>
                        </div>

                        <div>
                            <p>{forecast.main.temp_min.toFixed()}°F</p>
                            <p>Low</p>
                        </div>

                    </div>
                </div>}
            </div>
        </div>
    );
};



const Accordion = ({ forecasts }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className='h-56 overflow-auto m-auto'>
            {forecasts && forecasts.map((forecast, index) => (
                <AccordionSection key={index}
                forecast={forecast}
                isActiveSection={index === activeIndex}
                setActiveIndex={setActiveIndex}
                sectionIndex={index}
            />
            ))}
        </div>
    );
};

export default Accordion;