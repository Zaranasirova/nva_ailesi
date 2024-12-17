import { HiChevronDoubleLeft } from "react-icons/hi";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container about-section-wrapper d-flex">
        <h2 className="about-head-title">Haqqımızda</h2>
        <div className="text-box ">
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur. Pulvinar ac et fermentum
            nibh fusce neque sapien purus. Donec ac adipiscing elit cursus
            phasellus. Scelerisque placerat lacus orci velit ut sit velit amet
            feugiat. Et tempus sapien diam aliquam pretium. Sed eget venenatis
            id mattis sed placerat aliquet orci. Viverra quis diam nisi faucibus
            in. Id pulvinar quis malesuada eu. Egestas pretium eget ornare
            dignissim ornare est felis et. Dolor faucibus ac odio duis lectus et
            dictum. Nibh dignissim ut eleifend curabitur quis integer tempus
            pellentesque. Praesent maecenas vulputate mauris aenean blandit
            ultrices accumsan.
          </p>
          <button className="d-flex more-details-button">
            <HiChevronDoubleLeft height={21.05} width={14.13} className="more-icon" />
            Daha ətraflı{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
