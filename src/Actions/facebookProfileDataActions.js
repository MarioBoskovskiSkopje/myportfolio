import axios from "axios";

import { GET_PROFILE_FB } from "../Types/Types";
const TOKEN =
  "EAAgcCGDvfDMBAEGO7wqJIJNlc4jiYwwsnzAMd96RUg58tNuz09hRvpC2gDo1KsLqZB8EFjlkU8P5CsKxI6W9lirK8vIaOdmGBD4YIYJLuRiXJIHJAZAkzqZAsWGQqHBmcMZAIZBoOLL1uwmjinqtac7o4LpGA7DEZD";
const URL = "https://graph.facebook.com/10154016950894559/picture";

export const getProfileData = () => dispatch => {
  axios
    .get(`${URL}?access_token=${TOKEN}`)
    .then(res => {
      dispatch({ type: GET_PROFILE_FB, payload: res.config.url });
    })
    .catch(err => {
      console.log(err);
    });
};
