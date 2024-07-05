// let myCanvas = document.querySelector('#myCanvas');
// let mycontext = myCanvas.getContext('2d');
// let img = document.querySelector('#my-img');
// img.style.display = 'none';


// let h = myCanvas.height
// let w = myCanvas.width
// mycontext.fillStyle = '#eee'
// mycontext.fillRect(0, 0, w, h)
/*
function colDraw(colNum) {
    for(let i = 0; i < colNum; i++){
        let randHeight = Math.round(Math.random() * 150 + 20)
        mycontext.fillStyle = '#00F'
        mycontext.fillRect(50 * (i + 1) + (80 * i), randHeight, 70, h - randHeight)
        mycontext.font = '48px KulminoituvaRegular'
        mycontext.fillStyle = '#FFF'
        mycontext.fillText(`${i + 1}`, 50 * (i + 1) + (80 * i) + 25, h - 30)
    }
}
colDraw(10)

mycontext.lineWidth = 5
mycontext.beginPath()
mycontext.moveTo(50, 50)
myCanvas.addEventListener('click', function(e) {
    mycontext.lineWidth = Number(document.querySelector('#int-2').value)
    mycontext.strokeStyle = document.querySelector('#int').value
    mycontext.lineTo(e.clientX, e.clientY)
    mycontext.stroke()
})

let fullCircle = 2 * Math.PI
mycontext.lineWidth = 5
mycontext.strokeStyle = 'red'
mycontext.shadowColor = 'red'
mycontext.shadowOffsetX = '20'
mycontext.arc(w / 2, h / 2, (h / 2) - 50, 0, fullCircle, false)
mycontext.stroke()

mycontext.lineWidth = 5
mycontext.strokeStyle = 'red'
mycontext.shadowColor = 'red'
mycontext.shadowOffsetX = '-20'
mycontext.arc(w / 2, h / 2, (h / 2) - 50, 0, fullCircle, false)
mycontext.stroke()

class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    set(arr) {
        this[arr[0]] = arr[1]
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
console.log(myHashTable)
// myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')

*/

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// let arr = []
// for(let i = 0; i < 100000000; i++) {
//     arr.push(i)
// }

/*
let t0 = performance.now()
function firstRecurringCharacter(input) {
    if(!Array.isArray(input) || !input || input.length < 2) return `invalid input` 
    let seenNums = []
    for(let i = 0; i < input.length; i++) {
        if(seenNums.indexOf(input[i]) >= 0) {
            return input[i]
        }
        else {
            seenNums.push(input[i])
        }
    }
    return `no match found`
}

console.log(firstRecurringCharacter(arr))
let t1 = performance.now()
console.log(t1 - t0)
*/

/*
let t0 = performance.now()
function firstRecurringCharacter(input) {
    if(!Array.isArray(input) || !input || input.length < 2) return `invalid input` 
    let seenNums = {}
    for(let i = 0; i < input.length; i++) {
        if(seenNums[input[i]]) {
            return input[i]
        }
        else {
            seenNums[input[i]] = i
        }
    }
    return `no match found`
}
console.log(firstRecurringCharacter(arr))

let t1 = performance.now()
console.log(t1 - t0)
*/


// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value: value,
//             next: null
//         };
//         this.tail = this.head;
//         this.length = 1;
//     }
//     appened(value) {
//         let curr = this.tail
//         curr.next = {value: value, next: null}
//         this.tail = curr.next
//         this.length++
//     }
//     prepend(value) {
//         let newHead = {value: value, next: this.head}
//         this.head = newHead
//         this.length++
//     }
//     printList() {
//         let array = []
//         let curr = this.head
//         while(curr) {
//             array.push(curr.value)
//             curr = curr.next
//         }
//         console.log(array)
//     }
//     insert(index, value) {
//         if(index === 0) this.prepend(value)
//         else if(index === this.length) this.appened(value)
//         else if(index > this.length || index < 0) return
//         else {
//             let prev = this.transverseToIndex(index - 1)
//             let newNode = {value: value, next: prev.next}
//             prev.next = newNode
//             this.length++
//         }
//     }
//     transverseToIndex(index) {
//         let curr = this.head
//         for(let i = 0; i < index; i++){
//             curr = curr.next
//         }
//         return curr
//     }
//     remove(index) {
//         if(index === 0) {
//             this.head = this.head.next
//             this.length--
//         }
//         else if(index > this.length || index < 0) return
//         else {
//             let prevNode = this.transverseToIndex(index - 1)
//             let node = prevNode.next
//             prevNode.next = node.next
//             this.length--
//         }
//     }
//     reverse() {
//         let curr = this.tail
//         for(let i = 0; i < this.length; i++) {
//         }
//     }
// }

