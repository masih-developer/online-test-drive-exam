import React, { useEffect, useState } from "react";
import "./Question.css";

const Question = (props) => {
    const [question, setQuestion] = useState({});

    useEffect(() => {
        setQuestion(props);
    }, [props]);

    const changer = (e) => {
        console.log(e.target.parentElement);
    };

    return (
        <>
            <div className="form-container">
                <div className="form-container__img-wrapper">
                    <img src={question.img} className="question-img" alt="" />
                </div>
                <div className="options-wrapper" onChange={(e) => changer(e)}>
                    <div className="question-title-wrapper">
                        {" "}
                        <h3 className="question-number">{question.id}#</h3>
                        <p className="question-title">{question.questionTitle}</p>
                    </div>
                    <ul className="question-list">
                        {Object.keys(question).length > 0
                            ? question.questionOptions.map((item, index) => (
                                  <li className="option-item" key={index}>
                                      <span className="option-item__bool"></span>
                                      <p className="option-item__answer">{item.answer}</p>
                                  </li>
                              ))
                            : null}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Question;
