new Vue({
  el: '#app',
  data: {
    count: 0,
    respectRate: 0,

    thoughtsAndPrayersCount: 0,
  },
  methods: {
    autoClicker: function autoClicker(rate, cost) {
      if (this.count >= cost) {
        this.count -= cost;
        this.respectRate += rate;
      }
    },
    thoughtsAndPrayers(n) {
      this.thoughtsAndPrayersCount += n;
    }
  },
  computed: {
    displayCount() {
      return Math.floor(this.count)
    },
  },
  beforeMount() {
    let self = this;
    setInterval(function() {
      self.count += self.respectRate / 100;
    }, 10)
  },
});
