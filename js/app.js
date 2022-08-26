function disableScrolling() {
  let toggler_icon = document.querySelector(".toggler-icon");
  let close_icon = document.querySelector(".close-icon");
  if (close_icon.classList.length == 2) {
    close_icon.className = "close-icon";
    toggler_icon.className = "toggler-icon hide";
    document.body.style = "width: 100%; position: fixed; overflow-y:scroll;";
  } else {
    toggler_icon.className = "toggler-icon";
    close_icon.className = "close-icon hide";
    document.body.style = "position: static; overflow-y:auto";
  }
}
const clock = document.querySelector(".clock");
const tick = function() {
  const now = new Date();
  const time = now.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const html = `<span>${time}</span>`;
  // console.log(time);
  clock.style =
    "bottom: 10px; right: 10px; position: fixed; color: white; font-size: 1rem; z-index: 1;";
  clock.innerHTML = `Date: ${html} `;
};
setInterval(tick, 1000);


