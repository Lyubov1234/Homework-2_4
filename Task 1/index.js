const obj = {
  id: 1,
  name: "Пылесос",
  company: "Bosh",
  count: 3,
  price: 1200,
  value: 3600,
};

for (let key in obj) {
  console.log("Ключ => ", key);
  console.log("Значение =>", obj[key]);
}
