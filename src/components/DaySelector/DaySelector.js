import { Box, Button, Typography } from "@mui/material";
import "./DaySelector.scss";

const DaySelector = ({ value = [], onChange }) => {
  const days = [
    { key: "D", label: "D", fullName: "Domingo" },
    { key: "L", label: "L", fullName: "Lunes" },
    { key: "M", label: "M", fullName: "Martes" },
    { key: "X", label: "X", fullName: "Miércoles" },
    { key: "J", label: "J", fullName: "Jueves" },
    { key: "V", label: "V", fullName: "Viernes" },
    { key: "S", label: "S", fullName: "Sábado" },
  ];

  const handleDayClick = (dayKey) => {
    const newValue = value.includes(dayKey)
      ? value.filter((day) => day !== dayKey)
      : [...value, dayKey];
    onChange(newValue);
  };

  return (
    <Box className="day-selector">
      <Box className="day-selector-container">
        {days.map((day) => (
          <Button
            key={day.key}
            onClick={() => handleDayClick(day.key)}
            className={`day-selector-button ${
              value.includes(day.key) ? "selected" : ""
            }`}
            variant="text"
          >
            {value.includes(day.key) && <Box className="day-selector-circle" />}
            <Typography variant="md" className="day-selector-text">
              {day.label}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default DaySelector;
