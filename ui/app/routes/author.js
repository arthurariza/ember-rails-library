import Route from "@ember/routing/route";

export default class Author extends Route {
  model() {
    return fetch("http://127.0.0.1:3000/authors").then((res) => res.json());
  }
}