// let myLinkedList = new LinkedList(10);
// myLinkedList.appened(5)
// myLinkedList.appened(15)
// myLinkedList.appened(25)
// myLinkedList.prepend(54)
// myLinkedList.insert(3, 4)
// myLinkedList.insert(5, 4)
// myLinkedList.insert(7, 4)
// myLinkedList.remove(5)
// myLinkedList.remove(4)
// myLinkedList.remove(3)
// myLinkedList.remove(0)
// myLinkedList.remove(3)
// myLinkedList.appened(5)
// myLinkedList.appened(15)
// myLinkedList.appened(25)
// myLinkedList.prepend(54)
// myLinkedList.printList()
// console.log(myLinkedList)


// class DoublyLinkedObject {
//     constructor(value, previous = null, next = null) {
//         this.value = value
//         this.previous = previous
//         this.next = next
//     }
// }

// class DoublyLinkedList {
//     constructor(value) {
//         this.head = new DoublyLinkedObject(value)
//         this.tail = this.head
//         this.length = 1
//     }
//     appened(value) {
//         let newNode = new DoublyLinkedObject(value)
//         let lastOne = this.tail
//         newNode.previous = lastOne
//         lastOne.next = newNode
//         this.tail = newNode
//         this.length++
//     }
// }

// let myDoublyLinkedList = new DoublyLinkedList(10);
// myDoublyLinkedList.appened(5)
// myDoublyLinkedList.appened(15)
// // myDoublyLinkedList.prepend(54)
// // myDoublyLinkedList.insert(3, 4)
// // myDoublyLinkedList.insert(5, 4)
// // myDoublyLinkedList.insert(7, 4)
// // myDoublyLinkedList.remove(5)
// // myDoublyLinkedList.remove(4)
// // myDoublyLinkedList.remove(3)
// // myDoublyLinkedList.remove(0)
// // myDoublyLinkedList.remove(3)
// // myDoublyLinkedList.appened(5)
// // myDoublyLinkedList.appened(15)
// // myDoublyLinkedList.appened(25)
// // myDoublyLinkedList.prepend(54)
// // myDoublyLinkedList.printList()
// console.log(myDoublyLinkedList)

/*
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        let newNode = new Node(value)
        if(this.top) {
            this.top.next = newNode
            this.top = newNode
            this.length++
        }
        else {
            this.top = newNode
            this.bottom = newNode
            this.length++
        }
        return this
    }
    pop() {
        if(!this.top) return
        if(this.length === 1) {
            let bottom = this.bottom
            this.bottom = null
            this.top = null
            this.length--
            return bottom
        }
        let oldTop = this.top
        let currNode = this.bottom
        console.log(currNode)
        while(currNode.next !== this.top) {
            currNode = currNode.next
        }
        this.top = currNode
        this.top.next = null
        this.length--
        return oldTop
    }
    //isEmpty
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("google2"));
console.log(myStack.push("google3"));
console.log(myStack.push("google4"));
console.log(myStack.push("google5"));
console.log(myStack.push("google6"));
console.log('pushs')
console.log(myStack.peek());
console.log(myStack.pop());
console.log('2 push')
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.top, myStack.bottom)
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
*/



/*
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(value) {
        let myNode = new Node(value)
        if(!this.first) {
            this.first = myNode
            this.last = myNode
        }
        else {
            this.last.next = myNode
            this.last = myNode
        }
        this.length++
    }
    dequeue() {
        if(this.length === 0) return
        if(this.length === 1) {
            this.first = null
            this.last = null
            this.length = 0
            return
        }
        this.first = this.first.next
        this.length--
    }
    isEmpty() {
        console.log(this.length === 0)
    }
}

const myQueue = new Queue();
myQueue.peek()
myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()
myQueue.isEmpty()
console.log(myQueue)

//Joy
//Matt
//Pavel
//Samir
*/

