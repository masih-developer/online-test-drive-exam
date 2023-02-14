import { useContext } from 'react';
import { mainContext } from '../../../context';
import './HamIcon.css';
function HamIcon() {
    const { setMenuOpen } = useContext(mainContext);
    const folan = () => {
        setMenuOpen((prev) => !prev);
    };
    return (
        <>
            <div className='ham-icon' onClick={folan}>
                hamIcon
            </div>
        </>
    );
}

export default HamIcon;
