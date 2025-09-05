import "./style.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Biz bilan bog‘laning 🤝</h1>

      <div className="contact-grid">
        {/* Ma'lumotlar kartasi */}
        <div className="contact-card">
          <p className="contact-lead">
            Savolingiz bormi? Quyidagi aloqa kanallari orqali tez bog‘laning.
          </p>
          <div className="contact-item">
            <span className="contact-label">📞 Bog‘lanish:</span>
            <a href="tel:+998881180507" aria-label="Telefon raqamiga qo‘ng‘iroq qilish">
              +998 (88) 118-05-07
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">📨 Telegram:</span>
            <a
              href="https://t.me/finerox_HR"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram profiliga o‘tish"
            >
              @finerox_HR
            </a>
          </div>
        </div>

        {/* Xarita kartasi */}
        <div className="map-card">
          <h2 className="map-title">Manzil (Google Maps)</h2>
          <div className="map-embed">
            <iframe
              title="Bizning manzil"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d879.8605815548801!2d65.79551936069271!3d38.85906355877226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDUxJzMxLjYiTiA2NcKwNDcnNDYuNCJF!5e1!3m2!1suz!2s!4v1756905617714!5m2!1suz!2s"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