/*
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value)
        if(!this.root) {
            this.root = newNode
            return
        }
        let branch = this.root
        let myroot = this.root
        while(branch) {
            if(value >= myroot.value) {
                branch = myroot.right
                branch ? myroot = branch : ''
            }
            else if(value < myroot.value) {
                branch = myroot.left
                branch ? myroot = branch : ''
            }
        }
        if(value >= myroot.value) {
            myroot.right = newNode
        }
        if(value < myroot.value) {
            myroot.left = newNode
        }
    }
    lookup(value) {
        let myroot = this.root
        while(myroot) {
            if(value  == myroot.value) {
                return myroot
            }
            else if(value > myroot.value) {
                myroot = myroot.right
            }
            else if(value < myroot.value) {
                myroot = myroot.left
            }
        }
        return false
    }
    remove(value) {
        let myroot = this.root
        let parent = this.root
        let direction = ''
        while(myroot) {
            if(value  == myroot.value) {
                break
            }
            else if(value > myroot.value) {
                parent = myroot
                myroot = myroot.right
                direction = 'right'
            }
            else if(value < myroot.value) {
                parent = myroot
                myroot = myroot.left
                direction = 'left'
            }
        }
        if(myroot.right) {
            if(myroot.right.left) {
                parent[direction] = myroot.right.left
                myroot.right.left.right = myroot.right
                myroot.right.left.left = myroot.left
            }
            else {
                parent[direction] = myroot.right
            }
        }
        else if(myroot.left) {
            parent[direction] = myroot.left
        }
        else {
            parent[direction] = null
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(tree.lookup(1))
// console.log(tree.lookup(10))
tree.remove(170);
tree.remove(20);
// JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
*/

/*
class Graph { 
    constructor() { 
        this.numberOfNodes = 0;
        this.adjacentList = {}; 
    } 
    addVertex(node)  { 
        this.adjacentList[node] = []
        this.numberOfNodes++;
    } 
    addEdge(node1, node2) { 
        //undirected Graph
        if(!this.adjacentList[node1]|| !this.adjacentList[node2]) return
        !this.adjacentList[node1].includes(node2) ? this.adjacentList[node1].push(node2) : ''
        !this.adjacentList[node2].includes(node1) ? this.adjacentList[node2].push(node1) : ''
    } 
    showConnections() { 
        const allNodes = Object.keys(this.adjacentList); 
        for (let node of allNodes) { 
            let nodeConnections = this.adjacentList[node]; 
            let connections = ""; 
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            } 
            console.log(node + "-->" + connections); 
        } 
    } 
} 

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections(); 
//Answer:
// 0-->1 2 
// 1-->3 2 0 
// 2-->4 1 0 
// 3-->1 4 
// 4-->3 2 5 
// 5-->4 6 
// 6-->5
*/

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// function findFactorialRecursive(number) {
//     //code here
//     if(number == 1 || number == 0) {
//         return 1
//     }
//     let answer = number * findFactorialRecursive(number - 1)
//     return answer;
// }

// console.log(findFactorialRecursive(1))

// function findFactorialIterative(number) {
//     //code here
//     let answer = 1
//     for(let i = 2; i <= number; i++) {
//         answer *= i
//     }
//     return answer;
// }

// console.log(findFactorialIterative(0))


// function fibonaciiI(number) {
//     if(number == 0) {
//         return 0
//     }
//     if(number == 1) {
//         return 1
//     }
//     let firstprev = 1
//     let secondprev = 0
//     for(let i = 1; i < number; i++) {
//         let temp = firstprev
//         firstprev = secondprev + firstprev
//         secondprev = temp
//     }
//     return firstprev
// }

// console.log(fibonaciiI(4))
// console.log(fibonaciiI(5))
// console.log(fibonaciiI(8))

// let fibonaciiList = {
//     0: 0,
//     1: 1,
// }
// function fibonaciiR(number) {
//     if(number < 2) {
//         return fibonaciiList[number]
//     }
//     fibonaciiR(number - 1)
//     fibonaciiList[number] = fibonaciiList[number - 1] + fibonaciiList[number - 2]
//     return fibonaciiList[number]
// }

// function fibonaciiR(number) {
//     if(number < 2) {
//         return number
//     }
//     return fibonaciiR(number - 1) + fibonaciiR(number - 2)
// }

// let t1 = performance.now()
// console.log(fibonaciiR(43))
// let t2 = performance.now()
// console.log(t2 - t1)

