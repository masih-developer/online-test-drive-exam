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
    startTime: 0,
    endTime: 0,
    setEndTime: () => {},
    nowDate: 0,
});
