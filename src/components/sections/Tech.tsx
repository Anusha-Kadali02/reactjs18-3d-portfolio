import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";

const Tech = () => {
  return (
    <>
      <Header useMotion={false} {...config.sections.skills} />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
