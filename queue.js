function Queue(){
    this.size = 0;
    this.items = [];
}

Queue.prototype.unshift = function (element) {
  this.items.unshift(element);
  this.size++;
};

Queue.prototype.isEmpty = function () {
    if(this.size === 0){
        return 'Stack is empty!';
    }
};

Queue.prototype.shift = function () {
    if(this.isEmpty()) {
        return 'Stack is empty!';
    }else{
        this.items.shift();
        this.size--;
    }
};

Queue.prototype.search = function (element) {
    if(this.isEmpty()){
        return 'Stack is empty!';
    }else{
        for(let i = 0; i < this.items.length; i++){
            if(element === this.items[i]){
                return 'element found!';
            }
        }
        return 'element not found!';
    }
};

let Data = new Queue();

Data.unshift(1);
Data.unshift(2);
Data.unshift(3);
Data.unshift(4);
console.log(Data);
Data.shift();
Data.shift();
console.log(Data);
console.log(Data.search(1));
console.log(Data.search(10));













