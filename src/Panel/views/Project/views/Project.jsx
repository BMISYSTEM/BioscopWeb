import React from "react";
import {  GanttProvider } from "../context/GanttContext";
import { Gantt } from "../Component/Gantt";

import { OpcionesProject } from "../Component/OpcionesProject";
import { MainProject } from "../Component/MainProject";



export const Project = () => {


  return (
    <GanttProvider>
      <section className="w-full h-full bg-white flex flex-col">
        <OpcionesProject/>
        {/* visual */}
        <MainProject/>
      </section>
      {/* */}
    </GanttProvider>
  );
};
