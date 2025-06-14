import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { blue, green, yellow, red, purple, orange, grey, indigo } from '@mui/material/colors';

// Define a custom Material-UI theme for better aesthetics
const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 700,
      color: green[800],
      fontSize:'2.5rem'
    },
    h2: {
      fontWeight: 600,
      color: green[700],
      fontSize:'1.5rem'
    },
    h3: {
      fontWeight: 600,
      color: grey[700],
      fontSize:'1.1rem'
    },
    body1: {
      color: grey[900],
      fontSize:'0.95rem'
    },
    body2: {
      color: grey[600],
      fontSize:'0.8rem'
    },
  },
  palette: {
    primary: {
      main: green[600],
    },
    secondary: {
      main: blue[500],
    },
    background: {
      default: '#f8fafc', // Light background
      paper: '#ffffff',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.03)',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 8,
          borderRadius: 5,
        },
      },
    },
  },
});

// Main App component
const Zinny = () => {
  // State to hold plant data
  const [plantData, setPlantData] = useState({
    soil_moisture: 0, // Percentage
    sunlight_level: 0, // Lux
    temperature: 0, // Celsius
    humidity: 0, // Percentage
    latest_reading_datetime:null
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshIntervalMs = 2 * 60 * 1000; // Refresh every 2 minutes

  const url = process.env.REACT_APP_API_URL
  // Example for updating data (could be fetched from an API in a real app)
  const fetchData = useCallback(async () => {
    setLoading(true); // Set loading to true before fetching
    setError(null);   // Clear any previous errors

    try {
      const dataResponse = await axios.get(url + "/api/v1/zinny/zinny-data/latest");
      setPlantData(dataResponse.data);
      console.log(dataResponse.data);
    } catch (err) {
      setError(err);
      console.error("Failed to fetch plant data:", err);
    } finally {
      setLoading(false); // Set loading to false after fetching (success or failure)
    }
  }, [url]); // Dependency for useCallback: if 'url' changes, fetchData will be recreated.
  



  useEffect(() => {
    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
      console.log('Fetching plant data again...');
    }, refreshIntervalMs);
    return () => {
      clearInterval(intervalId);
      console.log('Interval for plant data cleared.');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[fetchData, refreshIntervalMs]);

  if (loading && !plantData) { // Show loading only initially or if data is truly not there yet
    return <p>Loading plant data...</p>;
  }

  if (error) {
    return <p>Error loading plant data: {error.message}</p>;
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides a consistent baseline for styling */}
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #f0fdf4, #ecfccb)', // Equivalent to emerald-50 to lime-100
          display: 'flex',
          alignItems: 'top',
          justifyContent: 'center',
          padding: { xs: 2, sm: 4 },
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: 'white',
              padding: { xs: 3, sm: 5 },
              borderRadius: 7, // Corresponds to rounded-2xl
              boxShadow: 8, // Equivalent to shadow-xl
              border: `1px solid ${green[100]}`,
              minWidth:'90vh'
            }}
          >
            <Typography variant="h1" align="center" sx={{ mb: { xs: 4, sm: 6 } }}>
              🍃 Zinny
            </Typography>

            <Grid container spacing={{ xs: 2, sm: 3 }}>
              {/* Moisture Card */}
              <Grid item xs={12} sm={6} lg={3}>
                <DataCard
                  title="Soil Moisture"
                  value={`${plantData.soil_moisture.toFixed(2)}%`}
                  icon="💧"
                  status={getStatusMoisture(plantData.soil_moisture)}
                  bgColor={blue[50]}
                  progressColor={getMoistureProgressColor(plantData.soil_moisture)}
                  progress={plantData.soil_moisture}
                  unit="%"
                />
              </Grid>

              {/* Sunlight Card */}
              <Grid item xs={12} sm={6} lg={3}>
                <DataCard
                  title="Current Sunlight"
                  value={`${plantData.sunlight_level.toFixed(2)} Lux`}
                  icon="☀️"
                  status={getStatusSunlight(plantData.sunlight_level)}
                  bgColor={yellow[50]}
                  progressColor={getSunlightProgressColor(plantData.sunlight_level)}
                  progress={plantData.sunlight_level / 100} // Scale Lux to 0-100 for progress bar
                  unit="Lux"
                />
              </Grid>

              {/* Temperature Card */}
              <Grid item xs={12} sm={6} lg={3}>
                <DataCard
                  title="Temperature"
                  value={`${plantData.temperature.toFixed(1)}°C`}
                  icon="🌡️"
                  status={getStatusTemperature(plantData.temperature)}
                  bgColor={red[50]}
                  progressColor={getTemperatureProgressColor(plantData.temperature)}
                  progress={plantData.temperature * 2.5} // Scale temp for progress bar for 0-40 to 0-100 range
                  unit="°C"
                />
              </Grid>

              {/* Humidity Card */}
              <Grid item xs={12} sm={6} lg={3}>
                <DataCard
                  title="Humidity"
                  value={`${plantData.humidity.toFixed(1)}%`}
                  icon="☁️"
                  status={getStatusHumidity(plantData.humidity)}
                  bgColor={purple[50]}
                  progressColor={getHumidityProgressColor(plantData.humidity)}
                  progress={plantData.humidity}
                  unit="%"
                />
              </Grid>
            </Grid>

            {console.log(plantData.latest_reading_datetime)}

            {/* Footer for Last Updated */}
            <Typography variant="body2" align="center" sx={{ mt: 4, color: grey[500] }}>
              Last updated: {plantData.latest_reading_datetime}
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

// DataCard component for displaying individual metrics
const DataCard = ({ title, value, icon, status, bgColor, progressColor, progress, unit }) => {
  return (
    <Card
      sx={{
        backgroundColor: bgColor,
        position: 'relative',
        height: '100%', // Ensure cards in a row have equal height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 1, // Add some internal padding
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}> {/* Content takes available space */}
        <Box sx={{ position: 'absolute', top: 12, right: 12, fontSize: '1.8rem', opacity: 0.6 }}>
          {icon}
        </Box>
        <Typography variant="h3" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'extrabold', mb: 2, fontSize: { xs: '2rem', sm: '2.5rem' } }}>
          {value}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: grey[200],
            '& .MuiLinearProgress-bar': {
              backgroundColor: progressColor,
            },
            mb: 1.5,
          }}
        />
        <Typography variant="body2" sx={{ fontWeight: 'medium', color: getStatusTextColor(status) }}>
          Status: {status}
        </Typography>
      </CardContent>
    </Card>
  );
};

