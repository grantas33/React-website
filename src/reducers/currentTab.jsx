export default (state=0, action) => {
    switch(action.type) {
        case 'SET_CURRENT_TAB':
            return action.tab;

        default:
            return state;
    }
}