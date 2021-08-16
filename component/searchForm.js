import React from 'react'
import { SettingsContext } from '../context/auth';
import { FarmsContext } from '../context/farms';
import { useContext } from 'react';
import { If, Else, Then } from 'react-if';
import { useState } from 'react';
import { useEffect } from 'react';
import cookie from 'react-cookies';


function SearchForm() {
    const context = useContext(SettingsContext);
    const farmsListContext = useContext(FarmsContext)
    const [ifUserSelect, setifUserSelect] = useState(false);
    const [userStateSelect, setuserStateSelect] = useState("");


    function submitSearch(event) {

        event.preventDefault();
        setifUserSelect(false)
        const userSelect = event.target.search.value
        setifUserSelect(true)
        setuserStateSelect(userSelect)


    }

    function submitDetails(event){
        event.preventDefault();
        const farmId = event.target.id.value
        const ownerId =event.target.owner.value
        cookie.save('farm_id', farmId);
        cookie.save('owner_id', ownerId);

        window.location.href = `/details`;
 
    }
    
    return (
        <div>
            <div className='searchForm'>
                <body>
                    <form className="form-wrapper" onSubmit={submitSearch}>
                        <select id="search" name="select">
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
                        <input type="submit" defaultValue="go" id="submit" value="Search" />
                    </form>
                </body>
            </div>
            <div className='searchResult'>
                <If condition={ifUserSelect}>
                    <Then>
                        <body>
                            <div className="container">
                                <div className="content-heading">
                                    <h1>Search Results</h1>
                                    <hr />
                                    <div className="content-section">

                                    {farmsListContext.farms.map(item => {
                                        if (item.location==userStateSelect){
                                            return (
                                            <div className="card">
                                            <img src={item.image1} alt="" />
                                            <h4>{item.farmName}</h4>
                                            <form onSubmit={submitDetails}>
                                            <input type="hidden" name="id" value={item.id} />
                                            <input type="hidden" name="owner" value={item.owner} />

                                                <button>Details</button>
                                            </form>
                                        </div>
                                            )
                                        }
                                        })}
                                        
                                    </div>
                                </div>
                            </div>
                        </body>

                    </Then>
                    <Else>
                    <body>
                            <div className="container">
                                <div className="content-heading">
                                    <h1>Please Select Place</h1>
                                    <hr />
                                </div>
                            </div>
                        </body>
                    </Else>
                </If>
            </div>
        </div>
    );
}

export default SearchForm
