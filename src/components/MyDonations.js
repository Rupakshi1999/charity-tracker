import React, { useEffect, useState } from "react"
import Donation from "./Donation"

function MyDonations() {
    const [recipes, setRecipes] = useState([])

    useEffect(
        () => {
            fetch('http://127.0.0.1:4999/donation/donation')
                .then((response => response.json()))
                .then(data => { console.log(data); setRecipes(data); })
                .catch(err => console.log(err))
        }, []
    )


    const DonationComponents = recipes.map(
        donation => <
            Donation key={donation.id}
            name={donation.name}
            date={donation.date}
            amount={donation.amount}
            charity_id={donation.charity_id}
            motivation={donation.motivation}
        />)

    return (
        <div className='user-donation'>
            <h1> List of my past donations </h1>
            {DonationComponents}

        </div>
    )

}

export default MyDonations