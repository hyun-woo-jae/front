import React, { useState } from "react";
import { AppBar, Toolbar, Link, Divider } from "@mui/material";
import { useLocation } from "react-router-dom";

const CustomAppBar = () => {
  const location = useLocation();
  const [selectedLink, setSelectedLink] = useState(location.pathname);

  const handleLinkClick = (href) => {
    setSelectedLink(href);
  };

  return (
    <AppBar
      position="absolute"
      color="inherit"
      elevation={0}
      sx={{ position: "relative" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // 수직 정렬 추가
        }}
      >
        {/* 로고 이미지 왼쪽에 배치 */}
        <Link href="/" sx={{ flexGrow: 1, alignItems:"center" }}>
          <img
            src={process.env.PUBLIC_URL + "/GreekTextLogo.png"}
            alt="Your Logo"
            style={{ maxHeight: "25px", marginTop:10 }}
          />
        </Link>

        {/* 메뉴 링크들 오른쪽에 배치 */}
        <div>
          <Link
            underline="none"
            href="/calender"
            onClick={() => handleLinkClick("/calender")}
            sx={{
              color: selectedLink === "/calender" ? "#000000" : "#666666",
              "&:hover": {
                color: "#000000",
              },
              mx: 3, // 가로 간격 조절
            }}
          >
            CALENDAR
          </Link>
          <Link
            underline="none"
            href="/study"
            onClick={() => handleLinkClick("/study")}
            sx={{
              color: selectedLink === "/study" ? "#000000" : "#666666",
              "&:hover": {
                color: "#000000",
              },
              mx: 3, // 가로 간격 조절
            }}
          >
            STUDY
          </Link>
          <Link
            underline="none"
            href="/guest_book"
            onClick={() => handleLinkClick("/guest_book")}
            sx={{
              color: selectedLink === "/guest_book" ? "#000000" : "#666666",
              "&:hover": {
                color: "#000000",
              },
              mx: 3, // 가로 간격 조절
            }}
          >
            GUEST BOOK
          </Link>
        </div>
      </Toolbar>
      <Divider sx={{backgroundColor: "#64AE2F"}}/>
    </AppBar>
  );
};

export default CustomAppBar;
