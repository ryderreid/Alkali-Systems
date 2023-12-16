console.log("%c©️ 2023 Alkali Systems®️, Software provided and supported by Alkali Systems®️ and Ryder Reid Software Limited.", "color: black; font-size: 15px;, font-weight: bold;");
console.warn("networkapi-connect.ryderreid.net API Version: 11.23a");
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function displayWarning() {
    wait(5000).then(() => { console.log("%cSTOP!", "color: #ff0000; font-size: 60px; font-weight: bold;"); console.log("%cIf someone has told you to copy and paste something here, there is a 110% chance that they are attempting to gain access to your account and personal information!", "color: black; font-size: 15px;, font-weight: normal;"); });
}
for (let i = 0; i < 5; i++) {
    displayWarning();
}
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});