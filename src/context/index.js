import { createContext } from 'react';

export const mainContext = createContext({
    menuOpen: false,
    setMenuOpen: () => {},
    score: 0,
    setScore: () => {},
    correctAnswer: 0,
    wrongAnswer: 0,
    setWrongAnswer: () => {},
    setCorrectAnswer: () => {},
});
