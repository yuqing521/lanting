import { Effect, Reducer } from 'umi';
import request from '@/utils/request';

export interface StateType {
  miscRecipesMd: string;
  inited: boolean;
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    fetch: Effect;
  };
  reducers: {
    put: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'lantingMiscRecipes',
  state: {
    miscRecipesMd: '',
    inited: false,
  },
  effects: {
    *fetch(_, { call, put, select }) {
      const inited = yield select((state: StateType) => state.inited);
      if (inited) {
        return;
      }
      const response = yield call(() => {
        return request('/public/archives/1000-随园食单.md');
      });
      yield put({
        type: 'put',
        payload: {
          miscRecipesMd: response,
        },
      });
    },
  },
  reducers: {
    put(state, action) {
      return {
        inited: true,
        miscRecipesMd: action.payload.miscRecipesMd,
      };
    },
  },
};

export default Model;
