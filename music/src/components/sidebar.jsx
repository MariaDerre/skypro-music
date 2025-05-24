import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Sidebar() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return(
      <div className="main__sidebar sidebar">
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item" style={{ marginTop: '70px' }}>
              <Skeleton width="250px" height="150px" baseColor='#a9a9a9'/>
            </div>
            <div className="sidebar__item">
              <Skeleton width="250px" height="150px" baseColor='#a9a9a9'/>
            </div>
            <div className="sidebar__item">
              <Skeleton width="250px" height="150px" baseColor='#a9a9a9'/>
            </div>
          </div>
        </div>
      </div>
    )
    }

    return(
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use href="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Sidebar;