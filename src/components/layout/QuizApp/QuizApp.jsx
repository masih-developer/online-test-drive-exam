import React, { useState, useEffect } from 'react';
import './QuizApp.css';
import { Question } from '../../index';
import { questions as questionList } from '../../../constants/questionsData';

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(questionList);
    }, []);

    return (
        <>
            <div className='quiz-app'>
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
