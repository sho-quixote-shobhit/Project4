import './App.css';
import { Box } from "@chakra-ui/react"
import Navbar from './webComponets/Navbar/Navbar';
import Header from './webComponets/LandingPage/Header';
import BookShoot from './webComponets/LandingPage/BookShoot';
import HowItWorks from './webComponets/LandingPage/HowItWorks';
import Contact from './webComponets/LandingPage/Contact';
import Footer from './webComponets/Footer/Footer';

function App() {
    return (
        <Box>
            <Navbar />
            <Header />
            <BookShoot />
            <HowItWorks />
            <Contact />
            <Footer />
        </Box>
    );
}

export default App;
