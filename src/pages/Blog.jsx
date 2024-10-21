import React from 'react';
import BlogNavbar from './Navbar';
import Footer from './Footer';

const Blog = () => {
  const posts = [
    {
      title: 'Exploring the Beauty of Nature',
      excerpt: 'Nature has a way of capturing our hearts and minds. In this post, we explore...',
      image: './img/Beauty of Nature.jpg',
    },
    {
      title: 'The Future of Technology',
      excerpt: 'As technology continues to evolve, we must consider its implications...',
      image: './img/The Future of Technology.jpg',
    },
    {
      title: 'Healthy Living Tips',
      excerpt: 'Living a healthy life is more than just exercise. It’s about mindset and balance...',
      image: './img/Healthy Living.jpg',
      
    },
    {
      title: 'Travel Destinations You Must Visit',
      excerpt: 'From serene beaches to bustling cities, discover the top travel spots for 2024...',
      image: './img/Travel Destinations.jpg',
    },
  ];

  return (
    <div>
      <BlogNavbar />

      {/* Hero Section with Background Image */}
      <section
        className="d-flex align-items-center text-center text-white"
        style={{
          backgroundImage: "url('./img/Blog.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '60vh',
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Our Blog</h1>
          <p className="lead">Insights, Stories, and Ideas from Our Community</p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {posts.map((post, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100">
                  <img src={post.image} className="card-img-top" alt={post.title} />
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.excerpt}</p>
                    <a href="#" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;