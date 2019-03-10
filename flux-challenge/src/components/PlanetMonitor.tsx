import React from 'react';
import { PlanetInfo } from '../dashboardTypes';

interface PlanetMonitorProps {
    currentPlanet: PlanetInfo | null;
}

const PlanetMonitor = ({ currentPlanet }: PlanetMonitorProps) => {
    const msg = currentPlanet
        ? `Obi-Wan currently on ${currentPlanet.name}`
        : '...';
    return <h1 className="css-planet-monitor">{msg}</h1>;
};

export default PlanetMonitor;
