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


    const [imgNum, setimgNum] = useState(0);
    const [owner, setOwner] = useState({});
    const [rivews, setRivews] = useState([]);
    const [commentAuth, setcommentAuth] = useState([]);


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



    async function getowner() {
        const ownerid = cookie.load('owner_id');
        const ownerData = await axios.get(
            `https://gofarm-api.herokuapp.com/accounts/${ownerid}`,
        );
        setOwner(ownerData.data)
    }

    async function getReview() {
        const farmid = cookie.load('farm_id');


        const reviewData = await axios.get('https://gofarm-api.herokuapp.com/api/v1/farms/review', {
            params: {
                id: farmid
            }
        }).then((value) => {
            return value.data
        }).catch((error) => {
            console.log(error)
        })


        setRivews(reviewData)
    }


    function getAuth() {

        rivews.forEach(async (item) => {
            

            const authData = await axios.get(
                `https://gofarm-api.herokuapp.com/accounts/${item.author}`,
            );
            let name_array = commentAuth
            name_array.push(`${authData.data.first_name} ${authData.data.last_name}`)
            setcommentAuth(name_array)
        })

    }


    useEffect(() => {
        getowner()
        getReview()

    }, []);

    useEffect(() => {

        setTimeout(() => {

            getAuth()

        }, 1000);

        

    }, [rivews]);



    const arr = [detailData.image1, detailData.image2, detailData.image3, detailData.image4]


    function submitNext() {

        if (imgNum == 3) {
            setimgNum(0)
        }
        else {
            setimgNum(imgNum + 1)
        }
    }


    setTimeout(() => {

        submitNext();

    }, 4000);

    const addReview = async (review) => {
        const reviewLink = 'https://gofarm-api.herokuapp.com/api/v1/farms/review'
        try {
            const token = cookie.load('auth');
            const config = { headers: { Authorization: 'Bearer ' + token } };
            await axios.post(reviewLink, review, config);

        } catch (error) {
            console.error(error)
        }
    }

    const deleteReview = async (deletedid) => {
        const reviewLink = `https://gofarm-api.herokuapp.com/api/v1/farms/review/${deletedid}`
        try {
            const token = cookie.load('auth');
            const config = { headers: { Authorization: 'Bearer ' + token } };
            await axios.delete(reviewLink, config);


        } catch (error) {
            console.error(error)
        }

    }

    function comminethandler(e) {
        e.preventDefault()
        let data = {
            author: e.target.author.value,
            rating: e.target.rating.value,
            comments: e.target.comments.value,
            farm: e.target.farm.value,
        }
        addReview(data)

        setTimeout(() => {

            window.location.href = `/details`;

        }, 1000);

    }

    function deletehandler(e) {
        e.preventDefault()
        const deletedid = e.target.id.value;
        deleteReview(deletedid)
        setTimeout(() => {

            window.location.href = `/details`;

        }, 1000);

    }


    return (
        <div class="alldetails">


            <div className='info'>
                <body>
                    <div id="container">
                        <div className="product-details">
                            <h1>{detailData.farmName}</h1>

                            <p className="information">{detailData.description}</p>
                        </div>
                        <div className="product-image">
                            <img src={arr[imgNum]} />
                            <div className="info">
                                <h2><strong>Details</strong></h2>
                                <ul>
                                    <li><strong>Governorate: </strong>{detailData.location}</li>
                                    <li><strong>Price Per Night: </strong>{detailData.price} Jd</li>
                                    <li><strong>Phone Number: </strong>{owner.phone_number}</li>
                                    <li><strong>Email: </strong>{owner.email}</li>
                                    <li><strong>Owner: </strong>{owner.first_name} {owner.last_name}</li>
                                </ul>
                                <ul className="unstyled centered">
                                    <If condition={detailData.BBQ}>
                                        <Then>
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" defaultValue="value2" checked />
                                                <label htmlFor="styled-checkbox-2"><strong>Barbeque Grill</strong> </label>
                                            </li>
                                        </Then>
                                        <Else>
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" defaultValue="value2" disabled />
                                                <label htmlFor="styled-checkbox-2"><strong>Barbeque Grill</strong> </label>
                                            </li>
                                        </Else>
                                    </If>
                                    <If condition={detailData.pool}>
                                        <Then>
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" defaultValue="value2" checked />
                                                <label htmlFor="styled-checkbox-2"><strong>Swimming Pool</strong> </label>
                                            </li>
                                        </Then>
                                        <Else>
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" defaultValue="value2" disabled />
                                                <label htmlFor="styled-checkbox-2"><strong>Swimming Pool</strong> </label>
                                            </li>
                                        </Else>
                                    </If>
                                    <If condition={detailData.AC}>
                                        <Then>
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" defaultValue="value2" checked />
                                                <label htmlFor="styled-checkbox-2"><strong>Air Conditioner</strong> </label>
                                            </li>
                                        </Then>
                                        <Else>
                                            <li>
                                                <input className="styled-checkbox" id="styled-checkbox-2" type="checkbox" defaultValue="value2" disabled />
                                                <label htmlFor="styled-checkbox-2"><strong>Air Conditioner</strong> </label>
                                            </li>
                                        </Else>
                                    </If>
                                </ul>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
            <div className='rivew'>
                <body>
                    <If condition={rivews.length != 0}>
                        <Then>
                            <section class="comments">




                                {rivews.map((item, i) => {
                                    return (
                                        <article class="comment">
                                            <h1 class="comment-img" href="">
                                                <img src="https://image.flaticon.com/icons/png/512/660/660611.png" alt="" width="50" height="50" />
                                            </h1>

                                            <div class="comment-body">
                                                <div class="text">
                                                    <p>{item.comments}</p>
                                                </div>

                                                <h2>Rate: {item.rating}/10</h2>
                                                <If condition={item.author == context.user.id}>
                                                    <Then>
                                                        <form onSubmit={deletehandler}>
                                                            <input type="hidden" name='id' value={item.id} />

                                                            <button>Delete</button>
                                                        </form>

                                                    </Then>
                                                    <Else>
                                                    </Else>
                                                </If>

                                                <p class="attribution">by {commentAuth[i]}</p>
                                            </div>
                                        </article>
                                    )

                                })}


                            </section>
                        </Then>
                        <Else>
                            <div></div>
                        </Else>

                    </If>




                    <If condition={context.loggedIn}>
                        <Then>
                            <div id="pizza">
                                <form onSubmit={comminethandler}>
                                    <textarea name="comments" placeholder="Comment.." required></textarea>
                                    <input type="number" className="input-field" name='rating' required max="10.0" min="0.0" placeholder='Rate out of 10'/>
                                    <input type="hidden" className="input-field" name='farm' value={cookie.load('farm_id')} />
                                    <input type="hidden" className="input-field" name='author' value={context.user.id} />
                                    <button class="button submit">Submit</button>

                                </form>
                            </div>
                            <div id="hamburger">
                            </div>
                        </Then>
                        <Else>
                            <div></div>
                        </Else>
                    </If>



                </body>

            </div>

        </div>

    );
}

export default DetailsPage
