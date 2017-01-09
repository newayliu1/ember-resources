import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleListDetail () {
      return this.toggleProperty('listDetailHidden');
    },
    toggleItemDone (item){
      console.log("you're inside toggleDone in listr-list Component, and item is ", item);
      this.sendAction('toggleItemDone', item);
    }
  },
});
