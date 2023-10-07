import React, { useEffect, useState } from "react";
import NavigationBar from "../components/Navbar/NavigationBar";
import { AxiosInstance } from "../utils/axiosInstances";

function LandingPage() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  async function fetchAllMovies() {
    try {
      const { data } = await AxiosInstance.get("/mba/api/v1/movies");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllMovies();
  }, []);

  return (
    <div>
      <NavigationBar />
    </div>
  );
}

export default LandingPage;
