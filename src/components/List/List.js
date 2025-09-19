import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../AppNavbar";
import Switch from "../Switch";
import iaImage from "../../assets/images/ia.svg";
import "./List.scss";

const List = () => {
  const [alarmData, setAlarmData] = useState([
    {
      id: 1,
      title: "08:00 am - Despertar consiente",
      description:
        "Empieza tu día con intención y paz interior. Respira profundo, conecta con el presente y regálate unos minutos solo para ti. Tu mente y tu cuerpo merecen este instante de calma antes de abrirse al mundo.",
      enabled: true,
    },
    {
      id: 2,
      title: "12:00 pm - Pausa renovadora",
      description:
        "Regálate una pausa para volver a ti. A mitad del día, tu energía merece un respiro. Suelta las ocupaciones, respira con calma y recárgate desde adentro.",
      enabled: false,
    },
    {
      id: 3,
      title: "06:00 pm - Transición nocturna",
      description:
        "Deja que el día se disuelva en calma. Libera tu mente de tensiones, abraza la quietud y prepárate para un descanso profundo. Agradece lo vivido y recibe la noche con serenidad.",
      enabled: true,
    },
  ]);
  const navigate = useNavigate();

  const handleSwitchChange = (alarmId) => {
    setAlarmData((prevData) =>
      prevData.map((alarm) =>
        alarm.id === alarmId ? { ...alarm, enabled: !alarm.enabled } : alarm
      )
    );
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <Box className="list-wrapper">
      <AppNavbar />
      <Container maxWidth="lg" className="list-container">
        <Box className="list-content">
          <Box className="list-button-container">
            <Button
              variant="contained"
              color="primary"
              className="list-create-button"
              onClick={() => handleNavigation("/creation")}
            >
              Crear alarma
            </Button>
          </Box>

          <Box className="list-alarms-container">
            {alarmData.map((alarm) => (
              <Box key={alarm.id} className="list-alarm-item">
                <Box className="list-alarm-content">
                  <Typography variant="h2" className="list-alarm-title">
                    {alarm.title}
                  </Typography>

                  <Box className="list-alarm-description-container">
                    <Box
                      component="img"
                      src={iaImage}
                      alt="IA"
                      className="list-alarm-icon"
                    />
                    <Typography className="list-alarm-description">
                      {alarm.description}
                    </Typography>
                  </Box>
                </Box>

                <Box className="list-alarm-switch-container">
                  <Switch
                    checked={alarm.enabled}
                    onChange={() => handleSwitchChange(alarm.id)}
                    className="list-alarm-switch"
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default List;
