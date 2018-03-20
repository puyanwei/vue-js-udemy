window.onload = function() {
  new Vue({
    el: "#app",
    data: {
      value: ""
    },
    methods: {
      alertMe: function() {
        alert("Alert!");
      },
      addValue: function() {
        this.value = event.target.value;
      }
    }
  });
};
