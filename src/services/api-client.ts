import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "47aad382c27941fb98199f74fac8116e",
  },
});
