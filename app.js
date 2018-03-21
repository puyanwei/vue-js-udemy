window.onload = function() {
  new Vue({
    el: "#app",
    data: {
      width: 100,
      color: "gray"
    },
    computed: {
      myStyle: function() {
        return {
          backgroundColor: this.color,
          width: this.width + "px"
        };
      }
    }
  });
};
