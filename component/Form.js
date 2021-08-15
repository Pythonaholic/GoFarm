import React from 'react'
import { useEffect } from 'react'
import { SettingsContext } from '../context/auth'; //1
import  { useContext } from 'react'; //3
import { FarmsContext } from '../context/farms'; //2
function Form() {
  const context = useContext(SettingsContext); //4
  const farmsListContext = useContext(FarmsContext) //5
  function submitHandler(e){
    e.preventDefault()
    let data = {
      farmName: e.target.farmName.value,
      X:0,
      Y:0,
      location: e.target.location.value,
      price: e.target.price.value,
      description:e.target.description.value,
      BBQ: e.target.BBQ.checked,
      pool: e.target.pool.checked,
      AC: e.target.AC.checked,
      image1:e.target.image1.value,
      image2:e.target.image2.value,
      image3:e.target.image3.value,
      image4:e.target.image4.value,
      owner: context.user.id,
    }
    farmsListContext.addFarm(data)
  }
    

  
    return (
        <div className='formcss'>
            <div className="container">
        <div className="card">
          <div className="card-image">	
            <h2 className="card-heading">
              Add farm
              <small>Add your farm now to make profit</small>
            </h2>
          </div>
          <form className="card-form" onSubmit = {submitHandler}>
            <div className="input">
              <input type="text" className="input-field" name='farmName' required />
              <label className="input-label">Farm name</label>
            </div>
            <div className="input">
              <input type="number" className="input-field" name = 'price' required />
              <label className="input-label">Price per day</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" name='description' required />
              <label className="input-label">Description</label>
            </div>



            <div className="input">
              <input type="text" className="input-field" name='image1' required />
              <label className="input-label">Image 1 URL</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" name='image2' required />
              <label className="input-label">Image 2 URL</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" name='image3' required />
              <label className="input-label">Image 3 URL</label>
            </div>
            <div className="input">
              <input type="text" className="input-field" name='image4' required />
              <label className="input-label">Image 4 URL</label>
            </div>



            {/* <div className="input">
              <input type="file" className="input-field" required />
              <label className="input-label">Upload image 1</label>
            </div>
            <div className="input">
              <input type="file" className="input-field" required />
              <label className="input-label">Upload image 2</label>
            </div>
            <div className="input">
              <input type="file" className="input-field" required />
              <label className="input-label">Upload image 3</label>
            </div>
            <div className="input">
              <input type="file" className="input-field" required />
              <label className="input-label">Upload image 4</label>
            </div> */}
            
            <div className='extra'>
              
              <div className='mt-10'>
            <label htmlFor="job">Location</label>
        <select id="job" name="user_job" name='location'>
            <option value="Irbid">Irbid</option>
            <option value="Amman">Amman</option>
            <option value="Jarash">Jarash</option>
            <option value="Ajloun">Ajloun</option>
            <option value="Aqaba">Aqaba</option>
            <option value="Maan">Maan</option>
            <option value="Balqa">Balqa</option>
            <option value="Dead sea">Dead sea</option>
            <option value="Al-Zarqaa">Al-Zarqaa</option>
            <option value="Madaba">Madaba</option>
            <option value="Shouneh">Shouneh</option>
            <option value="Mafraq">Mafraq</option>
        </select>
        </div>
        <label>Adds</label>
        <input type="checkbox" className='form-checkbox h-8 w-8 text-indigo-600 border border-indigo-600' id="development" name="BBQ" required /><label className="light" htmlFor="development">BBQ</label><br />
        <input type="checkbox" className='form-checkbox h-8 w-8 text-green-500 border border-green-500' id="design"  name="pool" required /><label className="light" htmlFor="design">Pool</label><br />
        <input type="checkbox" className='form-checkbox h-8 w-8 text-pink-600 border border-pink-600' id="business"  name="AC" required /><label className="light" htmlFor="business">Air Conditioning</label>
            </div>
            

            <div className="action">
              <button className="action-button">Add the Farm</button>
            </div>
          </form>
          <div className="card-info">
            <p>Add your farm today to increase profit</p>
          </div>
        </div>
      </div>

        </div>
    )
}

export default Form
