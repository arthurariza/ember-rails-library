import Route from "@ember/routing/route";

export default class Author extends Route {
  model() {
    return [
      { first: "J.K.", last: "Rowling" },
      { first: "Tom", last: "Clancy" },
    ];
  }
}
