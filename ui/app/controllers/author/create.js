import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class AuthorCreateController extends Controller {
  @action
  async createAuthor(e) {
    e.preventDefault();

    const author = this.store.createRecord("author", this.model);

    await author.save();

    this.transitionToRoute("author");
  }
}
