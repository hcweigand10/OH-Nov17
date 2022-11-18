class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    addNode(value) {
        const newNode = new ListNode(value)
        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }
        curr.next = newNode
    }
    log() {
        let curr = this.head
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }
    }
    reverse() {
        let currNode = this.head
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            // reassign curr.next to prev
            nextNode = currNode.next
            currNode.next = prevNode
            prevNode = currNode
            currNode = nextNode
        }
        this.head = prevNode
    }
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)

node1.next = node2
// console.log(node1)

const list1 = new LinkedList(node1)

console.log(list1)
list1.addNode(3)
list1.addNode(4)
list1.addNode(5)
list1.reverse()
list1.log()
