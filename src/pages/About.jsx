import SocialLinks from "../components/SocialLinks";

const About = () => {
  return (
    <div
      className="w-full h-full"
      data-aos="fade-up"
      data-aos-delay={200}
      data-aos-offset={200}
    >
      <div className="w-full h-full bg-light dark:bg-dark rounded-2xl border-4 border-gray border-opacity-30 dark:border-opacity-100 flex p-8 md:gap-10 gap-2 items-center xl:flex-row flex-col">
        <img
          src="./profile.png"
          alt="profile"
          className="w-80 lg:w-96"
          data-aos="fade-in"
          data-aos-delay={400}
        />
        <div className="h-full text-dark dark:text-light flex flex-col gap-4 font-jetbrainsMono text-sm md:text-base">
          <div>
            <h1
              className="font-gochiHand font-semibold text-4xl md:text-6xl text-purpleL dark:text-purpleD"
              data-aos="fade-right"
              data-aos-delay={300}
            >
              Geri Gian C. Epanto
            </h1>
            <p data-aos="fade-in" data-aos-delay={500}>
              "reprehenderit officia nostrud pariatur anim aliquip mollit
              officia aliquip ex nostrud labore adipisicing exercitation
              proident"
            </p>
          </div>
          <div>
            <h2
              className="font-pixelifySans font-semibold text-2xl md:text-3xl text-purpleL dark:text-purpleD"
              data-aos="fade-right"
              data-aos-delay={400}
            >
              Tech I Used for this Project:
            </h2>
            <div
              className="flex gap-4 px-2"
              data-aos="fade-in"
              data-aos-delay={700}
            >
              <div className="w-[5px] bg-dark dark:bg-light opacity-20"></div>
              <img
                src="https://skillicons.dev/icons?i=figma,github,vite,nodejs,react,tailwind,markdown"
                alt="Tech I Used for this Project:"
                className="px-2"
              />
            </div>
          </div>
          <div>
            <h2
              className="font-pixelifySans font-semibold text-2xl md:text-3xl text-purpleL dark:text-purpleD"
              data-aos="fade-right"
              data-aos-delay={500}
            >
              Education:
            </h2>
            <div
              className="flex gap-4 px-2"
              data-aos="fade-in"
              data-aos-delay={800}
            >
              <div className="w-[5px] bg-dark dark:bg-light opacity-20"></div>
              <div>
                <p>Pagadian City Science High School (2017-2024)</p>
                <p>University of San Carlos (2024-Present)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
