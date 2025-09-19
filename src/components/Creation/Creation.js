import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import AppNavbar from "../AppNavbar";
import Switch from "../Switch";
import TimeSelector from "../TimeSelector";
import DaySelector from "../DaySelector";
import "./Creation.scss";

const Creation = () => {
  const [formData, setFormData] = useState({
    alarmName: "",
    soundEnabled: false,
    vibrationEnabled: false,
    meditationGoal: "",
    alarmTime: "12:00",
    alarmDate: null,
    selectedDays: [],
  });

  const navigate = useNavigate();

  const meditationGoals = [
    "Sueño y descanso",
    "Estrés",
    "Ansiedad",
    "Emociones difíciles",
    "Concentración y productividad",
  ];

  const handleInputChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  const handleSwitchChange = (field) => {
    setFormData({
      ...formData,
      [field]: !formData[field],
    });
  };

  const handleTimeChange = (newTime) => {
    setFormData({
      ...formData,
      alarmTime: newTime,
    });
  };

  const handleDateChange = (newDate) => {
    setFormData({
      ...formData,
      alarmDate: newDate,
    });
  };

  const handleDaysChange = (newDays) => {
    setFormData({
      ...formData,
      selectedDays: newDays,
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSave = () => {
    console.log("Saving alarm:", formData);
    navigate(-1);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className="creation-wrapper">
        <AppNavbar />
        <Container maxWidth="lg" className="creation-container">
          <Box className="creation-content">
            <Box className="creation-two-columns">
              <Box className="creation-left-column">
                <Box className="creation-time-container">
                  <TimeSelector
                    value={formData.alarmTime}
                    onChange={handleTimeChange}
                  />
                  <DatePicker
                    label="Fecha"
                    value={formData.alarmDate}
                    onChange={handleDateChange}
                    className="creation-date-input"
                  />
                </Box>
                <DaySelector
                  value={formData.selectedDays}
                  onChange={handleDaysChange}
                  className="creation-day-selector"
                />
              </Box>

              <Box className="creation-right-column">
                <TextField
                  fullWidth
                  label="Nombre de la alarma"
                  value={formData.alarmName}
                  onChange={handleInputChange("alarmName")}
                  className="creation-input"
                />

                <Box className="creation-switch-row">
                  <Typography variant="body" className="creation-switch-label">
                    Sonido de la alarma
                  </Typography>
                  <Switch
                    checked={formData.soundEnabled}
                    onChange={() => handleSwitchChange("soundEnabled")}
                  />
                </Box>

                <Box className="creation-switch-row">
                  <Typography variant="body" className="creation-switch-label">
                    Vibración
                  </Typography>
                  <Switch
                    checked={formData.vibrationEnabled}
                    onChange={() => handleSwitchChange("vibrationEnabled")}
                  />
                </Box>

                <FormControl fullWidth className="creation-select">
                  <InputLabel>Objetivo de la meditación</InputLabel>
                  <Select
                    value={formData.meditationGoal}
                    onChange={handleInputChange("meditationGoal")}
                    label="Objetivo de la meditación"
                  >
                    {meditationGoals.map((goal) => (
                      <MenuItem key={goal} value={goal}>
                        {goal}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>

            <Box className="creation-buttons">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCancel}
                className="creation-button button-secondary"
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                onClick={handleSave}
                className="creation-button creation-save-button"
              >
                Guardar
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </LocalizationProvider>
  );
};

export default Creation;
