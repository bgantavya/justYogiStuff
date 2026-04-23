import axios from 'axios';

export const GetData = () => axios.get('https://dummyjson.com/products?limit=100&skip=5')

export const GetProduct = (id : string | number) => axios.get(`https://dummyjson.com/product/${id}`)

export const Filter = (keyword:string, sort:string, order:string, page: number) => 
    // console.log(`https://dummyjson.com/products/search?q=${keyword}&sortBy=${sort}&order=${order}`);
    
    
   
    // let params = {
    //     query: '',
    //     sortBy: '',
    //     order: '',
    //     page: 1
    // }
    // if (query) {
    //     params.query = query;
    // }
    // if (sort) {
    //     params.sortBy = sort;
    // }
    // if (order) {
    //     params.order = order;
    // }
    // // if (page) {
    // //     params.page = page;
    // // }
    // return axios.get(`https://myeasykart.codeyogi.io/products`, {
    //     params,
    // })
    axios.get(`https://dummyjson.com/products/search?q=${keyword}&sortBy=${sort}&order=${order}&limit=15&skip=${(page-1)*15}`)