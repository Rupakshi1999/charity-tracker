import React from "react"
// import { AddressAutofill } from '@mapbox/search-js-react';

class CharityForm extends React.Component {
    constructor() {
        super()
        this.state = {
            acceptingDonations: true,
            name: "",
            desc: "",
            link: "",
            location: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <main>
                <div className="popup">
                    <div className="popup-inner">
                        <form>
                            <br />
                            Information
                            <br />
                            <input
                                type="text"
                                placeholder="Name of the charity"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange} />
                            <br />
                            <input
                                type="text"
                                placeholder="Short Description of why you donated to this charity"
                                name="desc" value={this.state.desc}
                                onChange={this.handleChange} />
                            <br />
                            <input
                                type="text"
                                placeholder="link to the charity"
                                name="link"
                                value={this.state.link}
                                nChange={this.handleChange} />
                            <br />

                            <br />
                            Are you willing to share this donation on our platform?
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="acceptingDonations"
                                    value="yes"
                                    checked={this.state.acceptingDonations === "yes"}
                                    onChange={this.handleChange}
                                /> Yes
                            </label>
                            <br />
                            <label>
                                <input
                                    type="radio"
                                    name="acceptingDonations"
                                    value="no"
                                    checked={this.state.acceptingDonations === "no"}
                                    onChange={this.handleChange}
                                /> No
                            </label>
                            <br />

                            <label>State where you're located</label>
                            <select
                                value={this.state.location}
                                onChange={this.handleChange}
                                name="location">
                                <option value="blue">NY</option>
                                <option value="green">TX</option>
                                <option value="red">PA</option>
                                <option value="orange">NJ</option>
                                <option value="yellow">CA</option>
                            </select>

                            <br />

                            <button onClick={this.props.toggleDonationForm}>Submit</button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
}

export default CharityForm