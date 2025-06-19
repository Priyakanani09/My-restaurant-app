import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import About from "./Component/About";
import Events from "./Component/Events";
import Book from "./Component/Book";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="about" element={ <About /> } />
        <Route path="book" element={ <Book /> } />
        <Route path="blog" element={ <Blog /> } />
        <Route path="event" element={ <Events /> } />
        <Route path="contact" element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
