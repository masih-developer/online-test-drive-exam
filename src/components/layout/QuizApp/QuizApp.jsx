import React, { useState, useEffect } from "react";
import "./QuizApp.css";
import { Question } from "../../index";
import { questions as questionList } from "../../../constants/questionsData";
import { useContext } from "react";
import { mainContext } from "../../../context";
import { Swiper, SwiperSlide } from "swiper/react";

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const { score } = useContext(mainContext);
    const [nextSlide, setNextSlide] = useState(false);
    const [isShowFinishBtn, setIsShowFinishBtn] = useState(false);
    const [isFinishExam, setIsFinishExam] = useState(false);

    useEffect(() => {
        setQuestions(questionList);
    }, []);

    const accesssForNextSlide = (access) => {
        setNextSlide(access);
    };

    return (
        <>
            <div className="quiz-app">
                <div className="container">
                    <div className="quiz-app-wrapper">
                        {!isFinishExam ? (
                            <>
                                <Swiper
                                    allowSlidePrev={false}
                                    allowSlideNext={nextSlide}
                                    slidesPerView={1}
                                    onSlideChange={(e) => {
                                        setNextSlide(false);
                                        e.isEnd && setIsShowFinishBtn(true);
                                    }}
                                >
                                    {questions.length > 0 &&
                                        questions.map((question) => (
                                            <SwiperSlide key={question.id}>
                                                <Question
                                                    key={question.id}
                                                    {...question}
                                                    toAllowNext={accesssForNextSlide}
                                                />
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                                {isShowFinishBtn && (
                                    <button
                                        className="finish-quiz-btn"
                                        onClick={() => setIsFinishExam(true)}
                                    >
                                        پایان آزمون
                                    </button>
                                )}
                            </>
                        ) : (
                            "hello"
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizApp;
