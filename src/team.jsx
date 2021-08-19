import React from 'react';
import Navbar from './partials/navbar';
import Footer from './partials/footer';
import Coordinators from './coordinators';
import Secretaries from './secretaries';
export default function Team(){
  return (
       <div>
         <Navbar/>
         <Coordinators/>
         <Secretaries/>
         <Footer/>
         </div>
  )
}