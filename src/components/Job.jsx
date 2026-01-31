/*import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { AvatarImage, Avatar } from "./ui/avatar";
import { useNavigate } from "react-router-dom";
import JobDescription from "./JobDescription";
import { JOB_API_END_POINT } from "@/utils/constant";

const Job = ({ job }) => {
  const navigate = useNavigate();
  //const jobId = "dfghjytress"
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p>
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" classname="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <Button classname="p-6" variant="outline" size="icon">
        <div className="flex items-center gap-2 my-2"></div>
        <Avatar>
          <AvatarImage src={job?.company?.logo} />
        </Avatar>
      </Button>
      <div>
        <h1 className="font-medium text-lg my-2">{job?.company?.name}</h1>
        <p>India</p>
        <div>
          <h1 className="font-bold text-lg my-2">{job?.title}</h1>
          <p className="text-sm text-gray-600">{job?.description}</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <Badge className="text-blue-700 font-bold" variant="ghost">
            {job?.position} Positions
          </Badge>

          <Badge className="text-[#F83002] font-bold" variant="ghost">
            {job?.jobType}
          </Badge>

          <Badge className="text-[#7209b7] font-bold" variant="ghost">
            {job?.salary} LPA
          </Badge>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <Button onClick={() => navigate(`/description/${job?._id}`)}>
            Details
          </Button>
          <Button>Save For Later </Button>
        </div>
      </div>
    </div>
  );
};

export default Job;*/

import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    if (!mongodbTime) return "Recently";
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  const daysAgo = daysAgoFunction(job?.createdAt);

  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {typeof daysAgo === "number"
            ? daysAgo === 0
              ? "Today"
              : `${daysAgo} days ago`
            : daysAgo}
        </p>

        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      {/* Company logo */}
      <div className="my-4">
        <Avatar className="h-12 w-12">
          <AvatarImage
            src={job?.company?.logo}
            alt={job?.company?.name || "Company logo"}
          />
        </Avatar>
      </div>

      {/* Company info */}
      <div>
        <h1 className="font-medium text-lg">
          {job?.company?.name || "Company Name"}
        </h1>
        <p className="text-sm text-gray-500">
          {job?.location || "India"}
        </p>
      </div>

      {/* Job info */}
      <div className="mt-3">
        <h1 className="font-bold text-lg">{job?.title || "Job Title"}</h1>
        <p className="text-sm text-gray-600 line-clamp-3">
          {job?.description || "Job description not available."}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position || 0} Positions
        </Badge>

        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType || "Full Time"}
        </Badge>

        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          {job?.salary || 0} LPA
        </Badge>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-5">
        <Button onClick={() => navigate(`/description/${job?._id}`)}>
          Details
        </Button>
        <Button variant="outline">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;

