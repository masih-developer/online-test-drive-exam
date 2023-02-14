import { useContext } from 'react';
import { mainContext } from '../../../context';
function Menu() {
    const { menuOpen } = useContext(mainContext);
    return (
        <>
            {menuOpen && (
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href=' ' className='nav__link'>
                            خانه
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href=' ' className='nav__link'>
                            درباره ما
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href=' ' className='nav__link'>
                            سوالات
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href=' ' className='nav__link'>
                            تماس با ما
                        </a>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Menu;