// --- Helper Functions for Status and Styling ---

// Moisture Status
const getStatusMoisture = (moisture) => {
  if (moisture > 75) return 'Very Wet';
  if (moisture > 40) return 'Optimal';
  if (moisture > 20) return 'Needs Water Soon';
  return 'Critical - Very Dry';
};

const getMoistureProgressColor = (moisture) => {
  if (moisture > 75) return blue[600]; // Very Wet
  if (moisture > 40) return blue[500]; // Optimal
  if (moisture > 20) return yellow[500]; // Needs Water Soon
  return red[500]; // Critical
};

// Sunlight Status (assuming 0-10000 Lux range for indoor plants)
const getStatusSunlight = (lux) => {
  if (lux > 8000) return 'Too Intense';
  if (lux > 2000) return 'Optimal';
  if (lux > 500) return 'Low Light';
  return 'Very Low Light';
};

const getSunlightProgressColor = (lux) => {
  const scaledLux = lux / 100; // Scale to 0-100 for color mapping
  if (scaledLux > 80) return orange[500]; // Too Intense
  if (scaledLux > 20) return yellow[500]; // Optimal
  if (scaledLux > 5) return yellow[300]; // Low Light
  return grey[400]; // Very Low Light
};

// Temperature Status (assuming typical indoor plant range 18-30°C)
const getStatusTemperature = (temp) => {
  if (temp > 28) return 'Too Hot';
  if (temp > 18) return 'Optimal';
  if (temp > 10) return 'Too Cold';
  return 'Critical - Freezing';
};

const getTemperatureProgressColor = (temp) => {
  if (temp > 28) return red[500]; // Too Hot
  if (temp > 18) return green[500]; // Optimal
  if (temp > 10) return blue[400]; // Too Cold
  return blue[600]; // Critical
};

// Humidity Status
const getStatusHumidity = (humidity) => {
  if (humidity > 70) return 'Too Humid';
  if (humidity > 40) return 'Optimal';
  if (humidity > 20) return 'Too Dry';
  return 'Critically Dry';
};

const getHumidityProgressColor = (humidity) => {
  if (humidity > 70) return purple[600]; // Too Humid
  if (humidity > 40) return purple[400]; // Optimal
  if (humidity > 20) return indigo[300]; // Too Dry
  return red[400]; // Critically Dry
};

// Text color for status
const getStatusTextColor = (status) => {
  if (status.includes('Optimal')) return green[600];
  if (status.includes('Needs Water') || status.includes('Low Light') || status.includes('Too Cold') || status.includes('Too Hot') || status.includes('Too Dry') || status.includes('Too Humid')) return orange[600];
  if (status.includes('Critical') || status.includes('Very Dry') || status.includes('Very Low Light')) return red[600];
  return grey[600];
};


export default Zinny;
