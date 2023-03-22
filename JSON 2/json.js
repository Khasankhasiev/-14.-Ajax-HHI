const parser = new DOMParser();

const jsonString = `
{
  "list": [
    {
     "name": "Petr",
      "age": "20",
      "prof": "mechanic"
      },
      {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
    }
  ]
}
`;

const data = JSON.parse(jsonString);
const list = [data.list];
list.forEach( list => {
 
  list.push({
      name: list.name,
      age: list.age,
      prof: list.prof,
  });
});

const result = {
  list: list
};
console.log('result', result);