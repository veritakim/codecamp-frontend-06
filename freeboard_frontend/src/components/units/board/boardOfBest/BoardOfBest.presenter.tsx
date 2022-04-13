import * as S from './BoardOfBest.styles'
import {BoardOfBestUiProps } from './BoardOfBest.types';
import { Fragment } from 'react';
import {LikeOutlined, UserOutlined} from '@ant-design/icons' 
import { Avatar } from 'antd';

export default function BoardOfBestUi(props: BoardOfBestUiProps) {
  // console.log("best", props.data);
  const basicImg = ['/b-flower2.jpeg', '/b-object.jpeg', '/landing.jpeg', 'b_flower1.jpeg']
  console.log("best", props.data?.fetchBoardsOfTheBest)
  return (
    <Fragment>
      {props.data?.fetchBoardsOfTheBest.map((el, index) => (
        <S.ContainerBox key={el._id} id={el._id} onClick={props.onClickMovePage}>
          {el.images[0] !== ""
          ?
          <S.ImageArea src={`https://storage.googleapis.com/${el.images[0]}`} /> 
           : 
          <S.ImageArea src={basicImg[index]}/>
          } 
         
          <S.Body>
            <S.Title>{el.title}</S.Title>
            
            <S.Middle>
              <S.Writer>
                <S.WriterAvater><Avatar size={20} icon={<UserOutlined />} /></S.WriterAvater>
                <S.WriterName>{el.writer}</S.WriterName>
              </S.Writer>
              <S.ThumbsImg />
            </S.Middle>
           
            <S.Footer>
              <S.DateArea>{el.createdAt.slice(0, 10)}</S.DateArea>
              <S.ThumbsNumber>{el.likeCount}</S.ThumbsNumber>
            </S.Footer>
          
          </S.Body>
        </S.ContainerBox>
      ))}
    </Fragment>
  );
}
