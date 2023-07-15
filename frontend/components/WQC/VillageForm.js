import React, { useState } from 'react';
const VillageForm = () => {
    const [village, setVillage] = useState('');
    const [schemeId, setSchemeId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    const villageOptions = ['Village 1', 'Village 2', 'Village 3', 'Village 4']; // Replace with actual village options
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform water quality checking or handle the form data as needed
      console.log('Village:', village);
      console.log('Scheme ID:', schemeId);
      console.log('Date:', date);
      console.log('Time:', time);
  
      // Reset the form
      setVillage('');
      setSchemeId('');
      setDate('');
      setTime('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Village:
          <select
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            required
          >
            <option value="">Select Village</option>
            {villageOptions.map((villageOption) => (
              <option key={villageOption} value={villageOption}>
                {villageOption}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Scheme ID:
          <input
            type="text"
            value={schemeId}
            onChange={(e) => setSchemeId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <br />
      </form>
    );
  };
  
  export default VillageForm;