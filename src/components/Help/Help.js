import React from "react";
import { Container, Typography, Box } from "@mui/material";
import AppNavbar from "../AppNavbar";
import mobile1Image from "../../assets/images/mobile_1.svg";
import mobile2Image from "../../assets/images/mobile_2.svg";
import "./Help.scss";

const Help = () => {
  return (
    <Box className="help-wrapper">
      <AppNavbar showAvatar={false} />
      <Container maxWidth="lg" className="help-container">
        <Box className="help-content">
          <Typography variant="h1" className="help-title">
            ¿Cómo encontrar mi código en la app?
          </Typography>

          <Typography variant="h2" className="help-subtitle">
            Sigue estos pasos en menos de 1 minuto
          </Typography>

          <Box className="help-step">
            <Box className="help-step-number">
              <Typography variant="h2" className="help-step-number-text">
                1
              </Typography>
            </Box>
            <Typography className="help-step-text">
              Inicia sesión en la app con tu cuenta ya creada.
            </Typography>
          </Box>

          <Box className="help-step-two-columns">
            <Box className="help-step-left">
              <Box className="help-step">
                <Box className="help-step-number">
                  <Typography variant="h2" className="help-step-number-text">
                    2
                  </Typography>
                </Box>
                <Typography className="help-step-text">
                  Toca el ícono ubicado en la parte superior derecha de la
                  pantalla.
                </Typography>
              </Box>
            </Box>
            <Box className="help-step-image-container">
              <Box
                component="img"
                src={mobile1Image}
                alt="Paso 2"
                className="help-step-image"
              />
            </Box>
          </Box>

          <Box className="help-step-two-columns">
            <Box className="help-step-image-container">
              <Box
                component="img"
                src={mobile2Image}
                alt="Paso 3"
                className="help-step-image"
              />
            </Box>
            <Box className="help-step-right">
              <Box className="help-step">
                <Box className="help-step-number">
                  <Typography variant="h2" className="help-step-number-text">
                    3
                  </Typography>
                </Box>
                <Typography className="help-step-text">
                  ¡Listo! Verás un código alfanumérico debajo del código QR: ese
                  es tu código de acceso.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Help;
