import React, { useEffect, useState, useContext } from "react";
import "./Question.css";
import { mainContext } from "../../../../context";
const Question = (props) => {
    const { setScore, setCorrectAnswer, setWrongAnswer } = useContext(mainContext);
    const [question, setQuestion] = useState({});
    const [showAnsQues, setShowAnsQues] = useState(false);
    const [showDesc, setShowDesc] = useState(false);

    useEffect(() => {
        setQuestion(props);
    }, [props]);

    const answeredHandler = (e, isCrr) => {
        setShowDesc(true);
        if (isCrr) {
            setCorrectAnswer((prev) => prev + 1);
            setScore((score) => score + 1);
            e.target.parentElement.parentElement.classList.add("option-item--true");
        } else {
            setWrongAnswer((prev) => prev + 1);
            e.target.parentElement.parentElement.classList.add("option-item--false");
            setShowAnsQues(true);
        }

        const allOptions = [...e.target.parentElement.parentElement.parentElement.children];
        allOptions.forEach((option) => {
            option.children[0].children[0].disabled = true;
            option.classList.add("option-item--disabled");
        });
    };
    return (
        <>
            <div className="form-container">
                <div className="options-wrapper">
                    <div className="question-title-wrapper">
                        <h3 className="question-number">{question.id}#</h3>
                        <p className="question-title">{question.questionTitle}</p>
                    </div>
                    <ul className="question-list">
                        {Object.keys(question).length > 0
                            ? question.questionOptions.map((item, index) => {
                                  const uniqueId = crypto.randomUUID();
                                  return (
                                      <li
                                          className={`option-item ${
                                              showAnsQues
                                                  ? item.isCorrect
                                                      ? "option-item--true"
                                                      : ""
                                                  : ""
                                          }`}
                                          key={index}
                                      >
                                          <label className="option-item__answer" htmlFor={uniqueId}>
                                              <input
                                                  onClick={(e) => {
                                                      answeredHandler(e, item.isCorrect);
                                                  }}
                                                  type="radio"
                                                  className="option-item__bool"
                                                  name={`${question.id}`}
                                                  id={uniqueId}
                                              />
                                              {item.answer}
                                          </label>
                                      </li>
                                  );
                              })
                            : null}
                    </ul>
                </div>
                <div className="form-container__img-wrapper">
                    <img src={question.img} className="question-img" alt="" />
                </div>
            </div>
            <div className='details-box'>
                {showDesc && (
                    <div>
                        <p className='question-description'>
                            {question.questionDesc}
                        </p>
                        <p className='question-source'>
                            {question.questionSource}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Question;
