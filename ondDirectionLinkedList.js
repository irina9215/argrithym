// 单向链表
function LinkeList() {
  /**
  * 单向链表中的节点的构造函数
  * @param {any} element 要传入链表的节点
  */
  var Node = function (element) {
    this.element = element;
    this.next = null;
  }

  // 长度
  var length = 0;
  // 单向链表的头节点
  var head = null;

  /**
  * 单向链表结尾中添加元素
  * @param {any} element 要加入链表的节点
  */
  this.append = function (element) {
    var node = new Node(element);
    var current;

    if (head === null) {
      head = node;
    } else {
      // 循环到链表结尾，然后加入节点
      current = head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    length++;
  }

  /**
  * 单向链表中插入元素
  * @param {Number} position 要加入链表的节点
  * @param {any} element 要加入链表的节点
  */
  this.insert = function (position, element) {
    if (position >= 0 && position <= lemgth) {
      var node = new Node(element);
      var current = head, previous;
      var index = 0;

      if (position === 0) {
        node.next = current;
        head = node;
      } else {
        // 找到插入的位置
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = node;
        node.next = current;
      }
      length++;
      return true;
    } else {
      return false;
    }
  }

  /**
  * 寻找某个元素在单向链表中的位置。
  * @param {any} element 要寻找的元素
  * @return {Number}  返回值>=0，查找元素的位置
  */
  this.indexOf = function (element) {
    var current = head;
    var index = -1;

    //查找
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

}