import React from 'react';
import module from './WeatherCard.module.scss'
import sun from '../assets/sun.png'
import { NavLink } from 'react-router-dom';
import Clock from './Clock';
import { useState } from 'react';

const api = {
    key: '195f6198cdf22a2f90f90eedbe796bcb',
    base: 'https://api.openweathermap.org/data/2.5/',
    city_name: 'Bishkek',
    // base: 'api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={195f6198cdf22a2f90f90eedbe796bcb}'
    // base: 'https://pro.openweathermap.org/data/2.5/forecast/hourly?q={search}&appid={195f6198cdf22a2f90f90eedbe796bcb}',

}

function WeatherCard(props) {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState(null);

    const searchPressed = () => {
        fetch(`${api.base}forecast?q=${api.city_name}&appid=${api.key}`)

            .then(res => res.json())
            .then((result) => {
                setWeather(result);
                console.log('Data List Loaded', result);
            })
    }

    return (
        <div className={module.container}>
            <div className={module.card}>

                <div className={module.card_image}>
                    <img src={sun} />
                </div>
                <div className={module.currentDay}>
                    <Clock />
                </div>
                <div>
                    <input
                        type='text' placeholder='Enter city/town...'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button onClick={searchPressed}>Search</button>
                </div>

                {weather && (
                    <div className={module.main}>
                        <div className={module.cart1}>
                            <div>
                        <p className={module.cart1_0}>{weather.city.name}</p>

                        <p className={module.car1_1}>{weather.list[0].main.temp}°K</p>

                        <p className={module.cart1_2}></p>
                        <p className={module.cart1_3}></p>
                        </div>
                        </div>
                        <div className={module.cart2}>
                        <div className={module.cart2_1}>
                        <p className={module.cart_2_1_1}>{weather.city.name}</p>

                        <p className={module.cart_2_1_2}>{weather.list[0].main.temp}°K</p>

                        <p className={module.cart_2_1_3}></p>
                        <p className={module.cart_2_1_4}></p>
                        </div>
                        <div>
                        <p className={module.cart2_2}>{weather.city.name}</p>

                        <p className={module.cart_2_2_1}>{weather.list[0].main.temp}°K</p>

                        <p className={module.cart_2_2_2}></p>
                        <p className={module.cart_2_2_3}></p>
                        </div>
                        </div>

                    </div>
                )}

            </div>
        </div>
    );
}

export default WeatherCard;