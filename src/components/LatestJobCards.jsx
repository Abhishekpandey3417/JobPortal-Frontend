import React from "react";
import { Badge } from "./ui/badge";
import job from "./Job";

const LatestJobCards = ({job}) => {
  return (
    <div className="p-4 rounded-md shadow-lg bg-white border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer max-w-sm w-full">
     
      <div className="flex flex-col space-y-3">
        
       
        <div>
          <h1 className="text-base font-semibold text-gray-800">{job?.company?.name}</h1>
          <p className="text-xs text-gray-500">India</p>
        </div>

     
        <div>
          <h2 className="text-sm font-medium text-gray-700">{job?.title}</h2>
          <p className="text-xs text-gray-600">{job?.description}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Badge className="text-blue-700 font-bold text-xs px-2 py-1" variant="ghost">
            {job?.position}Positions
          </Badge>
          <Badge className="text-[#F83002] font-bold text-xs px-2 py-1" variant="ghost">
           {job?.jobType}Part Time
          </Badge>
          <Badge className="text-[#7209b7] font-bold text-xs px-2 py-1" variant="ghost">
            {job?.salary}LPA
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default LatestJobCards;






