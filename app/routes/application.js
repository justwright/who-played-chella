import Ember from 'ember';

export default Ember.Route.extend({
    // model() {
    //     return Ember.$.ajax({
    //         type: 'GET',
    //         url: 'http://localhost:4500/api/artists'
    //     })
	// }
    model() {
        //console.log(this.store.findAll('artists'));
        return this.store.findAll('artists');
    }
});
