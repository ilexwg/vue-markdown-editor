new Vue({
  el: '#notebook',
  data: {
    content: 'This is a note.'
  },
  computed: {
    notePreview() {
      return marked(this.content);
    }
  }
});