import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const isResume = user?.profile?.resume ? true : false;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  user?.profile?.profilePhoto ||
                  "https://images.unsplash.com/photo-1527672809634-04ed36500acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVCJTkzJTlDJUVCJTlFJTk4JUVBJUIzJUE0JUVCJUIzJUJDfGVufDB8fDB8fHww&w=1000&q=80"
                }
              />
              <AvatarFallback>
                {user?.fullname ? user.fullname[0] : "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p className="text-sm text-gray-600">
                {user?.profile?.bio || "No bio available"}
              </p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right"
            variant="outline"
          >
            <Pen className="h-4 w-4" />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail className="h-4 w-4 text-gray-600" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact className="h-4 w-4 text-gray-600" />
            <span>{user?.phoneNumber || "NA"}</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="font-semibold mb-2">Skills</h1>
          <div className="flex items-center gap-2 flex-wrap">
            {user?.profile?.skills && user.profile.skills.length > 0 ? (
              user.profile.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
          <Label className="text-md font-bold">Resume</Label>
          {user?.profile?.resume ? (
            <Button
              variant="link"
              className="text-blue-500 p-0 h-auto font-normal"
              onClick={() => {
                const resumeUrl = user.profile.resume.includes("/upload/")
                  ? user.profile.resume.replace(
                      "/upload/",
                      "/upload/fl_attachment:false/"
                    )
                  : user.profile.resume;

                const viewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(
                  resumeUrl
                )}&embedded=true`;

                window.open(viewerUrl, "_blank", "noopener,noreferrer");
              }}
            >
              {user.profile.resumeOriginalName || "View Resume"}
            </Button>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6">
        <h1 className="font-bold text-lg mb-5">Applied Jobs</h1>
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
