import axios from "axios";
import env from "react-dotenv";

export const create = async (data, token) => {
  console.log(data);
  return await axios({
    method: "post",
    url: `${env.API_URL}/comment/create`,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return res.data.comment;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const get_all_comments = async () => {
  return await axios({
    method: "get",
    url: `${env.API_URL}/comment/get-all`,
  })
    .then((res) => {
      return res.data.comments;
    })
    .catch((e) => {
      console.log(e);
    });
};

export const delete_comment = async (commentId) => {
  return await axios({
    method: "delete",
    url: `${env.API_URL}/comment/${commentId}`,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
};

export const update_comment = async (data, postId) => {
  return await axios({
    method: "put",
    url: `${env.API_URL}/comment/${postId}`,
    data: data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      return res.data.post;
    })
    .catch((e) => {
      console.log(e);
    });
};
