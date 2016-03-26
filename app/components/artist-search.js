import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        chooseArtist(selected) {
            this.set('selectedArtist', selected);
        }
    }
});
