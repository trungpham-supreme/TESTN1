async function retry(f, delay, option) {
  if (option.max === null) {
    while (!f()) {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    return true;
  } else {
    for (let i = 0; i < option.max; i++) {
      if (f()) {
        return true;
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  return false;
}

let f = () => {
  let d = new Date(); // current time
  return d.getMilliseconds() % 2 == 0; // => true or false
};

retry(f, 1000, { max: 1 }).then((result) => {
  console.log(result);
});
