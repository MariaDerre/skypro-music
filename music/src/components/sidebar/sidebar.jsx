import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './sidebar.style'

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
      <S.MainSidebar>
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem style={{ marginTop: '70px' }}>
              <Skeleton width="250px" height="150px" baseColor='#a9a9a9'/>
            </S.SidebarItem>
            <S.SidebarItem>
              <Skeleton width="250px" height="150px" baseColor='#a9a9a9'/>
            </S.SidebarItem>
            <S.SidebarItem>
              <Skeleton width="250px" height="150px" baseColor='#a9a9a9'/>
            </S.SidebarItem>
          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    )
    }

    return(
      <S.MainSidebar>
        <S.SidebarPersonal>
          <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
          <S.SidebarIcon>
            <svg alt="logout">
              <use href="img/icon/sprite.svg#logout"></use>
            </svg>
          </S.SidebarIcon>
        </S.SidebarPersonal>
        <S.SidebarBlock>
          <S.SidebarList>
            <S.SidebarItem>
              <S.SidebarLink href="#">
                <S.SidebarImg
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="#">
                <S.SidebarImg
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
            <S.SidebarItem>
              <S.SidebarLink href="#">
                <S.SidebarImg
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </S.SidebarLink>
            </S.SidebarItem>
          </S.SidebarList>
        </S.SidebarBlock>
      </S.MainSidebar>
    )
}

export default Sidebar;