import { axios } from "@/config";

const Index = {
  index: (lang) =>
    axios
      .get("/posts", {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res),
  show: (id, lang) =>
    axios
      .get(`/posts/${id}`, {
        headers: {
          "Accept-Language": lang,
        },
      })
      .then((res) => res),
};

export default Index;
