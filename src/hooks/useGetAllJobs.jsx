/*import { useState, useEffect } from "react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";

const useGetAllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllJobs = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${JOB_API_END_POINT}/get`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setJobs(res.data.jobs);
      }
    } catch (error) {
      console.log("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllJobs();
  }, []);

  return { jobs, loading };
};

export default useGetAllJobs;*/

import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { JOB_API_END_POINT } from "@/utils/constant";
import { setAllJobs, setLoading } from "@/redux/jobSlice";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log("Error fetching jobs:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJobs;

