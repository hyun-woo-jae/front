import React, { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import {Box,Button,Stack} from '@mui/material';
import styled from 'styled-components';
import DetailPageEx from './DetailpageEx';

const CustomButton = styled(Button)`
  background-color: #009630;
  color: white;
  &:hover {
    color: #FFD700;
    background-color: #009630;
  }
`;

const DetailPage = () => {
  //const { postId } = useParams(); 
  // useParams 훅을 사용하여 URL 파라미터에서 postId를 가져옵니다. DetailPageEx로 이전
  const contents=[
      {title:"소프트웨어 공학_5주차_손 필기본",
      date:"2024-03-28",
      tag:"#소공 #소공5주차 #좋아요",
      content:"좋아요 10 넘을 시 공개하겠음"},
      {title:"데이터 과학_3주차_퀴즈",
      date:"2024-03-20",
      tag:"#데과 #데과3주차 #퀴즈 #퀴즈어렵다 #종강",
      content:"1. numpy란 무엇인가?   2. numpy랑 pandas의 차이점은?"},
      {title:"고웹프_정리본",
      date:"2024-04-10",
      tag:"#고웹프 #고급 웹프로그래밍 #화이팅",
      content:"React props state hook 등"}
  ];
  // 현재 랜덤 개체의 인덱스 상태
  const [randomIndex, setRandomIndex] = useState(0);
  // 현재 선택된 무작위 개체 상태
  const [randomObject, setRandomObject] = useState(contents[0]);

  // 페이지 로드 시랑 새로 고침할 때마다 새로운 무작위 개체 표시
  useEffect(() => {
    const newIndex = Math.floor(Math.random() * contents.length);
    setRandomIndex(newIndex);
  }, []);

  // 무작위 개체 선택 및 상태 업데이트
  useEffect(() => {
    setRandomObject(contents[randomIndex]);
  }, [randomIndex]);


  //하트 버튼 누를 때마다 좋아요 수 올라가는 기능
  const [count,setCount]=useState(0);
  return (
    <>
    <Box
      sx={{
        position: 'relative',
        width: 900,
        height: 700,
        margin: 3,
        border: 1,
        borderColor: '#eeeded',
        padding: 3,
        borderRadius: 5,
        backgroundColor: '#fffdfd',
      }}>

      {/* <DetailPageEx title={"소프트웨어 공학_5주차_손 필기본"}
                   date={"2024-03-28"}
                   tag={"#소공 #소공5주차 #좋아요"}
                   content={"좋아요 10 넘을 시 공개하겠음"}>
      </DetailPageEx> */}
      
      <DetailPageEx title={randomObject.title}
                   date={randomObject.date}
                   tag={randomObject.tag}
                   content={randomObject.content}>
      </DetailPageEx>
      {/* 글 작성자일 경우에만 권한 허용-로그인 기능 구현 시 수정 */}
      <Stack
        sx={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          gap: 2,
          margin: 2,
          flexDirection: 'row', // 버튼들을 가로로 정렬
          alignItems: 'center', // 버튼들을 세로 중앙 정렬
        }}
      >
        <CustomButton>수정하기</CustomButton>
        <CustomButton>삭제하기</CustomButton>
      </Stack>
    </Box>
    <LikeButton
        onClick={()=> {
          setCount(count+1);
        }}>
        <img src={process.env.PUBLIC_URL + "/heart.png"} width="35px" height="35px"/>
    </LikeButton>
    <p text-size="5rem" text-align="center">{count} </p>
    </>
  );
};

export default DetailPage;

const LikeButton = styled.button`
  border:"none";
  margin :3;
  padding:3;
  position: 'relative',
`;
