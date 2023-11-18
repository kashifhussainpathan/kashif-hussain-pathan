import React from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import {
  school,
  bookish,
  bloomVerse,
  projectTwo,
  componentLibrary,
} from "../../assets/index";

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
          title="BloomVerse"
          des="A social media for bookworms and quote lovers built using React, Mockbee backend, Context API."
          src={bloomVerse}
          github={"https://github.com/kashifhussainpathan/BloomVerse-react"}
          liveLink={"https://bloomverse-kp.vercel.app/"}
        />
        <ProjectsCard
          title="bookish"
          des="Bookish is an e-commerce app for book lovers built using React, Mockbee backend, Context API."
          src={bookish}
          github={"https://github.com/kashifhussainpathan/BloomVerse-react"}
          liveLink={"https://bookish-kp.vercel.app/"}
        />
        <ProjectsCard
          title="Component library"
          des="A component libaray built using React, Vanilla CSS, which has components like Avatar, Badge, Headings, Card, Image etc."
          src={componentLibrary}
          github={"https://codesandbox.io/s/spark-ui-v4zp8j"}
          liveLink={"https://v4zp8j.csb.app/"}
        />
        <ProjectsCard
          title="School Management"
          des="A full stack project built using React, Redux Toolkit, Mongo DB, Express JS to perform CRUD Features."
          src={school}
          github={"https://github.com/kashifhussainpathan/School-Management"}
          liveLink={"https://school-management-tawny.vercel.app/"}
        />
        <ProjectsCard
          title="Restaurant API"
          des="Restaurant API provides you with a comprehensive set of endpoints to streamline restaurant operations."
          src="https://images.pexels.com/photos/1121482/pexels-photo-1121482.jpeg?auto=compress&cs=tinysrgb&w=600"
          github={"https://github.com/kashifhussainpathan"}
          liveLink={
            "https://documenter.getpostman.com/view/29492954/2s9YC4WZZR"
          }
        />
        <ProjectsCard
          title="User API"
          des=" User API is designed to make user authentication, profile management, and engagement a breeze!"
          src="https://images.pexels.com/photos/614117/pexels-photo-614117.jpeg?auto=compress&cs=tinysrgb&w=600"
          github={"https://github.com/kashifhussainpathan"}
          liveLink={
            "https://documenter.getpostman.com/view/29492954/2s9YJZ4Q61"
          }
        />
      </div>
    </section>
  );
};

export default Projects;
