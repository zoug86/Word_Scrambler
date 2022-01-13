import React, { useState, useContext, useEffect } from 'react';
import { WordContext } from '../context/WordContext';

import '../styles/Block.css';

const Block = ({ color, dataKey }) => {
    const { phrase, correctAns, setCorrectAns, counter } = useContext(WordContext);
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [backgroundColor, setBackgroundColor] = useState(color);

    useEffect(() => {
        if (text === phrase.split('')[index].toLowerCase()) {
            setCorrectAns(correctAns + 1);
            setBackgroundColor('green')
        } else {
            setBackgroundColor(color)
        }

    }, [text])

    useEffect(() => {
        setText('');
        setIndex(0);
        setBackgroundColor(color);
    }, [counter])

    const handleChange = (e) => {
        setIndex(dataKey);
        setText(e.target.value);
        //console.log(index);
    }
    // console.log(phrase.split('')[index].toLowerCase());
    // console.log(text);
    console.log(correctAns);
    return (
        <span className='block'>
            <input type="text" value={text} className='block-input' maxLength='1' onChange={handleChange}
                style={{ backgroundColor: `${backgroundColor}` }} />
        </span>
    )
}

export default Block;
