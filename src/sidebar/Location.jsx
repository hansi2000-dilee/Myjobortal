import React from 'react'
import InputField from '../components/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Locaion</h4>
        <div>
        <label className='sidebar-label-container'>
  <input type="radio" name="test" id="test" value="" onChange={handleChange} />
  <span className="checkmark"></span>All
</label>


            <InputField handleChange={handleChange} value="colombo" title="Colombo" name="test"/>
            <InputField handleChange={handleChange} value="nugegoda" title="Nugegoda" name="test"/>
            <InputField handleChange={handleChange} value="maharagama" title="Maharagama" name="test"/>
            <InputField handleChange={handleChange} value="piliyandala" title="Piliyandala" name="test"/>
        </div>
    </div>
  )
}

export default Location