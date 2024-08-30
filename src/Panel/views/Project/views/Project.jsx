import React from "react";
import {  GanttProvider } from "../context/GanttContext";
import { Gantt } from "../Component/Gantt";

import { OpcionesProject } from "../Component/OpcionesProject";
import { MainProject } from "../Component/MainProject";



export const Project = () => {


  return (
    <GanttProvider>
      <section className="w-[100%] h-full bg-white flex flex-col overflow-hidden">
        <OpcionesProject/>
        {/* visual */}
        <MainProject/>
      </section>
      {/* */}
    </GanttProvider>
  );
};
