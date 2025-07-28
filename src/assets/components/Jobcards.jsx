import React from "react";
import dayjs from 'dayjs'

function Jobcards({ title, company, type, experience, mode, skills, postedDate, link }) {
  const date1 = dayjs(Date.now());
  const date2 = date1.diff(postedDate,'day')
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-40 mt-10 mb-4 text-black">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-zinc-300 px-4 sm:px-6 py-4 rounded-md border border-black shadow-xl hover:border-blue-100 gap-4">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl font-semibold">{title} - {company}</h1>
          <p className="text-lg">{type} · {experience} · {mode}</p>
        <div className="flex gap-3 items-center">
          {skills.map((items,id) => (
            <p className="px-2 py1 rounded-md border border-black" key={id}>{items}</p>
          ))}
        </div>
        </div>
        <div>
          <p>{date2} day{date2 !== 1 ? "s" : ""} ago</p>
        </div>
         <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="px-6 py-4 bg-blue-600 rounded-full text-white">
          Apply
        </button>

         </a>
      </div>
    </div>
  );
}

export default Jobcards;
