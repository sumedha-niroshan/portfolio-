import React from "react";
import Image from "next/image";

function Skill({ icon, name, progress }) {
  return (
    <div className="flex items-center space-x-4 my-4">
      {/* Icon */}
      <div className="w-14 h-14 rounded-full border-myblue border-4 bg-[#D9D9D9]  flex justify-center items-center">
        <Image src={icon} alt={`${name} Icon`} width={36} height={36} />
      </div>

      {/* Skill Info */}
      <div className="w-4/5">
        <div className="flex justify-between items-center">
          <span className="text-textcolor font-medium">{name}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">
            {progress}%
          </span>
        </div>
        {/* Progress Bar */}
        <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full mt-2">
          <div
            className="bg-myblue h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
