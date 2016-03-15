import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    associated: DS.attr('string'),
    notes: DS.attr('string'),
    appearances: [
        {
            year: DS.attr('number'),
            day: DS.attr('string'),
            stage: DS.attr('string'),
            notes: DS.attr('string')
        }
    ]
});
