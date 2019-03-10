import React from 'react';
import TodoAppState from '../todoAppState';
import MultiTodoAppState from '../multiTodoAppState';
import * as oneref from 'oneref';
import TodoListEditor from './TodoListEditor';

type MultiTodoListEditorProps = {} & oneref.StateRefProps<MultiTodoAppState>;

const workFocus = oneref.focus<MultiTodoAppState, TodoAppState>(
    as => as.work,
    (as, w) => as.set('work', w)
);
const personalFocus = oneref.focus<MultiTodoAppState, TodoAppState>(
    as => as.personal,
    (as, p) => as.set('personal', p)
);

const MultiTodoListEditor: React.FunctionComponent<
    MultiTodoListEditorProps
> = ({ appState, stateRef }: MultiTodoListEditorProps) => {
    const [workTodos, updateWorkTodos] = workFocus(appState, stateRef);
    const [personalTodos, updatePersonalTodos] = personalFocus(
        appState,
        stateRef
    );

    return (
        <>
            <TodoListEditor
                label="work"
                appState={workTodos}
                stateRef={updateWorkTodos}
            />
            <TodoListEditor
                label="personal"
                appState={personalTodos}
                stateRef={updatePersonalTodos}
            />
        </>
    );
};

export default MultiTodoListEditor;
