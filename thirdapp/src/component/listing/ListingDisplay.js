import React from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';

const ListingDisplay =(props) => {

    const renderList = ({listData}) => {
        if(listData){
            return listData.map((item) => {
                return(
                    <div className="item">
                        <div className="row">
                            <div className="col-md-5">
                                <img className="image" src={item.thumb}/>
                            </div>
                            <div className="col-md-7">
                                <div className="hotel_name">
                                    <Link to={`/details/${item._id}`}>{item.name}</Link>
                                    <div className="city_name">{item.city_name}</div>
                                    <div className="address-text">{item.locality}</div>
                                    <div className="address-text">{item.address}</div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="hotel-details">Room Type</div>
                                <div className="hotel-details">Cost Per Night</div>
                            </div>
                            <div className="col-md-9">
                                <div className="details">{item.type[0].name} | {item.type[1].name} | {item.type[2].name}</div>
                                <div className="details">{item.cost}</div>
                            </div>
                        </div>
                    </div>
                )
            })
        }else{
            return(
                <div className="item">
                    <div className="row row-height">
                        <div className="col-md-3">
                            <img src="/images/loader.gif"/>
                        </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="container">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-12">
                        {renderList(props)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDisplay;