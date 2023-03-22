
// si estamos en prod otro servidor
// const serverURL =  process.env.NODE_ENV === 'dev' 
// ?  process.env.REACT_APP_DUMMY_JSON_SERVER: process.env.REACT_APP_DUMMY_JSON_SERVER

const serverURL = process.env.REACT_APP_DUMMY_JSON_SERVER;
console.log("🚀 ~ file: endpoints.js:7 ~  process.env:",  process.env)

export const endpoints = {
    getTodos: `${serverURL}/todos`,
    postNewTodo: `${serverURL}/todos/add`,
}