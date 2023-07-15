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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Color:
        <input
          type="number"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Odor:
        <input
          type="number"
          value={odor}
          onChange={(e) => setOdor(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        pH:
        <input
          type="number"
          step="0.1"
          value={pH}
          onChange={(e) => setPH(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Taste:
        <input
          type="number"
          value={taste}
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
          onChange={(e) => setTotalHardness(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Magnesium:
        <input
          type="number"
          value={magnesium}
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
          onChange={(e) => setEscherichiaColi(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Check Water Quality</button>
      {isPotable !== null && (
        <p>{isPotable ? 'The water is potable.' : 'The water is not potable.'}</p>
      )}
    </form>
  )
}

export default WaterQualityForm;
