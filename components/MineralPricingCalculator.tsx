'use client';

import { useState, useEffect } from 'react';
import { mineralPrices, indianPorts, miningLocations, calculateDistance, calculateLogisticsCost } from '@/data/commodityPrices';

export default function MineralPricingCalculator() {
  const [selectedMineral, setSelectedMineral] = useState(mineralPrices[0].name);
  const [quantity, setQuantity] = useState<number>(100);
  const [selectedMine, setSelectedMine] = useState('');
  const [selectedPort, setSelectedPort] = useState(indianPorts[0].name);
  const [transportMode, setTransportMode] = useState<'truck' | 'rail'>('truck');
  const [calculations, setCalculations] = useState<any>(null);

  // Get available mines for selected mineral
  const getAvailableMines = () => {
    const mineralName = selectedMineral.toLowerCase();
    if (mineralName.includes('iron')) return miningLocations.ironOre;
    if (mineralName.includes('bauxite')) return miningLocations.bauxite;
    if (mineralName.includes('coal')) return miningLocations.coal;
    if (mineralName.includes('limestone')) return miningLocations.limestone;
    if (mineralName.includes('manganese')) return miningLocations.manganese;
    return miningLocations.ironOre; // default
  };

  useEffect(() => {
    const mines = getAvailableMines();
    if (mines.length > 0) {
      setSelectedMine(mines[0].name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMineral]);

  const calculatePrice = () => {
    const mineral = mineralPrices.find(m => m.name === selectedMineral);
    if (!mineral || !selectedMine) return;

    const mines = getAvailableMines();
    const mine = mines.find(m => m.name === selectedMine);
    const port = indianPorts.find(p => p.name === selectedPort);

    if (!mine || !port) return;

    // Calculate distance
    const distance = calculateDistance(mine.lat, mine.lng, port.lat, port.lng);

    // Calculate logistics
    const logistics = calculateLogisticsCost(distance, quantity, transportMode);

    // Calculate total FOB price
    const basePriceTotal = mineral.price * quantity;
    const fobPrice = basePriceTotal + logistics.totalLogisticsCost;

    setCalculations({
      mineralName: mineral.name,
      basePrice: mineral.price,
      quantity: quantity,
      basePriceTotal: basePriceTotal,
      distance: distance,
      transportCost: logistics.transportCost,
      loadingUnloadingCost: logistics.loadingUnloadingCost,
      tollCharges: logistics.tollCharges,
      totalLogisticsCost: logistics.totalLogisticsCost,
      logisticsCostPerMT: logistics.costPerMT,
      fobPrice: fobPrice,
      fobPricePerMT: fobPrice / quantity,
      mineName: mine.name,
      portName: port.name,
      transportMode: transportMode
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold text-primary-dark mb-6">Bulk Pricing Calculator</h3>
      <p className="text-primary-medium mb-6">
        Calculate FOB prices with logistics costs from mine to port. Prices updated daily based on market rates.
      </p>

      <div className="space-y-6">
        {/* Mineral Selection */}
        <div>
          <label className="block text-sm font-medium text-primary-dark mb-2">
            Select Mineral
          </label>
          <select
            value={selectedMineral}
            onChange={(e) => setSelectedMineral(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-primary-light focus:ring-2 focus:ring-primary-accent focus:border-transparent outline-none"
          >
            {mineralPrices.map((mineral) => (
              <option key={mineral.name} value={mineral.name}>
                {mineral.name} - ${mineral.price} {mineral.unit}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium text-primary-dark mb-2">
            Quantity (Metric Tons)
          </label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            className="w-full px-4 py-3 rounded-lg border border-primary-light focus:ring-2 focus:ring-primary-accent focus:border-transparent outline-none"
          />
        </div>

        {/* Mine Selection */}
        <div>
          <label className="block text-sm font-medium text-primary-dark mb-2">
            Source Mine/Location
          </label>
          <select
            value={selectedMine}
            onChange={(e) => setSelectedMine(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-primary-light focus:ring-2 focus:ring-primary-accent focus:border-transparent outline-none"
          >
            {getAvailableMines().map((mine) => (
              <option key={mine.name} value={mine.name}>
                {mine.name}
              </option>
            ))}
          </select>
        </div>

        {/* Port Selection */}
        <div>
          <label className="block text-sm font-medium text-primary-dark mb-2">
            Destination Port
          </label>
          <select
            value={selectedPort}
            onChange={(e) => setSelectedPort(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-primary-light focus:ring-2 focus:ring-primary-accent focus:border-transparent outline-none"
          >
            {indianPorts.map((port) => (
              <option key={port.name} value={port.name}>
                {port.name}, {port.state}
              </option>
            ))}
          </select>
        </div>

        {/* Transport Mode */}
        <div>
          <label className="block text-sm font-medium text-primary-dark mb-2">
            Transport Mode
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="truck"
                checked={transportMode === 'truck'}
                onChange={(e) => setTransportMode('truck')}
                className="mr-2"
              />
              <span>Truck</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="rail"
                checked={transportMode === 'rail'}
                onChange={(e) => setTransportMode('rail')}
                className="mr-2"
              />
              <span>Rail</span>
            </label>
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculatePrice}
          className="btn-primary w-full"
        >
          Calculate FOB Price
        </button>

        {/* Results */}
        {calculations && (
          <div className="mt-8 bg-primary-lighter rounded-lg p-6">
            <h4 className="text-xl font-bold text-primary-dark mb-4">Price Breakdown</h4>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-primary-light pb-2">
                <span className="font-medium">Mineral:</span>
                <span>{calculations.mineralName}</span>
              </div>

              <div className="flex justify-between border-b border-primary-light pb-2">
                <span className="font-medium">Base Price:</span>
                <span>${calculations.basePrice.toFixed(2)} per MT</span>
              </div>

              <div className="flex justify-between border-b border-primary-light pb-2">
                <span className="font-medium">Quantity:</span>
                <span>{calculations.quantity} MT</span>
              </div>

              <div className="flex justify-between border-b border-primary-light pb-2">
                <span className="font-medium">Base Price Total:</span>
                <span className="text-lg font-semibold">${calculations.basePriceTotal.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>

              <div className="mt-4 pt-4 border-t-2 border-primary-medium">
                <h5 className="font-semibold text-primary-dark mb-3">Logistics Breakdown</h5>

                <div className="flex justify-between pb-2">
                  <span className="text-sm">Route:</span>
                  <span className="text-sm">{calculations.mineName} → {calculations.portName}</span>
                </div>

                <div className="flex justify-between pb-2">
                  <span className="text-sm">Distance:</span>
                  <span className="text-sm">{calculations.distance} km</span>
                </div>

                <div className="flex justify-between pb-2">
                  <span className="text-sm">Transport Mode:</span>
                  <span className="text-sm capitalize">{calculations.transportMode}</span>
                </div>

                <div className="flex justify-between pb-2">
                  <span className="text-sm">Transport Cost:</span>
                  <span className="text-sm">${calculations.transportCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between pb-2">
                  <span className="text-sm">Loading/Unloading:</span>
                  <span className="text-sm">${calculations.loadingUnloadingCost.toFixed(2)}</span>
                </div>

                {calculations.tollCharges > 0 && (
                  <div className="flex justify-between pb-2">
                    <span className="text-sm">Toll Charges:</span>
                    <span className="text-sm">${calculations.tollCharges.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between border-t border-primary-light pt-2 mt-2">
                  <span className="font-medium">Total Logistics Cost:</span>
                  <span className="font-semibold">${calculations.totalLogisticsCost.toFixed(2)}</span>
                </div>

                <div className="flex justify-between pb-2">
                  <span className="text-sm">Logistics per MT:</span>
                  <span className="text-sm">${calculations.logisticsCostPerMT.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t-2 border-primary-dark bg-primary-accent bg-opacity-20 rounded p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-lg font-bold">FOB Price (Total):</span>
                  <span className="text-2xl font-bold text-primary-dark">${calculations.fobPrice.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">FOB Price per MT:</span>
                  <span className="text-lg font-semibold">${calculations.fobPricePerMT.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-primary-medium mt-4">
              * Prices are indicative and subject to market fluctuations. Final prices confirmed upon order.
              <br />
              * Last updated: {mineralPrices.find(m => m.name === calculations.mineralName)?.lastUpdated}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
