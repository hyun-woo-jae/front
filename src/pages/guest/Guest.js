import React, { useState, useEffect } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";


function Guest({ nickname, currentTime, contents }) {
  return (
    <Box
      sx={{
        mt: 4,
        p: 1,
        height: 100,
        width: 600,
        borderRadius: 2,
        textAlign: "center",
        bgcolor: "White",
        '&:hover': {
          bgcolor: '#F2FFE4',
        },
        border: "1px solid black",
        fontFamily: 'Century Gothic, sans-serif'
      }}>
      <Typography 
        sx={{fontSize: 15,
            textAlign:"left",
            bgcolor: "#F2FFE4",
            fontFamily: 'Century Gothic, sans-serif'
        }}><b>{nickname}  </b> &nbsp;
        {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
      </Typography>
      <Divider />
      <Typography sx={{
            textAlign:"left",
            mt: 2,
            fontFamily: 'Century Gothic, sans-serif'
        }}>{contents}</Typography>
    </Box>
  );
}

export default Guest;