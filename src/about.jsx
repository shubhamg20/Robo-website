import React from 'react';
import Navbar from './partials/navbar';
import Footer from './partials/footer';
//import Body from './body';
export default function Home(){
  return (
       <div>
         <Navbar/>
         <div style={{margin:"30px",width:"700px",position:"relative",left:"300px"}}>
           <h1 style={{fontWeight:"200" ,fontFamily:"'Love Ya Like A Sister', cursive"}}>About Us...</h1><br/>
           <h3>What if you could build a <strong>R2D2</strong>? How about <strong>Transformers</strong>? Or a <strong>WALL-E</strong>?</h3>
        <br/><h3>If you have ever even secretly aspired to build your own robot, then the<strong> Robotics Club</strong>, <strong>IITK</strong> is the place for you! We are a diverse group of over-enthused robotics nerds who find roots across all academic departments of the institute as well as ‘seniority’. The club is a student body which finds its place under the Science and Technology Council, Student Gymkhana, IIT Kanpur. Interested in what kind of work we do? We build robots for academic purposes, to compete at both national and international events or just out of plain interest.</h3>
        <br/>
        <h3>Having those newbie jitters? No worry. We are here to induct you into the rapidly expanding world of robotics. One on one guidance, workshops and tutorials along with tools, equipments, components and workspace eagerly await you!</h3>
        <br/><h4><strong>#HappyRoboting</strong></h4>
         </div>
         <Footer/>
         </div>
  )
}