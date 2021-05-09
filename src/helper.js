import axios from 'axios';

export const path = (p) => `http://localhost/webService/storage/app/${p}`;

export  const hundelInput = (e,setDta,data) => {
    let { name, value } = e.target;
    console.log(name,':',value);
    if (name == 'icon') value =  e.target.files[0];
    setDta({...data, [name]: value})
    console.log(data);
  }



export const postData =  async (method='post',dataC,url) => {
  await axios.get('/sanctum/csrf-cookie')

  const res = await axios({
    header :{
      'content-type': 'multipart/form-data'
    },
    method,
    url,
    data:dataC
  })
  const { data } = await res;

  console.log(data);
}
