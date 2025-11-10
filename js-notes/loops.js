// for (initialization; condition; afterthought)
//      statement

// for (let i = 0; i < 5; i += 1) {
//     console.log(i);
// }

// for (variable in object)
//   statement

// const obj = {
//     name: 'Bob',
//     email: 'bob@email.com',
//     city: 'Pleasantville',
// }

// for (const i in obj) {
//     console.log(obj[i]);
// }

// for (variable of iterable)
//    statement

// const arr = ['B', 'C', 'D', 'E', 'F', 'G', 'A'];

// for (const i of arr) {
//     if (i === 'E') continue;
//     if (i === 'G') break;
//     console.log(i + '-natural');
// }

// while (condition) { statement }

const example = () => {
    let n = 0;
    let x = 0;
    while (n < 3) {
        n++;
        x += n;

        if (x === 3) {
            return x;
        }
    }
    console.log('x', x);
    console.log('n', n);
}

const result = example();
console.log(result);