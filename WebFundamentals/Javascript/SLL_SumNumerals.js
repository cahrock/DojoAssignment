// create a blue (class) print for node
// write a blue (class) print fol singly linked lists

function Node(val){
    this.val = val;
    this.next = null;
}

function SLL(){
    this.head = null;
    // inside SLL bluprint (class) add methods
    this.insert = function(val){
        if( !this.head){ // if this.head === null, do something
            this .head = new Node(val); // pointig the head to a new Node()
            return this.head // once this.head is pointing to the new Node
                             // return this.head
        }
        // handle list with stuff in it
        var current = this.head // set current variable to this.head
        while(current.next){ // while current node has a next
            current = current.next;
        } // leave while loop, whe current no longer has a next
        current.next = new Node(val) // set current's next pinter to a newly node
        return this.head
    }

    this.sumNumerals = function(list1, list2){

    }
}

function list2Arr(list){

}
function sumNumerals(list1, list2){
    var SLL2 = new SLL();
    var arr1 = [], sum, current = list1.head, list3, arr2 = [];
    while (current.next) {
        arr1.push(current.val);
        current = current.next
    }
    current = list2.head
    while (current.next) {
        arr2.push(current.val);
        current = current.next;
    }
    arr1.reverse();
    arr2.reverse();
    sum = parse.int(arr1.join()) + parse.int(arr2.join());
    sum.toString();
    for(var i = sum.length-1; i > 0; i--){
        list3.push(sum[i])
    }
    return list3
}

// var list1 = new SLL() // create the new list
// list1.insert(1) // insert a node withval of 4 into newly created
// list1.insert(2) // insert a node withval of 4 into newly created
// list1.insert(3) // insert a node withval of 4 into newly created
// list1.insert(4) // insert a node withval of 4 into newly created
//
// console.log(list1.head);
// console.log(list1.head.next);
// console.log(list1.head.val);
