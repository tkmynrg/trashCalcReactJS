import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.randomValue = this.randomValue.bind(this);
    this.state = {
        counterValue: 10,
    }
  }

  incrementValue = () => {
      this.setState(state => ({
          counterValue: this.state.counterValue + 1,
      }))
  }

  decrementValue = () => {
    this.setState(state => ({
        counterValue: this.state.counterValue - 1,
    }))
  }


    randomValue() {
        const min = -50;
        const max = 50;
        const random = min + (Math.random() * (max - min));
        this.setState({ counterValue: Math.trunc(random) });
    }

  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке

  render() {

    return (
        <div className={'app'}>
          <div className={'counter'}>{this.state.counterValue}</div>
          <div className={'controls'}>
            <button onClick={this.incrementValue}>INC</button>
            <button onClick={this.decrementValue}>DEC</button>
            <button onClick={this.randomValue}>RND</button>
            <button>RESET</button>
          </div>
        </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


// 1) Начальное значение счетчика должно передаваться через props
// 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
// 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
// 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов

export default App;
