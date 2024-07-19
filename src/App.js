import React, {useState} from 'react';
import './App.css';
import rockImage from './images/rock.jpg';
import paperImage from './images/paper.jpg';
import scissorsImage from './images/scissors.jpg';
import Box from "./component/Box";

function App() {
    const [gameMode, setGameMode] = useState(true);
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');

    const choices = [
        {name: '가위', image: scissorsImage},
        {name: '바위', image: rockImage},
        {name: '보', image: paperImage}
    ];

    const choice = {
        rock: {
            name: 'rock',
            img: rockImage,
        },
        scissors: {
            name: 'scissors',
            img: scissorsImage,
        },
        paper: {
            name: 'paper',
            img: paperImage,
        }
    };


    const handleClick = (choice) => {
        setUserChoice(choice);
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
        determineWinner(choice.name, randomChoice.name);
    };

    const determineWinner = (user, computer) => {
        if (user === computer) {
            setResult('비겼습니다');
        } else if (
            (user === '가위' && computer === '보') ||
            (user === '바위' && computer === '가위') ||
            (user === '보' && computer === '바위')
        ) {
            setResult('이겼습니다');
        } else {
            setResult('졌습니다');
        }
    };

    const getResultColor = () => {
        if (result === '이겼습니다') return 'green';
        if (result === '졌습니다') return 'red';
        return 'black';
    };

    const play = (userChoice) => {
        // console.log('선택됨', userChoice);
        setUserChoice(choice[userChoice]);

        let computerChoice = randomChoice();
        setComputerChoice(computerChoice);
        judgment(choice[userChoice], computerChoice);
    }

    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        // console.log('Item array', itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let finals = itemArray[randomItem];

        return choice[finals];
    }

    const judgment = (user, computer) => {
        console.log('user', user, 'computer', computer);
        if (user.name === computer.name) {
            setResult('비겼습니다');
        } else if (
            (user.name === 'scissors' && computer.name === 'paper') ||
            (user.name === 'rock' && computer.name === 'scissors') ||
            (user.name === 'paper' && computer.name === 'rock')
        ) {
            setResult('이겼습니다');
        } else {
            setResult('졌습니다');
        }
    }


    return (
        <div className="app">
            <button onClick={() => setGameMode(!gameMode)}>변경</button>
            {gameMode === true ?
                <div>
                    <div className={'main'}>
                        <Box title={'You'} item={userChoice} result={result}/>
                        <Box title={'Computer'} item={computerChoice} result={result}/>
                    </div>
                    <div className={'main'}>
                        <button onClick={() => play('scissors')}>가위</button>
                        <button onClick={() => play('rock')}>바위</button>
                        <button onClick={() => play('paper')}>보</button>
                    </div>
                </div>
                :
                <div className="game-box">
                    <h1>가위바위보 게임</h1>
                    <div className="choices">
                        <div className="choice user-choice">
                            <h2>나</h2>
                            {userChoice && <img src={userChoice.image} alt={userChoice.name} width={'200px'}/>}
                            <p>{userChoice?.name}</p>
                        </div>
                        <div className="choice computer-choice">
                            <h2>컴퓨터</h2>
                            {computerChoice &&
                                <img src={computerChoice.image} alt={computerChoice.name} width={'200px'}/>}
                            <p>{computerChoice?.name}</p>
                        </div>
                    </div>
                    <div className="result" style={{borderColor: getResultColor()}}>
                        <h2>{result}</h2>
                    </div>
                    <div className="buttons">
                        {choices.map((choice) => (
                            <img
                                key={choice.name}
                                src={choice.image}
                                alt={choice.name}
                                onClick={() => handleClick(choice)}
                                className="choice-image"
                                width={'200px'}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default App;
