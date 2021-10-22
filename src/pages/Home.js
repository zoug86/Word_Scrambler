import React, { useContext } from 'react';
import { WordContext } from '../context/WordContext';

import '../styles/Home.css';
const Home = () => {

    const { phrase, setPhrase } = useContext(WordContext)
    return (
        <div className='container'>
            <h1 className='scrambled-word'>{phrase}</h1>
        </div>
    )
}

export default Home;
