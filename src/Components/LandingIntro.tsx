const LandingIntroSection = () => {
  return (
    <section className="landing-intro" id="about">
      <h1>
        <span>Hi I'm </span>Nsikak Ekott
      </h1>
      <p>Full Stack Developer</p> {/* Make it more interesting*/}
      <small>
        I'm a young and passionate full stack developer with expertise in
        ASP.NET and React. I specialize in creating dynamic web applications,
        thrive on solving complex coding challenges, and enjoy working with
        cutting-edge technologies. Continuously eager to learn and grow, I’m
        committed to advancing my skills and contributing to the evolving tech
        landscape.
      </small>
      <div>
        <a href="#" className="cv-link">
          Download CV
        </a>
        <a href="#connect" className="connect-link">
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default LandingIntroSection;
