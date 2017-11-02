import { ADD_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';

const initialState = {
    comments: [],
    users: []
};


export const comments = (state = initialState, action) => {

    switch (action.type) {

        case ADD_COMMENT:
            return [{
                id: action.id,
                text: action.text,
                votesUp: 0,
                votesDown: 0
            }, ...state.comments];
            break;

        case EDIT_COMMENT:
            if (state.comments.find(comment => (comment.id === action.id))) {
                return comment.text = action.text;
            } else {
                return state;
            }
            break;

        case THUMB_UP_COMMENT:
            if (state.comments.find(comment => (comment.id === action.id))) {
                return comment.votesUp += 1;
            } else {
                return state;
            }
            break;

        case THUMB_DOWN_COMMENT:
            if (state.comments.find(comment => (comment.id === action.id))) {
                return comment.votesDown += 1;
            } else {
                return state;
            }
            break;

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);
            break;

        default:
            return state;
    }
    
}