function myFunction(aDIV) {
  if (aDIV === "primaryDIV") {
    var x = document.getElementById(aDIV);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  };


}
