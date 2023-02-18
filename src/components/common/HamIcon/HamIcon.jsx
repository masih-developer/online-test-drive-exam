import { useEffect, useContext } from 'react';
import { mainContext } from '../../../context';
import './HamIcon.css';

function HamIcon(props) {
    const { hamIconIsShow, setHamIconIsShow } = useContext(mainContext);

    const openHamIconHandler = () => {
        setHamIconIsShow(!hamIconIsShow);
    };

    useEffect(() => {
        props.onShow(hamIconIsShow);
    }, [hamIconIsShow]);

    return (
        <>
            <div
                className={`ham${hamIconIsShow ? ' open' : ''}`}
                onClick={openHamIconHandler}
            >
                <span className='ham-top '></span>
                <span className='ham-middle '></span>
                <span className='ham-bottom '></span>
            </div>
        </>
    );
}

export default HamIcon;
