class List{
    constructor(){
        this.data = [];
    }

    add(value){
        this.data.push(value);
        this.print();
    }

    remove(){
        this.data.pop();
        this.print();
    }

    print(){
        console.log(this.data);
    }
}

class TodoList extends List{
    print(){
        console.log("Imprimindo todoList");
        super.print();
    }
}

class Matemática{
    static soma(valueA, valueB){
        return valueA + valueB;
    }
}

const minhaLista = new TodoList();
console.log(Matemática.soma(5,7));
document.getElementById('addTodo').onclick = function(){
    minhaLista.add('Qualquer coisa');
}

document.getElementById('popTodo').onclick = function(){
    minhaLista.remove();
}