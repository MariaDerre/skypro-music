import * as S from '../app.style'
import React, { useState, useEffect } from 'react';
import NavMenu from '../components/navMenu/navMenu';
import Tracklist from '../components/tracklist/tracklist';
import Sidebar from '../components/sidebar/sidebar';
import AudioPlayer from '../components/audioplayer/audioplayer';
import { getPlaylist } from '../api';

export function MainPage () {
    const [tracks, setTracks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentTrack, setCurrentTrack] = useState(null);

    useEffect(() => {
        getPlaylist()
            .then((data) => {
                setTracks(data); 
            })
            .catch((error) => {
                alert("Ошибка при загрузке треков: " + error.message);
            })
            .finally(() => {
                setIsLoading(false); 
            });
    }, []);

    return(
        <S.Wrapper>
        <S.GlobalStyles/>
        <S.Container>
        <S.Main>
            <NavMenu/>
            <Tracklist 
                tracks={tracks} 
                isLoading={isLoading} 
                setCurrentTrack={setCurrentTrack} 
            />
            <Sidebar isLoading={isLoading}/>
        </S.Main>
            {currentTrack && (
                <AudioPlayer track={currentTrack} />
            )}
        <footer className="footer"></footer>
        </S.Container>
    </S.Wrapper>
    );
}