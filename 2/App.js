import React from 'react'; 
import Header from './Header'; 
import Footer from './Footer'; 
import './App.css'; 
function App() { 
const title = "Welcome to React Application";
const subtitle = "created by react frontend language" ;
const tagline = "Building great apps with React"; 
const copyright = "@ 2025 MyApp, All Rights Reserved"; 
 
return ( 
<div className="App"> 
<Header title={title} subtitle={subtitle} /> 
<Footer tagline={tagline} copyright={copyright} /> 
</div> 
); 
} 
 
export default App;