import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('artists');
    },
    actions: {
        queryArtist(item) {
            this.store.query('artists', {
                equalTo: item
            }).then(result => {
                console.log(result);
            })
        }
    }
});
