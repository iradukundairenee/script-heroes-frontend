import { CREATE_REQUEST, CREATE_REQUEST_ERROR } from "./types";
import axios from "../../src/utils/axios";

export const CreateTropRequest = (data) => async (dispatch) => {
  try {
    const res = await axios.post("/api/trips/oneway", data);
    dispatch({
      type: CREATE_REQUEST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_REQUEST_ERROR,
      payload: error.response,
    });
  }
};
