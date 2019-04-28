import React, { useState, useCallback, useReducer } from 'react';
import ReactDOM from 'react-dom';
import {
    StateRef,
    StateRefProps,
    appContainer,
    StateTransformer,
    update
} from 'oneref';

interface ItemData {
    id: number;
    name: string;
}

type AppState = {
    items: ItemData[];
    editingId: number | null;
};

let itemData: ItemData[] = [
    { id: 1, name: 'Milk Chocolate' },
    { id: 2, name: 'Dark Chocolate' },
    { id: 3, name: 'White Chocolate' },
    { id: 4, name: 'Raw Chocolate' },
    { id: 5, name: 'Chocolate Milk' }
];

let lastColor: string | undefined;

function generateNewColor(): void {
    lastColor =
        'rgba(' +
        Math.random() * 255 +
        ',' +
        Math.random() * 255 +
        ',' +
        Math.random() * 255 +
        ',1)';
}

interface RowProps {
    item: ItemData;
    editing: boolean;
    stateRef: StateRef<AppState>;
}

// actions:
const saveItem = (item: ItemData): StateTransformer<AppState> => state => ({
    ...state,
    items: state.items.map((it: ItemData) => (it.id === item.id ? item : it))
});

const editItem = (id: number): StateTransformer<AppState> => state => ({
    ...state,
    editingId: id
});

let Row = React.memo(({ item, editing, stateRef }: RowProps) => {
    return (
        <div
            style={{
                borderBottom: '1px solid #f0f0f0',
                padding: 10,
                display: 'flex'
            }}
            onClick={() => update(stateRef, editItem(item.id))}
        >
            <div style={{ flex: 1 }}>
                <input
                    defaultValue={item.name}
                    style={editing ? undefined : { width: 0, opacity: 0 }}
                    onBlur={e => {
                        update(
                            stateRef,
                            saveItem({ ...item, name: e.target.value })
                        );
                    }}
                />
                {editing ? null : item.name}
            </div>
            <div
                style={{ backgroundColor: lastColor, width: 25, height: 25 }}
            />
        </div>
    );
});

function App({ appState, stateRef }: StateRefProps<AppState>) {
    generateNewColor();

    return (
        <div>
            {appState.items.map((item: ItemData) => (
                <Row
                    key={item.id}
                    item={item}
                    editing={appState.editingId === item.id}
                    stateRef={stateRef}
                />
            ))}
        </div>
    );
}

const initialState: AppState = {
    items: itemData,
    editingId: null
};

const Top = appContainer<AppState>(initialState, App);
const rootElement = document.getElementById('root');
ReactDOM.render(<Top />, rootElement);
