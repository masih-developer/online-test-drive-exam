import React, { useEffect, useState } from 'react';
import './Question.css';

const Question = (props) => {
    const [question, setQuestion] = useState({});

    useEffect(() => {
        setQuestion(props);
    }, [props]);
    return (
        <>
            <div className='form-container'>
                <div className='folan'>
                    <h3 className='question-number'>سوال {question.id}</h3>
                    <img src={question.img} className='question-img' alt='' />
                    <p className='question-title'>{question.questionTitle}</p>
                </div>
                <form action=''>
                    {Object.keys(question).length > 0
                        ? question.questionOptions.map((item,index) => {
                              return (
                                  <div
                                      className='option-container'
                                      key={index}
                                  >
                                      <input
                                          type='radio'
                                          name='question-1'
                                          id='option-1'
                                      />
                                      <label htmlFor='option-1'>
                                          {item.answer}
                                      </label>
                                  </div>
                              );
                          })
                        : null}
                </form>
            </div>
        </>
    );
};

export default Question;
