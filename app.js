window.onload = function() {
  new Vue({
    el: "#app",
    data: {
      effects: {
        highlight: false,
        shrink: true
      }
    },
    methods: {
      toggleEffect: function() {
        var vm = this;
        setInterval(function() {
          vm.effects.highlight = !vm.effects.highlight;
          vm.effects.shrink = !vm.effects.shrink;
        }, 1000);
      }
    }
  });
};
