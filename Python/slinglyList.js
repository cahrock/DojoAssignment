function Node(val){
    this.val = val
    this.next = null
}

function SLL(){
    this.head = null
    this.insert = function(val){
        if(!this.head){
            this.head = new Node(val)
        }
        var current = this.head
        while(current.next){
            current = current.next;
        }
        current.next = new Node(val)
        return this.head;
    }
}
var new_list = new SLL()
new_list.insrt(1)
new_list.insrt(2)
new_list.insrt(3)
new_list.insrt(4)

console.log(new_list.head.next.next.val);

<!--

-->
