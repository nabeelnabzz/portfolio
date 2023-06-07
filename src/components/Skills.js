import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import javascript from "../assets/skills/javascript.svg";
import reactIcon from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwind.svg";
import git from "../assets/skills/git.svg";
import typescript from "../assets/skills/typescript.png";
import mui from "../assets/skills/mui.png";
import reactQuery from "../assets/skills//react query.svg";
import redux from "../assets/skills//redux.png";
import reduxSaga from "../assets/skills//redux-saga.svg";

export default function Skills() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className="mt-2 mb-[70px] text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">
        I have expertise in the following areas
      </p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="javascript" experience="3 years" img={javascript} />
          <SkillCard name="typescript" experience="1 years" img={typescript} />
          <SkillCard name="react" experience="3 years" img={reactIcon} />
          <SkillCard name="MUI" experience="2 years" img={mui} />
          <SkillCard name="Redux" experience="2 years" img={redux} />
          <SkillCard name="Redux-saga" experience="2 years" img={reduxSaga} />
          <SkillCard name="tailwind" experience="2 years" img={tailwind} />
          <SkillCard name="git" experience="3 years" img={git} />
          <SkillCard name="React Query" experience="1 years" img={reactQuery} />
        </Slider>
      </div>
    </div>
  );
}
