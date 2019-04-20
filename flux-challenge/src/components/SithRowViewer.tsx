import React from 'react';
import { PlanetInfo, SithRow } from '../dashboardTypes';

interface SithRowViewerProps {
    currentPlanet: PlanetInfo | null;
    sithRow: SithRow | null;
}

const SithRowViewer = ({ currentPlanet, sithRow }: SithRowViewerProps) => {
    const sith = sithRow ? sithRow.info : null;
    const sithName = sith ? sith.name : sithRow ? '...' : null;
    const sithHome =
        sith && sith.homeworld ? `Homeworld: ${sith.homeworld.name}` : '';
    const style =
        sith &&
        sith.homeworld &&
        currentPlanet &&
        sith.homeworld.id === currentPlanet.id
            ? { color: 'red' }
            : {};
    return (
        <li className="css-slot" style={style}>
            <h3>{sithName}</h3>
            <h6>{sithHome}</h6>
        </li>
    );
};

export default SithRowViewer;
