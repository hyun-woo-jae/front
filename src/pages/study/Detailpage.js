import React from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { postId } = useParams(); // useParams 훅을 사용하여 URL 파라미터에서 postId를 가져옵니다.

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Post ID: {postId}</p>
      {/* 이곳에 포스트의 상세 정보를 표시할 수 있습니다. */}
    </div>
  );
};

export default DetailPage;
