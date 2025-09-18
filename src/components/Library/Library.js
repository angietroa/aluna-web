import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../AppNavbar";
import icon1Image from "../../assets/images/1.svg";
import icon2Image from "../../assets/images/2.svg";
import icon3Image from "../../assets/images/3.svg";
import icon4Image from "../../assets/images/4.svg";
import icon5Image from "../../assets/images/5.svg";
import "./Library.scss";

const Library = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const meditationCards = [
    {
      id: 1,
      title: "Sueño y descanso",
      icon: icon1Image,
    },
    {
      id: 2,
      title: "Estrés",
      icon: icon2Image,
    },
    {
      id: 3,
      title: "Ansiedad",
      icon: icon3Image,
    },
    {
      id: 4,
      title: "Emociones difíciles",
      icon: icon4Image,
    },
    {
      id: 5,
      title: "Concentración y productividad",
      icon: icon5Image,
    },
  ];

  return (
    <Box className="library-wrapper">
      <AppNavbar />
      <Container maxWidth="lg" className="library-container">
        <Box className="library-content">
          <Box className="library-buttons">
            <Button
              variant="contained"
              color="primary"
              className="library-button"
              onClick={() => handleNavigation("/list")}
            >
              Gestionar alarmas
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="library-button"
              onClick={() => handleNavigation("/creation")}
            >
              Crear alarma
            </Button>
          </Box>

          <Typography className="library-description">
            Aquí encontrarás el catálogo de meditaciones disponibles. Recuerda
            que para realizarlas debes ingresar desde la app.
          </Typography>

          <Box className="library-cards-container">
            {meditationCards.map((card) => (
              <Box key={card.id} className="library-card">
                <Box
                  component="img"
                  src={card.icon}
                  alt={card.title}
                  className="library-card-icon"
                />
                <Typography variant="h3" className="library-card-title">
                  {card.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Library;
