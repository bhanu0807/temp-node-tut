// //OS internal module i.e NodeJS module

// const os = require("os");
// // const user = os.userInfo()
// // console.log(user)

// // // console.log(`The system uptime is ${os.uptime()}`)

// // const currentO= {
// //     name:os.type(),
// //     release:os.release(),
// //     totalM:os.totalmem(),
// //     freeM:os.freemem(),
// //     gft:os.machine(),
// //     jkl:os.version(),
// // }
// // // console.log(currentO)

// const path = require("path");
// // const fileattach = path.join('/content','subfolder','test.txt')
// // console.log(fileattach)
// // const base = path.basename(fileattach)
// // console.log(base)

// // const absolutepath = path.resolve(__dirname,'content','subfolder','test.txt')
// // console.log(absolutepath)

// // const sample = path.delimiter
// // console.log(sample)

// // const sampleone = path.dirname(__dirname)
// // console.log(sampleone)
// const fs = require("fs");
// const { readFile } = require("fs");
// const { writeFile } = require("fs");

// // const first = readFileSync("./content/first.txt", "utf-8");
// // console.log(first);
// // const second = readFileSync("./content/second.txt", "utf-8");
// // console.log(second);
// // const third = writeFileSync(
// //   "./content/sync.txt",
// //   `Here is the file name ${first + " " + second} `,
// //   { flag: "a" }
// // );
// // console.log(third);
// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   const first = result;

//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     const second = result;
//   writeFile(
//     "./content/async.txt",
//     `Here is the file name ${first + " " + second} `,
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       }
//       console.log(result);
//     }
//   );
// });
// });
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const itemslist = _.flattenDeep(items);
console.log(itemslist);
