function Stack() {
    this.size = 0;
    this.items = [];
}

Stack.prototype.push = function (element) {
    this.items.push(element);
    this.size++;
};

Stack.prototype.isEmpty = function () {
    return this.size === 0;
};

Stack.prototype.pop = function () {
    if(this.isEmpty()){
        return "no element in stack";
    }else{
        this.items.pop();
        this.size--;
    }
};

Stack.prototype.search = function (element) {
    if(this.isEmpty()){
        return 'no element in stack';
    }else{
        for(let i = 0; i < this.items.length; i++){
            if(element === this.items[i]){
                return 'element found';
            }
        }
        return 'element not found';
    }
};

let data = new Stack();
data.push(100);
data.push(200);
data.push(300);
console.log(data);
data.pop();
console.log(data);
console.log(data.search(200));
console.log(data.search(2000));

