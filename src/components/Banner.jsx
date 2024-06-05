
import {FiMapPin, FiSearch} from "react-icons/fi"

const Banner = ({query,handleInputchange}) => {
    
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 p-4 md:py-20 py-14'>
  <h1 className='text-5xl font-bold text-primary mb-3'>Find Your <span className='text-amber-500'>New job</span> Today</h1>
  <p className='text-lg text-black/70 mb-8'>Join the tech and engineering adventure with thousands of job vacancies waiting for you!</p>
    
    <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
            <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300
            focus-within:right-4 focus-within:ring-inset focus-within:ring-red-600 md:w-2/3 w-full'>
                <input type='text' name='title' id='title' placeholder='Job Title, Keywords or Company' className='block flex-1 border-0 bg-transparent
                py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
                onChange={handleInputchange}
                value={query}/>
<FiSearch className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>
            <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300
            focus-within:right-4 focus-within:ring-inset focus-within:ring-red-600 md:w-1/3 w-full'>
                <input type='text' name='title' id='title' placeholder='Location' className='block flex-1 border-0 bg-transparent
                py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
             />
<FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
            </div>
            <button type="submit" className="bg-primary py-2 px-8 text-white md:rounded-s-none rounded">Search</button>
        </div>
    </form>
    </div>
  )
}

export default Banner
