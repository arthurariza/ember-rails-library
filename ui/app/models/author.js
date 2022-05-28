import Model, { attr } from '@ember-data/model';

export default Model.extend({
  first: attr(),
  last: attr()
});
