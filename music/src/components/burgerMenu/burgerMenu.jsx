import React, { useState } from 'react'
import * as S from './burgerMenu.style'
import SignIn from '../signin/signin';

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
            <S.MenuLink href="#">Главное</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
            <S.MenuLink href="#">Мой плейлист</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
            <S.MenuLink onClick={(e) => {
              e.preventDefault();
              SignIn();
            }}>Войти</S.MenuLink>
            </S.MenuItem>
        </S.MenuList>
        </S.NavMenu>
      )}
    </div>
  );
};

export default BurgerMenu;