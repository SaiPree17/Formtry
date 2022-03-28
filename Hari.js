import "./Hari.css";
import React from 'react'

function Hari() {
  return (
      <div className="root">
      <div className="inputcontainer">
      <label>Prefix:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
      <input type="text" name="Prefix" />
      
   
      <p><label>FirstName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>
      <input type="text" name="FirstName"/></p>


      <label>MiddleName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" name="MiddleName"  />
      

      <p><label>LastName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>
      <input type="text" name="LastName" /></p>
   

      <label>Suffix:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" name="Suffix" />
    <br />
        
      <label>ProfessionalSuffix:&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" name="ProfessionalSuffix" />
    <br /><br/><div className="hrr"><hr/></div>
    </div>


    <div className="inputcontainer1">
      <label><br/>NickName:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
      <input type="text" name="NickName" />
       <br />

      
      <label>Postal Mailing Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" name= "Mailing Name" />
      <br />

      <label>Salutation:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
      <input type="text" name="Salutation" />
   <br />

      <label>PACE/MLT Party Name:&nbsp;&nbsp;&nbsp;&nbsp; </label>
      <input type="text" name="PACE/MLT Party Name" />
    <br />
        
      <label>PACE Alpha Search:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="text" name="PACE Alpha Search" />
    <br /><div className="hr"><hr/></div>
    </div>

    </div>
  )
}
export default Hari;