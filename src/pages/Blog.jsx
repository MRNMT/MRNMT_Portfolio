import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '../utils/animations';

const Blog = () => {
  const sectionRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [activePost, setActivePost] = useState(null);

  const postsPerPage = 6;

  useIntersectionObserver(sectionRef, (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });

  const posts = [
    {
      id: 1,
      title: 'Building Scalable Web Applications with React',
      date: 'July 01, 2025',
      excerpt: 'Learn how to build scalable web applications using React and best practices for performance optimization, state management, and component architecture.',
      content: 'Full content here...',
      category: 'React',
      tags: ['React', 'Performance', 'Scalability'],
      readingTime: 5,
      link: '#'
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      date: 'July 01, 2025',
      excerpt: 'Exploring emerging trends in web development, including AI integration, serverless architecture, and the rise of progressive web apps.',
      content: 'Full content here...',
      category: 'Trends',
      tags: ['AI', 'Serverless', 'PWA'],
      readingTime: 7,
      link: '#'
    },
    {
      id: 3,
      title: 'Mastering Redux Toolkit',
      date: 'July 01, 2025',
      excerpt: 'A comprehensive guide to using Redux Toolkit for state management in React applications, with practical examples and best practices.',
      content: 'Full content here...',
      category: 'State Management',
      tags: ['Redux', 'State Management', 'React'],
      readingTime: 6,
      link: '#'
    },
    {
      id: 4,
      title: 'CSS Grid vs Flexbox: When to Use What',
      date: 'June 15, 2025',
      excerpt: 'Understanding the differences between CSS Grid and Flexbox, and when to choose one over the other for your layout needs.',
      content: 'Full content here...',
      category: 'CSS',
      tags: ['CSS', 'Grid', 'Flexbox'],
      readingTime: 4,
      link: '#'
    },
    {
      id: 5,
      title: 'Getting Started with TypeScript',
      date: 'June 01, 2025',
      excerpt: 'An introduction to TypeScript for JavaScript developers, covering types, interfaces, and integration with React projects.',
      content: 'Full content here...',
      category: 'TypeScript',
      tags: ['TypeScript', 'JavaScript', 'React'],
      readingTime: 8,
      link: '#'
    },
    {
      id: 6,
      title: 'Building RESTful APIs with Node.js',
      date: 'May 20, 2025',
      excerpt: 'Learn how to build robust RESTful APIs using Node.js, Express, and best practices for security and performance.',
      content: 'Full content here...',
      category: 'Backend',
      tags: ['Node.js', 'API', 'Express'],
      readingTime: 10,
      link: '#'
    },
    {
      id: 7,
      title: 'Optimizing React App Performance',
      date: 'May 10, 2025',
      excerpt: 'Techniques and tools for optimizing React application performance, including code splitting, lazy loading, and memoization.',
      content: 'Full content here...',
      category: 'React',
      tags: ['React', 'Performance', 'Optimization'],
      readingTime: 6,
      link: '#'
    },
    {
      id: 8,
      title: 'Introduction to GraphQL',
      date: 'April 25, 2025',
      excerpt: 'Understanding GraphQL as an alternative to REST APIs, with examples of queries, mutations, and schema design.',
      content: 'Full content here...',
      category: 'API',
      tags: ['GraphQL', 'API', 'Backend'],
      readingTime: 9,
      link: '#'
    }
  ];

  const categories = ['All', ...new Set(posts.map(post => post.category))];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleCommentSubmit = (postId, e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments(prev => ({
        ...prev,
        [postId]: [...(prev[postId] || []), {
          id: Date.now(),
          text: newComment,
          date: new Date().toLocaleDateString()
        }]
      }));
      setNewComment('');
    }
  };

  return (
    <main>
      <section ref={sectionRef} className="section blog-section" id="blog">
        <div className="blog-header">
          <h2 className="section-title">Blog</h2>
          <p className="section-description">Sharing insights and experiences from my journey in web development.</p>
        </div>

        <div className="blog-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-stats">
          <span>{filteredPosts.length} posts found</span>
        </div>

        <div className="blog-posts">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map(post => (
              <article key={post.id} className="blog-post">
                <div className="post-header">
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                    <span className="reading-time">{post.readingTime} min read</span>
                  </div>
                  <h3 className="post-title">{post.title}</h3>
                </div>

                <p className="post-excerpt">{post.excerpt}</p>

                <div className="post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="post-actions">
                  <button
                    className="btn btn-outline read-more-btn"
                    onClick={() => setActivePost(activePost === post.id ? null : post.id)}
                  >
                    {activePost === post.id ? 'Hide Content' : 'Read More'}
                  </button>
                </div>

                {activePost === post.id && (
                  <div className="post-content">
                    <p>{post.content}</p>

                    <div className="comments-section">
                      <h4>Comments ({(comments[post.id] || []).length})</h4>
                      <form onSubmit={(e) => handleCommentSubmit(post.id, e)} className="comment-form">
                        <textarea
                          placeholder="Add a comment..."
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          required
                        ></textarea>
                        <button type="submit" className="btn btn-primary">Post Comment</button>
                      </form>

                      <div className="comments-list">
                        {(comments[post.id] || []).map(comment => (
                          <div key={comment.id} className="comment">
                            <p>{comment.text}</p>
                            <span className="comment-date">{comment.date}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))
          ) : (
            <div className="no-posts">
              <p>No posts found matching your search.</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default Blog;
