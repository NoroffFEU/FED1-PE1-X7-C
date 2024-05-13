const API_BASE_URL = ' https://v2.api.noroff.dev/blog/posts/maxswag';

  fetch(API_BASE_URL)
  .then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error("Can't connect to JSON")
    }
  })
  .then (data => {
    console.log(data);
  }) 
  .catch(error => {
    console.log(error);
  });
