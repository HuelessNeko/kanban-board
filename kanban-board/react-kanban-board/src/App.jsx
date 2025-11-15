import { useState } from 'react'; //useState is a React hook used to manage state
import './style.css'; // Importing the styles I previously had


// Defining the App component - main part of the React application
export default function App() {

    const [items, setItems] = useState([1,2]);

    const add = () =>{
        setItems([...items, items.length + 1]);
    }

    const remove = () => {
        if(items.length > 0){
            setItems(items.slice(0,-1));
        }
    }
    return (
        // JSX Syntax - similar to HTML but can also include JavaScript expressions
        <div>
            <h1>Hello!</h1>
            <p>How art thow?</p>

            <ul>
                {items.map(
                    (num) => (
                        <li key={num}>{num}</li>
                    )
                )}
            </ul>

            <button onClick={add}>More!</button>
            <button onClick={remove}>Less!</button>
        </div>
    );  
}



