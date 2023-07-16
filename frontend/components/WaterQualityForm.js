import React, { useState } from 'react';
const WaterQualityForm = () => {
  const [color, setColor] = useState('');
  const [odor, setOdor] = useState('');
  const [pH, setPH] = useState('');
  const [taste, setTaste] = useState('');
  const [turbidity, setTurbidity] = useState('');
  const [tds, setTDS] = useState('');
  const [chlorine, setChlorine] = useState('');
  const [totalHardness, setTotalHardness] = useState('');
  const [magnesium, setMagnesium] = useState('');
  const [calcium, setCalcium] = useState('');
  const [chloride, setChloride] = useState('');
  const [nitrate, setNitrate] = useState('');
  const [sulphate, setSulphate] = useState('');
  const [totalColiform, setTotalColiform] = useState('');
  const [escherichiaColi, setEscherichiaColi] = useState('');
  const [isPotable, setIsPotable] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the WHO standards for water quality checking
    const whoStandards = {
      color: { max: 15 },
      odor: { max: 3 },
      pH: { min: 6.5, max: 8.5 },
      taste: { max: 3 },
      turbidity: { max: 5 },
      tds: { max: 1500 },
      chlorine: { max: 5 },
      totalHardness: { max: 500 },
      magnesium: { max: 150 },
      calcium: { max: 200 },
      chloride: { max: 250 },
      nitrate: { max: 50 },
      sulphate: { max: 250 },
      totalColiform: { max: 0 },
      escherichiaColi: { max: 0 },
    };

    // Perform water quality checking using the form values
    const isWaterPotable = Object.keys(whoStandards).every((param) => {
      const value = parseFloat(eval(param));
      if (isNaN(value)) {
        return false; // Invalid input, not potable
      }

      const { min, max } = whoStandards[param];
      if (min !== undefined && value < min) {
        return false; // Below minimum limit, not potable
      }

      if (max !== undefined && value > max) {
        return false; // Above maximum limit, not potable
      }

      return true;
    });

    setIsPotable(isWaterPotable);
  };
  const [village, setVillage] = useState('');
    const [schemeId, setSchemeId] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
  
    const villageOptions = ['Village 1', 'Village 2', 'Village 3', 'Village 4']; // Replace with actual village options
  
    const handleSubmitVillage = (e) => {
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
    <div className='flex flex-col space-y-14 p-4 justify-center items-center '>

<form onSubmit={handleSubmitVillage} className='flex flex-col space-y-1 border rounded p-12 '>
        <label className='block'>
          Village:
          <select
            value={village}
            className='mt-1 p-2 border rounded-md w-full'
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
        <label className='block'>
          Scheme ID:
          <input
            type="text"
            value={schemeId}
            className='mt-1 p-2 border rounded-md w-full'
            onChange={(e) => setSchemeId(e.target.value)}
            required
          />
        </label>
        <br />
        <label className='block'>
          Date:
          <input
            type="date"
            value={date}
            className='mt-1 p-2 border rounded-md w-full'
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <br />
        <label className='block'>
          Time:
          <input
            type="time"
            value={time}
            className='mt-1 p-2 border rounded-md w-full'
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>
        <br />
      </form>
      <h4 className='text-xl font-bold mt-3'>Water Quality Standards</h4>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-2 border rounded p-4'>
      <label className='block'>
        Color:
        <input
          type="number"
          value={color}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </label>
      <br />
      <label className='block'>
        Odor:
        <input
          type="number"
          value={odor}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setOdor(e.target.value)}
          required
        />
      </label>
      <br />
      <label className='block'>
        pH:
        <input
          type="number"
          step="0.1"
          value={pH}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setPH(e.target.value)}
          required
        />
      </label>
      <br />
      <label className='block'>
        Taste:
        <input
          type="number"
          value={taste}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setTaste(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Turbidity:
        <input
          type="number"
          value={turbidity}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setTurbidity(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Total Dissolved Solids:
        <input
          type="number"
          value={tds}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setTDS(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Chlorine:
        <input
          type="number"
          value={chlorine}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setChlorine(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Total Hardness:
        <input
          type="number"
          value={totalHardness}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setTotalHardness(e.target.value)}
          required
        />
      </label>
      <br />
      <label className='block'>
        Magnesium:
        <input
          type="number"
          value={magnesium}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setMagnesium(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Calcium:
        <input
          type="number"
          value={calcium}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setCalcium(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Chloride:
        <input
          type="number"
          value={chloride}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setChloride(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Nitrate:
        <input
          type="number"
          value={nitrate}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setNitrate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Sulphate:
        <input
          type="number"
          value={sulphate}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setSulphate(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Total Coliform:
        <input
          type="number"
          value={totalColiform}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setTotalColiform(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Escherichia Coli:
        <input
          type="number"
          value={escherichiaColi}
          className='mt-1 p-2 border rounded-md w-full'
          onChange={(e) => setEscherichiaColi(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit" className='bg-purple-500 text-white font-bold py-3 px-6 rounded-lg'>Check Water Quality</button>
      {isPotable !== null && (
        <p>{isPotable ? 'The water is potable.' : 'The water is not potable.'}</p>
      )}
    </form>



    </div>

    
  )
}

export default WaterQualityForm;
