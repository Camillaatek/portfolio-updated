import vector from "../../media/vector.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__info">
        <p className="about__info__hello">HELLO EVERYBODY, I AM</p>
        <h1>CAMILLA ÅMLI</h1>
        <h2>FRONTEND DEVELOPER AND DESIGNER</h2>
        <p>
          I enjoy taking complex problems and turning them into simple and
          beautiful interface designs. I also love the logic and structure of
          coding and always strive to write elegant and efficient code, whether
          it be HTML, CSS or React. When I'm not coding, you'll find me drawing
          or winning at chess.
        </p>
      </div>

      <div className="about__vector">
        <img
          src={vector}
          alt="vector girl on pc"
          className="about__vector__img"
        />
      </div>
    </div>
  );
};

export default About;
