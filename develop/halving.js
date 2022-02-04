const fs = require("fs");

const data = fs.readFileSync("./halving-schedule.txt", "utf8");

const sep = "================================================================";

const _items = data.split(sep);

const items = [];
for (const _item of _items) {
  const _lines = _item.split("\n");
  const lines = [];
  for (const _line of _lines) {
    if (_line) {
      const a = _line.split(": ");
      const entry = {
        label: a[0],
        value: a[1],
      };
      lines.push(entry);
    }
  }
  items.push({ lines: lines });
}

for (const item of items) {
  console.log(item);
  console.log(",");
}
