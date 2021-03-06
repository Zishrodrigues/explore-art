console.log('app js inititated');
AFRAME.registerComponent('move-persona', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    position: {type: 'string'},
    triggeredEvent: {type: 'string'},
    rotation: {type: 'string'}
  },

  init: function () {
    var data = this.data; // given data
    var el = this.el; // current element
    el.addEventListener(data.on, function () {
      data.target.setAttribute('position', data.position);
      data.target.setAttribute('rotation', data.rotation);
      if (data.triggeredEvent) {
        document.dispatchEvent(new Event(data.triggeredEvent));
      }
    });
  }
});

AFRAME.registerComponent('redirect', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    triggeredEvent: {type: 'string'}
  },

  init: function () {
    var data = this.data; // given data
    var el = this.el; // current element
    el.addEventListener(data.on, function () {
      if (data.triggeredEvent) {
        document.dispatchEvent(new Event(data.triggeredEvent));
      }
    });
  }
});