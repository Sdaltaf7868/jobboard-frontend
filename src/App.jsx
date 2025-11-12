import React, { useEffect, useState } from "react";
import Header from './assets/components/Header';
import Heading from "./assets/components/Heading";      
import Searchbar from "./assets/components/Searchbar";
import Jobcards from "./assets/components/Jobcards";
function App() {
  const [jobs, setJobs] = useState([]);

useEffect(() => {
  const fetchjobs = async () => {
    try {
      const res = await fetch('https://your-backend-url.onrender.com/api/jobs');
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };
  fetchjobs();
}, []);


  // Dummy authentication check (replace with real logic as needed)

  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black w-full min-h-screen overflow-hidden text-white">
      <Header />
      <Heading />
      <Searchbar
        onFilter={({ role, experience, mode }) => {
          const filtered = jobs.filter((job) => {
            const matchRole = role
              ? job.title &&
                job.title.toLowerCase().includes(role.toLowerCase())
              : true;

            const matchExperience = experience
              ? job.experience &&
                job.experience.toLowerCase() === experience.toLowerCase()
              : true;

            const matchMode = mode
              ? job.mode && job.mode.toLowerCase() === mode.toLowerCase()
              : true;

            return matchRole && matchExperience && matchMode;
          });
          setJobs(filtered);
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {jobs.map((items, id) => (
          <Jobcards key={id} {...items} />
        ))}
      </div>
    </div>
  );
}

export default App;



