import './App.css';
import Box from "./component/Box";
import {useState} from "react";

function App() {

    const [userChoice, setUserChoice] = useState(null);
    const [computerCoice, setComputerCoice] = useState(null);
    const [result, setResult] = useState('');

    const choice = {
        rock: {
            name: '묵',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9nimNy57DDFxHsy8OFyFnfEXLSig2_ngkgw&s'
        },
        scissor: {
            name: '찌',
            img: 'https://m.chenjo.co.kr/web/product/big/202201/9395bdb9b1e17c44d6bf400e3675e0a6.jpg'
        },
        paper: {
            name: '빠',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRclpb0c1fCMNorcrcyMVNG3DEv_-OSxsx-PwbI4tPNc7pPn1HSCbTitMFt2s0EvVwD3tA&usqp=CAU'
        }
    }

    const play = (userChoice) => {
        setUserChoice(choice[userChoice]);
        const computer = choice[randomComputer()];
        setComputerCoice(computer);
        calculate(choice[userChoice], computer);
    }

    const calculate = (user, computer) => {
        console.log(user)
        console.log(computer)
        if (user.name === computer.name) {
            setResult('비겼습니다.');
        } else if ((user.name === '묵' && computer.name === '찌') ||
            (user.name === '찌' && computer.name === '빠') ||
            (user.name === '빠' && computer.name === '묵')
        ) {
            setResult('이겼습니다.');
        } else {
            setResult('졌습니다.');
        }

    }

    const randomComputer = () => {
        const keys = Object.keys(choice);
        const result = Math.floor(Math.random() * keys.length);
        return keys[result];
    }

    return (
        <div>
            <div className={'main'}>
                <Box title={'You'} result={result} item={userChoice}/>
                <Box title={'Computer'} result={result} item={computerCoice}/>
            </div>
            <div className={'main'}>
                <button onClick={() => play('scissor')}>묵</button>
                <button onClick={() => play('rock')}>찌</button>
                <button onClick={() => play('paper')}>빠</button>
            </div>
        </div>
    );
}

export default App;
