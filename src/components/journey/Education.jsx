import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col justify-center lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        {/* <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div> */}
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="NeoG Camp"
            subTitle="Full Stack development - (Oct 2022 - Present)"
            des="Joined NeoG Camp to delve into full-stack web development, where I acquired skills in ES6, React, MongoDB, Express.js, and TypeScript."
          />
          <ResumeCard
            title="B.Sc"
            subTitle="Computer Science (2015 - 2018)"
            des="Successfully completed my graduation in Computer Science, gaining a solid foundation in the field."
          />
          <ResumeCard
            title="12th"
            subTitle="MP Board - (2014)"
            des="Completed my 12th grade under the MP Board in 2014."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
