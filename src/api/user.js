import { http } from "../utils";

const getUser = (id) => {
  return http.get(`/auth/user/${id}`);
};


export default {getUser}