export const cardReducer = (state:  any, action: any) => {
    switch(action.type) {
        case 'ADD_CARD':  {
            const index = state.cards.findIndex((c: any) => c.id === action.payload.id);
            if(index > -1) {
                 state.cards[index] = {...state.cards[index], ...action.payload};
                return {...state, cards: [...state.cards]} 
            } else {
                return {...state, cards: [...state.cards, {...action.payload}]}
            }
        }
        case 'CURRENT_CARD': 
        return {...state, selectedCard: {...action.payload}}
        case 'UPDATE_CARD': 
        return {...state, selectedCard: {...state.selectedCard, ...action.payload}}
        default: 
        return state;
    }
}