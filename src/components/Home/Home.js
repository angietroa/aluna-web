import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/images/logo.svg";
import helpIcon from "../../assets/images/help.svg";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box className="home-wrapper">
      <Container maxWidth="lg" className="home-container">
        <Box className="home-content">
          <Box
            component="img"
            src={logoImage}
            alt="Logo"
            className="home-logo"
          />

          <Box className="home-form">
            <TextField
              fullWidth
              label="Código del perfil"
              variant="outlined"
              className="home-input"
            />

            <Typography variant="body" className="home-text">
              Puedes encontrar este código en la tarjeta de perfil de la app
            </Typography>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="home-button"
              onClick={() => handleNavigation("/dashboard")}
            >
              Ingresar
            </Button>

            <Button
              fullWidth
              variant="contained"
              color="secondary"
              startIcon={<Box component="img" src={helpIcon} alt="Help" />}
              className="home-help-button"
              onClick={() => handleNavigation("/help")}
            >
              Necesito ayuda
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
