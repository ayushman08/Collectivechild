
import ACTION_TYPES from '../../Action/ActionTypes';
const INITIAL_STATE = {
	isScreenLoading:false,
	data : '',
}
 
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

		case ACTION_TYPES._GET_PROFILE:
		return { ...state, data: action.payload,isScreenLoading:false }
		break;

		case ACTION_TYPES.UPDATE_ADDRESS_RESPONSE:
		return { ...state, updatedAddressRes: action.payload,isScreenLoading:false }
		break;
            
		default:
			return state;
	}

};
