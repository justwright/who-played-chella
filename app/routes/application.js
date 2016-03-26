import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.$.ajax({
            type: 'GET',
            url: 'http://localhost:4500/api/artists'
        })
	}
});
