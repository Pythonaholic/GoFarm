import React,{useState} from 'react';
import { useEffect } from 'react';
import cookie from 'react-cookies';
const farmsLink = 'https://gofarm-api.herokuapp.com/api/v1/farms/'
export const FarmsContext = React.createContext();
import axios from 'axios';
function FarmsProvider(props) {

  const getData = async () => {
    const data = await axios.get(farmsLink)
    setFarms(data.data)
  }

  const [farms, setFarms] = useState([]);

  useEffect( () => {
     getData()
  },[]);

  
  const addFarm = async (farmsInfo) => {
    const token = cookie.load('auth');
    const config = { headers: { Authorization: 'Bearer ' + token} };
    await axios.post(farmsLink,farmsInfo,config);
    setFarms(getData())
  }
    const state = {
    farms,
    setFarms,
    addFarm,
    getData,
  }
  return (
    <FarmsContext.Provider value={state}>
      {props.children}
    </FarmsContext.Provider>
  )
}
export default FarmsProvider