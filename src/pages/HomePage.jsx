import Hero from "../component/Hero";
import HomeCard from "../component/HomeCard";
import JobListing from "../component/JobListing";
import ViewAllJob from "../component/ViewAllJob"
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListing />
      <ViewAllJob />
    </>
  );
};

export default HomePage;
