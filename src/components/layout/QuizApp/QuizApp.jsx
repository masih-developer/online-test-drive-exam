import { useEffect, useContext } from 'react';
import { Question, Resualt } from '../../index';
import { questions as questionList } from '../../../constants/questionsData';
import { mainContext } from '../../../context';
import './QuizApp.css';

const QuizApp = () => {
    const {
        wrongAnswer,
        correctAnswer,
        endTime,
        setEndTime,
        showExam,
        startExam,
        questions,
        setQuestions,
        isFinishExam,
        setIsFinishExam,
    } = useContext(mainContext);

    useEffect(() => {
        setQuestions(questionList);
    }, []);

    const endExam = () => {
        setIsFinishExam(true);
        setEndTime(new Date().getTime());
    };

    return (
        <>
            <div className='quiz-app'>
                <div className='container'>
                    <div className='quiz-app-wrapper'>
                        {!showExam && (
                            <button
                                className='start-quiz-btn'
                                onClick={startExam}
                            >
                                شروع آزمون
                            </button>
                        )}

                        {showExam &&
                            (isFinishExam ? (
                                <Resualt
                                    endTime={endTime}
                                    correctAnswer={correctAnswer}
                                    wrongAnswer={wrongAnswer}
                                />
                            ) : (
                                <>
                                    {questions.length > 0 &&
                                        questions.map((question) => (
                                            <Question
                                                key={question.id}
                                                {...question}
                                            />
                                        ))}

                                    <button
                                        className='finish-quiz-btn'
                                        onClick={endExam}
                                    >
                                        پایان آزمون
                                    </button>
                                </>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizApp;
