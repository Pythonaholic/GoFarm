import React,{useState} from 'react';
import { useEffect } from 'react';
import cookie from 'react-cookies';
const farmsLink = 'https://gofarm-api.herokuapp.com/api/v1/farms/'
export const FarmsContext = React.createContext();
import axios from 'axios';
function FarmsProvider(props) {
  const [farms, setFarms] = useState([]);

  useEffect( async () => {
    const farmsData = await axios.get(farmsLink)
    const farmsDataa = farmsData.data
    console.log(farmsDataa)
    setFarms(farmsDataa)
  },[]);

  const getData = async () => {
    const data = await axios.get(farmsLink)
    // console.log(data.data)
    return data.data
  }
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