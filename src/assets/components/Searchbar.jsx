import React, { useState } from "react";

function Searchbar({ onFilter }) {
  const [job,setJob] = useState({
    role: "",
    experience: "",
    mode: ""
  });

  const handleSearch = (e) => {
    setJob((prev)=>{
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    onFilter(job);
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center items-center mt-10 px-4 sm:px-6">
      <select name="role"
        className="w-full sm:w-auto text-black py-2 px-4 bg-zinc-200 font-semibold rounded-md"
        value={job.role}
        onChange={handleSearch}
      >
        <option value="" disabled hidden>
          Job role
        </option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="SQL Developer">SQL Developer</option>
      </select>

      <select name="experience"
        className="w-full sm:w-auto text-black py-2 px-4 bg-zinc-200 font-semibold rounded-md"
        value={job.experience}
        onChange={handleSearch}
      >
        <option value="" disabled hidden>
          Experience level
        </option>
        <option value="Fresher">Fresher</option>
        <option value="Entry level">Entry level</option>
        <option value="1+ year">1+ year</option>
        <option value="2+ years">2+ years</option>
        <option value="Advance level">Advance level</option>
      </select>

      <select name="mode"
        className="w-full sm:w-auto text-black py-2 px-4 bg-zinc-200 font-semibold rounded-md"
        value={job.mode}
        onChange={handleSearch}
      >
        <option value="" disabled hidden>
          Work Type
        </option>
        <option value="Remote">Remote</option>
        <option value="Work From Home">Work From Home</option>
        <option value="Hybrid">Hybrid</option>
        <option value="In-office">In-office</option>
      </select>

      <button
        className="w-full sm:w-auto px-6 py-2 font-bold rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
        onClick={handlesubmit}
      >
        Search
      </button>
    </div>
  );
}

export default Searchbar;
