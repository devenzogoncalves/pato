export default function App() {
  return (
    <>
      opa
      <div className="sketchfab-embed-wrapper">
        {' '}
        <iframe
          title="Rubber Duck"
          frameBorder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/a84cecb600c04eeba60d02f99b8b154b/embed"
        >
          {' '}
        </iframe>
      </div>
    </>
  );
}
