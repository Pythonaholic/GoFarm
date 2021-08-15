import React, { useEffect } from 'react'
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';

function MyFarms() {

    const [farms, setFarms] = useState([])

    const context = useContext(SettingsContext);
    const farmsListContext = useContext(FarmsContext)

    function storeData(){
      let f = []
      if (farmsListContext.farms.length){
        farmsListContext.farms.forEach(farm=>{
          if(farm.owner == context.user.id){
            f.push(farm)
          }
        })
        setFarms(f)
      }
    }
    useEffect(()=>{
      if (farmsListContext && context){
        storeData()
      }
    },[farmsListContext,context])


     

    const handleDelete = async(e)=>{
      e.preventDefault()
      let token = cookie.load('auth');
      let id = e.target.farmid.value
      // console.log(id)
      const config = { headers: { Authorization: "Bearer " + token } };
      let deleteLink = `https://gofarm-api.herokuapp.com/api/v1/farms/${id.toString()}`
      await axios.delete(deleteLink, config)
      farmsListContext.getData()
    }

    const sendToDetailsPage = (e)=>{
      e.preventDefault()
      let farm_id = e.target.id.value
      let user_id = context.user.id
      cookie.save('farm_id', farm_id);
      cookie.save('owner_id', user_id);
      window.location.href = `/details`;


    }

    return (
        <div className='myfarms'>
<div class="mt-2">
      <table class="max-w-5xl mx-auto table-auto">
        <thead class="justify-between">
          <tr class="bg-green-600">

            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Farm Name</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Location</span>
            </th>
          
            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Price</span>
            </th>
            <th class="px-16 py-2">
              <span class="text-gray-100 font-semibold">Delete</span>
            </th>
          </tr>
        </thead>


        <tbody class="bg-gray-200">
          {
            farms.map(farm=>{
              if(farm.owner == context.user.id){
                return(
                  <tr class="bg-white border-b-2 border-gray-200">

            <td>
              <form onSubmit={sendToDetailsPage}>
                <input type="hidden" name='id' value={farm.id} />
                <button>
              <span class="text-center ml-2 font-semibold text-blue-700">{farm.farmName}</span>
              </button>
              </form>
            </td>
           
            <td class="px-16 py-2">
              <span>{farm.location}</span>
            </td>
            <td class="px-16 py-2">
              <span>{farm.price}</span>
            </td>

            <td class="px-16 py-2">
              <form onSubmit={handleDelete}>
                <input type="hidden" value={farm.id} name='farmid'/>
                <button>
              <span class="text-yellow-500 flex">
                 <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 text-red-700"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
              </span>
              </button>
              </form>

            </td>
          </tr>
                )
              }
            })
          }
          
          
        </tbody>
      </table>
    </div>
        </div>
    )
}

export default MyFarms
