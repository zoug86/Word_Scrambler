import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { API_URL } from '../api.js'
import { randomize } from '../helper/randomize.js';

export const WordContext = createContext();

export const WordContextProvider = ({ children }) => {
    const [phrase, setPhrase] = useState('');
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        const loadPhrase = async () => {
            const { data } = await axios.get(`${API_URL}/${counter}`);
            const sentence = data.data.sentence;
            setPhrase(randomize(sentence).toLowerCase());
        }
        loadPhrase();
    }, [counter])

    return (
        <WordContext.Provider value={{ phrase, setPhrase, counter, setCounter }}>
            {children}
        </WordContext.Provider>
    )
}

export default WordContext;
