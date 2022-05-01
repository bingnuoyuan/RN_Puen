import { Effect, Model } from "dva-core-ts";
import { Reducer } from "redux";

export interface HomeState {
    num: number,
}

interface HomeModel extends Model{
    namespace: 'home';
    state: HomeState;
    reducers: {
        add: Reducer<HomeState>,
    };
    effects: { //处理异步
        asyncAdd: Effect
    };
}
const initialState = {
    num: 1,
}
function delay(timeout: number){
    return new Promise(resolve => {
        setTimeout(resolve,timeout)
    })
}
const homeModel:HomeModel = {
    namespace: 'home',
    state: initialState,
    reducers: {
        add(state=initialState, {payload, type}){
            return {
                ...state,
                num: state?.num + payload.num
            }
        }
    },
    effects: {
        *asyncAdd({payload},{call,put}){
            yield call(delay, 3000)
            yield put({
                type: 'add',
                payload
            })
        }
    }
}

export default homeModel;