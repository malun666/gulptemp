const fs = require('fs');
const path = require('path');
// 拿到所有的路径
let basePath = path.join(__dirname, 'src/template');
let files = fs.readdirSync(basePath);
files.forEach((val, index) => {
  let dirPath = path.join(basePath, val);
  let stat = fs.statSync(dirPath);
  if (stat.isDirectory()) {
    // console.log(val);
  }
});
