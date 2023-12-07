const fs=require('fs');

function stringify(data) {
  return JSON.stringify(data,null,2);
}
function writeJson(file, data) {
    const text=stringify(data);
    fs.writeFileSync(file,text);
}
function readJson(file) {
    const buf = fs.readFileSync(file);
    const str = buf.toString();
    return JSON.parse(str);
}
JSON.read= readJson,
JSON.write= writeJson
console.dump=function dump(obj) {
  JSON.write('/dev/stdout',obj);
};
