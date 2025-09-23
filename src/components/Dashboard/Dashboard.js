import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../AppNavbar";
import iaImage from "../../assets/images/ia.svg";
import graphic1Image from "../../assets/images/graphic_1.svg";
import graphic2Image from "../../assets/images/graphic_2.svg";
import graphic3Image from "../../assets/images/graphic_3.svg";
import "./Dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box className="dashboard-wrapper">
      <AppNavbar showBackButton={false} />
      <Container maxWidth="lg" className="dashboard-container">
        <Box className="dashboard-content">
          <Box className="dashboard-buttons">
            <Button
              variant="contained"
              color="primary"
              className="dashboard-button"
              onClick={() => handleNavigation("/list")}
            >
              Gestionar alarmas
            </Button>
            <Button
              variant="contained"
              color="primary"
              className="dashboard-button"
              onClick={() => handleNavigation("/library")}
            >
              Catálogo de meditaciones
            </Button>
          </Box>

          <Box className="dashboard-metrics">
            <Box className="dashboard-streak">
              <Typography variant="h2" className="dashboard-streak-number">
                0
              </Typography>
              <Typography variant="h4" className="dashboard-streak-text">
                Racha
              </Typography>
            </Box>

            <Box className="dashboard-description">
              <Box
                component="img"
                src={iaImage}
                alt="IA"
                className="dashboard-ia-icon"
              />
              <Typography className="dashboard-description-text">
                En las últimas semanas has mantenido una práctica constante de
                meditación, logrando sesiones regulares que reflejan tu
                compromiso con el bienestar personal. Tus métricas muestran
                avances en la frecuencia y la duración de las prácticas, así
                como una mayor estabilidad en tus niveles de concentración y
                calma. Estos resultados indican que tu proceso va en una
                dirección positiva y que estás construyendo un hábito cada vez
                más sólido.
              </Typography>
            </Box>
          </Box>

          <Box className="dashboard-recommendations">
            <Box className="dashboard-recommendations-container">
              <Typography
                variant="h3"
                className="dashboard-recommendations-title"
              >
                Recomendaciones
              </Typography>
              <Box className="dashboard-recommendations-content">
                <Box
                  component="img"
                  src={iaImage}
                  alt="IA"
                  className="dashboard-recommendations-icon"
                />
                <Typography className="dashboard-recommendations-text">
                  Para seguir potenciando tu progreso, te sugerimos mantener la
                  regularidad y experimentar con diferentes tipos de
                  meditaciones según tus objetivos: relajación profunda, enfoque
                  mental o reducción del estrés. Intenta elegir momentos del día
                  donde te resulte más fácil mantener la constancia y acompaña
                  tu práctica con hábitos que refuercen el equilibrio, como
                  pausas conscientes, respiración profunda o pequeños momentos
                  de gratitud. De esta manera, fortalecerás tu rutina y
                  ampliarás los beneficios de tu experiencia.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Typography variant="h1" className="dashboard-panel-title">
            Panel
          </Typography>

          <Box className="dashboard-graphics-container">
            <Box className="dashboard-graphic-container dashboard-graphic-container-small">
              <Typography variant="h3" className="dashboard-graphic-title">
                Horario mas frecuente
              </Typography>
              <Box
                component="img"
                src={graphic1Image}
                alt="Horario mas frecuente"
                className="dashboard-graphic-image"
              />
            </Box>

            <Box className="dashboard-graphic-container dashboard-graphic-container-large">
              <Typography variant="h3" className="dashboard-graphic-title">
                Frecuencia semanal de meditación
              </Typography>
              <Box
                component="img"
                src={graphic2Image}
                alt="Frecuencia semanal de meditación"
                className="dashboard-graphic-image"
              />
            </Box>

            <Box className="dashboard-graphic-container dashboard-graphic-container-small">
              <Typography variant="h3" className="dashboard-graphic-title">
                Duración promedio de sesión
              </Typography>
              <Box
                component="img"
                src={graphic3Image}
                alt="Duración promedio de sesión"
                className="dashboard-graphic-image"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
