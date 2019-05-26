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
    const [workTodos, workStateRef] = workFocus(appState, stateRef);
    const [personalTodos, personalStateRef] = personalFocus(appState, stateRef);

    return (
        <>
            <TodoListEditor
                label="work"
                appState={workTodos}
                stateRef={workStateRef}
            />
            <TodoListEditor
                label="personal"
                appState={personalTodos}
                stateRef={personalStateRef}
            />
        </>
    );
};

export default MultiTodoListEditor;
