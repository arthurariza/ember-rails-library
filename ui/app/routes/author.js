import Route from "@ember/routing/route";

export default class Author extends Route {
  async model() {
    return this.store.findAll("author");
  }
}
