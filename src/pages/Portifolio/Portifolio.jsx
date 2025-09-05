import { Card } from "../../components";
import "../Service/style.css";

export const Portifolio = () => {
  return (
    <div className="sercise-container">
      <h1 style={{ color: "#3fa3dd" }}>Bizning portifoliomiz!</h1>
      <div className="servise-box">
        <Card
          url="/assets/beftik.png"
          title="Biftek.uz"
          script="(Veb-sayt) + @biftekbot"
        />
        <Card
          url="/assets/hasma.png"
          title='"KHAMSA" Logo&Brending'
          script='"KHAMSA" Mehmonxonasi uchun tayyorlangan Logo & Brending!"'
        />
        <Card
          url="/assets/mend.png"
          title="MENDELEYEV"
          script={`"MENDELEYEV" o'quv markazi uchun tayyorlangan Logo & Brending!`}
        />
        <Card
          url="/assets/nora.png"
          title="NORA"
          script={'"NORA" liboslari uyi uchun tayyorlangan Logo & Brending!'}
        />
        <Card
          url="/assets/drama.png"
          title="Drama Ledy"
          script={'"Drama Ledy" brendi uchun tayyorlangan Logo & Brending!'}
        />
        <Card
          url="/assets/hotels.png"
          title="HOTELSTASUS"
          script={'"HOTELSTASUS" Mehmonxonasi uchun tayyorlangan veb-sayt'}
        />
        <Card
          url="/assets/hotel.png"
          title="ALI HOTEL"
          script={'"ALI HOTEL" Mehmonxonasi uchun tayyorlangan veb-say'}
        />
      </div>
    </div>
  );
};
