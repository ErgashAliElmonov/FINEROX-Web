import { Link } from "react-router-dom";
import "./style.css";
import { About } from "../About/About";
import { Portifolio } from "../Portifolio/Portifolio";
import { Servise } from "../Service/Servise";
import { Contact } from "../Contact/Contact";
import { InfinityText } from "../../components/InfintyTex/InfinityText";

export function Home() {
  return (
    <div>
      <div className="home-wrapper">
        <div>
          <h1>
            <span style={{ color: "#3FA3DD" }}> FINEROX </span> IT kompaniyasi
            O'zbekistondagi yirik IT kompaniyalardan biri bulib. U har xil
            turdagi
            <span style={{ color: "#3FA3DD" }}> dasturlash </span> xizmatlari
            bilan shug'ullanadi.
          </h1>
          <Link to={"/about"}>
            <button className="about-btn">Batafsil</button>
          </Link>
        </div>
        <img src="/src/assets/main.png" alt="" width="500px" />
      </div>
      <InfinityText/>
      <About />
      <InfinityText/>
      <Servise />
      <InfinityText/>
      <Portifolio />
      <InfinityText/>
      <Contact />
    </div>
  );
}
