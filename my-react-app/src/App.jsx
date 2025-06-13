import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';

import {
  AdvantagesSection,
  DestinationsSection,
  HeroSection,
  TestimonialsSection,
  TourPackagesSection
} from './components/sections';

const theme = createTheme({
  palette: {
    primary: {
      main: '#14b8a6', // teal-500
    },
    secondary: {
      main: '#fbbf24', // amber-400
    },
  },
});

function App() {

  const handleBookNow = () => {
    // Handle booking logic here
    console.log('Booking started');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gray-50">
        <HeroSection onBookNow={handleBookNow} />
        <TourPackagesSection />
        <AdvantagesSection />
        <DestinationsSection />
        <TestimonialsSection />
      </div>
    </ThemeProvider>
  )
}

export default App
