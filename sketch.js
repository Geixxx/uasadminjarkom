document.addEventListener('DOMContentLoaded', function() {
  const posts1 = [
    { image: 'post.jpg', link: 'https://www.instagram.com/p/Cpe7j0fBNgr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { image: 'post1-2.jpg', link: 'https://www.instagram.com/p/link1-2/' },
    { image: 'post1-3.jpg', link: 'https://www.instagram.com/p/link1-3/' },
    // Tambahkan lebih banyak data sesuai kebutuhan
  ];

  const posts2 = [
    { image: 'post2-1.jpg', link: 'https://www.instagram.com/p/link2-1/' },
    { image: 'post2-2.jpg', link: 'https://www.instagram.com/p/link2-2/' },
    { image: 'post2-3.jpg', link: 'https://www.instagram.com/p/link2-3/' },
    // Tambahkan lebih banyak data sesuai kebutuhan
  ];

  const createPosts = (posts, containerId) => {
    const container = document.getElementById(containerId);
    posts.forEach(post => {
      const postElement = document.createElement('a');
      postElement.href = post.link;
      postElement.target = '_blank';
      postElement.innerHTML = `<img src="${post.image}" alt="Instagram Post">`;
      container.appendChild(postElement);
    });
  };

  createPosts(posts1, 'instagram-posts1');
  createPosts(posts2, 'instagram-posts2');
});
