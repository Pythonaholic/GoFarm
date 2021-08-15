import React from 'react'
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
import { If, Else, Then } from 'react-if';
import { useState } from 'react';
import { useEffect } from 'react';
import cookie from 'react-cookies';
import axios from 'axios';



function DetailsPage() {
    const context = useContext(SettingsContext);
    const farmsListContext = useContext(FarmsContext)
    const id = cookie.load('farm_id');
    const onwer = cookie.load('owner_id');

    const [imgNum, setimgNum] = useState(0);
    const [owner,setOwner] = useState({});


    let detailData = {}


    farmsListContext.farms.forEach(item => {
        if (item.id == id) {
            let dec = {

                "farmName": item.farmName,
                "X": item.X,
                "Y": item.Y,
                "location": item.location,
                "price": item.price,
                "description": item.description,
                "BBQ": item.BBQ,
                "pool": item.pool,
                "AC": item.AC,
                "image1": item.image1,
                "image2": item.image2,
                "image3": item.image3,
                "image4": item.image4,
                "owner": item.owner,
            }
            detailData = dec
        }

    })



    async function getowner(){
        const config = { headers: { Authorization: 'Bearer ' + context.token} };
        console.log(detailData.owner)
      const userData = await axios.get(
        `https://gofarm-api.herokuapp.com/accounts/${detailData.owner}`,
        config
      );
      setOwner(userData.data)   
    }


    useEffect(() => {
        
       
      }, []);

    const arr = [detailData.image1, detailData.image2, detailData.image3, detailData.image4]


    

    
    


    function submitNext(event){
        event.preventDefault();

        if (imgNum==3){
            setimgNum(0)
        }
        else{
            setimgNum(imgNum+1)
        }

    }

    function submitPrevious(event){
        event.preventDefault();
        if (imgNum==0){
            setimgNum(3)
        }
        else{
            setimgNum(imgNum-1)
            
        }

    }



    return (
        <div class="detail">


            <div class="imgdiv">
                
            

            <img src={arr[imgNum]}></img>
            <div>
            <form id="prebutton" onSubmit={submitPrevious}>
                <button >
                    previous
                </button>
            </form>
            <form id="nexbutton" className="float-right" onSubmit={submitNext}>
            
                <button  >
                    Next
                </button>
            </form>
            </div>

            </div>
            
        </div>

    );
}

export default DetailsPage
