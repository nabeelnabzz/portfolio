// import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Hiro() {
  //   const [loaded, setLoaded] = useState(true);

  return (
    <>
      <div
        id="home"
        className="sm:mt-[220px] md:mt-[0px] lg:mt-[0px] flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative "
      >
        <div className="md:w-3/6 md:p-4">
          <div className="bg-[#011627] md:mt-[0px] sm:mt-[210px] p-5 rounded-md">
            <div className="flex gap-3 mb-4">
              <div className="w-4 h-4 p-2 rounded-full bg-[#ff5f56]"></div>
              <div className="w-4 h-4 p-2 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-4 h-4 p-2 rounded-full bg-[#27c93f]"></div>
            </div>
            {/* <div class="h-0 w-40 border-b-8 border-l-20 border-r-20 border-transparent transform -skew-x-12"></div> */}
            <span className="text-[#916fb5]">let</span>{" "}
            <span className="text-[#6a8fd8]">me</span>{" "}
            <span className="text-[#916fb5]">=</span>{" "}
            <span className="text-[#85909e]">{`{`}</span>
            <br />
            <span className="text-[#ffffff] ml-[20px]">name : </span>
            {"  "}
            <span className="text-[#b79c75]">"Nabeel T" </span>{" "}
            <span className="text-[#ffffff]">, </span> <br />
            <span className="text-[#ffffff] ml-[20px]">code : </span>
            {"  "}
            <span className="text-[#b79c75]">
              ["Javascript, Typescript"]{" "}
            </span>{" "}
            <span className="text-[#ffffff]">, </span> <br />
            <span className="text-[#ffffff] ml-[20px]">web : </span>
            {"  "}
            <span className="text-[#b79c75]">
              ["React JS, Next JS, Tailwind, MUI"]
            </span>{" "}
            <span className="text-[#ffffff]">, </span> <br />
            <span className="text-[#ffffff] ml-[20px]">devops : </span>
            {"  "}
            <span className="text-[#b79c75]">
              ["Git, Bitbucket, Beanstack"]
            </span>{" "}
            <span className="text-[#ffffff]">, </span> <br />
            <span className="text-[#ffffff] ml-[20px]">message : </span>
            {"  "}
            <span className="text-[#b79c75]">["Focused"]</span>{" "}
            <span className="text-[#ffffff]">, </span> <br />
            <span className="text-[#85909e]">{`}`}</span>
          </div>
        </div>
        <div
          className="md:w-3/6"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="100"
        >
          <div className="flex flex-col w-full mt-8">
            <h1 className="text-xl text-gray-400">Hi, I'm</h1>
            <h1 className="text-2xl font-bold">Nabeel T</h1>
            <p class="text-xl font-bold text-gray-300">React JS Developer</p>
            <p className="text-md font-light text-gray-400 ">
              Experienced React developer with over 2.5 years of experience in
              building high-quality web application using React and related
              technolgies. Proficient in creating responsive UI designs,
              developing reusable component, and implementing complex business
              logic. Skilled in using Redux, Tailwind css, React Query,
              Typesript and Other web technologies to create efficient and
              scalable applications. Successfully delivered projects for client
              in various industries, including fintech, social media platform,
              e-commerce, Education, Strong problem-solving skills and ability
              to work collaboratively with cross-functional teams to deliver
              projects on time and within budget.
            </p>
          </div>

          <ul className="flex gap-4 items-center mt-5">
            <li>
              <a
                href="https://github.com/nabeelnabzz"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/_nabeel_.t"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nabeel-t/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="2xl" icon={faLinkedinIn} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
