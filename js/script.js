

const { createApp } = Vue

// Array di object

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
          if(this.newtodo !='') {
            this.todolist.push(this.newtodo);
            this.newtodo ='';
          }
        },
        // Creazione di una X per rimuovere il to do 
        remove(index) {
          console.log('rimuovi');
          this.todolist.splice(index,1);
        }
      }
    
  }).mount('#app')