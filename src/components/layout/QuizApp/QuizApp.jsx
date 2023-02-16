import React, { useState, useEffect } from "react";
import "./QuizApp.css";
import { Question } from "../../index";
import { questions as questionList } from "../../../constants/questionsData";
import { useContext } from "react";
import { mainContext } from "../../../context";
import Slider from "react-slick";

const QuizApp = () => {
    const [questions, setQuestions] = useState([]);
    const { score } = useContext(mainContext);
    useEffect(() => {
        setQuestions(questionList);
    }, []);
    const options = {
        slidesToShow: 1,
        swipe: false,
        infinite: false,
        lazyLoad: true,
    };

    const goToNextItem = () => {};

    return (
        <>
            <div className="quiz-app">
                <p className="score">امتیاز شما : {score}</p>
                <div className="container">
                    <div className="quiz-app-wrapper">
                        <Slider {...options}>
                            {questions.map((question) => (
                                <Question
                                    key={question.id}
                                    {...question}
                                    onNextSlick={goToNextItem}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuizApp;
