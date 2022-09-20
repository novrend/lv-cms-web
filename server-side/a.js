const data = require("./db.json");
const fs = require("fs");
data.Products.forEach((el, i) => {
  el.User = data.Users[el.authorId];
  el.Category = data.Categories[el.categoryId];
  el.Images = [];
});
console.log(data.Products[0]);
data.Images.forEach((el) => {
  data?.Products?.[el?.productId-1]?.Images?.push(el);
});
fs.writeFileSync("db2.json", JSON.stringify(data, null, 2));
