
<img src="/images/blog/penthouse.jpg" alt="penthouse" class="cover" />

We all know the best way to serve our website to our audience is to serve it <strong>fast</strong>, as fast as humanly possible. A couple of key factors for speed are how you serve css and javascript in your page. One thing Google suggests to do
 is to inline in the <code class="language-markup">head</code> of your document the "<strong>above the fold</strong>" css, which translates to all the css that paint what users see first when accessing your website:
  the header, the menu, the main content... The footer is clearly <strong>not </strong>above-the-fold material for example.
<!--more-->
Talking about performance, when testing your page speed on Google's <a href="https://developers.google.com/speed/pagespeed/insights/" title="PageSpeed Insights tool" target="_blank">PageSpeed Insights tool</a>, you probably came across this
 warning at some point:
<img src="/images/blog/abovethefold.png" alt="abovethefold" style="max-width:460px;display:block;margin:0 auto 20px" />

<h2>Eliminate render-blocking JavaScript and CSS in above the fold content</h2>

There are many ways to do this and the one I prefer is using a grunt plugin called <a href="https://www.npmjs.com/package/grunt-penthouse" title="grunt-penthouse" target="_blank">penthouse</a>.
Penthouse automatically extracts the above the fold css in a separate file, which you can later embed in the <code class="language-markup">head</code> of your documents either manually, or automatically.

<h2>Setup</h2>

Setting it up is pretty easy. Same old
<pre><code class="language-shell">npm install grunt-penthouse --save-dev</code></pre> from the shell in the root of your project, enable it in your gruntfile with
 <pre><code class="language-javascript">grunt.loadNpmTasks('grunt-penthouse');</code></pre> and create a task like the following:

<pre class="language-javascript"><code>penthouse: {
    extract : {
        outfile : 'css/critical.css',
        css : 'css/main.css',
        url : 'http://localhost/your-website',
        width : 1200,
        height : 500
    },
  },
</code></pre>

I automate the creation of this file everytime my css file changes. I use sass for css authoring, so my watch part of the gruntfile looks something like

<pre class="language-javascript"><code>css : {
  files : ['sass/**/*.scss'],
  tasks : ['sass', 'autoprefixer', 'penthouse'],
  options : {
    spawn : false,
    }
 },</code></pre>


You clearly see how this tasks chain work: sass compiles <code class="language-markup">main.css</code> <i class="fa fa-long-arrow-right"></i> <code class="language-markup">main.css</code> gets autoprefixed
 <i class="fa fa-long-arrow-right"></i> <code class="language-markup">critical.css</code> with the above the fold styles is produced.

<h2>Embedding</h2>

What should we do with <code class="language-markup">critical.css</code>? Open it, copy the content and paste it in the <code class="language-markup">head</code> section of all of our pages?
 That's tedious, no way this is maintainable. There's a way to automate this if your project is made in <code class="language-markup">php</code> or any other language that can use <strong>includes</strong>.
  I use <code class="language-markup">php</code> so the way I automate this is hacking the file extension of the <code class="language-markup">critical.css</code> file into <code class="language-markup">critical.css.php</code>
  in the grunt task and then I include it in every page like this:

<pre class="language-markup"><code class="language-markup">&lt;style type="text/css"&gt;
  &lt;?php include 'css/critical.css.php';?&gt;
&lt;/style&gt;</code>
</pre>
This way the embedding is automatic and always up-to-date and you won't have to worry about anything. You can now safely move the <code class="language-markup">main.css</code> file at the bottom of the page.
Team this up with <a href="http://www.feedthebot.com/pagespeed/defer-loading-javascript.html" target="_blank">deferring javascript</a> and you'll easily get ~10 points on the pagespeed score.

One bad thing about this approach is that, if you have linked images in the above the fold css, the paths won't be updated and effective.
