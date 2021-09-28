const Quote = () => (
  <div
    style={{
      justifySelf: 'center',
      alignSelf: 'center',
    }}
  >
    <h2 className="title">Quote...</h2>
    <figure className="quote">
      <blockquote>
        &rdquo;Quote of the day...&rdquo;
      </blockquote>
      <figcaption>
        &mdash;
        {' '}
        <cite>Author</cite>
      </figcaption>
    </figure>
  </div>
);

export default Quote;
