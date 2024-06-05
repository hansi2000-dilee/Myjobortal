import React, { useEffect, useState } from 'react';
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "../Pages/Jobs";
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;


  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const[query, setQuery] = useState("");
  const handleInputchange = (e) => {
      setQuery(e.target.value);
      // console.log(e.target.value);
  }

  //filter jobs by title

  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  //console.log(filteredItems);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = (currentPage + 1) * itemPerPage;
    return {startIndex, endIndex};
  }

  //function for the next page
  const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

   //function for the previous page
   const previousPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    if (query) {
      filteredJobs = filteredJobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ 
          jobLocation, 
          maxPrice, 
          salaryType,
           employmentType,
           postingDate ,
           experienceLevel,
          }) => 
    
      jobLocation.toLowerCase() === selected.toLowerCase() ||
      parseInt(maxPrice) <= parseInt(selected) ||
      postingDate >= selected  ||
      salaryType.toLowerCase() === selected.toLowerCase() ||
      experienceLevel.toLowerCase() === selected.toLowerCase() ||
      employmentType.toLowerCase() === selected.toLowerCase()
     
    );
    console.log(filteredJobs);
    }

    //slice the data based on current page
    const {startIndex,endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <Banner query={query} handleInputchange={handleInputchange} />


      <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

         {/*Job left side */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/*Job card */}
        <div className='col-span-2 bg-white rounded'>  
        {
          isLoading ? (<p className='font-medium'>Loading.....</p>) :   result.length > 0 ? (<Jobs result={result} />) : <>
          <h3 className='text-lg font-bold mb-2 mt-2 ms-3'>{result.length} Jobs</h3>
          <p className='text-lg  mb-2  ms-3'>No data found !</p>
          </>
        }

        {/* //pagination  */}
        {
          result.length > 0 ? (
            <div className='flex justify-center mt-4 space-x-8'>
              <button onClick={previousPage} disabled={currentPage === 1 } className='hover:underline'>Previous</button>
              <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemPerPage)}</span>
              <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemPerPage )} className='hover:underline'>Next</button>

            </div>
          ) : ""
        }
      
        </div>

         {/*right side */}
        <div className='bg-white p-4 rounded'><Newsletter /></div>
      
      </div>
    </div>
  );
};

export default Home;
