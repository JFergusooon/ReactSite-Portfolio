import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

function ProjectGallery({ name, images, shape = "wide" }) {
  const [index, setIndex] = useState(0);
  const [enlarged, setEnlarged] = useState(false);
  const count = images.length;
  const showControls = count > 1;
  const frameClass = shape === "square" ? "aspect-square" : "aspect-[2.1/1]";

  const showPrevious = () => setIndex((current) => (current - 1 + count) % count);
  const showNext = () => setIndex((current) => (current + 1) % count);

  useEffect(() => {
    if (!enlarged) {
      return undefined;
    }

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setEnlarged(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [enlarged]);

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="flex w-full items-center gap-2">
        {showControls && (
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-950 text-white shadow-lg transition hover:bg-orange-600"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <button
          type="button"
          onClick={() => setEnlarged(true)}
          aria-label={`Enlarge ${name} screenshot`}
          className={`min-w-0 flex-1 overflow-hidden rounded-xl bg-white shadow-lg ${frameClass}`}
        >
          <img
            src={images[index]}
            alt={`${name} screenshot ${index + 1} of ${count}`}
            className="h-full w-full object-contain p-1"
          />
        </button>
        {showControls && (
          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-950 text-white shadow-lg transition hover:bg-orange-600"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
      {showControls && (
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label={`${name} screenshots`}>
          {images.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              role="tab"
              aria-label={`Show image ${dotIndex + 1}`}
              aria-selected={dotIndex === index}
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 w-2.5 rounded-full transition ${dotIndex === index ? 'bg-red-950' : 'bg-white/80 hover:bg-white'}`}
            />
          ))}
        </div>
      )}
      {enlarged && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-8 backdrop-blur-md"
          onClick={() => setEnlarged(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${name} screenshot`}
        >
          <button
            type="button"
            onClick={() => setEnlarged(false)}
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
              alt={`${name} screenshot ${index + 1} of ${count}`}
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
}

const ModernProjectList = () => {
  const projects = [
    {
      name: "Tracker",
      img: "images/Tracker/1_HomeScreen.png",
      images: [
        "images/Tracker/1_HomeScreen.png",
        "images/Tracker/2_TrackerScreen.png",
        "images/Tracker/3_SettingScreen.png",
        "images/Tracker/4_TermsOfService.png",
      ],
      url: "https://www.job-tracker.io/home",
      headline: "A productivity app to help you manage your job applications efficiently.",
      description: "Built with a React Frontend, utilizing a complete AWS Backend (DynamoDB, Lambda, API Gateway, S3 Buckets). This site allows you to track and organize job applications, see live statistics about your job search, and customize your UI theme and experience by changing color scheme or dragging and dropping elements to build your view as you desire.\n\nOffline Standalone Legacy Version also available for download from github page below.",
      platform: "Windows & Browser",
      releaseDate: "2026",
      links: [
        { name: "Live", href: "https://www.job-tracker.io/home" },
        { name: "GitHub", href: "https://github.com/JFergusooon/JobTrackerIO" },
      ],
      shape: "wide",
    },
    {
      name: "Battlemon",
      img: "images/Battlemon/1_BattleMain.png",
      images: [
        "images/Battlemon/1_BattleMain.png",
        "images/Battlemon/2_Home.png",
        "images/Battlemon/3_PC.png",
        "images/Battlemon/4_Party.png",
        "images/Battlemon/5_Shop.png",
        "images/Battlemon/6_Bag.png",
        "images/Battlemon/7_Pokedex.png",
        "images/Battlemon/8_Settings.png",
        "images/Battlemon/9_Islands.png",
        "images/Battlemon/10_Title.png",
        "images/Battlemon/11_BattleBag.png",
        "images/Battlemon/12_BattleParty.png",
        "images/Battlemon/13_BattleMoves.png",
      ],
      url: "https://jfergusooon.itch.io/battlemon",
      headline: "A monster-catching RPG game inspired by classic titles.",
      description: "Written in SwiftUI for macOs. Utilizing a small screen resolution, users can start their journey with their favorite starter, battle wild pokemon, grow your party, purchase items from the shop, store items in their bag, and complete their full 151 pokedex.",
      platform: "MacOS",
      releaseDate: "2024",
      shape: "square",
    },
    {
      name: "InstaConnect",
      img: "images/InstantConnect.png",
      url: "/projects",
      headline: "A social media platform to connect with friends instantly.",
      description: "Coded in JavaScript with React for the frontend. The backend consists of several Docker containers. These microservices are using Java with SpringBoot, and both MongoDB and MySQL for data storage. Users can create profiles, post updates, and connect with friends in real-time.",
      platform: "Web",
      releaseDate: "2022",
      link: "jferguson-dev.com/instantconnect",
      hidden: true,
    },
    {
      name: "BookHook",
      img: "images/BookHook.png",
      url: "/projects",
      headline: "An online bookstore with a vast collection of books.",
      description: "An online bookstore with a vast collection of books.",
      platform: "Web / Mobile",
      releaseDate: "2022",
      link: "jferguson-dev.com/bookhook",
      hidden: true,
    }
  ];

  const visibleProjects = projects.filter((project) => !project.hidden);

  return (
    <div className="min-h-screen bg-gray-700 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {visibleProjects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Images */}
              <div className="md:w-[64%] bg-gradient-to-br from-yellow-400 to-orange-500 px-3 py-6 flex items-center justify-center">
                <div className="w-full">
                  <ProjectGallery
                    name={project.name}
                    shape={project.shape}
                    images={project.images?.length ? project.images : [project.img].filter(Boolean)}
                  />
                </div>
              </div>

              {/* Right Side - Project Info */}
              <div className="md:w-[36%] bg-slate-500 p-8 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <div className="bg-gradient-to-r from-red-900 to-red-950 rounded-2xl p-4 mb-4">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      <h2 className="text-3xl font-bold text-center">{project.name}</h2>
                    </a>
                  </div>

                  {/* Headline */}
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-3 mb-4">
                    <p className="text-white text-center font-semibold">{project.headline}</p>
                  </div>

                  {/* Description */}
                  <div className="bg-slate-400 rounded-2xl p-6 mb-4 border-4 border-gray-800">
                    <p className="text-gray-900 text-center leading-relaxed whitespace-pre-line">{project.description}</p>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="bg-gradient-to-r from-red-900 to-red-950 rounded-2xl p-4">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="text-orange-300">
                      <strong className="text-white">Release:</strong> {project.releaseDate}
                    </div>
                    <div className="text-orange-300">
                      <strong className="text-white">Platforms:</strong> {project.platform}
                    </div>
                    {project.links ? (
                      project.links.map((item) => (
                        <div key={item.href} className="text-orange-300">
                          <strong className="text-white">{item.name}:</strong>{' '}
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-200 underline break-all"
                          >
                            {item.href}
                          </a>
                        </div>
                      ))
                    ) : (
                      <div className="text-orange-300">
                        <strong className="text-white">Link:</strong>{' '}
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-300 hover:text-blue-200 underline break-all"
                        >
                          {project.link || project.url}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModernProjectList;