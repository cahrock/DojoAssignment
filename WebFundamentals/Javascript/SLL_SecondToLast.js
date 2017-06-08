function SLL(){
    this.head = null;
    this.secondToLast = function(){
        if(!this.head){
            return this.head;
        }
        var p = this.head;
        var c = this.head.next;
        if(!c){
            c = c.next;
            p = p.next;
        }
        return p.val;
    }
}

var list = new SLL();
var listVal = '1,2,3,4,5,6';
console.log("Second to Last:", list.secondToLast(listVal));
