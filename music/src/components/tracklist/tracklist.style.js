import styled from 'styled-components';

export const MainCenterBlock = styled.div`
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
export const MenuLink = styled.div`
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`
export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`
export const CenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`
export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`
export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const SearchSvg = styled.svg`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`
export const SearchText = styled.input`
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;

  &::-webkit-input-placeholder{
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  }
  &:-ms-input-placeholder {
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
  &::-ms-input-placeholder {
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
  &::placeholder {
  background-color: transparent;
  color: #ffffff;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
`
export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`
export const FilterPopup = styled.div`
  border-radius: 12px;
  padding: 36px;
  background: white;
  position: absolute;
  width: 248px;
  height: 305px;
  background-color: rgb(49, 49, 49);
  overflow: auto;
  margin-top: 10px;

  &::-webkit-scrollbar {
  width: 4px;
  }
  &::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  }
  &::-webkit-scrollbar-track {
  background: transparent;
  }
`
export const FilterPopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`
export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid #ffffff;
  border-radius: 60px;
  padding: 6px 20px;

  &:not(:last-child) {
  margin-right: 10px;
  }

  ${props => props.active && `
    border: 1px solid rgb(173, 97, 255);
    color: rgb(173, 97, 255);
  `}
`
export const FilterPopupText = styled.p`
  font-family: StratosSkyeng;
  font-weight: 400;
  font-size: 20px;
  height: 24px;
  justify-content: center;

  &:hover {
  color: rgb(182, 114, 255);
  text-decoration: underline;
  cursor: pointer;
  }
`
export const ContentTitle = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: flex-start;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  margin-bottom: 24px;
`
export const ContentPlaylist = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;
`
export const PlaylistTitleCol = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #696969;
  text-transform: uppercase;

  width: ${props => props.width};
  
  ${props => props.align === 'end' && `
    text-align: end;
  `}
`
export const PlaylistTitleSvg = styled.svg`  
  width: 12px;
  height: 12px;
  fill: transparent;
  stroke: #696969;
`
