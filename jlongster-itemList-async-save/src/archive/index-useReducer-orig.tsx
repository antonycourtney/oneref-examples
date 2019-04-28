import React, { useState, useCallback, useReducer } from 'react';
import ReactDOM from 'react-dom';

interface ItemData {
    id: number;
    name: string;
}

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
    onEdit: (id: number) => void;
    onSave: (item: ItemData) => void;
}

let Row = React.memo(({ item, editing, onEdit, onSave }: RowProps) => {
    return (
        <div
            style={{
                borderBottom: '1px solid #f0f0f0',
                padding: 10,
                display: 'flex'
            }}
            onClick={() => onEdit(item.id)}
        >
            <div style={{ flex: 1 }}>
                <input
                    defaultValue={item.name}
                    style={editing ? undefined : { width: 0, opacity: 0 }}
                    onBlur={e => {
                        onSave({ ...item, name: e.target.value });
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

function App() {
    function reducer(state: any, action: any) {
        switch (action.type) {
            case 'save-item': {
                let { item } = action;
                return {
                    ...state,
                    items: state.items.map((it: ItemData) =>
                        it.id === item.id ? item : it
                    )
                };
            }
            case 'edit-item': {
                return { ...state, editingId: action.id };
            }
        }
    }

    let [state, dispatch] = useReducer(reducer, {
        items: itemData,
        editingId: null
    });

    generateNewColor();

    let onEdit = useCallback(id => {
        dispatch({ type: 'edit-item', id });
    }, []);

    let onSave = useCallback(item => {
        dispatch({ type: 'save-item', item });
    }, []);

    return (
        <div>
            {state.items.map((item: ItemData) => (
                <Row
                    key={item.id}
                    item={item}
                    editing={state.editingId === item.id}
                    onEdit={onEdit}
                    onSave={onSave}
                />
            ))}
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
