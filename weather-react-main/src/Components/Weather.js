import React from 'react';
import Daily from './Daily';

const Weather = ({ data }) => {
    if (data.main === undefined) {
        return null;
    } else {
        const img_url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        const dt = data.dt;
        var date = new Date(dt * 1000);

        return (
            <div className='bg-gray-300 max-w-5xl h-4/5 opacity-85 mx-auto mt-5 rounded-lg drop-shadow-lg'>
                <h1 className='text-center text-3xl pt-5'>{data.name}, {data.sys.country}</h1>
                <h2 className='text-center text-xl'>{date.toDateString()} {date.toLocaleTimeString()}</h2>
                <div className='grid grid-cols-2 divide-x mt-5 divide-black'>
                    <div className='grid grid-rows-1 grid-cols-2 place-items-center'>
                        <div>
                            <img className='drop-shadow w-60 m-auto' src={img_url} alt="weather icon" />
                        </div>
                        <div>
                            <h3 className='text-5xl'>{data.main.temp.toFixed()}°F</h3>
                            <h4 className='text-2xl'>{data.weather[0].main}</h4>
                        </div>
                    </div>

                    <div className='grid grid-rows-2 grid-cols-2 place-items-center' >
                        <div>
                            <p className='text-4xl'>{data.main.feels_like.toFixed()}°F</p>
                            <p className='text-xl'>Feels Like</p>
                        </div>

                        <div>
                            <p className='text-4xl'>{data.wind.speed}</p>
                            <p className='text-xl'>Wind(mph)</p>
                        </div>

                        <div>
                            <p className='text-4xl'>{data.main.temp_max.toFixed()}°F</p>
                            <p className='text-xl'>High</p>
                        </div>

                        <div>
                            <p className='text-4xl'>{data.main.temp_min.toFixed()}°F</p>
                            <p className='text-xl'>Low</p>
                        </div>

                    </div>
                </div>

                <div className='w-full'>
                    <p className='m-10 text-2xl'>5 Day / 3 Hour Forecast</p>
                    <Daily city={data.name}/>
                </div>
            </div>
        );
    }
};

export default Weather;