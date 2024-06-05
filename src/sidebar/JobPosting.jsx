import React from 'react'
import InputField from '../components/InputField'

const JobPosting = ({handleChange }) => {
   const now =  new Date(); 
   const twentyFourHoursAgo = new Date(now -24 * 60 * 60 * 1000);
   const sevenFourHoursAge = new Date(now -7 * 24 * 60 * 60 * 1000);
   const thirtyFourHoursAge = new Date(now -30 * 24 * 60 * 60 * 1000);


   const twentyFourHoursAgodate = twentyFourHoursAgo.toISOString().slice(0, 10);
   const sevenFourHoursAgedate = sevenFourHoursAge.toISOString().slice(0, 10);
   const thirtyFourHoursAgedate = thirtyFourHoursAge.toISOString().slice(0, 10);

   console.log(twentyFourHoursAgodate)
   console.log(sevenFourHoursAgedate)
   console.log(thirtyFourHoursAgedate)

   return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
    <div>
    <label className='sidebar-label-container'>
<input type="radio" name="test" id="test" value="" onChange={handleChange} />
<span className="checkmark"></span>All time
</label>


        <InputField handleChange={handleChange} value={twentyFourHoursAgodate} title="Last 24 hours" name="test"/>
        <InputField handleChange={handleChange} value={sevenFourHoursAgedate} title="Last 7 days" name="test"/>
        <InputField handleChange={handleChange} value={thirtyFourHoursAgedate} title="Last Month" name="test"/>
     
    </div>
</div>
  )
}

export default JobPosting