import React, { createContext, useState } from 'react'
import NavMenu from './navMenu';

const BurgerMenu = () => {
  // состояние для отслеживания открытия/закрытия меню
  const [isOpen, setIsOpen] = useState(false);

  // функция для переключения состояния
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Иконка бургера */}
        <div className="nav__burger burger" onClick={toggleMenu}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </div>

      {/* Меню */}
      {isOpen && (
        <div className="nav__menu menu">
        <ul className="menu__list">
            <li className="menu__item">
            <a href="#" className="menu__link">Главное</a>
            </li>
            <li className="menu__item">
            <a href="#" className="menu__link">Мой плейлист</a>
            </li>
            <li className="menu__item">
            <a href="../signin.html" className="menu__link">Войти</a>
            </li>
        </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;