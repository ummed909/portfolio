import React from "react";
import Title from "../layouts/Title";
import { projectOne, projectTwo, projectThree,Rp } from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Online Transportation System"
          des="RoadLink is a web-application built in react js and redux library.which provide online transportation services."
          src={projectOne}
          gitLink="https://github.com/ummed909/RoadLink-OTS-"
        />
        <ProjectsCard
          title="Distributed file Storage"
          des="Distributed file storage is web-application built in react js and use blockchain to store data.blockchain provide distribution network to store data!"
          src={projectTwo}
          gitLink="https://github.com/ummed909/CP"
        />
        <ProjectsCard
          title="Note taking web-app"
          des="This is my first project which is use to store text data.i use firebase database to retrive and manipulate the data!"
          src={projectThree}
          gitLink="https://github.com/ummed909/Notepen"
        />
        <ProjectsCard
          title="Registration Page"
          des=" This is non-responsive simple design page for signIn and signUp page which is built in react"
          src={Rp}
          gitLink="https://github.com/ummed909/RagistrationPage"
        />
        {/* <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectOne}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={projectTwo}
        /> */}
      </div>
    </section>
  );
};

export default Projects;
