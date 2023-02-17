import { useContext } from 'react';
import './Resualt.css';
import { mainContext } from '../../../context';
function Resualt() {
    const { correctAnswer, wrongAnswer, endTime, startTime } =
        useContext(mainContext);
    const secondBetweenTwoDate =
        Math.floor(Math.abs((endTime - startTime) / 1000)) % 60;

    const minutesBetweenTwoDate = Math.floor(
        Math.abs(endTime - startTime) / 6e4
    );
    return (
        <>
            <div className='resualt-box'>
                <p className='resualt-title'>نتایج آزمون شما</p>
                <div className='answers-count-box'>
                    <p className='answers-count'>{correctAnswer}</p>
                    <p className='answers-desc'>پاسخ درست</p>
                </div>

                <div className='answers-count-box'>
                    <p className='answers-count'>{wrongAnswer}</p>
                    <p className='answers-desc'>پاسخ غلط</p>
                </div>

                <div className='answers-count-box'>
                    <p className='answers-count'>
                        {20 - (correctAnswer + wrongAnswer)}
                    </p>
                    <p className='answers-desc'>تعداد نزده</p>
                </div>

                <div dir='rtl' className='time-box'>
                    <p className='time-desc'>مدت زمان آزمون</p>
                    <p className='time-value' >
                        {minutesBetweenTwoDate} دقیقه و {secondBetweenTwoDate}{' '}
                        ثانیه
                    </p>
                </div>
                
            </div>
        </>
    );
}

export default Resualt;
