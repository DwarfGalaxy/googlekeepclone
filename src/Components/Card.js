import React, { useState } from 'react'

function Card() {
    const [newItem, setnewItem] = useState("Write a text here..");
    const [newItems, setnewItems] = useState([]);
    let count=1;
    const Item = (event) => {
        setnewItem(event.target.value);
    }

    const addItems = () => {
        if (newItem != "" && newItem != "Write a text here..") {
            setnewItems([...newItems, newItem]);
        }
        setnewItem("");
    }

    const deleteItems = (values) => {
        let remainingItems = newItems.filter((item) => {
            return item != values;
        });

        setnewItems([...remainingItems]);
    }


    return (
        <>
            <div className="container mt-4 ">
                <div className="form-floating">
                    <textarea className="form-control" value={newItem} id="floatingTextarea" onChange={Item} onFocus={(e) => e.target.value = ""} onBlur={() => addItems()} autoComplete="off"></textarea>
                </div>
            </div>

            <div className="container  mt-5">
                <div className="row">
                    {newItems.map((values) => {
                        return <div className=" mt-3 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3" key={Math.random()}>
                            <div className="card " >
                                <div className="card-body">
                                    <h5 className="card-title text-center">Record - {count++}</h5>
                                    <p className="card-text">{values}</p>
                                </div>
                                <i className="fa fa-trash fs-1 text-center" id='trash' onClick={() => deleteItems(values)}></i>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </>
    )
}

export default Card