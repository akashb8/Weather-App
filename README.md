# 🌤️ React Weather App

A beautiful, responsive, and modern weather application built with React, TypeScript, and Tailwind CSS. This project features a stunning glassmorphism UI, real-time weather data fetching, and robust error handling.

## ✨ Features

- **Real-Time Weather**: Get current weather conditions, temperature, humidity, and wind speed for any city using [WeatherAPI](https://www.weatherapi.com/).
- **Modern Glassmorphism UI**: A visually stunning interface utilizing semi-transparent backgrounds and backdrop-blur effects.
- **Responsive Design**: Flawlessly adapts to any screen size, from mobile phones to desktop displays.
- **Robust Error Handling**: Clear user feedback for invalid cities, network issues, or empty searches.
- **Loading States**: Smooth animations to indicate data fetching status.
- **Strongly Typed**: Built entirely with TypeScript for a better developer experience and code reliability.

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-github-repo-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd weather
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up Environment Variables**:
   Create a `.env` file in the root of your project and add your WeatherAPI key:
   ```env
   API_KEY=your_weatherapi_key_here
   ```
   *(Note: Ensure this matches the variable expected in your code, e.g., `import.meta.env.API_KEY`)*

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. Open `http://localhost:5173` in your browser to view the application.

## 📂 Project Structure

```text
src/
├── components/
│   ├── Display.tsx    # Main container managing state, API calls, and UI
│   └── Search.tsx     # Search bar component for user input
├── types/
│   └── types.ts       # TypeScript interfaces for API responses
├── App.tsx            # Root component setting up the main layout
├── index.css          # Global styles and Tailwind configuration
└── main.tsx           # Application entry point
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License

This project is open-source and available under the MIT License.
