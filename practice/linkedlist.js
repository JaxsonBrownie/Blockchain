const node1 = {
    data: "example1",
    next: null,
}

const node2 = {
    data: "example2",
    next: null,
}

const node3 = {
    data: 123,
    next: null
}

node1.next = node2;
node2.next = node3;
console.log(node1.next.next.next);