

const { createApp } = Vue

  createApp({
    data() {
      return {
        title : 'TO DO LIST',
        newtodo : '',
         todolist : [
          'Fare il carosello',
          'Preparare il pranzo',
          'Programmare vacanze',
        ]
      }
    },
      methods: {
        add() {
          if(this.newtodo.trim !='') {
            this.todolist.push(this.newtodo);
            this.newtodo ='';
          }
        }
      }
    
  }).mount('#app')