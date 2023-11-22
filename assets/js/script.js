$(document).ready(function () {
  AOS.init();
  //Slider js
  $('.company-slider-wrapper').slick({
    infinite: true,
    autoplay: true,
    speed: 100,
    variableWidth: true
  });
});


var allportfolio = [
  { "img": "assets/img/portfolio/1.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/2.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/3.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/4.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/5.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/6.webp", "title": "Portfolio Title" }
];
var websitesportfolio = [
  { "img": "assets/img/portfolio/1.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/2.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/2.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/1.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/1.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/2.webp", "title": "Portfolio Title" }
];
var mobappportfolio = [
  { "img": "assets/img/portfolio/4.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/3.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/3.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/4.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/4.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/3.webp", "title": "Portfolio Title" }
];
var socialportfolio = [
  { "img": "assets/img/portfolio/5.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/6.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/6.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/5.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/5.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/6.webp", "title": "Portfolio Title" }
];
var graphicportfolio = [
  { "img": "assets/img/portfolio/4.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/3.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/3.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/4.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/4.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/3.webp", "title": "Portfolio Title" }
];
var seoportfolio = [
  { "img": "assets/img/portfolio/5.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/6.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/6.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/5.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/5.webp", "title": "Portfolio Title" },
  { "img": "assets/img/portfolio/6.webp", "title": "Portfolio Title" }
];


//Blogs Listing Content

const blogs = [
  {
    title: 'Reasons Business needs Agency.',
    thumbnail: '/assets/img/blog.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'Maximizing your marketing budget',
    thumbnail: '/assets/img/blog-2.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'how a creative agency can help?',
    thumbnail: '/assets/img/blog-3.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'Reasons Business needs Agency.',
    thumbnail: '/assets/img/blog.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'Maximizing your marketing budget',
    thumbnail: '/assets/img/blog-2.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'how a creative agency can help?',
    thumbnail: '/assets/img/blog-3.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'Reasons Business needs Agency.',
    thumbnail: '/assets/img/blog.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'Maximizing your marketing budget',
    thumbnail: '/assets/img/blog-2.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'how a creative agency can help?',
    thumbnail: '/assets/img/blog-3.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'Reasons Business needs Agency.',
    thumbnail: '/assets/img/blog.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'Maximizing your marketing budget',
    thumbnail: '/assets/img/blog-2.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  },
  {
    title: 'how a creative agency can help?',
    thumbnail: '/assets/img/blog-3.png',
    description: 'Design Club is a digital agency specialized in ecommerce. We build scalable, high-end web shops.',
  }
];

function populateBlogListing() {
  const listWrapper = document.querySelector('.list-wrapper');

  blogs.forEach((blog) => {
    const blogCard = document.createElement('a');
    blogCard.setAttribute('href', "http://google.com");
    blogCard.classList.add('blog-card');

    const blogThumbnail = document.createElement('div');
    blogThumbnail.classList.add('blog-thumbnail');
    const thumbnailImage = document.createElement('img');
    thumbnailImage.src = blog.thumbnail;
    thumbnailImage.alt = blog.title;
    blogThumbnail.appendChild(thumbnailImage);

    const blogTitle = document.createElement('div');
    blogTitle.classList.add('blog-title');
    blogTitle.textContent = blog.title;

    const blogDesc = document.createElement('div');
    blogDesc.classList.add('blog-desc');
    blogDesc.textContent = blog.description;
    
    blogCard.appendChild(blogThumbnail);
    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogDesc);

    listWrapper.appendChild(blogCard);
  });
}

// Call the function to populate the blog listing when the page loads
window.addEventListener('load', populateBlogListing);
