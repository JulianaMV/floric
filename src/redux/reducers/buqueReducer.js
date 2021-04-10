import ACTIONS from '../actions/types'

const inicialState=[];

const buque = (state = inicialState, action) => {
    const {type, payload} = action
    switch (type) {
        case ACTIONS.buques.LOAD:
            return [...payload]
        case ACTIONS.buques.ADD:
            return [...state,{ 
                ...payload,
                isOffline:true
            }]
        default:
            break;
    }
    return state;
}

export default buque