// function treePaint(n) {
//     return treeP('', n)
// }

// function treeP(acc, number) {
//     if(number == 0) {
//         return acc
//     }
//     for(let i = 0; i < number; i++) {
//         acc = `${acc}#`
//     }
//     number !== 1 ? acc = acc + '\n' : ''
//     return treeP(acc, number - 1)
// }

// console.log(treePaint(10))

// function reverseString(str) {
//     return rev('', str, str.length)
// }
// function rev(acc, str, len) {
//     debugger;
//     if(len == 0) {
//         return acc
//     }
//     acc = acc + str[len - 1]
//     return rev(acc, str, len - 1)
// }

// console.log(reverseString("amr"))

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//     //Code here
//     let sortedArray = [...array]
//     function swap(array, i) {
//         let temp = sortedArray[i + 1]
//         sortedArray[i + 1] = sortedArray[i]
//         sortedArray[i] = temp
//     }
//     for(let i = 0; i < array.length; i++) {
//         for(let j = 0; j < array.length - 1; j++) {
//             if(sortedArray[j] > sortedArray[j + 1]) {
//                 swap(sortedArray, j)
//             }
//         }
//     }
//     return sortedArray
// }

// console.log(bubbleSort(numbers))
// console.log(numbers);


// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(array) {
//     //Code Here
//     for(let i = 0; i < array.length; i++) {
//         debugger;
//         let min = array[i]
//         for(let j = 0 + i; j < array.length - 1; j++) {
//             let max = array[j + 1]
//             if(min > max) {
//                 let temp = max
//                 max = min
//                 min = temp
//             }
//         }
//         let temp = array[i]
//         let minInd = array.indexOf(min)
//         array[i] = min
//         array[minInd] = temp
//     }
//     return array
// }

// console.log(selectionSort(numbers));


// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function insertionSort(array) {
//     //Code Here
//     debugger;
//     for(let i = 0; i < array.length - 1; i++) {
//         let n1 = array[i]
//         let n2 = array[i + 1]
//         if(n1 > n2) {
//             for(let j = 0; j <= i; j++) {
//                 if(array[j] > n2) {
//                     array.splice(j, 0, n2)
//                     array = array.filter((_, ind) => ind !== i + 2)
//                     break
//                 }
//             }
//         }
//     }
//     return array
// }

// console.log(insertionSort(numbers));

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// let numbersf = (n) => {
//     let arr = []
//     for(let i = 0; i < n; i++) {
//         arr.push(Math.floor(Math.random() * n))
//     }
//     return arr
// }
// let numbers = numbersf(1000)

// function insertionSort(array) {
//     //Code Here
//     for(let j = 0; j < array.length; j++) {
//         for(let i = 0; i < array.length - 1; i++) {
//             let n1 = array[i]
//             let n2 = array[i + 1]
//             if(n1 > n2) {
//                 array.unshift(n2)
//                 array = [...array.slice(0, i + 2) , ...array.splice(i + 3, array.length - 1)]
//             }
//         }
//     }
//     return array
// }

// function insertionSort(array) {
//     const length = array.length;
//     debugger;

//     for (let i = 0; i < length; i++) {
//         if (array[i] < array[0]) {
//             // Move number to the first position
//             array.unshift(array.splice(i, 1)[0]);
//         } else {
//             // Find where number should go
//             for (let j = 1; j < i; j++) {
//                 if (array[i] > array[j - 1] && array[i] < array[j]) {
//                     // Move number to the right spot
//                     array.splice(j, 0, array.splice(i, 1)[0]);
//                 }
//             }
//         }
//     }

//     return array;
// }

// let t1 = performance.now()
// console.log(insertionSort(numbers));
// let t2 = performance.now()
// console.log(t2 - t1)

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
    // debugger;
    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left
    let left = array.slice(0, array.length / 2)
    let right = array.slice(array.length / 2, array.length)
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    debugger;
    let sorted = []
    let assumedLength = left.length + right.length
    for(let i = 0; i < left.length; i++) {
        for(let j = 0; j < right.length; j++) {
            if(left[i] > right[j]) {
                sorted.push(right[j])
            }
            else {
                sorted.push(left[i])
                break;
            }
        }
    }
    return sorted
}


const answer = mergeSort(numbers);
console.log(answer);