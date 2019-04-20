import React from 'react';
import { PlanetInfo, SithRow } from '../dashboardTypes';
import DashboardAppState from '../dashboardAppState';
import { StateRef, update } from 'oneref';
import SithRowViewer from './SithRowViewer';
import * as actions from '../actions';
import classNames from 'classnames';

interface SithScrollableListProps {
    appState: DashboardAppState;
    stateRef: StateRef<DashboardAppState>;
}

const SithScrollableList = ({
    appState,
    stateRef
}: SithScrollableListProps) => {
    /*
     * Note: It's tempting to just directly cancel the requests that are out
     * of view in appState. But remember that appState is likely stale
     * by the time these callbacks run.
     */
    const handleScrollUp = (event: React.MouseEvent) => {
        event.preventDefault();
        actions.scroll(-2, stateRef);
    };
    const handleScrollDown = (event: React.MouseEvent) => {
        event.preventDefault();
        actions.scroll(2, stateRef);
    };

    const siths = appState.sithList.take(5);
    const currentPlanet = appState.obiWanLocation;
    const sithRows = siths.map((sr, k) => (
        <SithRowViewer sithRow={sr} currentPlanet={currentPlanet} key={k} />
    ));
    const upDisabled = !appState.canScrollUp();
    const downDisabled = !appState.canScrollDown();
    const upClassName = classNames('css-button-up', {
        'css-button-disabled': upDisabled
    });
    const downClassName = classNames('css-button-down', {
        'css-button-disabled': downDisabled
    });
    return (
        <section className="css-scrollable-list">
            <ul className="css-slots">{sithRows}</ul>
            <div className="css-scroll-buttons">
                <button
                    className={upClassName}
                    disabled={upDisabled}
                    onClick={handleScrollUp}
                />
                <button
                    className={downClassName}
                    disabled={downDisabled}
                    onClick={handleScrollDown}
                />
            </div>
        </section>
    );
};

export default SithScrollableList;
