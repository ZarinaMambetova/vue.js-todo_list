Vue.component('task', {
  props: [ 'data' ],
  methods: {
    task_done() {
      this.$emit('task_done');
    }
  },
  data: function() {
    return {
      isActive: false
    };
  },

  template: `
      <div class="task" >
        <div :class="{ active: isActive }">
          <h3 class="task__title">{{data.title}}</h3>
          <p class="task__desc">{{data.desc}}</p>
        </div>
        <div>
          <button class="task__done"  @click="isActive = !isActive">✔️</button>
          <button @click="task_done()" class="task__done">✖️</button>
        </div>
        
      </div>
  `
});

var vue = new Vue({
  el: '#app',
  data: {
    new_task: {
      title: '',
      desc: ''
    },
    tasks: [
      {
        title: 'Изучить vue.js',
        desc: 'Прочитать книгу о Vue'
      },
      {
        title: 'Записать видео',
        desc: 'Рассказать о Vue'
      },
      {
        title: 'Пройти курс',
        desc: 'Записаться в Loftschool'
      }
    ],
    isActive: false
  },
  methods: {
    delete_task(id) {
      this.tasks.splice(id, 1);
    },
    add_task() {
      if (this.new_task.title != '') {
        this.tasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc
        });
        this.new_task.title = '';
        this.new_task.desc = '';
      }
    }
  }
});
