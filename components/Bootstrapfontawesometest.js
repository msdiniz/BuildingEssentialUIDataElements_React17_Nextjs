import { useState } from "react";
//https://stackoverflow.com/questions/391979/how-to-get-clients-ip-address-using-javascript
function BootstrapFontawesomeTest() {
const [machineIP, setmachineIP] = useState("192.168.0.xxx");
const findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r);}catch(e){}};});
findIP.then(ip => setmachineIP(ip)).catch(e => console.error(e));

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">
          Confirmation of Bootstrap and Fontawesome working!
        </h1>
        <p className="lead">
          This message should be contained in a bootstrap jumbotron, and the
          list below is all the fontawesome icons used in the app.
        </p>
      </div>
      <li>your ip: {machineIP}</li>
      <ul>
        <li>
          <i className="fa fa-coffee fa-lg"></i>
        </li>
        <li>
          <i className="fa fa-thumbtack fa-lg"></i>
        </li>
        <li>
          <i className="fa fa-thumbtack fa-rotate-90"></i>
        </li>
        <li>
          <i className="fa fa-times-circle"></i>
        </li>
        <li>
          <i className="fa fa-edit fa-lg "></i>
        </li>
        <li>
          <i className="fa fa-trash"></i>
        </li>
        <li>
          <i className="fa fa-star fa-lg"></i>
        </li>
        <li>
          <i className="fa fa-star fa-hollow-black fa-lg"></i>
        </li>
      </ul>
    </div>
  );
}
export default BootstrapFontawesomeTest;