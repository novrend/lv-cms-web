const data = require("./db.json");
const fs = require("fs");
data.Products.forEach((el, i) => {
  el.User = data.Users[el.authorId];
  el.Category = data.Categories[el.categoryId];
  el.Images = [];
});
data.Images.forEach((el) => {
  data?.Products?.[el?.productId-1]?.Images?.push(el);
});
data.Images.forEach(el => {
  el.id = +el.id
})
data.Products.forEach(el => {
  el.id = +el.id
})
data.Users.forEach(el => {
  el.id = +el.id
})
data.Categories.forEach(el => {
  el.id = +el.id
})


fs.writeFileSync("db2.json", JSON.stringify(data, null, 2));
