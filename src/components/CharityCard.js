function CharityCard(props) {
    return (
        <div class="charity-card">
            <img class="charity-logo" src={props.charityinfo.logo} alt="Charity Logo"/>
                <div class="charity-info">
                    <div class="charity-name">{props.charityinfo.name}</div>
                    <div class="charity-description">
                        {props.charityinfo.shortdescription}
                    </div>
                    <a class="charity-link" href={props.charityinfo.link}>Learn More</a>
                </div>
        </div>
    )
}

export default CharityCard;