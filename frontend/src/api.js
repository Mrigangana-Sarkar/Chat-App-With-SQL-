import axios from "axios";

export const checkUsername = (username) =>
  axios.post("http://localhost:8020/api/username", { username });

export const getMessages = (cursor) =>
  axios.get(`http://localhost:8020/api/messages?cursor=${cursor}&limit=20`);