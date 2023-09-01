function CharityCard(props) {
    return (
        <div className="charity-card">
            <img className="charity-logo" src={props.logo} alt="Charity Logo"/>
                <div className="charity-info">
                    <div className="charity-name">{props.name}</div>
                    <div className="charity-description">
                        {props.shortdescription}
                    </div>
                    <a className="charity-link" href={props.link}>Learn More</a>
                </div>
        </div>
    )
}

export default CharityCard;