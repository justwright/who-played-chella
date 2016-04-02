import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    associated: DS.attr('string'),
    notes: DS.attr('string'),
    appearances: DS.hasMany('appearance', { async: true })
});
