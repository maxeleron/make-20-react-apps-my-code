import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState('# sup');

  function handleChange(e) {
    setMarkdown(e.target.value);
  }
  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
    </div>
  );
}
