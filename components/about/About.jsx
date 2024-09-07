import { imageObject } from "../../data/skill_imgae";
import AboutText from "./AboutText";
import ProfileImage from "./ProfileImage";
import SkillsList from "./SkillsList";

const About = () => {
    return (
        <section className="py-8 px-6 sm:px-10">
            <div className="flex mt-10 justify-center items-center gap-4 md:gap-15 lg:gap-20 flex-col-reverse md:flex-row md:items-start">
                <ProfileImage />
                <div className="w-full md:w-6/12 md:flex-row">
                    <AboutText />
                    <SkillsList skills={imageObject} />
                </div>
            </div>
        </section>
    );
};

export default About;
