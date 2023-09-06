import React, { useEffect, useState } from "react";

function Donation(props) {

    const [charity, SetCharity] = useState([])

    const fetch_String = 'http://127.0.0.1:4999/charities/charity/' + props.charity_id
    useEffect(
        () => {
            fetch(fetch_String)
                .then((response => response.json()))
                .then(data => { console.log(data); SetCharity(data); })
                .catch(err => console.log(err))
        }, []
    )


    return (
        <div className="user-donation-card">
            <div className="charity-name">
                <a href={charity.link}>{charity.name} </ a>
                </div>
            <div className="donation-amount">${props.amount}</div>
            <div className="donation-date">Date: {props.date}</div>
            <div className="motivation-story">
                <p>
                    {props.motivation}
                </p>
            </div>
        </div>
    )

}

export default Donation