export default function Container(props){
    let location = props.location;
    location = location.toUpperCase();
    return (
        <div className="Container">
            <img src={props.imageUrl} alt="pictureOfSection" className="Cardimage" />
            <section className="sections">
                <img src="../../public/images/location.png" alt="locationlogo" />
                <span className="location">
                    {location}
                    <a href={props.googleMapsUrl} className="glink">
                            View on Google maps
                    </a>
                </span>
                <h2 class="title">{props.title}</h2>
                <h5>{`${props.startDate} - ${props.endDate}`}</h5>
                <span className="description">{props.description}</span>
            </section> 
        </div>
    );
}