import { CREATE_REQUEST, CREATE_REQUEST_ERROR } from "../actions/types";

const initialState = {
  trpRequestObj: [],
  response: "",
  err: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        trpRequestObj: action.payload,
        response: action.payload.message,
      };

    case CREATE_REQUEST_ERROR:
      return {
        ...state,
        deleteErr: action.payload.data.message,
      };
    default:
      return state;
  }
};
