import { API_POSTS_URL } from "../js/constant.mjs";
import { doFetch } from "../utils/doFetch.mjs";


async function getPosts() {
    console.log('Getting posts');
    const posts = await doFetch(API_POSTS_URL, true)
    console.log(posts);
}



function main() {
    getPosts();
}

main();
