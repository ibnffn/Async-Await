const resource = "https://jsonplaceholder.typicode.com/todos";
const options = { method: "GET" };

fetch(resource, options);
// result
// promise {pending} -> cek materi promise (gunakan .then)

fetch(resource, options).then((data) => console.log(data));
// Promise{pending}
// result
// Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
// body
// :
// (...)
// bodyUsed
// :
// false
// headers
// :
// Headers {}
// ok
// :
// true
// redirected
// :
// false
// status
// :
// 200
// statusText
// :
// ""
// type
// :
// "cors"
// url
// :
// "https://jsonplaceholder.typicode.com/todos"
// [[Prototype]]
// :
// Response

// contoh fetch + parseData -> perhatikan ping 200 = sukses melalui url tersebut
fetch(resource, options)
  .then((data) => data.json())
  .then((parsedData) => console.log(parsedData));
// result
// (200) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
// [0 … 99]
// [100 … 199]
// length
// :
// 200
// [[Prototype]]
// :
// Array(0)

const resources = "https://jsonplaceholder.typicode.com/todos";
const optionss = { method: "GET" };

fetch(resources, optionss)
  .then((response) => response.json()) //-> Response dari fetch perlu di parse 					   terlebih dahulu
  .then((parsedResponse) => console.log(parsedResponse));
// result
// (200) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]

const resource1 = "https://jsonplaceholder.typicode.com/todos";
const options1 = {
  method: "POST",
  body: JSON.stringify({
    title: "belajar ngoding",
    completed: false,
  }),
};
fetch(resource1, options1)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(`ada error`, error));
// {id: 201}id: 201[[Prototype]]: Object

// Async Await
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "get",
  });
  const data = await res.json();
  console.log(data);
}
// result
// undefined

getData();
// result
// (200) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
// index.js:77 {id: 201}

const options2 = {
  method: "POST",
  body: JSON.stringify({
    title: "belajar ngoding",
    completed: false,
  }),
};
// result
// undefined

fetch(resource, options)
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("error", error));
// result
// Promise {<pending>}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: undefined
// bugsnag.js:2648
// {id: 201}
// id: 201
// [[Prototype]]: Object

// Async menggunakan - try catch JS
async function getListTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
//result
// undefined;

getListTodo();
// result
// (200) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …][0 … 99][100 … 199]length: 200[[Prototype]]: Array(0)

async function getListTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/tod", {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
//result
// undefined
getListTodos();
// Error: NetworkError when attempting to fetch resource.
// result
// Promise {<pending>}
// bugsnag.js:3241
// GET https://jsonplaceholder.typicode.com/tod 404
// {}

// catatan =
// 1. cek pada preview = {} / tidak ada properti
// 2. header status = 404 notfound / tidak ada
