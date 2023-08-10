/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null
    this.tail = null
    this.length = 0

    for (let val of vals) this.push(val)
  }

  /** push(val): add new value to end of list. */
  push(val) {
    let newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new Node(val, this.head)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head = newNode
    }
    this.length++
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(val, idx) {
    // handle insertion at invalid index
    if (idx < 0 || idx > this.length) {
      return
    }

    const node = new Node(val)

    // handle insertion at head or empty list
    if (idx === 0) {
      if (!this.head) {
        this.head = node
        this.tail = node
      } else {
        node.next = this.head
        this.head = node
      }
      this.length++
      return
    }

    let currentNode = this.head
    let previousNode = null
    let count = 0

    while (count < idx) {
      previousNode = currentNode // the node before the index we want to insert in
      currentNode = currentNode.next // the node after the index we want to insert in
      count++
    }

    // handle insertion at end of list
    if (idx === this.length) {
      previousNode.next = node
      this.tail = node // Update the tail after updating previousNode.next
    } else {
      node.next = currentNode
      previousNode.next = node
    }
    this.length++
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      return null
    }

    let currentNode = this.head
    let count = 0

    while (currentNode) {
      if (count === idx) {
        return currentNode.val
      }
      count++
      currentNode = currentNode.next
    }
    return null
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      return false
    }

    let currentNode = this.head
    let count = 0

    while (currentNode) {
      if (count === idx) {
        currentNode.val = val
        return true
      }
      count++
      currentNode = currentNode.next
    }
    return false
  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    let previousNode = null

    while (currentNode.next) {
      previousNode = currentNode
      currentNode = currentNode.next
    }

    this.tail = previousNode

    if (previousNode) {
      previousNode.next = null
    } else {
      this.head = null
    }

    this.length--
    return currentNode.val
  }

  /** shift(): return & remove first item. */

  shift() {
    // if list is empty
    if (!this.head) {
      return null
    }

    const removedNode = this.head
    this.head = this.head.next
    this.length--

    if (!this.head) {
      this.tail = null
    }
    return removedNode.val
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // handle out of range index input
    if (idx < 0 || idx >= this.length) {
      return null
    }

    let currentNode = this.head
    let previousNode = null
    let removedNode = null
    let count = 0

    if (idx === 0) {
      removedNode = this.head
      this.head = currentNode.next
      if (this.length === 1) {
        this.tail = null
      }
    } else {
      while (count < idx) {
        count++
        previousNode = currentNode
        currentNode = currentNode.next
      }
      removedNode = currentNode
      previousNode.next = currentNode.next
    }
    this.length--
    return removedNode
  }

  printListVals() {
    let currentNode = this.head
    while (currentNode) {
      console.log(currentNode.val)
      currentNode = currentNode.next
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0
    }

    let currentNode = this.head
    let sum = 0

    while (currentNode) {
      sum += currentNode.val
      currentNode = currentNode.next
    }
    return sum / this.length
  }
}

//module.exports = LinkedList

const ll = new LinkedList([1, 2, 3, 4, 5])
