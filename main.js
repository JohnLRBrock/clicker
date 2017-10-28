new Vue({
  el: '#app',
  data: {
    count: 0,
    dps: 0,
    leftoverRespect: 0,
  },
  methods: {
    autoClicker: function autoClicker() {
      this.dps += 100;
      console.log(this.dps);
    },
  },
  beforeMount() {
    let self = this;
    setInterval(function() {
      let temp = (self.dps / 100) + self.leftoverRespect;
      self.leftoverRespect = temp % 1;
      temp -= self.leftoverRespect;
      self.count += temp;
    }, 10)
  },
});
