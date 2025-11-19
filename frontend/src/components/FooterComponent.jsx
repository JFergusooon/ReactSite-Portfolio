import React from 'react';



function FooterComp() {
  return <>
    <footer style={{gap: '0px'}}>
      <div style={{height: '100%', backgroundColor: '#cacacaff', padding: '00px', textAlign: 'center', color: '#000'}}>
        <h3>Contact Information:</h3>

        <div style={{display: 'flex', flexDirection: 'column', gap: '5px', paddingLeft: '10px', textAlign: 'left', width: '300px', margin: '0 auto', fontSize: '13px'}}>
            <p><strong>Address:</strong> Greater Salt Lake Area, Utah 84115</p>

            <p><strong>Phone:</strong> (385) 499-1578</p>

            <p><strong>Email:</strong> support@jferguson.com</p>
        </div>
        

        
      </div>
      
      <div style={{padding: '20px', width: '100%', height: '100px', textAlign: 'center', marginTop: '20px', color: "#fff", backgroundColor: '#282c34'}}>
        <p style={{padding: '0px', margin: '0px'}}>JFerguson Software Solutions</p>
        <p>Greater Salt Lake Area, Utah 84115</p>
        <p>jfergusooon@gmail.com</p>
      </div>
    </footer>
  </>
}


export default FooterComp;

