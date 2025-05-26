import React, { useState } from 'react'
import * as S from './burgerMenu.style'

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
            <a href="#">Главное</a>
            </S.MenuItem>
            <S.MenuItem>
            <a href="#">Мой плейлист</a>
            </S.MenuItem>
            <S.MenuItem>
            <a href="../signin.html">Войти</a>
            </S.MenuItem>
        </S.MenuList>
        </S.NavMenu>
      )}
    </div>
  );
};

export default BurgerMenu;