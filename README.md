# WebCountdownOverlay

This project adds a html overlay with a countdown timer.

To use this project simply add the 'Countdown' folder to your project and add this code to the html head:
```html
<script type="text/javascript" src="./CountDown/CountDown.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    CountDown(new Date("March 2, 2021 17:02:10").getTime());
  });
</script>
```
