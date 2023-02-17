import React, { useState, useEffect } from 'react';
import './QuizApp.css';
import { Question, Resualt } from '../../index';
import { questions as questionList } from '../../../constants/questionsData';
import { useContext } from 'react';
import { mainContext } from '../../../context';

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const { wrongAnswer, correctAnswer } = useContext(mainContext);
    const [isFinishExam, setIsFinishExam] = useState(false);

    useEffect(() => {
        setQuestions(questionList);
    }, []);

    return (
        <>
            <div className='quiz-app'>
                <div className='container'>
                    <div className='quiz-app-wrapper'>
                        {!isFinishExam ? (
                            <>
                                {questions.length > 0 &&
                                    questions.map((question) => (
                                        <Question
                                            key={question.id}
                                            {...question}
                                        />
                                    ))}
                                {wrongAnswer + correctAnswer === 20 && (
                                    <button
                                        className='finish-quiz-btn'
                                        onClick={() => setIsFinishExam(true)}
                                    >
                                        پایان آزمون
                                    </button>
                                )}
                            </>
                        ) : (
                            <Resualt
                                correctAnswer={correctAnswer}
                                wrongAnswer={wrongAnswer}
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizApp;
