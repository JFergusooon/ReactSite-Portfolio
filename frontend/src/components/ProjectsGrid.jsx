import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    name: "Battlemon",
    img: "/images/Battlemon/1_BattleMain.png",
    url: "https://jfergusooon.itch.io/battlemon",
    headline: "A monster-catching RPG game inspired by classic titles.",
    release: "2024",
    platform: "MacOS",
    linkLabel: "itch.io/battlemon",
  },
  {
    name: "Tracker",
    img: "/images/Tracker/1_HomeScreen.png",
    url: "https://www.job-tracker.io/home",
    headline: "A productivity app to help you manage your job applications efficiently.",
    release: "2026",
    platform: "Windows & Browser",
    linkLabel: "job-tracker.io",
  },
];

const ProjectsGrid = () => {
  return (
    <div className="overflow-hidden rounded-3xl bg-gray-800 shadow-2xl">
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-4 py-5 text-center">
        <h2 className="text-xl font-bold text-white">Featured Projects</h2>
        <p className="text-sm text-white">Highlighted projects showcasing my skills and expertise in software development.</p>
        <p className="mt-1 text-sm text-white">Check out more information on the <Link to="/projects" className="underline hover:text-orange-100">Projects page</Link>.</p>
      </div>
      <div className="grid gap-4 bg-slate-500 p-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="overflow-hidden rounded-2xl bg-gray-800">
            <div className="flex h-44 items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 p-2">
              <img
                src={project.img}
                alt={project.name}
                className="max-h-full w-full rounded-lg bg-white object-contain p-1"
              />
            </div>
            <div className="space-y-1 p-3 text-center">
              <a href={project.url} target="_blank" rel="noreferrer">
                <h3 className="text-lg font-bold text-white">{project.name}</h3>
              </a>
              <p className="text-xs leading-snug text-orange-100">{project.headline}</p>
              <p className="text-xs text-orange-300">
                <strong className="text-white">Release:</strong> {project.release}
                <span className="mx-1 text-white">·</span>
                <strong className="text-white">Platforms:</strong> {project.platform}
              </p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block break-all text-xs text-blue-300 underline hover:text-blue-200">
                {project.linkLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;
