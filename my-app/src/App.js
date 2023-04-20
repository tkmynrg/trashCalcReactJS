import {Component, useState, useEffect} from 'react';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';


// const App = (props) => {
//     const [counter, setCounter] = React.useState(props.counter);
//
//     const incCounter = () => {
//         if (counter < 50) {
//             setCounter(counter => counter + 1)
//         }
//
//         if (counter === 50) {
//             alert('Максимальное значение 50');
//             resetCounter();
//         }
//     }
//
//     const decCounter = () => {
//         if (counter > -50) {
//             setCounter(counter => counter - 1)
//         }
//         if (counter === -50) {
//             alert('Максимальное значение -50');
//             resetCounter();
//         }
//     }
//
//     const rndCounter = () => {
//         setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
//     }
//
//     const resetCounter = () => {
//         setCounter(props.counter)
//     }
//
//
//     return (
//         <div className="app">
//             <div className="counter">{counter}</div>
//             <div className="controls">
//                 <button onClick={incCounter}>INC</button>
//                 <button onClick={decCounter}>DEC</button>
//                 <button onClick={rndCounter}>RND</button>
//                 <button onClick={resetCounter}>RESET</button>
//             </div>
//         </div>
//     )
// }

const App = (props) => {
    const _apiBase = 'https://www.cbr-xml-daily.ru/daily_json.js';

    async function getSource(url) {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async function getAllExchangesRates() {
        const res = await getSource({_apiBase});
        return res;
    }


    useEffect(() => {
        console.log('kek')
    });

    return (
        <div className="app">
            input
            <div className="counter"></div>
            <div className="controls">
                <button >INC</button>
                <button >DEC</button>
                <button >RND</button>
                <button >RESET</button>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App props={0}/>
);

// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов