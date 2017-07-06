public class SinglyLingkedList{
    private Node head;

    public Node add(int value){
        if(this.head == null){
            this.head = new Node(value);
            return this.head;
        }
        Node ptr = this.head;
        while(ptr.next != null){
            if(ptr.next == null){
                ptr.next = new Node(value);
                ptr = ptr.next;
            }
            ptr = ptr.next;
        }
        ptr.next = new Node(value);
        return this.head;
    }

    public Node remove(){
        Node ptr = this.head.next;
        Node prev = this.head;

        while(ptr.next.next != null){
            ptr = ptr.next;
        }
        ptr.next = null;
        return ptr;
    }

    public void printValue(){
        Node ptr = this.head;
        while(ptr != null){
            System.out.println(ptr.value);
            ptr = ptr.next;
        }
    }
    public static void main(String[] args) {
        SinglyLingkedList sll = new SinglyLingkedList();
        sll.add(1);
        sll.add(2);
        sll.add(3);
        sll.add(4);
        sll.add(5);

        sll.remove();
        sll.printValue();
    }
}
