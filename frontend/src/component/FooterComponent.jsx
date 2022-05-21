import React from 'react'

export default function FooterComponent() {
  return (
    <footer style={{backgroundColor:'chocolate', color:'white', textAlign:'center', position:'fixed', left:'0',width:'100%', bottom:'0'}}>
      <> © 2022 Copyright: techcareer.net <br />
        <a style={{color:'white'}} href="https://github.com/yhan-d">My GitHub Account</a>  
      </>
  </footer>
  );
}

