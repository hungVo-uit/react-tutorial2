import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import HomeCard from "./component/HomeCard";
import JobListing from "./component/JobListing";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero tittle="Test tittle" description="It is just a test" />
      <HomeCard />
      <JobListing />
      

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;
