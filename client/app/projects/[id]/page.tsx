"use client"

import React, { useState } from "react";
import ProjectHeader from "../ProjectHeader";

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
    
  </div>;
}

export default Project;
