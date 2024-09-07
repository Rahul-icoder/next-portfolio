import React from "react";
import Header from "./Header";
import SocialIcons from "./SocialIcon";
import ResumeButton from "./ResumeButton";
import HomeImage from "./HomeImage";

const Home = () => {
    return (
        <div className="flex relative z-10 justify-center px-6 sm:px-10 sm:py-10 pt-5">
            <div className="flex items-center gap-6 sm:gap-10 md:flex-row flex-col">
                <div
                    className="flex flex-col justify-start items-center"
                    style={{ flex: 0.6 }}
                >
                    <Header
                        title="Hi, I'm Rahul"
                        subtitle="Developer 🧑‍💻 | ReactJS ⚛️ | NodeJS 🚀"
                    />
                    <SocialIcons />
                    <ResumeButton link="resume.pdf" text="DOWNLOAD RESUME" />
                </div>
                <div style={{ flex: 0.6 }}>
                    <HomeImage />
                </div>
            </div>
        </div>
    );
};

export default Home;
