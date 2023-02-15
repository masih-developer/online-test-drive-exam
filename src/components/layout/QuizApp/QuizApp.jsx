import React, { useState, useEffect } from 'react';
import './QuizApp.css';
import { Question } from '../../index';
import { questions as questionList } from '../../../constants/questionsData';
import { useContext } from 'react';
import { mainContext } from '../../../context';
const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const { score } = useContext(mainContext);
    useEffect(() => {
        setQuestions(questionList);
    }, []);

    return (
        <>
            <div className='quiz-app'>
                <p className='score'>امتیاز شما : {score}</p>
                <div className='container'>
                    <div className='quiz-app-wrapper'>
                        {questions.map((question) => (
                            <Question key={question.id} {...question} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizApp;
