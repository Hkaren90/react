import React from 'react'; 
import ProfileCard from './ProfileCard'; 
import './App.css' 
 
const App = () => { 
return ( 
<div className="App"> 
<ProfileCard 
name="CITNC" 
bio="We help you choose a career path that aligns with your interests,
empowers you with the necessary skills and 
provides a head start in your career with a globally recognised degree." 
profilePicture="https://picsum.photos/200"/>
</div> 
); 
}; 
 
export default App; 