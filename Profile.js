import React from 'react';
import FullName from './fullName.js';


const Profile = (props) => {
    return (
    <div style={{textAlign:'center',margin:'20px'}}>
    <img src={props.children} width='120px' />
      <FullName name='Aymen Meddeb' bio='Née le 17/06/1979 à gabès titulaire dune maitrise en finance 
      Jai plusieurs experiences professionnelles,des stages et des formations professionnelles en domaine gestion ,finance et en management de qualité essentiellement  
       en certification iso et audit interne en qualité.Actuellement je suis en formation en devellopeur en full stack fournie
       par gomycode'
      profession='full stack developper'/>
     
    </div>
  )
}

export default Profile;
