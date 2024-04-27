import { Button, Tooltip, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import Projects from "./Projects";

function About() {
  const [skills, setSkills] = useState("skills");

  const handleSkillsChange = (skills) => {
    setSkills(skills);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div className="bg-black text-white">
        <p className="text-4xl text-center"> About Me</p>
        <div className="lg:grid lg:grid-cols-2 mt-20">
          <div>
            <img src="Images/about.png" alt="" className="w-4/5 m-auto" />
          </div>
          <div>
            <p className="text-2xl text-center mt-16 lg:text-left lg:mt-5">
              I'm Vikas Rawat
            </p>
            <p className="text-xl mt-10 w-4/5 m-auto lg:w-4/5 lg:m-0 lg:text-base lg:mt-5">
              Hey there, I'm Vikas, currently pursuing my Bachelor's in Computer
              Applications (BCA) from ITM University, Gwalior. As an aspiring
              tech enthusiast, I've always been captivated by the world of
              computers and technology.
            </p>
            <p className="text-xl  mt-10 w-4/5 m-auto lg:m-0 lg:w-4/5 lg:text-base lg:mt-2 mb-20">
              My interest in computers began out of simple curiosity, but it
              quickly turned into a deep passion for learning and improving.
              I've gone from learning programming languages to figuring out how
              websites are built and managing databases. Each new challenge I
              face only makes me more eager to keep growing and learning.
            </p>
            <p className="text-center mb-20 lg:text-left lg:mt-10 ">
              <Button
                variant="contained"
                href="https://www.linkedin.com/in/vikas-rawat1/"
              >
                Linkedin
              </Button>
            </p>
          </div>
        </div>
        <div className="border w-full  mb-2 flex bg-black"></div>
        <div className="bg-black">
          <p className="text-center text-4xl mt-10"> Lets Connect</p>
          <div className="flex items-center m-auto mt-20 justify-center gap-10 ">
            <SocialIcon url="https://github.com/Vikas-rawat1/" />
            <SocialIcon url="https://www.linkedin.com/in/vikas-rawat1/" />
            <SocialIcon url="https://twitter.com/vikasrawat6565" />
            <SocialIcon url="mailto:rawatvikas689@gmail.com" network="email" />
          </div>
          <div className="border w-full  mt-20 mb-10 flex bg-black"></div>
        </div>
        <div className="bg-black text-white ">
          <p className="text-center text-4xl mt-10 ">My Skills</p>
          <div className="lg:grid-cols-2 lg:grid">
            <div className="mt-20">
              <div className="relative ">
                <p className="ml-10 lg:rotate-90 lg:absolute lg:mt-10 lg:ml-16">
                  <span className="border w-16 lg:w-4/5 flex"></span> MY SKILLS
                </p>
              </div>
              <p className="mt-5 w-4/5 lg:text-left text-3xl lg:w-3/5 font-poppins font-bold m-auto lg:mt-0">
                What Are My Programming Skills Included?
              </p>
              <p className="w-4/5 text-2xl lg:text-base  lg:w-3/5 m-auto mt-5">
                I develop simple, intuitive and responsive user interface that
                helps users get things done with less effort and time with those
                technologies.
              </p>
              <div className="w-4/5 flex gap-10 m-auto mt-8 lg:w-3/5">
                <Button
                  sx={{
                    fontSize: isMobile ? "4vw" : "1vw",
                    fontWeight: isMobile ? "bold" : "normal",
                    backgroundColor: "orange",
                    color: "white",
                  }}
                >
                  <Link onClick={() => handleSkillsChange("skills")}>
                    Skills
                  </Link>
                </Button>
                <Button
                  sx={{
                    fontSize: isMobile ? "4vw" : "1vw",
                    fontWeight: isMobile ? "bold" : "normal",
                    backgroundColor: "orange",
                    color: "white",
                  }}
                >
                  <Link onClick={() => handleSkillsChange("tools")}>Tools</Link>
                </Button>
                <Button
                  sx={{
                    fontSize: isMobile ? "4vw" : "1vw",
                    fontWeight: isMobile ? "bold" : "normal",
                    backgroundColor: "orange",
                    color: "white",
                  }}
                >
                  <Link onClick={() => handleSkillsChange("database")}>
                    Database
                  </Link>
                </Button>
              </div>
            </div>
            <div className="m-auto">
              <div>
                {skills === "skills" && (
                  <>
                    <div className="m-auto mt-10 justify-center  flex flex-wrap gap-10 lg:mt-0">
                      <Tooltip title="Html">
                        <img src="Images/Skills/html.png" alt="HTML" />
                      </Tooltip>
                      <Tooltip title="Css">
                        <img src="Images/Skills/css.png" alt="CSS" />
                      </Tooltip>
                      <Tooltip title="JavaScript">
                        <img src="Images/Skills/js.png" alt="JavaScript" />
                      </Tooltip>
                      <Tooltip title="React">
                        <img src="Images/Skills/react.png" alt="React" />
                      </Tooltip>
                    </div>
                  </>
                )}
              </div>
              <div className="m-auto">
                <div>
                  {skills === "tools" && (
                    <>
                      <div className="m-auto mt-10 justify-center flex flex-wrap gap-10 lg:mt-0">
                        <Tooltip title="Vs-code">
                          <img src="Images/Skills/vs.png" alt="VS-CODE" />
                        </Tooltip>
                        <Tooltip title="Git">
                          <img src="Images/Skills/git.png" alt="GIT" />
                        </Tooltip>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="m-auto">
                <div>
                  {skills === "database" && (
                    <>
                      <div className="m-auto mt-10 justify-center  flex flex-wrap gap-10 lg:mt-0">
                        <Tooltip title="MYSql">
                          <img src="Images/Skills/mysql.png" alt="MySql" />
                        </Tooltip>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Projects />
      </div>
    </>
  );
}

export default About;
