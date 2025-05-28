import React, { useState } from 'react';
import Track from '../track/track';
import * as S from './tracklist.style'

function Tracklist() {
  // Состояние активного фильтра: null или 'author' | 'year' | 'genre'
  const [activeFilter, setActiveFilter] = useState(null);

  // Обработчик клика по кнопке фильтра
  const toggleFilter = (filterName) => {
    if (activeFilter === filterName) {
      // Если кликнули по уже активному фильтру — закрываем его
      setActiveFilter(null);
    } else {
      // Иначе открываем выбранный фильтр
      setActiveFilter(filterName);
    }
  };

    return(
    <S.MainCenterBlock>
        <S.CenterBlockSearch>
          <S.SearchSvg>
            <use href="../img/icon/sprite.svg#icon-search"></use>
          </S.SearchSvg>
          <S.SearchText
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </S.CenterBlockSearch>
        <S.CenterBlockH2>Треки</S.CenterBlockH2>
        <S.CenterBlockFilter>
          <S.FilterTitle>Искать по:</S.FilterTitle>
        <div>
          <S.FilterButton
          className={`_btn-text ${
            activeFilter === 'author' ? '_active' : ''
          }`}
          active={activeFilter === 'author'}
          onClick={() => toggleFilter('author')}>
          исполнителю
          </S.FilterButton>

          {activeFilter === 'author' && (
            <S.FilterPopup>
              <S.FilterPopupDiv>
                <S.FilterPopupText>Nero</S.FilterPopupText>
                <S.FilterPopupText>Dynoro</S.FilterPopupText>
                <S.FilterPopupText>Ali Bakgor</S.FilterPopupText>
                <S.FilterPopupText>Psychopath</S.FilterPopupText>
                <S.FilterPopupText>Jaded</S.FilterPopupText>
                <S.FilterPopupText>Blue Foundation</S.FilterPopupText>
                <S.FilterPopupText>HYBIT</S.FilterPopupText>
                <S.FilterPopupText>Zeds Dead</S.FilterPopupText>
                <S.FilterPopupText>AR/CO</S.FilterPopupText>
              </S.FilterPopupDiv>
            </S.FilterPopup>
          )}
        </div>

        <div style={{marginRight: '10px', marginLeft: '10px'}}>
          <S.FilterButton className={`_btn-text ${
            activeFilter === 'year' ? '_active' : ''
          }`}
          active={activeFilter === 'year'}
          onClick={() => toggleFilter('year')}>
          году выпуска
          </S.FilterButton>

        {activeFilter === 'year' && (
          <S.FilterPopup>
            <S.FilterPopupDiv>
              <S.FilterPopupText>Default</S.FilterPopupText>
              <S.FilterPopupText>New first</S.FilterPopupText>
              <S.FilterPopupText>Old first</S.FilterPopupText>
            </S.FilterPopupDiv>
          </S.FilterPopup>
        )}
        </div>

      <div>
        <S.FilterButton className={`_btn-text ${
            activeFilter === 'genre' ? '_active' : ''
          }`}
          active={activeFilter === 'genre'}
        onClick={() => toggleFilter('genre')}>
          жанру</S.FilterButton>
        {activeFilter === 'genre' && (
        <S.FilterPopup>
          <S.FilterPopupDiv>
            <S.FilterPopupText>Roc</S.FilterPopupText>
            <S.FilterPopupText>Hip-hop</S.FilterPopupText>
            <S.FilterPopupText>Pop-music</S.FilterPopupText>
            <S.FilterPopupText>Techno</S.FilterPopupText>
            <S.FilterPopupText>Indi</S.FilterPopupText>
          </S.FilterPopupDiv>
        </S.FilterPopup>
        )}  
      </div>
      </S.CenterBlockFilter>

        <S.CenterBlockContent>
          <S.ContentTitle>
            <S.PlaylistTitleCol width='447px'>Трек</S.PlaylistTitleCol>
            <S.PlaylistTitleCol width='321px'>ИСПОЛНИТЕЛЬ</S.PlaylistTitleCol>
            <S.PlaylistTitleCol width='245px'>АЛЬБОМ</S.PlaylistTitleCol>
            <S.PlaylistTitleCol width='60px' align = 'end'>
              <S.PlaylistTitleSvg alt="time">
                <use href="img/icon/sprite.svg#icon-watch"></use>
              </S.PlaylistTitleSvg>
            </S.PlaylistTitleCol>
          </S.ContentTitle>
          <Track/>
        </S.CenterBlockContent>
    </S.MainCenterBlock>
    )
}


export default Tracklist;