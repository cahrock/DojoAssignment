function Node(value){
    this.val = value;
    this.next = null;
}

function SLL(){
    this. head = null;
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

    this.splitOnVal = function(list, val){
        if(!this.head){
            console.log("You can't split an empty list");
            return this.head
        }
        var current = this.head.next
        var previous = this.head
        if(previous.val ===val){
            list.head = previous;
            this.head = null;
            return list.head
        }
        while(current){
            if(current.val === val){
                list.head = current;
                previous.next = null;
                return list.head;
            }
            current = current.next;
            previous = previous.next;
        }
        return list.head;
    }
}

var list1 = new SLL();
var list2 = new SLL();

list1.insert(1);
list1.insert(2);
list1.insert(3);
list1.insert(4);
list1.insert(5);

console.log("Original l1", list1.head)
console.log("return of SOV",list1.splitOnVal(list2, 2));
console.log('split l1', list1.head)
