import { Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { About, Contact, Home, Portifolio, Servise } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/servise" element={<Servise />} />
          <Route path="/portifolio" element={<Portifolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
