import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import alunaImage from "../../assets/images/aluna.svg";
import arrowBackImage from "../../assets/images/arrow_back.svg";
import "./AppNavbar.scss";

const AppNavbar = ({ showBackButton = true, showAvatar = true }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Box className="app-navbar">
      {showBackButton && (
        <Box
          component="img"
          src={arrowBackImage}
          alt="Volver"
          className="app-navbar-back-button"
          onClick={handleBackClick}
        />
      )}
      <Box className="app-navbar-content">
        {showAvatar && (
          <Box className="app-navbar-avatar">
            <Typography className="app-navbar-avatar-text">A</Typography>
          </Box>
        )}
        <Box
          component="img"
          src={alunaImage}
          alt="Aluna"
          className="app-navbar-logo"
        />
      </Box>
    </Box>
  );
};

AppNavbar.propTypes = {
  showBackButton: PropTypes.bool,
  showAvatar: PropTypes.bool,
};

AppNavbar.defaultProps = {
  showBackButton: true,
  showAvatar: true,
};

export default AppNavbar;
