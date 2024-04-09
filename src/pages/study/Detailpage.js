import React from 'react';
import { useParams } from 'react-router-dom';
import {Box,Button,Stack} from '@mui/material';
import styled from "styled-components";

const DetailPage = () => {
  const { postId } = useParams(); // useParams 훅을 사용하여 URL 파라미터에서 postId를 가져옵니다.

  const title="소프트웨어 공학_5주차_손필기본";
  const date="2024-03-28";
  const tag="#소공 #소공5주차 #좋아요";
  const content="좋아요 10 넘을 시 공개하겠음"
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
      }}
    >
      <h1><Title>{title}</Title></h1>
      <p><Date>{date}</Date></p>
      <p><PostId>Posted By &nbsp; Greek{postId}</PostId></p>
      
      <br />
      {/* Content : 글, 그림 등등등*/}
      <p><Content>{content}</Content></p>
      <img src={process.env.PUBLIC_URL + "/example.png"} width="200px" height="200px"/>
      <p><Tag>{tag}</Tag></p>
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
        <Button
          size="small" // 버튼 크기를 작게 설정하여 텍스트 크기에 맞춤
          sx={{
            backgroundColor: '#009630',
            color: 'white',
            '&:hover': {color: '#FFD700',backgroundColor:'#009630'} // 버튼 위에 마우스를 가져다 놓았을 때 글자 색상 변경
          }}
        >
          수정하기
        </Button>
        <Button
          size="small" // 버튼 크기를 작게 설정하여 텍스트 크기에 맞춤
          sx={{
            backgroundColor: '#009630',
            color: 'white',
            '&:hover': {color: '#FFD700',backgroundColor:'#009630'} // 버튼 위에 마우스를 가져다 놓았을 때 글자 색상 변경
          }}
        >
          삭제하기
        </Button>
      </Stack>
    </Box>
    </>
  );
};

export default DetailPage;

const Title = styled.h1`
  font-size: 2rem;
  text:bold;
  text-align:center;
`;

const Date = styled.p`
  font-size: 1rem;
  text-align:right;
`;

const PostId = styled.p`
  font-size: 1.2rem;
  text:bold
`;

const Tag = styled.p`
  font-size: 1rem;
  text:bold;
  color: blue;
  margin-top:12rem;
`;

const Content = styled.p`
  font-size: 1rem;
  text:bold
`;