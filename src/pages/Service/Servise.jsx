import { Card } from "../../components";
import "./style.css";

export const Servise = () => {
  return (
    <div className="sercise-container">
      <h1 style={{ color: "#3fa3dd" }}>Bizda qanday xizmatlar mavjud 🧐?</h1>
      <div className="servise-box">
        <Card
          url="/src/assets/web.png"
          title="Veb-saytlar"
          script="Biz biznesingiz uchun zamonaviy va qulay veb-saytlar yaratamiz."
        />
        <Card
          url="/src/assets/mobile.png"
          title="Mobil ilovalar"
          script="iOS va Android uchun samarali mobil ilovalar ishlab chiqamiz."
        />
        <Card
          url="/src/assets/crm.png"
          title="CRM tizimlar"
          script="Mijozlar va jarayonlarni boshqarish uchun kuchli CRM tizimlar."
        />
        <Card
          url="/src/assets/main.png"
          title="Logo & Brending"
          script="Brendingizni kuchaytiruvchi logo va korporativ uslub yaratamiz."
        />
        <Card
          url="/src/assets/uiux.png"
          title="UI & UX dizayn"
          script="Foydalanuvchilar uchun qulay va chiroyli interfeyslar dizayni."
        />
        <Card
          url="/src/assets/cyber.png"
          title="Kiberxavfsizlik"
          script="Biznesingizni kiberxavflardan himoya qilish xizmatlari."
        />
        <Card
          url="/src/assets/bot.png"
          title="Pro Telegram bot"
          script="Har xil funksiyalarga ega professional Telegram botlar yaratamiz."
        />
        <Card
          url="/src/assets/ai.png"
          title="Sun'iy intellekt"
          script="AI texnologiyalari asosida aqlli yechimlar ishlab chiqamiz."
        />
      </div>
    </div>
  );
};
