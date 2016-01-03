
<img src="/images/blog/grunt-logo.svg" alt="grunt-logo" style="float:left;width:200px;margin:0 20px 0 0" class="cover" />
This is a grunt boilerplate I developed and assembled for my needs. I’ve been looking around for something like this but couldn’t find it, that’s why I decided to share my achievement on my blog.
 If it’s your first read about grunt, please read this first instead: <a href="http://24ways.org/2013/grunt-is-not-weird-and-hard/">http://24ways.org/2013/grunt-is-not-weird-and-hard/</a> - this is a quite comprehensive guide on
 how to get started, what to install before using grunt on your machine, and it’s useful for the overall understanding of the basic concepts. I strongly recommend to start with that article before further reading.
 Once you’ve read and understood the basics, I’m supposing you have a general idea of what grunt does and how you feel like that article doesn’t cover everything you need. you clearly want more.
 <!--more-->
 Here’s my two cents:

 <h2>My boilerplate</h2>
 My Grunt Boilerplate does the following things:

 1) watches and live reloads html, javascript, css and syncs your project across multiple browsers and devices (live) <br>
 2) concatenates javascript files into a single minified production file <br>
 3) process <code class="language-markup">.scss</code>  with compass support and  <code class="language-markup">autoprefixer</code> <br>
 4) minifies images from a source folder to a compressed folder keeping them in sync <br>
 This boilerplate works with the following <strong>dependencies</strong> and <strong>modules</strong> (saved locally on the project folder):

<pre class="language-markup">
<code class="language-markup">
"grunt": "~0.4.1",
"grunt-autoprefixer": "~1.0.0",
"grunt-browser-sync": "^1.3.6",
"grunt-contrib-concat": "~0.5.0",
"grunt-contrib-imagemin": "^0.8.1",
"grunt-contrib-sass": "~0.7.4",
"grunt-contrib-uglify": "~0.5.1",
"grunt-contrib-watch": "~0.6.1",
"grunt-delete-sync": "0.0.2",
"grunt-newer": "^0.7.0"</code></pre><br>

 <h2>What this boilerplate does</h2>
 <span style="text-decoration: underline;">It watches and live reloads html, javascript, css and syncs your project across multiple browsers and devices</span><br> <br>
 This is done with the <a href="http://www.browsersync.io/">BrowserSync</a> plugin, which is a really great grunt feature. Aside from live reloading your assets, you will be able to access your project using an IP address on
 your mobile devices, making your workflow faster by synchronising URLs, interactions (scroll and text inputs for example) and code changes across multiple devices. This is crazy useful when working on responsive websites.

 <span style="text-decoration: underline;">It concatenates javascript files into a single minified production file</span> <br><br>
 I have structured my JS folder like this:

<pre class="language-markup"><code class="language-markup">js
|-- libs
   + plugin.js
|-- custom
   + main.js
|-- build
   + production.js
   + production.min.js</code></pre>
 - the “<strong>libs</strong>” folder contains the  <code class="language-markup">js</code>  files for plugins or libraries or whatever
- the “<strong>custom</strong>” folder contains one or more  <code class="language-markup">js</code>  file with my custom scripts
- the “<strong>production</strong>” folder contains both the  <code class="language-markup">production.js</code>  (the file where grunt injects all the javascripts) and the  <code class="language-markup">production.min.js</code> 
 (same file but minified that we will load up for use in our index.html file).
 Grunt will watch both “<strong>libs</strong>” and “<strong>custom</strong>”, concatenate the content into  <code class="language-markup">production.js </code> and then minify it creating or
  updating  <code class="language-markup">production.min.js</code> .

<span style="text-decoration: underline;">Sass processing with compass and autoprefixer</span><br><br>
 If you never heard of Sass it’s time to catch up! You can read about it in my other <a href="http://valeriopierbattista.com/blog/using-sass-and-compass-how-to-set-up-your-work-environment-and-your-project-folders-for-windows/">blog post</a>.
  This grunt boilerplate processes  <code class="language-markup">sass</code>  into  <code class="language-markup">main.css</code>  located in the “<strong>css</strong>” folder
   and then applies <a href="https://github.com/postcss/autoprefixer">autoprefixer</a> to the result. <strong>Compass</strong> is supported. If you want to edit the output format or add sass
    plugins in the mix, you can do it directly  in the  <code class="language-markup">gruntfile.js</code>  :

<pre class="language-javascript">
<code class="language-javascript">
sass : {
  dist : {
    options : {
      style : 'compressed', //no need for config.rb
      compass : 'true', //no need to @import compass
      // require : 'sassy-buttons' // plugins if needed!
    },
  files : {
      'css/main.css' : 'sass/main.scss'
        }
      }
    }, //end of sass
</code></pre>

 <span style="text-decoration: underline;">Image compression</span> <br><br>
 I've created two separate folders for this task:
 - <strong>src</strong>: contains the uncompressed images you save from photoshop
- <strong>dist</strong>: contains the compressed images (the ones you will link to in your project)
 Every time you save an image in the <strong>src</strong> folder (or in its subfolders), it will be compressed and saved in the <strong>dist</strong> folder. This will occur only when you add a new image to the <strong>src</strong>
  folder and only the <a href="https://github.com/tschaub/grunt-newer">newer</a> image will be compressed. What if you don’t need an image anymore? Just <a href="https://github.com/taylorcode/grunt-delete-sync">delete it</a>
  from the src folder and the dist folder will be updated accordingly.
 <strong>WARNING</strong>: if you start your project with an empty src folder, imagemin may not trigger.
 Hit  <code class="language-markup">ctrl+c</code>  then type  <code class="language-markup">Y</code> to exit grunt. Type  <code class="language-markup">grunt imagemin</code> .
  This will trigger imagemin which will compress the first image you created. Now type  <code class="language-markup">grunt</code> again and go back to your normal workflow, imagemin should trigger as expected from now on.

You can now either build the boilerplate from scratch or you can simply
<a href="https://github.com/vlrprbttst/grunt-boilerplate" target="_blank"> clone it from <i class="fa fa-github"></i> github!</a>.

Enjoy!
