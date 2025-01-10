import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [phone, setPhone] = useState<string>("");

  const handlePhoneChange = (value:string):void => {
    setPhone(value);
    console.log("Telefon nömrəsi:", value);
  };
  return (
    <section className="contact-section">
      <div className="container contact-section-wrapper">
        <h2 className="head-title">Bizimlə əlaqə saxlayın</h2>
        <form>
          <div className="contact-left">
            <label>Ad, Soyad</label>
            <input type="text" placeholder="Ad/Soyad" />

            <label>Mövzu başlığı</label>
            <input type="text" placeholder="Daxil edin" />

            <label>Əlaqə nömrəsi</label>
            <PhoneInput
              country={"az"}
              value={phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
                required: true,
                autoFocus: true,
              }}
              placeholder="Telefon nömrəsini daxil edin"
            />
          </div>
          <div className="contact-right">
            <label>Mesaj mətni</label>
            <textarea placeholder="Daxil edin..."></textarea>
            <button>Göndər</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
