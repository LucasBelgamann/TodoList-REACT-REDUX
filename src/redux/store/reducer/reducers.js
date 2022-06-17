const INITIAL_STATE = [];

export default function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                { id: Math.random(), text: action.payload.text, complete: false }
            ];
        case 'TOGGLE_TODO':
            return state.map(
                list =>
                    todos.id === action.payload.id
                    ? { ...list, complete: !list.complete }
                    : list 
            );
        case 'REMOVE_TODO':
                return state.filter(list => list.id === action.payload.id);
        default:
            return state;
    }
}