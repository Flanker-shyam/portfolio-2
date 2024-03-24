import React from "react";

export default function Footer() {
  return (
    <footer id="contact" style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',marginTop:'100px'}}>
    <div id="footer-links">
      <a className='social-icons' href="mailto:shyamp665@gmail.com" onmouseover="this.href=this.href.replace(/[zyx]/g,'');" target="_blank">
            <img src="/email_icon.png" />
        </a>
            <a className='social-icons' href="https://www.linkedin.com/in/shyam-sunder19/" target="_blank">
                <img src="/linkedin_icon.png" />
            </a>
            <a className='social-icons' href="https://github.com/Flanker-shyam/" target="_blank">
                <img src="/github_icon.png" />
            </a>
        </div>
        <div id="copyright">© <span id="year">2024</span> Shyam Sunder. All rights reserved.</div>
    </footer>
  );
}
