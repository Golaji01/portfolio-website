import React, { useEffect, useState } from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-12 md:px-20 font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8" data-aos="fade-down">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various
          projects and experiences
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-stretch">
        {SkillsInfo.map((category) => {
          const content = (
            <div className="flex flex-wrap gap-3 justify-center">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="inline-flex flex-col items-center bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-4 text-center
                             transition-transform duration-300 hover:scale-105 hover:border-[#8245ec] shadow-md max-w-full"
                >
                  <div className="flex items-center gap-2 max-w-full">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    <span className="text-sm text-gray-300 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>

                  {/* Optional Skill Level Dots */}
                  <div className="flex gap-1 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                  </div>
                </div>
              ))}
            </div>
          );

          return (
            <div
              key={category.title}
              className="w-full md:w-[47%] bg-gray-900 backdrop-blur-md px-5 sm:px-10 py-8 sm:py-6 rounded-2xl border border-white 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
              data-aos="fade-up"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
                {category.title}
              </h3>
              {isMobile ? content : (
                <Tilt
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={1000}
                  scale={1.05}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  {content}
                </Tilt>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
