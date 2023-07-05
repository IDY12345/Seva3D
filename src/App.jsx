import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter } from "react-router-dom";
import StarsCanvas from "./components/Stars";
import Feedbacks from "./Pages/Feedbacks/Feedbacks";
// import Owners from "./Pages/Owners/Owners";

const App=()=> {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-seva-pattern bg-cover bg-no-repeat bg center">
        <Navbar />
        <Home />
      </div>
      <About />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
