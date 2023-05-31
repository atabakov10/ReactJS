import React from 'react'

export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'GAME_FETCH':
            return { ...action.payload };
        case 'ADD_COMMENT':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            email: action.userEmail,
                        }
                    }
                ]
            };
        default:
            return state
    }
}

