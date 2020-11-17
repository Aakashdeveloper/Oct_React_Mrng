import React from 'react';

const DisplayMovies = (props) => {

    const renderView = ({datalist}) => {
        if(datalist){
            return datalist.map((item) => {
                return(
                    <div>{item.name}</div>
                )
            })
        }
    }

    return(
        <div>
            <h2>Movies List</h2>
            {renderView(props)}
        </div>
    )
}

export default DisplayMovies