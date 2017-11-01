
function text(value) {
  return value.length < 2 ? true : false;
}

function email(value) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return (false);
  }
  return (true);
}

function password(value) {
  // for for complex pw requirement tests, see here: https://www.w3resource.com/javascript/form/password-validation.php
  return value.length < 6 ? true : false;
}

function checkbox(value) {
  // placeholder. Add ability to know if required
  return false;
}


function selectone(value) {
  // placeholder. Add ability to know if required
  return (value==='' || value==='select...') ? true : false;
}



// return true if have errors
export default {
  text,
  email,
  password,
  checkbox,
  selectone
}
