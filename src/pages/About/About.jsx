import "./style.css";

export const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <img
          src="/assets/main.png"
          alt=""
          width={"500px"}
          className="img-about"
        />

        <h2 className="title-about">Biz haqimizda</h2>
        <p>
          {" "}
          <span style={{ color: "#3FA3DD", fontWeight: "600" }}>
            {" "}
            FINEROX{" "}
          </span>{" "}
          IT kompaniyasi O'zbekistondagi yirik IT Kompaniyalaridan biri
          hisoblanadi! FINEROX kompaniyasi 2023-yil 1-dekabr kuni tashkil topgan
          va hozirgacha faoliyat yuritadi bizning jamoa 2 kishidan boshlanib
          hozirgi kunda 25 kishilik professional jamoaga aylandi va biz
          xizmatlarimiz va muddatga kafolat beramiz!{" "}
        </p>
      </div>
    </div>
  );
};
