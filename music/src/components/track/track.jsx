import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as S from './track.style'

// Принимаем пропсы: данные трека, статус загрузки и функцию клика
function Track({ track, isLoading, onClick }) {

    // Функция для красивого формата времени (например, 154 сек -> 2:34)
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        return `${minutes}:${formattedSeconds}`;
    };

    // Если идет загрузка — рисуем ОДИН скелетон (Tracklist сам размножит их)
    if (isLoading) {
        return (
            <S.PlaylistItem>
                <S.PlaylistTrack>
                    <S.TrackTitle>
                        <S.TrackTitleImage>
                            <Skeleton width={51} height={51} baseColor='#a9a9a9' />
                        </S.TrackTitleImage>
                        <div>
                            <Skeleton width="350px" height="20px" baseColor='#a9a9a9' />
                        </div>
                    </S.TrackTitle>
                    <S.TrackAuthor>
                        <Skeleton width="300px" height="20px" baseColor='#a9a9a9' />
                    </S.TrackAuthor>
                    <S.TrackAlbum>
                        <Skeleton width="310px" height="20px" baseColor='#a9a9a9' />
                    </S.TrackAlbum>
                </S.PlaylistTrack>
            </S.PlaylistItem>
        );
    }

    // Если данные загружены — рисуем реальный трек
    return (
        <S.PlaylistItem onClick={onClick}>
            <S.PlaylistTrack>
                <S.TrackTitle>
                    <S.TrackTitleImage>
                        <S.TrackTitleSvg alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </S.TrackTitleSvg>
                    </S.TrackTitleImage>
                    <div>
                        <S.TrackTitleLink href="#">
                            {track.name} <S.TrackTitleSpan>{track.subtitle}</S.TrackTitleSpan>
                        </S.TrackTitleLink>
                    </div>
                </S.TrackTitle>
                <S.TrackAuthor>
                    <S.TrackAuthorLink href="#">{track.author}</S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                    <S.TrackAlbumLink href="#">{track.album}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <S.TrackTime>
                    <S.TrackTimeSvg alt="time">
                        <use href="img/icon/sprite.svg#icon-like"></use>
                    </S.TrackTimeSvg>
                    {/* Используем нашу функцию форматирования */}
                    <S.TrackTimeText>{formatTime(track.duration_in_seconds)}</S.TrackTimeText>
                </S.TrackTime>
            </S.PlaylistTrack>
        </S.PlaylistItem>
    );
}

export default Track;
