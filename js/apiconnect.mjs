const API_BASE_URL = ' https://v2.api.noroff.dev/blog/posts/maxswag';

// const blogPost = 'https://v2.api.noroff.dev/docs/static/index.html#/blog-posts/post_blog_posts__name_'
// const blogPut = 'https://v2.api.noroff.dev/docs/static/index.html#/blog-posts/put_blog_posts__name___id_'
// const blogDelete = 'https://v2.api.noroff.dev/docs/static/index.html#/blog-posts/delete_blog_posts__name___id_'
// const blogGet = 'https://v2.api.noroff.dev/docs/static/index.html#/blog-posts/get_blog_posts__name___id_'

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
