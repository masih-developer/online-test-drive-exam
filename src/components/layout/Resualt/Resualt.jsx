import React from 'react';
import './Resualt.css';
function resualt({ correctAnswer, wrongAnswer }) {
    return (
        <>
            <div className='resualt-box'>
                <p className='resualt-title' >نتایج آزمون شما</p>
                <div className='answers-count-box' >
                    <p className='answers-count' >{correctAnswer}</p>
                    <p className='answers-desc' >پاسخ درست</p>
                </div>
                <div className='answers-count-box' >
                    <p className='answers-count' >{wrongAnswer}</p>
                    <p className='answers-desc' >پاسخ غلط</p>
                </div>
            </div>
        </>
    );
}

export default resualt;
