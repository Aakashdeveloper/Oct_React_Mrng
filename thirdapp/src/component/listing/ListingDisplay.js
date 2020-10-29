import React from 'react';
import {Link} from 'react-router-dom';
import './Listing.css';
import Pagination from "react-js-pagination";

const renderList = (props,data) => {
    if(data){
        if(data.length>0){
            var limit = props.limit;
            var page = props.activePage;
            data = data.slice((page-1)*limit,(page-1)*limit+limit)
            return data.map((item) => {
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
                <div>
                    <center>
                        <h3>No Hotel Found</h3>
                    </center>
                </div>
            )
        }
        
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

const handlePageChange=(props,pageNumber)=>{
    props.pageNumber(pageNumber);
    var data = props.listData;
    renderList(props,data)
}

const ListingDisplay =(props) => {
    return(
        <div className="container">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-12">
                        {renderList(props,props.listData)}
                    </div>
                </div>
                <center>
                    <Pagination
                        activePage={props.activePage}
                        itemsCountPerPage={3}
                        totalItemsCount={props.totalNoOfItems}
                        pageRangeDisplayed={5}
                        itemClass="page-item"
                        linkClass="page-link"
                        onChange={(data) => {handlePageChange(props,data)}}
                    />
                </center>
            </div>
        </div>
    )
}

export default ListingDisplay;


/*
 ((0*3),(0+3))  slice(0,3)
            ((3,6)) => slice(3,6)
            (6,9) => slice(6,9)
*/