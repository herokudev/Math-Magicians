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
        &rdquo;Everyone should know how to program a computer,
        because it teaches you how to think! &rdquo;
      </blockquote>
      <figcaption>
        &mdash;
        {' '}
        <cite>Steve Jobs</cite>
      </figcaption>
    </figure>
  </div>
);

export default Quote;
