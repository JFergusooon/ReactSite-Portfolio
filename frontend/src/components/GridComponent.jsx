import React from 'react';
import './Grid.css';

const GridComponent = () => {

  // All project data is in ONE place
  const projects = [
    {
      name: "Battlemon",
      img: "Battlemon.png",
      url: "https://jfergusooon.itch.io/battlemon",
      headline: "A monster-catching RPG game inspired by classic titles.",
      description: "Written in SwiftUI for macOs. \
                    Utilizing a small screen resolution, users can \
                    start their journey with their favorite starter,\
                    battle wild pokemon, grow your party, purchase \
                    items from the shop, store items in their bag, \
                    and complete their full 151 pokedex.",
      operatingSystem: "Windows",
      releaseDate: "2024",
    },
    {
      name: "Tracker",
      img: "Tracker.png",
      url: "#",
      headline: "A productivity app to help you manage your job applications efficiently.",
      description: "Written primarily in Python with Tkinter for the GUI, it lets users add, edit, and track their applications. \
                    Features include company name, position, and status updates. ",
      operatingSystem: "Windows / Mac",
      releaseDate: "Coming soon",
    },
    {
      name: "InstaConnect",
      img: "InstaConnect.png",
      url: "#",
      headline: "A social media platform to connect with friends instantly.",
      description: "A social media platform to connect with friends instantly.",
      operatingSystem: "Web",
      releaseDate: "2025",
    },
    {
      name: "BookHook",
      img: "BookHook.png",
      url: "#",
      headline: "An online bookstore with a vast collection of books.",
      description: "An online bookstore with a vast collection of books.",
      operatingSystem: "Web / Mobile",
      releaseDate: "2024",
    }
  ];

  return (
    <div className="project-list">
  {projects.map((proj) => (
    <div key={proj.name} className="project-row">

      {/* LEFT: Image(s) */}
      <div className="project-left">
        <img
          src={`images/${proj.img}`}
          alt={proj.name}
          className="project-thumb"
        />
      </div>
      <div class='project-middle'></div>
      {/* RIGHT: Text content */}
      <div className="project-right">
        <a href={proj.url} target='_blank' class='link'>
            <h2 className="project-title">{proj.name}</h2>
        </a>
        <p className="project-headline">{proj.headline}</p>
        <p className="project-description">{proj.description}</p>
        <div className="project-meta-row">
          {proj.releaseDate && (
            <span className="project-meta"><strong>Release:</strong> {proj.releaseDate}</span>
          )}
          {proj.operatingSystem && (
            <span className="project-meta"><strong>Platforms:</strong> {proj.operatingSystem}</span>
          )}
          {proj.url && (
            <span className="project-meta"><strong>Link:</strong> <a href={proj.url} target="_blank" rel="noopener noreferrer">{proj.url}</a></span>
          )}  
        </div>
      </div>

    </div>
  ))}
</div>

  );
};

export default GridComponent;
