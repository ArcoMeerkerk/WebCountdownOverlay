function CountDown(launchDate) {
    if (launchDate - new Date().getTime() > 0) {
      let iframe = `
      <div class="launchScreen" style="background-color: #181818; position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
        <iframe src="./Countdown/index.html?time=` + launchDate + `" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
          Your browser doesn't support iframes
          </iframe>
          </div>`;
          
          let tempdiv = document.createRange().createContextualFragment(iframe);
          document.body.insertBefore(tempdiv, document.body.firstChild);
          let timer = setInterval(checkAndLaunch, 1000);
          
      function checkAndLaunch() {
        if (launchDate - new Date().getTime() < 0) {
          [...document.querySelectorAll(".launchScreen")].forEach(elem => {
            // console.log(elem);
            elem.parentNode.removeChild(elem);
          });
        }
      }
    }
  }