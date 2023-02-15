import { useContext, useRef, useEffect } from 'react';
import { mainContext } from '../../../context';
import './Menu.css';
function Menu() {
    const menu = useRef(null);
    const { menuOpen } = useContext(mainContext);
    useEffect(() => {
        const menuHandler = () => {
            if (menuOpen) {
                menu.current.classList.add('show')
            } else {
                menu.current.classList.remove('show')
            }
            console.log(menu.current);
        };
        menuHandler();
    }, [menuOpen]);

    return (
        <>
            <div className='menu-container' ref={menu}>
                <ul className='menu'>
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
            </div>
        </>
    );
}

export default Menu;
