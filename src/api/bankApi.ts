import axios from "axios";
import { baseUrl } from "./baseUrl";

const BankApi = {
  bankLoadAll() {
    return axios.get(`${baseUrl}/partner-code/load-all`);
  },
  attribute() {
    return axios.get(`${baseUrl}/attribute/load-all`);
  },
  instance() {
    return axios.get(`${baseUrl}/instance/load-all`);
  },
  partner() {
    return axios.get(`${baseUrl}/partner-code/load-all`);
  },
  template() {
    return axios.get(`${baseUrl}/template/load-all`);
  },
  whiteList() {
    return axios.get(`${baseUrl}/white-list/load-all`);
  },
};

export default BankApi;
