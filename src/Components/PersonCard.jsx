import './personcard.css';

const selectedCard = ({data}) => {

    const name=data.name.title+". "+data.name.first+" "+data.name.last;

    return(
        <div className="selectedContainer">
            <div className='imagecontainer'> 
                <img className='image' src={data.picture.large} alt="selected person" />
            </div>
            <div className='details'>
                <div className='nameSelected'> 
                    <p>{name}</p>
                </div>
                <div className='address'>
                    <p className='addressline addressnumber'>{data.location.street.number}</p>
                    <p className='addressline'>,{data.location.street.name},</p>
                    <p className='addressline'>{data.location.city},</p>
                    <p className='addressline bold'>{data.location.country},</p>
                    <p className='addressline'>{data.location.postcode}</p>
                </div>
                <div className='timezone'>
                    <p className='timezoneline'>{data.location.timezone.offset}</p>
                    <p className='timezoneline'>-</p>
                    <p className='timezoneline'>{data.location.timezone.description}</p>
                </div>
                <div className='gender'>
                    <p>{data.gender}</p>
                </div>
            </div>
        </div>
    )
}

export default selectedCard;