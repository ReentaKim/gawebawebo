import React from 'react';

const Box = (props) => {
    let result;
    let resultColor;
    if (props.result !== '') {
        if (props.title === 'Computer' && props.result !== '비겼습니다.' && props.result !== '') {
            result = props.result === '이겼습니다.' ? '졌습니다.' : '이겼습니다.';
            resultColor = props.result === '이겼습니다.' ? 'lose' : 'win';
        } else {
            result = props.result;
            resultColor = props.result === '이겼습니다.' ? 'win' : props.result === '졌습니다.' ? 'lose' : 'tie';
        }
    } else {
        result = '';
        resultColor = '';
    }
    return (
        <div className={`box ${resultColor}`}>
            <h1>{props.title}</h1>
            <img className={'item-img'}
                 src={props.item && props.item.img}
                 alt=""/>
            <h2>{result}</h2>
        </div>
    );
};

export default Box;