import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

function App() {
  const [miles, setMiles] = useState<string>('');
  const [gallons, setGallons] = useState<string>('');
  const [mileage, setMileage] = useState<number | null>(null);

  const calculateMileage = () => {
    const milesNum = parseFloat(miles);
    const gallonsNum = parseFloat(gallons);
    
    if (milesNum > 0 && gallonsNum > 0) {
      const result = milesNum / gallonsNum;
      setMileage(parseFloat(result.toFixed(2)));
    } else {
      setMileage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex items-center justify-center mb-6">
          <Calculator className="text-blue-500 mr-2" size={32} />
          <h1 className="text-2xl font-bold text-gray-800">Gas Mileage Calculator</h1>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="miles" className="block text-sm font-medium text-gray-700">Miles Driven</label>
            <input
              type="number"
              id="miles"
              value={miles}
              onChange={(e) => setMiles(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter miles driven"
            />
          </div>
          <div>
            <label htmlFor="gallons" className="block text-sm font-medium text-gray-700">Gallons Used</label>
            <input
              type="number"
              id="gallons"
              value={gallons}
              onChange={(e) => setGallons(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              placeholder="Enter gallons used"
            />
          </div>
          <button
            onClick={calculateMileage}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Calculate
          </button>
          {mileage !== null && (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-gray-800">Your gas mileage:</p>
              <p className="text-3xl font-bold text-green-600">{mileage} mpg</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
