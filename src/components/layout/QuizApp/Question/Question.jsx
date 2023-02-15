import React, { useEffect, useState, useContext } from 'react';
import './Question.css';
import { mainContext } from '../../../../context';
const Question = (props) => {
    const { setScore, score } = useContext(mainContext);
    const [question, setQuestion] = useState({});
    useEffect(() => {
        setQuestion(props);
    }, [props]);

    const isTrue = (e, value) => {
        if (value) {
            setScore((score) => score + 1);
        }
        const allOptions = [...e.target.parentElement.parentElement.children];
        allOptions.forEach((option) => {
            return (option.children[0].disabled = true);
        });
        console.log(score);
    };
    return (
        <>
            <div className='form-container'>
                <div className='form-container__img-wrapper'>
                    <img src={question.img} className='question-img' alt='' />
                </div>
                <div className='options-wrapper'>
                    <div className='question-title-wrapper'>
                        {' '}
                        <h3 className='question-number'>{question.id}#</h3>
                        <p className='question-title'>
                            {question.questionTitle}
                        </p>
                    </div>
                    <ul className='question-list'>
                        {Object.keys(question).length > 0
                            ? question.questionOptions.map((item, index) => (
                                  <li className='option-item' key={index}>
                                      <input
                                          onClick={(e) => {
                                              isTrue(e, item.isCorrect);
                                          }}
                                          type='radio'
                                          className='option-item__bool'
                                          name={`${question.id}`}
                                          id={item.answer}
                                      />
                                      <label
                                          className='option-item__answer'
                                          htmlFor={item.answer}
                                      >
                                          {item.answer}
                                      </label>
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
