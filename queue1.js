class Queue {
    constructor(size,items){
        this.size = size;
        this.items = items;
    };

    unshift(elements){
        this.items.unshift(elements);
        this.size++;
    };

    isEmpty(){
        if(this.size === 0){
            return 'stack is empty';
        }
    };

    shift(){
        if(this.isEmpty()){
            return 'stack is empty';
        }else{
            this.items.shift();
            this.size--;
        }
    };

    search(elements){
        if(this.isEmpty()){
            return 'stack is empty';
        }else{
            for(let i = 0; i < this.items.length; i++){
                if(elements === this.items[i]){
                    return 'element found!';
                }
            }
            return 'element not found!';
        }
    }
}

let Data = new Queue(0, []);
Data.unshift(11);
Data.unshift(22);
Data.unshift(33);
console.log(Data);
Data.shift();
console.log(Data);
console.log(Data.search(1));
console.log(Data.search(22));
















