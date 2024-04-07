import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function Listpage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline>
        <Container sx={{ mt: 3 }} maxWidth="md">
          <main>
            {/* Hero unit */}
            <Container sx={{ py: 4 }} maxWidth="md">
              {/* End hero unit */}
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Link
                        to={`/study/detail/${card}`}
                        style={{ textDecoration: "none" }}
                      >
                        {/* 포스터 클릭 시 DetailPage로 이동하는 링크 */}
                        <CardMedia
                          component="div"
                          sx={{
                            // 16:9
                            pt: "56.25%",
                          }}
                          image="https://source.unsplash.com/random?wallpapers"
                        />
                        <CardContent
                          sx={{
                            flexGrow: 1,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              제목 {card} {/* 각 카드에 다른 제목을 표시 */}
                            </Typography>
                            <Typography>User ID {card}</Typography>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </main>
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default Listpage;
