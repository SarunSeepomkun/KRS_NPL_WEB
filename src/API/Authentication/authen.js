import axios from "axios";

const API_URI = process.env.REACT_APP_API_SOCIAL;

const Login = async (data) => {
  try {
    const result = await axios.post(`${API_URI}/user/signin`, data);
    return result;
  } catch (error) {
    console.log(`authApi.SignIn,${error}`);
  }
};

export { Login };
