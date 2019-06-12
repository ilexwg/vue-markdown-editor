new Vue({
  el: '#notebook',
  data: {
    content: ''
  },
  computed: {
    notePreview() {
      return marked(this.content);
    }
  },
  watch: {
    content: 'saveNote'
  },
  methods: {
    saveNote(val) {
      localStorage.setItem('content', val);
    }
  },
  created() {
    this.content = localStorage.getItem('content') || 'You can write in **markdown**';
  }
});