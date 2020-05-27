import axios from "axios";
const baseURL = "https://ac-nc-news.herokuapp.com/api";

export const fetchTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const fetchArticles = (topic) => {
  return axios
    .get(`${baseURL}/articles`, { params: { topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComment = (article_id, newComment) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, newComment)
    .then(({ data: { comment } }) => {
      console.log(comment);
      return comment;
    });
};