import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  content: DS.attr(),
  vendor: DS.belongsTo('vendor', {async: true})
});
