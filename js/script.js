var app = new Vue({
  el: "#app",
  data: {
    cards: [],
  },
  mounted() {
    axios
      .get("./server/api.php")
      .then((response) => {
        console.log(response);
        this.cards = response.data;
        console.log(this.cards);
      })
      .catch((error) => {
        console.log(error);
      });
  },
});
