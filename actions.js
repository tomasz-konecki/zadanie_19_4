import uuid from uuid;

const ADD_COMMENT = 'CREATE_COMMENT',
    EDIT_COMMENT = 'EDIT_COMMENT',
    REMOVE_COMMENT = 'REMOVE_COMMENT',
    THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
    THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

addComment = text => {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

editComment = (text, id) => {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

removeComment = id => {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

thumbUpComment = (id, likes) => {
    return {
        type: THUMB_UP_COMMENT,
        id,
        likes: ++likes
    }
}

thumbDownComment = (id, dislikes) => {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        dislikes: ++dislikes
    }
}

const boundAddComment = text => dispatch(addComment(text)),
    boundEditComment = (text, id) => dispatch(editComment(text, id)),
    boundRemoveComment = id => dispatch(removeComment(id)),
    boundThumbUpComment = (id, likes) => dispatch(thumbUpComment(id, likes)),
    boundThumbDownComment = (id, likes) => dispatch(thumbDownComment(id, dislikes));
