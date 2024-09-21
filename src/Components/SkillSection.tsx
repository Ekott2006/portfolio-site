import { skills } from "../data";
import { Skills } from "../types";

const SkillSection = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      {Object.keys(skills).map((x) => {
        return (
          <div className="skills-card">
            <h3>{x}</h3>
            <ul>
              {skills[x as keyof Skills].map((a) => (
                <li className="skill">
                  <img src={a.src} alt="" />
                  <p>{a.title}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default SkillSection;
