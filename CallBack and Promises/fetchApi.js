fetch('https://jsonplaceholder.typicode.com/posts')
  .then((respose) => {
    return respose.json();
  })
  .then((val) => {
    console.log(val);
  });
