

const { createApp } = Vue

// Array di object

  createApp({
    data() {
      return {
        title : 'TO DO LIST',
          newtodo : '',
         todolist : [
          {
            text: 'Fare il carosello',
            done: false
          },
          {
            text: 'Preparare il pranzo',
            done: true
          },
          {
            text:  'Programmare vacanze',
            done: false
          },
          {
            text:  'Comprare costume',
            done: true
          }
        ],
      }
    },
      methods: {
        add() {
          // Aggiunta dei todo tramite push
          if(this.newtodo !='') {
            this.todolist.push({
              text: this.newtodo,
              done: false});
            this.newtodo ='';
          };
        },
        // Creazione di una X per rimuovere il to do 
        remove(index) {
          console.log('rimuovi');
          this.todolist.splice(index, 1);
        }
      }
  }).mount('#app')