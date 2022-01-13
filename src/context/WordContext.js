import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import { API_URL } from '../api.js'
import { randomize } from '../helper/randomize.js';

export const WordContext = createContext();

export const WordContextProvider = ({ children }) => {
    const [phrase, setPhrase] = useState('');
    const [scrambledPhrase, setScrambledPhrase] = useState('');
    const [counter, setCounter] = useState(1);
    const [correctAns, setCorrectAns] = useState(0);

    useEffect(() => {
        const loadPhrase = async () => {
            const { data } = await axios.get(`${API_URL}/${counter}`);
            const sentence = data.data.sentence;
            setPhrase(sentence)
            setScrambledPhrase(randomize(sentence).toLowerCase());
            setCorrectAns(0);
        }
        loadPhrase();
    }, [counter])

    return (
        <WordContext.Provider value={{ phrase, setPhrase, scrambledPhrase, setScrambledPhrase, counter, setCounter, correctAns, setCorrectAns }}>
            {children}
        </WordContext.Provider>
    )
}