
class LinkedList {
  constructor(head = null) {
    this.firstNode = head;
  }

  append(value) {
    let p = this.head;
    while(p.next !== null) {
      p = p.next;
    }
    p.next = new Node(value);
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let s = 0;
    let p = this.head;
    while(p.next !== null) {
      s += 1;
      p = p.next;
    }

    return s + 1;
  }

  get head() {
    return this.firstNode;
  } 

  set head(node) {
    this.firstNode = node; 
  }

  get tail() {
    let p = this.head;
    while (p.next !== null) 
      p = p.next;
    return p;
  }

  atIndex(n) {
    let p = this.head;
    while (n && p.next !== null) {
      p = p.next;
      n -= 1;
    }
    return (!n) ? p : null;
  }

  pop() {
    let p = this.head;
    let c;
    while (p.next !== null) { 
      c = p;
      p = p.next;
    }
    c.next = null;
  }

  contains(value) {
    let p = this.head;
    while (p.next !== null && p.data !== value) {
      p = p.next;
    }
    return (p.data === value);
  }

  find(value) {
    let p = this.head;
    let index = 0;
     while (p.next !== null && p.data !== value) {
      p = p.next;
      index += 1;
    }

    return (p.data === value) ? index : null;   
  }

  toString() {
    let s = '';
    let p = this.head;

    while (p.next !== null) {
      s += `( ${p.data} ) -> `;
      p = p.next;
    }
    s += 'null';
    return s;
  }

  insertAt(value, index) {
    let p = this.head;
    while (p.next !== null && index !== 1) {
      p = p.next;
      index -= 1;
    }

    if (index === 1) {
      let newNode = new Node(value);
      newNode.next = p.next;
      p.next = newNode;
    } else {
      console.error("Invalid index.");
    }
  }

  removeAt(index) {
    let p = this.head;
    let c;
    while (p.next !== null && index) {
      c = p;
      p = p.next;
      index -= 1;
    }

    if (!index) c.next = p.next;
    else console.log("Invalid index.");
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let list = new LinkedList();

for (let i = 0; i < 8; i += 1) list.prepend(i+1)

console.log(list.size());
console.log(list.head.data);
console.log(list.tail.data);
console.log(list.contains(1));
list.pop();
console.log(list.tail.data);
console.log(list.contains(1));
console.log(list.find(4));
console.log(list.find(1));
console.log(list.toString());
list.insertAt(88, 4);
console.log(list.toString());
list.removeAt(4);
console.log(list.toString());

