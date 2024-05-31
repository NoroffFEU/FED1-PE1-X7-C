import { API_POSTS_URL } from './constant.mjs';

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.transform = `translateX(-${index * 300}px)`; 
        });
    }

    document.getElementById('next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    });

    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const postId = this.getAttribute('data-id');
            window.location.href = `/blog/post/${postId}`; 
        });
    });


    fetch(API_POSTS_URL)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) { 
                const thumbnails = document.querySelectorAll('.thumbnail');
                data.forEach((post, index) => {
                    if (thumbnails[index]) {
                        const img = thumbnails[index].querySelector('img');
                        const div = thumbnails[index].querySelector('div');
                        img.src = post.image; 
                        div.textContent = post.title;
                        thumbnails[index].setAttribute('data-id', post.id);
                    }
                });
            } else {
                console.error('Data is not an array:', data);
            }
        })
        .catch(error => console.error('Error fetching posts:', error));
});
