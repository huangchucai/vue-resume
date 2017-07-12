const path = require('path'); //路径工具
const fs = require('fs'); // 读取文件

let svgFolder = path.join(__dirname, '../static/svg_icons/');
let jsPath = path.join(__dirname, '../src/assets/icons.js');

let svgFiles = fs.readdirSync(svgFolder); // [ 'add.svg', 'book.svg', 'cup.svg', 'heart.svg', 'id.svg', 'phone.svg', 'work.svg' ]

let symbols = svgFiles.map((filename) => {
  let absolutePath = path.join(svgFolder,filename); //获取每一个svg的绝对路径
  let fileContent = fs.readFileSync(absolutePath).toString('utf8');
  let fileContent2 = fs.readFileSync(absolutePath)
  let name = path.basename(filename,'.svg'); // 获取去除后缀名的文件名
  return fileContent.replace(/<\?.+?\?>/g,'')  // 去掉<?xml version="1.0" standalone="no"?>
                    .replace(/<!.+?>/g,'')  // 去掉<!DOCTYPE svg PUBLIC ...>
                    .replace(/version=".+?"/g,'')
                    .replace(/xmlns=".+?"/g, '')
                    .replace(/class=".+?"/g,'')
                    .replace(/fill=".+?"/g , '')
                    .replace(/<svg\s*/, `<svg id="icon-${name}" `)
                    .replace(/\bsvg\b/g,'symbol')  // 把svg换成symbol
                    .replace(/\s{2,}/g, ' ')
}).join('\n')

let js = `export default \`<svg style="display:none">\n${symbols}\n</svg>\`\n`

fs.writeFileSync(jsPath, js, {flag: 'w'}) 
