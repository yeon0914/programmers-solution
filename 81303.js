class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[this.index++] = item;
  }
  pop() {
    if (this.index <= 0) return null;
    const result = this.arr[--this.index];
    return result;
  }
}

class Node {
  constructor() {
    this.status = null;
    this.before = null;
    this.after = null;
  }
}

function solution(n, k, cmd) {
  var stack = new Stack();
  var list = new Array(n);
  for (var i = 0; i < n; i++) {
    var node = new Node();
    node.status = "O";
    if (i === 0) node.before = null;
    else node.before = i - 1;
    if (i === n - 1) node.after = null;
    else node.after = i + 1;
    list[i] = node;
  }

  for (var i = 0; i < cmd.length; i++) {
    if (cmd[i][0] === "U") {
      //U X
      var count = parseInt(cmd[i].replace(/[^0-9]/g, ""));
      for (var j = 0; j < count; j++) {
        k = list[k].before;
      }
    } else if (cmd[i][0] === "D") {
      //D X
      var count = parseInt(cmd[i].replace(/[^0-9]/g, ""));
      for (var j = 0; j < count; j++) {
        k = list[k].after;
      }
    } else if (cmd[i][0] === "C") {
      //C
      //stack에 저장
      stack.push(k);
      list[k].status = "X";

      //위아래 연결
      if (list[k].before!==null) list[list[k].before].after = list[k].after;
      if (list[k].after!=null) list[list[k].after].before = list[k].before;

      //아래행 선택, 마지막행인경우 윗행 선택
      if (list[k].after!==null) k = list[k].after;
      else k = list[k].before;
    } else if (cmd[i][0] === "Z") {
      //Z
      var result = stack.pop();
      list[result].status = "O";

      //위아래 다시 연결
      if (list[result].before!==null) list[list[result].before].after = result;
      if (list[result].after!==null) list[list[result].after].before = result;
    }
  }

  var answer = "";
  for (var i = 0; i < n; i++) answer = answer + list[i].status;
  return answer;
}
