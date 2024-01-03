"use client";
import { ProjectData } from "@/constants/constants";
import React, { useEffect, useState } from "react";
import CustomCard from "./ui/CustomCard";
import { Pagination } from "@nextui-org/react";

const Projects = () => {
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = ProjectData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    console.log("Page changed to:", newPage);
    setCurrentPage(newPage);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center items-center mb-1">
        <h3 className="uppercase xl:text-[26px] 2xl:text-[32px] font-[400] text-white cursor-scale small">
          Selected Projects
        </h3>
      </div>
      <div className="flex items-center justify-around p-10 gap-2">
        {currentProjects.map((project, i) => (
          <CustomCard
            key={project.title + i}
            title={project.title}
            project_link={project.project_link}
            project_source={project.project_source}
            project_thumbnail={project.project_thumbnail}
            project_imageURL={project.imageURL}
            project_description={project.project_description}
            image_url={project.image_url}
          />
        ))}
      </div>
      <div className="flex justify-center mt-3">
        <Pagination
          total={Math.ceil(ProjectData.length / itemsPerPage)}
          initialPage={1}
          page={currentPage}
          onChange={handlePageChange}
          per={itemsPerPage}
        />
      </div>
    </React.Fragment>
  );
};

export default Projects;
