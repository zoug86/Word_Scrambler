import React, { useContext } from 'react';
import { WordContext } from '../context/WordContext';
import Block from '../components/Block';

import '../styles/Home.css';

const Home = () => {

    const { scrambledPhrase, correctAns, counter, setCounter } = useContext(WordContext)
    let count = 0;

    const handleClick = () => {
        setCounter(counter + 1);
        count = 0;
    }
    return (
        <div className='container'>
            <h1 className='scrambled-word'>{scrambledPhrase}</h1>
            <p className='text'>Guess the sentence! Start typing</p>
            <p className='text'>The yellow blocks are meant for spaces</p>
            <p className='score'>Score: </p>

            {scrambledPhrase.split(' ').map((word, j) => (
                <div className='blocks-container' key={j}>
                    {(j < scrambledPhrase.split(' ').length - 1 ? [...word.split(''), ' '] : [...word.split('')]).map((l, i) => (
                        <Block key={i} color={l === ' ' ? 'orange' : '#e1e1e1'} dataKey={count++} />
                    ))}
                </div>

            ))}

            <div>
                {correctAns === scrambledPhrase.length && <button className='btn' onClick={handleClick}>Next</button>}
            </div>
        </div>
    )
}

export default Home;
