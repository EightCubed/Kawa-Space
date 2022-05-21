import './cards.css';

const Cards = ({data,setSelected,selectedID}) => {

    const handleSelected = (email) => {
        setSelected(email)
    }

    return(
        <div className={data.email===selectedID?'card selectedCard':'card'} onClick={()=>handleSelected(data.email)}>
            <div className='first'>
                <p className='gender'>{data.gender}</p>
                <p className='dot'></p>
                <p className='nat'>{data.nat}</p>
            </div>
            <div className='name'> 
                <p className='namespace'>{data.name.title}</p>
                <p className='namespace'>{data.name.first}</p>
                <p className='namespace'>{data.name.last}</p>
            </div>
            <div className={data.email===selectedID?'email selectedCard':'email'}>
                <p>{data.email}</p>
            </div>
        </div>
    );
}

export default Cards;