import React from 'react';
export default function Coordinators(){
  var coordis=[
   {image:"https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/s600x600/185342645_486464672686809_2150745423192294050_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=7MNvP2lwZHUAX-wfS-8&tn=QBOOsutSwTVZXLHn&_nc_ht=scontent.fluh1-1.fna&oh=5294926824d898e6bc2aae33f6d8d443&oe=6141B2A5",
   name:"Jaagrati jain",
    phone:"9413772474"
  },{image:"https://scontent.fluh1-2.fna.fbcdn.net/v/t1.6435-1/p320x320/175648659_2024380457702526_8247884068628399046_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=SQLUD4nE5U8AX_V8sfn&_nc_ht=scontent.fluh1-2.fna&oh=fc43dccd3ebe67fa992a6b4f650c6faa&oe=6143F413",
    name:"Prateek jain",
    phone:"8562042492"
  },{image:"https://scontent.fluh1-1.fna.fbcdn.net/v/t31.18172-8/1907737_277852575706700_125883093_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=kggxFLX86YcAX9mBRT7&_nc_ht=scontent.fluh1-1.fna&oh=875e609c21460328c9a3c8624d379ec7&oe=6140D875",
  name:"Adit khokar",
  phone:"9149376852"
  },
  { image:"https://scontent.fluh1-2.fna.fbcdn.net/v/t1.6435-9/124634367_1466839940172875_1158633317685430474_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=e8K6UxogvLAAX-w-mCG&_nc_ht=scontent.fluh1-2.fna&oh=296f21edc1437a8d76e28ddfddbcea85&oe=6140E3B7",
    name:"Azhar Tanweer",
    phone:"8562042492"
  }
]  



  
  return (
 <div style={{padding:"10px"}}>
  <div class="team">
    Coordinators<br/>
    {coordis.map((info,index)=><div class="coordi"><div style={{backgroundImage:`url(${info.image})`,
    height:"200px",
    width:"170px",
    backgroundSize:"cover",
    }}>

      </div> 
      <div class="coordis-info">
      {info.name}<hr/><br/>
      {info.phone}
      </div>
    </div>)}
  </div>
 </div>
  );
}