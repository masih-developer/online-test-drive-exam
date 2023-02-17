import { useState } from 'react';
import { Header, QuizApp, Footer } from './components';
import { mainContext } from './context';
import React from 'react';
const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    return (
        <>
            <mainContext.Provider
                value={{
                    menuOpen,
                    setMenuOpen,
                    score,
                    setScore,
                    correctAnswer,
                    setCorrectAnswer,
                    wrongAnswer,
                    setWrongAnswer,
                }}
            >
                <Header />
                <QuizApp />
                <Footer />
            </mainContext.Provider>
        </>
    );
};

export default App;
