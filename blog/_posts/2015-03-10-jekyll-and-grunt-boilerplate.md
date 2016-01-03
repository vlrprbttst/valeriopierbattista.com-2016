
<img title="jekyll and grunt boilerplate" src="/images/blog/gruntjekyll.png" alt="jekyll and grunt boilerplate" class="cover"/>

<strong>Jekyll</strong> is great, and it gets even better with <strong>Grunt </strong> automating repetitive tasks. I'm assuming you already know what <a href="http://jekyllrb.com/" target="_blank">Jekyll</a>
and <a href="http://gruntjs.com/" target="_blank">Grunt</a> are. I've covered Grunt in a
<a title="Grunt Boilerplate for Front End Developers and Webdesigners" href="http://valeriopierbattista.com/blog/grunt-boilerplate-for-front-end-developers-and-webdesigners/">previous blog post</a>
so you may want to check that out before continuing, as we will use a very similar <em>gruntfile</em>. If you never used <strong>Jekyll</strong> before,
I suggest you to read <a href="https://www.andrewmunsell.com/tutorials/jekyll-by-example" target="_blank">this great tutorial</a> before starting. Jekyll is a static site generator,
 and it's <em>"blog aware"</em>, this means it's ready to manage posts, categories, excerpts and all you need to create and maintain a modern blog without having to deal with CMS installations, theme hacking and databases.
 You are in complete control here and you will have more time to focus on what really matters: <strong>your content</strong>.

<!--more-->

In this boilerplate, I've merged a classic Jekyll website with the <a title="Grunt Boilerplate for Front End Developers and Webdesigners" href="http://valeriopierbattista.com/blog/grunt-boilerplate-for-front-end-developers-and-webdesigners/">Grunt Boilerplate</a> I use for my projects. What we are building here is a website with a <strong>home </strong>page, an <strong>about</strong> page and a <strong>blog</strong>. Running two command windows, you'll have Jekyll watching and building your <code class="language-shell">_site</code>, and Grunt doing stuff like compiling sass, autoprefixing css, browser syncing and a lot more.
<h2>Development environment</h2>
Here's what I'm on:

<strong>OS</strong>: <i class=" fa fa-windows" style="color: #00bbf1;"></i> Windows 8.1<br>
<strong>Ruby</strong>: Ruby 2.1.5 (x64) <a href="http://dl.bintray.com/oneclick/rubyinstaller/rubyinstaller-2.1.5-x64.exe?direct" target="_blank">download</a><br>
<strong>Ruby DevKit</strong>: DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe <a href="http://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe?direct" target="_blank">download</a><br>
<strong>Jekyll</strong>: 2.5.3

Jekyll is not officially supported on Windows, so if you are on Windows you will have to follow the instructions <a href="http://jekyll-windows.juthilo.com/" target="_blank">on this website</a> to have it working. I've encountered problems with Ruby 1.9.3 so I recently switched to Ruby 2.1.5 and everything works perfectly now. One thing you'll probably have to do is <a href="https://gist.github.com/luislavena/f064211759ee0f806c88" target="_blank">follow the instructions on this post</a> if you encounter problems with installing gems on your machine after switching to a newer version of Ruby.

Ok, you can now <a href="https://github.com/vlrprbttst/jekyll-grunt-boilerplate" target="_blank">clone it from <i class="fa fa-github-alt"></i> github</a>.

<h2>The Boilerplate</h2>
Open the folder, and open two command windows on the root of the project. On one, type <code class="language-shell">jekyll serve</code>. You should see this:

<img src="/images/blog/terminaljekyll.png" alt="terminal"/>

On the other cmd, type <code class="language-shell">grunt</code>. You should see this:

<img src="/images/blog/terminal2jekyll.png" alt="terminal2"/>

A browser window should have popped up and you should see the website whose source is in our <code class="language-shell">_site</code> folder. You should also see a notification that says <strong>"Connected to BrowserSync"</strong>.
It's on! We can now explore what it's in our jekyll and grunt boilerplate.

<h2>Folder structure</h2>
Here's what the folder structure looks like:

<img src="/images/blog/folderstructure.png" alt="folderstructure" />

For clarity's sake, I've kept the project as simple as I could. You can explore files and folders to get the idea of where is the Jekyll stuff: I kept all the default settings except for the blog section which I moved in a separate
 <strong>blog</strong> folder.
<h2>Gruntfile</h2>
<i class="fa fa-check" style="color: #20ce6d;"></i> It watches any changes, live reloads browsers synced across multiple devices proxying jekyll's default <code class="language-shell">localhost:4000</code> server into browserSync's default <code class="language-shell">localhost:3000</code><br>
<i class="fa fa-check" style="color: #20ce6d;"></i> It compiles Sass with Compass support and autoprefixes the minified output<br>
<i class="fa fa-check" style="color: #20ce6d;"></i> It compresses and optimizes images coming from the <code class="language-shell">images/src</code> folder to the <code class="language-shell">images/dist</code> and <code class="language-shell">_site/images/dist</code> folders<br>
<i class="fa fa-check" style="color: #20ce6d;"></i> It syncs image deletion from the <code class="language-shell">images/src</code><br>
<i class="fa fa-check" style="color: #20ce6d;"></i> It concatenates javascript into a single minified production file<br>
<i class="fa fa-check" style="color: #20ce6d;"></i> It minifies all the html in the <code class="language-shell">_site</code> folder<br>

I decided not to use the <a href="https://github.com/dannygarcia/grunt-jekyll" target="_blank">grunt-jekyll</a> task because it looks like it's not maintained by the time I'm writing this, so I preferred to go the 2-cmd way.
 I won't go deeper into the <strong>gruntfile.js</strong> because it's
 <a title="Grunt Boilerplate for Front End Developers and Webdesigners" href="http://valeriopierbattista.com/blog/grunt-boilerplate-for-front-end-developers-and-webdesigners/">practically identical to the one described here</a>.
 Same thing about Jekyll because I'm assuming you already have some knowledge about it.
 The gruntfile may have some misused settings or redundancy, if you have any suggestion on how to make it better please comment down below.

Happy Jekylling!
