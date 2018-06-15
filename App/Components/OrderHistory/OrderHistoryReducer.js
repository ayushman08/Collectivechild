import ACTION_TYPES from '../../Action/ActionTypes';
const INITIAL_STATE = {

	orderListRes:'',
	// selectedstyleListRes:''
	

}

export default (state = INITIAL_STATE, action) => {

	switch (action.type) {
		case ACTION_TYPES.RESET_DATA:
			return INITIAL_STATE;

        case ACTION_TYPES.ORDER_HISTORY:
			return { ...state, orderListRes: action.payload}
			
	//    case ACTION_TYPES.SELECTED_STYLE_LIST_RES:
	// 		return { ...state, selectedstyleListRes: action.payload}

		case ACTION_TYPES.CLEAR_RESPONSE:
			return { ...state, orderListRes: ''}


        default:
			return state;
	} 

};
