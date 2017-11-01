
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
  return value.length < 2 ? true : false;
}

// return true if have errors
export default {
  text,
  email,
  password
}
