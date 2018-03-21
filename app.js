window.onload = function() {
  new Vue({
    el: "#app",
    data: {
      value: 0
    },
    computed: {
      result: function() {
        if (this.value === 37) {
          return (this.result = "done");
        } else {
          return "not there yet";
        }
      }
    },
    watch: {
      result: function() {
        var vm = this;
        setTimeout(function() {
          vm.value = 0;
        }, 5000);
      }
    }
  });
};
