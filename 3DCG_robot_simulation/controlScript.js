

history.pushState(null,null,null);
window.addEventListener('popstate',function () {
  console.log("Back");
  history.pushState(null,null,null);
  alert("この操作は行わないでください．");
});
