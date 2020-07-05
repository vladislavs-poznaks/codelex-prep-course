/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  list: number[] = [];
  
  push(n: number) {
    this.list.push(n);
    //console.log(this.list);
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list[this.list.length - 1];
  }
}

export { Stack };
