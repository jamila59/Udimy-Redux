import * as actionType from './actions';

const initialState = {
    persons : []
};


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionType.ADD_PERSON:
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Max',
            age: Math.floor( Math.random() * 40 )
        }
        return{
            ...state,
            persons: state.persons.concat(newPerson)
            // persons: state.persons.concat({id: Math.random(), age: action.age})
        }

        case actionType.DELETE_PERSON:

        return{
            ...state,
            persons :  state.persons.filter( person => person.id !== action.personId)
        }
    }
    return state;
};


export default reducer;