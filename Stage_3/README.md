# Save me
<div class="step-text">
<h3 id="description">Description</h3>
<p>You can convert the text into different cases, excellent! Now let's add the ability to save the changed text as a <code class="language-javascript">.txt</code> file!</p>
<h3 id="objectives">Objectives</h3>
<p>Add one more button to the page. Assign the <code class="language-javascript">save-text-file</code> id to it. Add another event handler for the button.</p>
<p>When the button is clicked, you should get the text in the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" rel="noopener noreferrer nofollow" target="_blank">textarea element </a>and generate the <code class="language-javascript">text.txt</code> file.  The resulting file should contain the text from the <code class="language-javascript">textarea</code> element.</p>
<p>Here is a code snippet that shows how you can implement it:</p>
<pre><code class="language-javascript">function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
download("hello.txt","This is the content of my file :)");
</code></pre>
<h3 id="example">Example</h3>
<p><strong>Example 1: </strong><em>an example of your app</em></p>
<p><img alt="Title case text in Case converer application" src="https://ucarecdn.com/de0d5343-f8de-434b-a0b7-8c9e9cf1d9aa/" width="1083"/></p>
</div>
