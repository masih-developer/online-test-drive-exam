import { useContext, useRef } from 'react';
import { mainContext } from '../../../context';
import './HamIcon.css';
function HamIcon() {
    const ham_icon = useRef(null);
    const { setMenuOpen } = useContext(mainContext);
    const folan = (e) => {
        ham_icon.current.classList.toggle('open');
        e.stopPropagation();
        setMenuOpen((prev) => !prev);
    };
    return (
        <>
            <div className='ham' onClick={folan} ref={ham_icon}>
                <span className='ham-top '></span>
                <span className='ham-middle '></span>
                <span className='ham-bottom '></span>
            </div>
        </>
    );
}

export default HamIcon;
