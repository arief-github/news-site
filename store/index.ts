import { Store, createStore, combineReducers } from "redux";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import { comments, CommentState } from "./comments";
import { post, PostState } from "./post";

export type State = {
    post: PostState
    comments: CommentState
}
const combineReducer = combineReducers({ post, comments });

const makeStore :MakeStore<Store<State>> = () => createStore(combineReducer)

// @ts-ignore
export const store = createWrapper<Store<State>>(makeStore, {
    debug: true
});