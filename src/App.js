import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              height="h-[915px] sm:h-[1368px] xl:h-fit"
              width="w-full sm:w-full xl:w-full"
              background="bg-home-mobile sm:bg-home-tablet xl:bg-home-desktop"
              backgroundRepeat="bg-no-repeat sm:bg-no-repeat xl:bg-no-repeat"
              backgroundSize="bg-cover sm:bg-cover xl:bg-cover"
            />
          }
        />
        <Route
          path="/destination"
          element={
            <Destination
              height="h-[915px] sm:h-[1368px] xl:h-fit"
              width="w-full sm:w-full xl:w-full"
              background="bg-destination-mobile sm:bg-destination-tablet xl:bg-destination-desktop"
              backgroundRepeat="bg-no-repeat sm:bg-no-repeat xl:bg-no-repeat"
              backgroundSize="bg-cover sm:bg-cover xl:bg-cover"
            />
          }
        />
        <Route
          path="/crew"
          element={
            <Crew
              height="h-[915px] sm:h-fit xl:h-fit"
              width="w-full sm:w-full xl:w-full"
              background="bg-crew-mobile sm:bg-crew-tablet xl:bg-crew-desktop"
              backgroundRepeat="bg-no-repeat sm:bg-no-repeat xl:bg-no-repeat"
              backgroundSize="bg-cover sm:bg-cover xl:bg-cover"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <Technology
              height="h-[915px] sm:h-fit xl:h-fit"
              width="w-full sm:w-full xl:w-full"
              background="bg-technology-mobile sm:bg-technology-tablet xl:bg-technology-desktop"
              backgroundRepeat="bg-no-repeat sm:bg-no-repeat xl:bg-no-repeat"
              backgroundSize="bg-cover sm:bg-cover xl:bg-cover"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
