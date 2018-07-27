class Stack {
    constructor(size, items) {
        this.size = size;
        this.items = items;
    };

    push(element) {
        this.items.push(element);
        this.size++;
    };

    isEmpty(){
        if(this.size === 0){
            return 'the stack empty';
        }
    };

    pop(){
        if(this.isEmpty()){
            return 'the stack empty';
        }else {
            this.items.pop();
            this.size--;
        }
    };

    search(element){
        if(this.isEmpty()){
            return 'the stack empty';
        }else{
            for(let i = 0; i < this.items.length; i++) {
                if (element === this.items[i]) {
                    return 'element found!';
                }
            }
            return 'element not found!';
        }
    };
}

let Data = new Stack(0,[]);
Data.push(100);
Data.push(200);
Data.push(300);
Data.push(400);
// console.log(Data);
Data.pop();
console.log(Data);
console.log(Data.search(200));
console.log(Data.search(5));










