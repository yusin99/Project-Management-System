"use client"

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";
import Board from "../Boardview";

type Props = {
  params: { id: string };
};

function Project({ params }: Props) {
  const { id } = params;
  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  return <div>
    {/* Modal New Tasks */}
    <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
    {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    
  </div>;
}

export default Project;
