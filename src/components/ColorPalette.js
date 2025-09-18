import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
} from "@mui/material";
import { designSystem } from "../config/designSystem";

const ColorPalette = () => {
  const colorSwatches = [
    {
      name: "Primary",
      color: designSystem.colors.primary,
      description: "Main green",
    },
    {
      name: "Primary Light",
      color: designSystem.colors.primaryLight,
      description: "Light green",
    },
    {
      name: "Primary Dark",
      color: designSystem.colors.primaryDark,
      description: "Dark green",
    },
    {
      name: "Background",
      color: designSystem.colors.background,
      description: "White background",
    },
    {
      name: "Surface",
      color: designSystem.colors.surface,
      description: "White surface",
    },
    {
      name: "Text Primary",
      color: designSystem.colors.text.primary,
      description: "Black text",
    },
    {
      name: "Text Secondary",
      color: designSystem.colors.text.secondary,
      description: "Dark green text",
    },
    {
      name: "White",
      color: designSystem.colors.white,
      description: "Pure white",
    },
    {
      name: "Black",
      color: designSystem.colors.black,
      description: "Pure black",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Design System Colors
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Paleta de colores de tu Figma aplicada al proyecto
      </Typography>

      <Grid container spacing={3}>
        {colorSwatches.map((swatch, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Box
                  sx={{
                    width: "100%",
                    height: 100,
                    backgroundColor: swatch.color,
                    borderRadius: 2,
                    mb: 2,
                    border:
                      swatch.color === "#FFFFFF" ? "1px solid #e0e0e0" : "none",
                  }}
                />
                <Typography variant="h6" gutterBottom>
                  {swatch.name}
                </Typography>
                <Typography variant="body" color="text.secondary" gutterBottom>
                  {swatch.description}
                </Typography>
                <Chip
                  label={swatch.color}
                  size="small"
                  sx={{
                    backgroundColor: swatch.color,
                    color: swatch.color === "#000000" ? "#FFFFFF" : "#000000",
                    fontFamily: "monospace",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ejemplos de Uso
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{ p: 3, backgroundColor: "primary.main", color: "white" }}
            >
              <Typography variant="h5" gutterBottom>
                Botón Primario
              </Typography>
              <Typography variant="body">
                Este es un ejemplo de cómo se ve el color primario aplicado.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                backgroundColor: "primary.light",
                color: "text.primary",
              }}
            >
              <Typography variant="h5" gutterBottom>
                Fondo Claro
              </Typography>
              <Typography variant="body">
                Este es un ejemplo del color primario claro.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ColorPalette;
