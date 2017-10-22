new Vue({
  el: '#app',
  data: {
    count: 0,
  },
  methods: {
    autoClicker: function autoClicker() {
      let self = this;
      self.count -= 100;
      setInterval(function () {
        self.count += 1;
      }, 1000);
    },
  },
});
