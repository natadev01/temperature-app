```md
# 🌡️ Temperature App

Este es un proyecto de React que permite **convertir temperaturas** entre Celsius y Fahrenheit, y **buscar la temperatura actual** de cualquier ciudad en el mundo utilizando la API de OpenWeatherMap.

## 🚀 Características
- ✅ Conversor de temperatura entre °C y °F.
- ✅ Búsqueda de temperatura en ciudades con datos en tiempo real.
- ✅ Navegación con `React Router`.
- ✅ Peticiones HTTP optimizadas con `Axios`.
- ✅ Diseño responsivo y accesible.

## 🛠️ Tecnologías Utilizadas
- **React.js** ⚛️
- **React Router** (para la navegación entre el conversor y el buscador)
- **Axios** (para las solicitudes HTTP)
- **CSS** (estilizado a medida)

## 📌 Instalación y Uso
1. **Clona el repositorio**
   ```sh
   git clone https://github.com/tu-usuario/temperature-app.git
   cd temperature-app
   ```
2. **Instala las dependencias**
   ```sh
   npm install
   ```
3. **Ejecuta el proyecto**
   ```sh
   npm start
   ```
   La aplicación se ejecutará en `http://localhost:3000`.

## 🔑 Configuración de API
Para la búsqueda de temperatura, necesitas una API Key de OpenWeatherMap:

1. Regístrate en [OpenWeatherMap](https://openweathermap.org/api) y obtén tu API Key.
2. Configura la clave en `TemperatureSearch.jsx`.

## 📂 Estructura del Proyecto
```
temperature-app/
│── src/
│   ├── components/
│   │   ├── navbar/            # Barra de navegación
│   │   ├── converter/         # Conversor de temperatura
│   │   ├── temperatureSearch/ # Búsqueda de temperatura
│   ├── App.jsx
│── public/
│── package.json
│── README.md
```
