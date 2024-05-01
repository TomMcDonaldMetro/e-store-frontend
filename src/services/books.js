import axios from 'axios'
const baseUrl = 'http://localhost:8080/api/books'

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response=>response.data)
    .catch(exception => {
        console.log(`Error in get all resources from ${baseUrl}`)
    })
}

const create = newBook => {
    const request = axios.post(baseUrl, )
      return request.then(response=>{response.data})
      .catch(error =>{
        console.log("received an error from the server after attempting to post")
      })
}

const update = (id, newBook) => {
    console.log(`${baseUrl}/${id}`)
    console.log(newObject)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response=>response.data)
    .catch(error => {
        console.log("Received an error while trying to update a book")
    })
}

const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response=>{
        console.log(response, " response after delete")
    })
    .catch(error=>{
        console.log("received after attempted delete: ", error)
    })
}

export default { getAll, create, update, remove }