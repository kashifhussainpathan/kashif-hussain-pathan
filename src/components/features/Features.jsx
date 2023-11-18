import React from "react";

import Card from "./Card";
import Title from "../layouts/Title";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import {
  FaGithub,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Skills" des="What I Know" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-10 place-items-center">
        <Card title="HTML" icon={<FaHtml5 />} />
        <Card title="CSS" icon={<FaCss3Alt />} />
        <Card title="Javascript" icon={<IoLogoJavascript />} />
        <Card title="React" icon={<FaReact />} />
        <Card title="Github" icon={<FaGithub />} />
        <Card title="Mongo DB" icon={<SiMongodb />} />
        <Card title="Node Js" icon={<FaNodeJs />} />
        <Card title="TypeScript" icon={<SiTypescript />} />
      </div>
    </section>
  );
};

export default Features;
