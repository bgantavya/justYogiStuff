import axios from 'axios';

export const GetData = () => axios.get('https://dummyjson.com/products')

export const GetProduct = (id : number | undefined) => axios.get(`https://dummyjson.com/product/${id}`)

export const Filter = (keyword:string) => axios.get(`https://dummyjson.com/products/search?q=${keyword}`)