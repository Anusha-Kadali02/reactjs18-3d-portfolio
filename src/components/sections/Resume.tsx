import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";


const Resume = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.resume} />

      <a
  href="/src/assets/resume.pdf"
  download="Meghana_Kadali_Resume.pdf"
  className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
>
  Resume
</a>
    </>
  );
};

export default SectionWrapper(Resume, "");
