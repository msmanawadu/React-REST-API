import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

function GitHubUser() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.randomuser.me/')
      .then(res => res.json())
        .then(setData)
        .catch(console.error);
  }, []);

  if(data) {
    return (
      <div className = "App">
        <div className = "container">
          <h1 align = "center"> Personal Information </h1>
        </div> 
        <div className = "dataContainer">
        <table className = "table" border= "1">
          <tr>
            <td>
              <b>Title: </b> 
              <span className = "dataSet">{data.results[0].name.title}</span>
            </td>
            <td>
              <b>Name: </b> <span className = "dataSet">
                {data.results[0].name.first} {""} {data.results[0].name.last}
              </span>
            </td>
            <td>
              <b>Gender: </b> <span className = "dataSet">
                {data.results[0].gender}</span>
            </td>
         </tr>

         <tr>
          <td>
            <b>Address: </b> <span className = "dataSet">
              {data.results[0].location.street.number}, {""}
             {data.results[0].location.street.name}, {""}
             {data.results[0].location.city}, {""}
             {data.results[0].location.state}, {""}
             {data.results[0].location.country}</span>
          </td>
         </tr>

         <tr>
            <td>
              <b>Date and time of birth: </b> 
              <span className = "dataSet">
                {data.results[0].dob.date}
              </span>
            </td>
            <td>
                <b>Age: </b>
                <span className = "dataSet">
                  {data.results[0].dob.age}</span>
            </td>
         </tr>

          <tr>
            <td>
              <b>Phone: </b>
              <span className = "dataSet">
                {data.results[0].phone}</span>
            </td>
            <td>
              <b>Mobile: </b>
              <span className = "dataSet">
                {data.results[0].cell}</span>
            </td>
          </tr>

          <tr>
            <td align = "center">
              <img src = {data.results[0].picture.large} className = "image" alt = "person"/>
            </td>
          </tr>
      </table>
      </div>
      <footer>
        <div className = "footer">
        Built{" "}
          <span role='img' aria-label='love'>
            💚
          </span>{" "}
          with by MS Manawadu 🐼    
        </div>
      </footer>
    </div>
    );
  } 
  return null; 
}

function App() {
  return(
  < GitHubUser/>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
