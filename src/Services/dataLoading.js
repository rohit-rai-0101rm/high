import axios from 'axios';

 export const getData = async ()=>
{
    let response = await axios.get("http://localhost:8080/hrc_backend/DataLoading");
     let data = response.data.invoices;
     data.map((invoice,index)=>({...invoice,"id":index}));
     return data;
}