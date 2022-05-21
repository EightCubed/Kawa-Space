import { useEffect , useState } from "react";
import axios from "axios";
import Cards from "./Components/Cards";
import PersonCard from "./Components/PersonCard";
import './App.css';

const App = () => {
  
  const [data,setData]=useState([]);
  const [error,setError]=useState('');
  const [loading,setLoading]=useState(true);
  const [selectedID,setSelectedID]=useState('')

  
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
      );
      setData(response.data)
    } catch (err) {
      setError(err.message);
      console.log('Error',error)
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  },[error]);

  const handleSelected = (ID) => {
    setSelectedID(ID)
  }

  return(
    <div className="container">
      {loading && (
        <div className="loader">
          <div class="lds-dual-ring"></div>
        </div>
      )}
      {!loading && (
        <div>
          <div className="top">
            <div className="topleft">
              <p>YourChallenge</p>
            </div>
            <div className="toppadding"></div>
            <div className="topright">
              <p className="topunderline">Product</p>
              <p>Download</p>
              <p>Pricing</p>
            </div>
          </div>

          <div className="selectedContact">
            {data.results.map( (obj) => {
              if( obj.email === selectedID )
                return <PersonCard data={obj}/>
              else
                return null
            })}
          </div>
          
          <div className="cards">
            {data.results.map( (obj)=> {
            return <Cards data={obj} setSelected={handleSelected} selectedID={selectedID}/>
          })}
          </div>
      </div>)}
    </div>
  );
}

export default App;