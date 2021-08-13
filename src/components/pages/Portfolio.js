import React from 'react';
import Project from '../Project';

const data = [
  {
    id: 1,
    name: "Event Organizer",
    image: <img src="./images/event-organizer.jpg" alt="project card screenshot of web app" className="card-img-top center"></img>,
    description: "Explore, save, and buy tickets to nearby events or create your own.",
    deployed: <a href="https://gentle-reaches-60799.herokuapp.com/" className="btn btn-secondary" target="_blank" rel="noreferrer">Deployed App</a>,
    repository: <a href="https://github.com/neilburt/group-project-2" className="btn btn-secondary" target="_blank" rel="noreferrer">Repository</a>
  },
  {
    id: 2,
    name: "COVID-19 Tracker",
    image: <img src="./images/covid-tracker.jpg" alt="project card screenshot of web app" className="card-img-top center"></img>,
    description: "This web app attempted to influence the population through reinforcement to positively affect the COVID-19 vaccination rate and meet the Presidential goal.",
    deployed: <a href="https://jchosay.github.io/group-pj1-covid-goal-track/" className="btn btn-secondary" target="_blank" rel="noreferrer">Deployed App</a>,
    repository: <a href="https://github.com/JChosay/group-pj1-covid-goal-track" className="btn btn-secondary" target="_blank" rel="noreferrer">Repository</a>
  },
  {
    id: 3,
    name: "Employee Tracker",
    image: <img src="./images/employee-tracker.jpg" alt="project screenshot of app" className="card-img-top center"></img>,
    description: "View and manage employee, role, and department information.",
    deployed: <a href="https://drive.google.com/file/d/19K5MZBIZtR-hASK9Iqdd1FWEI6M-0G36/view?usp=sharing" className="btn btn-secondary" target="_blank" rel="noreferrer">Deployed App</a>,
    repository: <a href="https://github.com/neilburt/employee-tracker" className="btn btn-secondary" target="_blank" rel="noreferrer">Repository</a>
  },
  {
    id: 4,
    name: "Tech Blog",
    image: <img src="./images/tech-blog.jpg" alt="project screenshot of web app" className="card-img-top center"></img>,
    description: "Post about and comment on industry topics.",
    deployed: <a href="https://stormy-crag-19904.herokuapp.com/" className="btn btn-secondary" target="_blank" rel="noreferrer">Deployed App</a>,
    repository: <a href="https://github.com/neilburt/tech-blog" className="btn btn-secondary" target="_blank" rel="noreferrer">Repository</a>
  },
  {
    id: 5,
    name: "Workout Tracker",
    image: <img src="./images/workout-tracker.jpg" alt="project screenshot of web app" className="card-img-top center"></img>,
    description: "Save exercises to daily workouts and track your efforts in metrics.",
    deployed: <a href="https://afternoon-spire-63323.herokuapp.com/" className="btn btn-secondary" target="_blank" rel="noreferrer">Deployed App</a>,
    repository: <a href="https://github.com/neilburt/workout-tracker" className="btn btn-secondary" target="_blank" rel="noreferrer">Repository</a>
  },
  {
    id: 6,
    name: "Weather Dashboard",
    image: <img src="./images/weather-dashboard.jpg" alt="project screenshot of web app" className="card-img-top center"></img>,
    description: "Check the current weather and get the 5-day forcast of a searched city.",
    deployed: <a href="https://neilburt.github.io/weather-dashboard/" className="btn btn-secondary" target="_blank" rel="noreferrer">Deployed App</a>,
    repository: <a href="https://github.com/neilburt/weather-dashboard" className="btn btn-secondary" target="_blank" rel="noreferrer">Repository</a>
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

// export default function Portfolio() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col">
//           <Project />
//         </div>
//       </div>
//     </div>
//   )
// }