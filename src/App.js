/** @format */

import "./App.css";
import { Blog } from "./Components/Blog";
import { Features } from "./Components/Features";
import { Footer } from "./Components/Footer";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Team } from "./Components/Team";

function App() {
  return (
    <div className="App">
      <main className="h-screen md:px-5 overflow-y-auto">
        <Navbar />
        <Home />
        <Features />
        <Team />
        <Blog />
        <Footer />
      </main>
    </div>
  );
}

export default App;
