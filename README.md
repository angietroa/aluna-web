# Aluna - Aplicación de Meditación

Una aplicación web de meditación desarrollada con React y Material-UI que permite gestionar alarmas y sesiones de meditación personalizadas.

## 🚀 Características

- **Dashboard:** Vista principal con estadísticas y resumen
- **Biblioteca:** Gestión de contenido de meditación
- **Lista:** Organización de sesiones y alarmas
- **Creación:** Configuración de alarmas personalizadas con selector de tiempo y días
- **Ayuda:** Guía de uso de la aplicación
- **Sistema de colores:** Paleta de colores del diseño

## 🛠️ Tecnologías

- **React 18** - Framework principal
- **Material-UI 5** - Componentes de interfaz
- **React Router** - Navegación entre páginas
- **SCSS** - Estilos personalizados
- **Day.js** - Manejo de fechas y horas

## 📦 Instalación

1. **Instalar dependencias**

   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo**

   ```bash
   npm start
   ```

3. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📋 Scripts Disponibles

- `npm start` - Ejecuta la aplicación en modo desarrollo
- `npm build` - Construye la aplicación para producción

## 🎨 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── AppNavbar/      # Barra de navegación
│   ├── Creation/       # Página de creación de alarmas
│   ├── Dashboard/      # Panel principal
│   ├── DaySelector/    # Selector de días personalizado
│   ├── Help/           # Página de ayuda
│   ├── Home/           # Página de inicio
│   ├── Library/        # Biblioteca de contenido
│   ├── List/           # Lista de elementos
│   └── TimeSelector/   # Selector de tiempo personalizado
├── styles/             # Estilos globales SCSS
├── assets/             # Recursos estáticos
└── theme/              # Configuración de tema
```

## 🎯 Funcionalidades Principales

- **Creación de Alarmas:** Selector personalizado de hora, fecha y días de la semana
- **Interfaz Responsiva:** Adaptable a diferentes tamaños de pantalla
- **Sistema de Navegación:** Rutas organizadas para cada sección
- **Tema Personalizado:** Paleta de colores consistente en toda la aplicación

---
