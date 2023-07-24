import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Coding Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="CodeChef Highest rating 1427."
            subTitle="I achive 1427  highest rating on codechef (ume_4004)."
            result="Success"
            des="Codechef is coding platform in which we participate in different coding contest which improve problem solving skill. I participate in more than 10 contest on codechef and achive 1427 rating "
          />
          <ResumeCard
            title="Problem Solver - Silver Badge."
            subTitle="I have Problem solver silver badge on codechef."
            result="Success"
            des="Codechef is coding platform in which we participate in different coding contest which improve problem solving skill. I participate in more than 10 contest on codechef and achive problem solver silver badge. "
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Development Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="RoadLink(project-1)."
            subTitle="RoadLink is web-applicationwhich provide online transportation services ."
            result="Success"
            des="RoadLink is a web-application built in react js and redux library.which provide online transportation services."
          />
          <ResumeCard
            title="DISTRIBUTED FILE STORAGE(project-2)."
            subTitle="Distributed file storage using blockchain."
            result="Success"
            des="Distributed file storage is web-application built in react js and use blockchain to store data.blockchain provide distribution network to store data!!"
          />
          <ResumeCard
            title="NOTE TAKING WEB-APP."
            subTitle="Notepen is note taking web application."
            result="Success"
            des="This is my first project which is use to store text data.i use firebase database to retrive and manipulate the data!!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
