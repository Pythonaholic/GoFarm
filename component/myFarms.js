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

  function storeData() {
    let f = []
    if (farmsListContext.farms.length) {
      farmsListContext.farms.forEach(farm => {
        if (farm.owner == context.user.id) {
          f.push(farm)
        }
      })
      setFarms(f)
    }
  }
  useEffect(() => {
    if (farmsListContext && context) {
      storeData()
    }
  }, [farmsListContext, context])



  const handleDelete = async (e) => {
    e.preventDefault()
    let token = cookie.load('auth');
    let id = e.target.farmid.value
    // console.log(id)
    const config = { headers: { Authorization: "Bearer " + token } };
    let deleteLink = `https://gofarm-api.herokuapp.com/api/v1/farms/${id.toString()}`
    await axios.delete(deleteLink, config)
    farmsListContext.getData()
  }

  const sendToDetailsPage = (e) => {
    e.preventDefault()
    let farm_id = e.target.id.value
    let user_id = context.user.id
    cookie.save('farm_id', farm_id);
    cookie.save('owner_id', user_id);
    window.location.href = `/details`;


  }

  return (
    <div className="allmyfarm">
      <div className='m-auto myfarms'>
        <h2 className='text-center styling'>My Farms</h2>
        <h2 className='text-center styling2'>This is the Control Panel For your Farms, you can Check out your Farms, Delete Them if you want, or add new Farms.</h2>
        <div className="mt-2">
          <table className="max-w-5xl mx-auto table-auto fontso">
            <thead className="justify-between">
              <tr className="bg-gray-500">

                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Farm Name</span>
                </th>
                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Location</span>
                </th>

                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Price (JD)</span>
                </th>

                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">owner</span>
                </th>

                <th className="px-16 py-2">
                  <span className="font-semibold text-gray-100">Delete</span>
                </th>
              </tr>
            </thead>


            <tbody className="bg-gray-200">
              {
                farms.map(farm => {
                  if (farm.owner == context.user.id) {
                    return (
                      <tr className="bg-white border-b-2 border-gray-200">

                        <td>
                          <form className='text-center' onSubmit={sendToDetailsPage}>
                            <input type="hidden" name='id' value={farm.id} />
                            <button>
                              <span className="ml-2 font-semibold text-center text-blue-700">{farm.farmName}</span>
                            </button>
                          </form>
                        </td>

                        <td className="px-16 py-2">
                          <span>{farm.location}</span>
                        </td>
                        <td className="px-16 py-2">
                          <span>{farm.price}</span>
                        </td>

                        <td className="px-16 py-2">
                          <span>{context.user.first_name}</span>
                        </td>

                        <td className="px-16 py-2">
                          <form onSubmit={handleDelete}>
                            <input type="hidden" value={farm.id} name='farmid' />
                            <button>
                              <span className="flex text-yellow-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-5 h-5 text-red-700"
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
    </div>
  )
}

export default MyFarms
