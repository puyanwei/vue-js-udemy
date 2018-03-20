window.onload = function() {
  new Vue({
    el: "#app",
    data: {
      name: "Puyan",
      age: 21,
      link: "https://i.chzbgr.com/full/9013910528/hAB49129F/"
    },
    methods: {
      randomNumber: function() {
        return Math.round(Math.random(2));
      }
    }
  });
};
