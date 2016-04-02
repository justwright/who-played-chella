import DS from 'ember-data';

export default DS.Model.extend({
    year: DS.attr('number'),
    day: DS.attr('string'),
    stage: DS.attr('string'),
    note: DS.attr('string')
});
