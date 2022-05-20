
import './App.css';


function App() {
  
  let Data1 = [
    {name : "Android"},
    {name : "Blakcberry"},
    {name : "iPhone"},
    {name : "Windows Phone"}   
];

let Data2 = [
    {item : "Samsung"},
    {item : "HTC"},
    {item : "Micromax"},
    {item : "Apple"}
];


  
  return (
    <div className="App">
      
      <h2>Mobile Operating System</h2>
     {Data1.map((e) => (
       <ul>
       <div className='notes'>
         <li>{e.name}</li>
       </div>
       </ul>
     ))}

      <h2>Mobile Manufacturers</h2>
    {Data2.map((e) => (
      <ul>
       <div className='notes'>
         <li>{e.item}</li>
       </div>
       </ul>
     ))}
    
    </div>
  );
}

export default App;
