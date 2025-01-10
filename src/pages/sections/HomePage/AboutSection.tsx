import { HiChevronDoubleLeft } from "react-icons/hi";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container about-section-wrapper d-flex">
        <h2 className="head-title">Haqqımızda</h2>
        <div className="text-box ">
          <p className="about-text">
            "Ölkənin ilk özəl və #dahaFərqli ssenari platformu" NVAiləsi
            saytında Sənin üçün bir - birindən fərqli ssenarilər təqdim edilir.
            Sən tamamilə ödənişsiz qeydiyyatdan keçdikdən sonra, saytda təqdim
            edilən ssenariləri oxuya, 5 ulduzlu səsvermə sistemi ilə səs verə və
            şərh yaza bilərsən. Ssenarilərin hər biri ailə üzvlərinin birlikdə
            və ya ayrılıqda oxuya biləcək şəkildə yazılıb. Ssenarilərdə
            psixoloji və fiziki şiddət, cinayət, pis vərdişləri təbliğ edən və
            onlara təşviq edən səhnələr yer almır. Bu kimi səhnələr olsa belə,
            bir mesaj xarakteri daşıyır. Platformun məqsədi, insanlarda ssenari
            oxuma alışqanlığını artırmaq və insanların mənəvi istirahətinə
            #dahaFərqli 'lik qatmaqdı. Reallıqla xəyalın tam mərkəzində
            #dahaFərqli 1 dünya olan NV'də #dahaFərqliSən 🧡
          </p>
          <button className="d-flex more-details-button">
            <HiChevronDoubleLeft
              height={21.05}
              width={14.13}
              className="more-icon"
            />
            Daha ətraflı{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
