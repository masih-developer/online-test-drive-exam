import React, { useEffect, useState } from "react";
import "./Question.css";

const Question = (props) => {
    const [question, setQuestion] = useState({});

    useEffect(() => {
        setQuestion(props);
    }, []);

    return (
        <>
            <div className="form-container">
                <div className="folan">
                    <h3 className="question-number">سوال {question.id}</h3>
                    <img src={question.img} className="question-img" alt="" />
                    <p className="question-title">{question.questionTitle}</p>
                </div>
                <form action="">
                    {/* {question.questionOptions.map(item => {
                        return <div className='option-container'>
                            <input type='radio' name='question-1' id='option-1' />
                            <label htmlFor='option-1'>{item.answer}</label>
                        </div>
                    })} */}
                </form>
            </div>
        </>
    );
};

export default Question;
