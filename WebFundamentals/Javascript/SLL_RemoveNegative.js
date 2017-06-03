function Node(value){
    this.val = value;
    this.next = null;
}

function SLL(){

    this.head = null;
    this.insert = function(val){
        if(!this.head){
            this.head = new Node(val);
            return this.head;
        }
        var current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = new Node(val);
        return this.head;
    }

    this.removeNeg = function(list){
        if(!this.head){
            console.log("You can't split an empty list");
            return this.head
        }
        var curr = this.head.next;
        var prev = this.head;
        while(curr){
            if(prev.val < 0){
                // list.head = prev.next;
                this.head = curr
                curr = curr.next;
                prev = prev.next;

            }
            else {
                this.head = prev;
                curr = curr.next;
                prev = prev.next;
            }
            return list.head
        } return list.head
    }
}

var list1 = new SLL();
var list2 = new SLL();

list1.insert(1);
list1.insert(2);
list1.insert(-3);
list1.insert(4);
list1.insert(5);

console.log("Original l1", list1.head)
console.log("Remove negative value",list1.removeNeg(list1));
