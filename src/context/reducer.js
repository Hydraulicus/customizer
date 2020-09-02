import {
  ADD_CANVAS_REF
} from './../constants/actions';

function reducer(state, action) {
  const { type, payload, } = action;
  switch (type) {
    case ADD_CANVAS_REF:
      return { ...state, canvases: [...state.canvases, payload] };

    default:
      return state;
  }
};

export default reducer;
