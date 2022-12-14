export async function getMachineName() {
  const Shell = require('node-powershell');
  // initialize a shell instance
  const ps = new Shell({
    // error ^ TypeError: Shell is not a constructor...
    // with "node-powershell": "^5.0.1",
    // it works with "node-powershell": "^4.0.0",
    executionPolicy: 'Bypass',
    noProfile: true
  });
  // if (window.navigator.platform === 'Linux x86_64') {
  // only ^^^^ works in browser, of course
  // https://stackoverflow.com/a/9514291/2752308
  const os = require('os');
  if (os.platform() === 'linux') {
    // https://stackoverflow.com/questions/6551006/get-my-os-from-the-node-js-shell/11160251#11160251
    ps.addCommand('hostname');
  } else {
    ps.addCommand('$Env:Computername');
  }
  // let computername = '';
  ps.invoke()
    .then(response => {
      console.log(response);
      //res.send(response.toString().replaceAll('[?1h[?1l', '').trim());
      return (response.toString().replaceAll('[?1h[?1l', '').trim());
    })
    .catch(err => {
      // res.json(err);
      return err;
      // computername = `unknow computer name; error: ${err}`;
      // ps.invoke()
      //   .then(response => {
      //     console.log(response);
      //     //res.send(response.toString().replaceAll('[?1h[?1l', '').trim());
      //     return (response.toString().replaceAll('[?1h[?1l', '').trim());
      //   })
      //   .catch(err => {
      //     // res.json(err);
      //     return err;
      //     // computername = `unknow computer name; error: ${err}`;
    });
};
