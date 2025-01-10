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
        <form className="contact-info">
          <div className="contact-left">
           <div className="name info">
           <label>Ad, Soyad</label>
           <input className="name-input" type="text" placeholder="Ad/Soyad" required />
           </div>

            <div className="subject-title info">
            <label>Mövzu başlığı</label>
            <input className="subject-input" type="text" placeholder="Daxil edin" required />
            </div>

           <div className="telephone info">
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
              placeholder="(+994) 00 000 00 00"
            />
           </div>
          </div>
          <div className="contact-right">
            <div className="message-input">
            <label>Mesaj mətni</label>
            <textarea placeholder="Daxil edin..."></textarea>
            </div>
            <button className="send-btn">Göndər</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
