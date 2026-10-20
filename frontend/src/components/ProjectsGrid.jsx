import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const projects = [
  {
    name: "Battlemon",
    img: "/images/Battlemon/1_BattleMain.png",
    images: [
      "/images/Battlemon/1_BattleMain.png",
      "/images/Battlemon/2_Home.png",
      "/images/Battlemon/3_PC.png",
      "/images/Battlemon/4_Party.png",
      "/images/Battlemon/5_Shop.png",
      "/images/Battlemon/6_Bag.png",
      "/images/Battlemon/7_Pokedex.png",
      "/images/Battlemon/8_Settings.png",
      "/images/Battlemon/9_Islands.png",
      "/images/Battlemon/10_Title.png",
      "/images/Battlemon/11_BattleBag.png",
      "/images/Battlemon/12_BattleParty.png",
      "/images/Battlemon/13_BattleMoves.png",
    ],
    url: "https://jfergusooon.itch.io/battlemon",
    headline: "A monster-catching RPG game inspired by classic titles.",
    release: "2024",
    platform: "MacOS",
    linkLabel: "itch.io/battlemon",
  },
  {
    name: "Tracker",
    img: "/images/Tracker/1_HomeScreen.png",
    images: [
      "/images/Tracker/1_HomeScreen.png",
      "/images/Tracker/2_TrackerScreen.png",
      "/images/Tracker/3_SettingScreen.png",
      "/images/Tracker/4_TermsOfService.png",
    ],
    url: "https://www.job-tracker.io/home",
    headline: "A productivity app to help you manage your job applications efficiently.",
    release: "2026",
    platform: "Windows & Browser",
    linkLabel: "job-tracker.io",
  },
];

const ProjectsGrid = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [index, setIndex] = useState(0);
  const images = activeProject?.images ?? [];
  const count = images.length;
  const showControls = count > 1;

  const openProject = (project) => {
    setActiveProject(project);
    setIndex(0);
  };

  const showPrevious = () => setIndex((current) => (current - 1 + count) % count);
  const showNext = () => setIndex((current) => (current + 1) % count);

  useEffect(() => {
    if (!activeProject) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [activeProject]);

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
            <button
              type="button"
              onClick={() => openProject(project)}
              aria-label={`Enlarge ${project.name} screenshots`}
              className="flex h-44 w-full cursor-pointer items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500 p-2"
            >
              <img
                src={project.img}
                alt={project.name}
                className="max-h-full w-full rounded-lg bg-white object-contain p-1"
              />
            </button>
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
      {activeProject && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-8 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.name} screenshots`}
        >
          <button
            type="button"
            onClick={() => setActiveProject(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-red-950 text-white shadow-lg transition hover:bg-orange-600"
          >
            <X size={24} />
          </button>
          {showControls && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-red-950 text-white shadow-lg transition hover:bg-orange-600"
            >
              <ChevronLeft size={26} />
            </button>
          )}
          <div
            onClick={(event) => event.stopPropagation()}
            className="rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 p-2 shadow-2xl"
          >
            <img
              src={images[index]}
              alt={`${activeProject.name} screenshot ${index + 1} of ${count}`}
              className="max-h-[70vh] max-w-[70vw] rounded-xl bg-white object-contain"
            />
          </div>
          {showControls && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-red-950 text-white shadow-lg transition hover:bg-orange-600"
            >
              <ChevronRight size={26} />
            </button>
          )}
        </div>,
        document.body
      )}
    </div>
  );
};

export default ProjectsGrid;
