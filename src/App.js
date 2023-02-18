import { useState } from 'react';
import { Header, QuizApp, Footer } from './components';
import { mainContext } from './context';
import React from 'react';
const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [score, setScore] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);
    const [showExam, setShowExam] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [hamIconIsShow, setHamIconIsShow] = useState(false);
    const [isShowNav, setIsShowNav] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [isFinishExam, setIsFinishExam] = useState(false);

    const startExam = () => {
        setShowExam(true);
        setStartTime(new Date().getTime());
    };

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
                    startTime,
                    endTime,
                    setEndTime,
                    showExam,
                    startExam,
                    hamIconIsShow,
                    setHamIconIsShow,
                    setIsShowNav,
                    isShowNav,
                    questions,
                    setQuestions,
                    isFinishExam,
                    setIsFinishExam,
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
