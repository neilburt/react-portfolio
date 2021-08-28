import React from 'react';
import Project from '../Project';
import eventOrganizer from '../../images/event-organizer.jpg';
import covidTracker from '../../images/covid-tracker.jpg';
import employeeTracker from '../../images/employee-tracker.jpg';
import techBlog from '../../images/tech-blog.jpg';
import workoutTracker from '../../images/workout-tracker.jpg';
import weatherDashboard from '../../images/weather-dashboard.jpg';
import diabloSource from '../../images/diablo-source.jpg';

const data = [
  {
    id: 1,
    name: "Diablo Source",
    image:
      <img
        src={diabloSource}
        alt="project card screenshot of web app"
        className="card-img-top center">
      </img>,
    description: 
      "Search for fellow Diablo III players, view their characters and save their BattleTags.",
    deployed: 
      <a
        href="https://desolate-chamber-11891.herokuapp.com/" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Deployed App
      </a>,
      repository: 
      <a 
        href="https://github.com/JacobBeckfeld/Project-3" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Repository
      </a>
  },
  {
    id: 2,
    name: "Event Organizer",
    image: 
      <img 
        src={eventOrganizer}
        alt="project card screenshot of web app" 
        className="card-img-top center">
      </img>,
    description: 
      "Explore, save, and buy tickets to nearby events or create your own.",
    deployed: 
      <a 
        href="https://gentle-reaches-60799.herokuapp.com/" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Deployed App
      </a>,
    repository: 
      <a 
        href="https://github.com/neilburt/group-project-2" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Repository
      </a>
  },
  {
    id: 3,
    name: "COVID-19 Tracker",
    image: 
      <img 
        src={covidTracker} 
        alt="project card screenshot of web app" 
        className="card-img-top center">
      </img>,
    description: 
      "This web app attempted to influence the population through reinforcement to positively affect the COVID-19 vaccination rate and meet the Presidential goal.",
    deployed: 
      <a 
        href="https://jchosay.github.io/group-pj1-covid-goal-track/" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Deployed App
      </a>,
    repository: 
      <a 
        href="https://github.com/JChosay/group-pj1-covid-goal-track" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Repository
      </a>
  },
  {
    id: 4,
    name: "Employee Tracker",
    image: 
      <img 
        src={employeeTracker} 
        alt="project screenshot of app" 
        className="card-img-top center">
      </img>,
    description: 
      "View and manage employee, role, and department information.",
    deployed: 
      <a 
        href="https://drive.google.com/file/d/19K5MZBIZtR-hASK9Iqdd1FWEI6M-0G36/view?usp=sharing" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Deployed App
      </a>,
    repository: 
      <a 
        href="https://github.com/neilburt/employee-tracker" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Repository
      </a>
  },
  {
    id: 5,
    name: "Tech Blog",
    image: 
      <img 
        src={techBlog}
        alt="project screenshot of web app" 
        className="card-img-top center">
      </img>,
    description: "Post about and comment on industry topics.",
    deployed: 
      <a 
        href="https://stormy-crag-19904.herokuapp.com/" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Deployed App
      </a>,
    repository: 
      <a 
        href="https://github.com/neilburt/tech-blog" 
        className="btn-sm"  
        target="_blank" 
        rel="noreferrer">
          Repository
      </a>
  },
  {
    id: 6,
    name: "Workout Tracker",
    image: 
      <img 
        src={workoutTracker} 
        alt="project screenshot of web app" 
        className="card-img-top center">
      </img>,
    description: 
      "Save exercises to daily workouts and track your efforts in metrics.",
    deployed: 
      <a 
        href="https://afternoon-spire-63323.herokuapp.com/" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Deployed App
      </a>,
    repository: 
      <a 
        href="https://github.com/neilburt/workout-tracker" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Repository
      </a>
  },
  {
    id: 7,
    name: "Weather Dashboard",
    image: 
      <img 
        src={weatherDashboard} 
        alt="project screenshot of web app" 
        className="card-img-top center">
      </img>,
    description: 
      "Check the current weather and get the 5-day forcast of a searched city.",
    deployed: 
      <a 
        href="https://neilburt.github.io/weather-dashboard/" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Deployed App
      </a>,
    repository: 
      <a 
        href="https://github.com/neilburt/weather-dashboard" 
        className="btn-sm" 
        target="_blank" 
        rel="noreferrer">
          Repository
      </a>
  }
]

export default function Portfolio() {
  return (
    <div className="projects">
      {data.map((projects) => (
        <Project 
          key={projects.id} 
          name={projects.name} 
          image={projects.image} 
          description={projects.description} 
          deployed={projects.deployed} 
          repository={projects.repository} 
        />
      ))}
    </div>
  )
}