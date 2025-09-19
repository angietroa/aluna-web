import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import "./TimeSelector.scss";

const TimeSelector = ({ value, onChange }) => {
  const [hour, setHour] = useState(value ? value.split(":")[0] : "12");
  const [minute, setMinute] = useState(value ? value.split(":")[1] : "00");
  const [isAM, setIsAM] = useState(true);

  const handleHourChange = (event) => {
    const newHour = event.target.value.replace(/\D/g, "");
    if (newHour === "" || (parseInt(newHour) >= 1 && parseInt(newHour) <= 12)) {
      setHour(newHour);
      updateTime(newHour, minute, isAM);
    }
  };

  const handleMinuteChange = (event) => {
    const newMinute = event.target.value.replace(/\D/g, "");
    if (
      newMinute === "" ||
      (parseInt(newMinute) >= 0 && parseInt(newMinute) <= 59)
    ) {
      setMinute(newMinute.padStart(2, "0"));
      updateTime(hour, newMinute.padStart(2, "0"), isAM);
    }
  };

  const handleAMClick = () => {
    setIsAM(true);
    updateTime(hour, minute, true);
  };

  const handlePMClick = () => {
    setIsAM(false);
    updateTime(hour, minute, false);
  };

  const updateTime = (h, m, am) => {
    let hour24 = parseInt(h);
    if (!am && hour24 !== 12) {
      hour24 += 12;
    } else if (am && hour24 === 12) {
      hour24 = 0;
    }
    const formattedHour = hour24.toString().padStart(2, "0");
    const formattedMinute = m.padStart(2, "0");
    onChange(`${formattedHour}:${formattedMinute}`);
  };

  return (
    <Box className="time-selector">
      <Box className="time-selector-container">
        <TextField
          value={hour}
          onChange={handleHourChange}
          placeholder="12"
          className="time-selector-input"
          inputProps={{ maxLength: 2 }}
        />

        <Typography variant="h1" className="time-selector-separator">
          :
        </Typography>

        <TextField
          value={minute}
          onChange={handleMinuteChange}
          placeholder="00"
          className="time-selector-input"
          inputProps={{ maxLength: 2 }}
        />

        <Box className="time-selector-period">
          <Button
            onClick={handleAMClick}
            className={`time-selector-period-button ${isAM ? "selected" : ""}`}
            variant="contained"
          >
            AM
          </Button>
          <Button
            onClick={handlePMClick}
            className={`time-selector-period-button ${!isAM ? "selected" : ""}`}
            variant="contained"
          >
            PM
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TimeSelector;
