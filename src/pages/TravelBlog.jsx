import { useParams, Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import { travelBlog } from '../data/articles';

function BlogArticleDetail({ article }) {
  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Hero */}
      <div style={{ position: 'relative', height: '45vh', minHeight: '300px', overflow: 'hidden' }}>
        <img
          src={article.image}
          alt={article.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)',
          }}
        />
        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', maxWidth: '800px' }}>
          <Link
            to="/blog"
            style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.75rem' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Blog
          </Link>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--primary-blue)',
              color: 'white',
              padding: '0.2rem 0.75rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: '600',
              marginBottom: '0.75rem',
            }}
          >
            {article.category}
          </span>
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: '700',
              fontFamily: 'var(--font-family-heading)',
              color: 'white',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
              lineHeight: 1.2,
            }}
          >
            {article.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.75rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>
            <span>{article.author}</span>
            <span>•</span>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div style={{ maxWidth: '750px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* SEO-friendly structured content */}
        <article>
          <div
            style={{
              fontSize: '1.05rem',
              lineHeight: 1.9,
              color: 'var(--neutral-600)',
            }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </article>

        {/* Share section */}
        <div
          style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--neutral-300)',
          }}
        >
          <h3
            style={{
              fontSize: '1.1rem',
              fontFamily: 'var(--font-family-heading)',
              color: 'var(--neutral-900)',
              marginBottom: '0.75rem',
            }}
          >
            Enjoyed this article?
          </h3>
          <p style={{ color: 'var(--neutral-600)', fontSize: '0.95rem', marginBottom: '1rem' }}>
            Share it with fellow travelers or explore more articles on our blog.
          </p>
          <Link
            to="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'var(--primary-blue)',
              color: 'white',
              padding: '0.6rem 1.5rem',
              borderRadius: 'var(--radius)',
              fontWeight: '600',
              fontSize: '0.9rem',
              transition: 'background-color 0.2s',
            }}
          >
            More Blog Posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function TravelBlog() {
  const { articleId } = useParams();

  // If viewing a specific article
  if (articleId) {
    const article = travelBlog.find((a) => a.id === articleId);
    if (!article) {
      return (
        <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-family-heading)', marginBottom: '1rem' }}>Article not found</h2>
          <Link to="/blog" style={{ backgroundColor: 'var(--primary-blue)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: 'var(--radius)', fontWeight: '600' }}>
            Back to Blog
          </Link>
        </div>
      );
    }
    return <BlogArticleDetail article={article} />;
  }

  // Blog list page
  return (
    <div style={{ minHeight: '80vh' }}>
      {/* Header */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--primary-blue-dark), var(--primary-blue))',
          padding: '3rem 1.5rem',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            fontFamily: 'var(--font-family-heading)',
            color: 'white',
            marginBottom: '0.75rem',
          }}
        >
          Travel <span style={{ color: 'var(--secondary-yellow)' }}>Blog</span>
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto' }}>
          In-depth stories, guides, and insights for the modern traveler
        </p>
      </div>

      {/* Blog Grid */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {travelBlog.map((article) => (
            <ArticleCard key={article.id} article={article} type="blog" />
          ))}
        </div>
      </div>
    </div>
  );
}