import React from "react";
import "./Quiz.css";

const Quiz = () => {
    return (
        <>
            <div className="form-container">
                <div className="folan">
                    <h3 className="question-number">سوال اول</h3>
                    <img src="/assets/images/questions/q1.jpg" className="question-img" alt="" />
                    <p className="question-title">جواب این سوال چیه</p>
                </div>
                <form action="">
                    <div className="option-container">
                        <input type="radio" name="question-1" id="option-1" />
                        <label htmlFor="option-1">گزینه اول</label>
                    </div>
                    <div className="option-container">
                        <input type="radio" name="question-1" id="option-1" />
                        <label htmlFor="option-1">گزینه دوم</label>
                    </div>
                    <div className="option-container">
                        <input type="radio" name="question-1" id="option-1" />
                        <label htmlFor="option-1">گزینه سوم</label>
                    </div>
                    <div className="option-container">
                        <input type="radio" name="question-1" id="option-1" />
                        <label htmlFor="option-1">گزینه چهارم</label>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Quiz;
