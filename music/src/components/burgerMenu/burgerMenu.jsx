import { useState } from 'react'
import * as S from './burgerMenu.style'
import { Link, NavLink } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
        <S.NavBurger onClick={toggleMenu}>
            <S.BurgerLine></S.BurgerLine>
            <S.BurgerLine></S.BurgerLine>
            <S.BurgerLine></S.BurgerLine>
        </S.NavBurger>

      {isOpen && (
        <S.NavMenu>
        <S.MenuList>
            <S.MenuItem>
            <S.MenuLink to="/">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
            <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
            <S.MenuLink to="/signin">Войти</S.MenuLink>
            </S.MenuItem>
        </S.MenuList>
        </S.NavMenu>
      )}
    </div>
  );
};

export default BurgerMenu;