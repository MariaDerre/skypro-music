import React, { useState } from 'react';
import Track from './track';

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
    <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
          <svg className="search__svg">
            <use href="../img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            className="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
          <div className="filter__title">Искать по:</div>
        <div className="filter-button-container">
          <div
          className={`filter__button button-author _btn-text ${
            activeFilter === 'author' ? '_active' : ''
          }`}
          onClick={() => toggleFilter('author')}>
          исполнителю
          </div>

          {activeFilter === 'author' && (
            <div className="filter-popup filter-popup--author">
              <div className='filter-popup-div'>
                <p className='filter-popup-text'>Nero</p>
                <p className='filter-popup-text'>Dynoro</p>
                <p className='filter-popup-text'>Ali Bakgor</p>
                <p className='filter-popup-text'>Psychopath</p>
                <p className='filter-popup-text'>Jaded</p>
                <p className='filter-popup-text'>Blue Foundation</p>
                <p className='filter-popup-text'>HYBIT</p>
                <p className='filter-popup-text'>Zeds Dead</p>
                <p className='filter-popup-text'>AR/CO</p>
              </div>
            </div>
          )}
        </div>

        <div className="filter-button-container" style={{marginRight: '10px', marginLeft: '10px'}}>
          <div className={`filter__button button-year _btn-text ${
            activeFilter === 'year' ? '_active' : ''
          }`}
          onClick={() => toggleFilter('year')}>
          году выпуска
          </div>

        {activeFilter === 'year' && (
          <div className="filter-popup filter-popup--year">
            <div className='filter-popup-div'>
              <p className='filter-popup-text'>Default</p>
              <p className='filter-popup-text'>New first</p>
              <p className='filter-popup-text'>Old first</p>
            </div>
          </div>
        )}
        </div>

      <div className="filter-button-container">
        <div className={`filter__button button-genre _btn-text ${
            activeFilter === 'genre' ? '_active' : ''
          }`}
        onClick={() => toggleFilter('genre')}>
          жанру</div>
        {activeFilter === 'genre' && (
        <div className="filter-popup filter-popup--genre">
          <div className='filter-popup-div'>
            <p className='filter-popup-text'>Roc</p>
            <p className='filter-popup-text'>Hip-hop</p>
            <p className='filter-popup-text'>Pop-music</p>
            <p className='filter-popup-text'>Techno</p>
            <p className='filter-popup-text'>Indi</p>
          </div>
        </div>
        )}  
      </div>
      </div>

        <div className="centerblock__content">
          <div className="content__title playlist-title">
            <div className="playlist-title__col col01">Трек</div>
            <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
            <div className="playlist-title__col col03">АЛЬБОМ</div>
            <div className="playlist-title__col col04">
              <svg className="playlist-title__svg" alt="time">
                <use href="img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          <Track/>
        </div>
    </div>
    )
}


export default Tracklist;