import * as S from './BoardOfBest.styles'
import {BoardOfBestUiProps } from './BoardOfBest.types';
import { Fragment } from 'react';
import {LikeOutlined, UserOutlined} from '@ant-design/icons' 
import { Avatar } from 'antd';

export default function BoardOfBestUi(props: BoardOfBestUiProps) {
  console.log("best", props.data);
  return (
    <Fragment>
      {props.data?.fetchBoardsOfTheBest.map((el, index) => (
        <S.ContainerBox key={index} id={el._id} onClick={props.onClickMovePage}>
          {el.images.length !== 0
          ?<S.ImageArea src={el.images} />
          : <S.ImageArea src="/landing.jpeg" />
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
