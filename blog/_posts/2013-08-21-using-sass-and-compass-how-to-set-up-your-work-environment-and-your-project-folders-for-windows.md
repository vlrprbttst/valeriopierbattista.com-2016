
<img src="/images/blog/sass_compass.png" alt="sass_compass" class="cover" />

One thing that took me a lot of time to figure out was how to set up my computer to be able to start using sass and compass and how to create and configure my project folder. For a newbie it’s quite hard to figure out what you really need to do to make the whole thing work and start using. If you’re reading this you already know what sass and compass are so let’s go straight to the point.

<!--more-->
<h2>Setting-up the environment</h2>
<strong>1) First thing first: install Ruby</strong>

If you are interested in working with sass and compass only, you don’t even need to know what Ruby is, you only need it to be installed. In its creator’s words: “Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write”. You can find the windows installer here: <a href="http://rubyinstaller.org/downloads/" target="_blank">http://rubyinstaller.org/downloads/</a> - have you installed it? Great, let’s proceed further.

<strong>2) Install Sass</strong>

Sass is a Ruby gem, to make it “understandable” to your computer, the sass gem must be installed. To install it click on windows Start, in the searchbox type “cmd” and hit enter. Now type “gem install sass” and wait for the process to be completed. Done … Now your computer knows what sass is.

<strong>3) Install Compass</strong>

Another thing that took me some time to understand is the difference between Sass and Compass. Basically, Compass is a collection of precompiled mixins written in sass. Sass is the language and Compass is sort of a plugin that works on top of Sass. To install compass click on windows Start, in the searchbox type “cmd” and hit enter. Now type “gem install compass” and wait for the process to be completed. Done … As said before, Compass works on top of Sass having already compiled a series of super-useful mixins and so much more that helps you compiling your scss. Another very useful thing it does, is creating a reference file with the “map” of your project. But we’ll deepen this subject later.

<strong>4) What editor software can i use?</strong>

Dreamweaver doesn’t highlight your scss code. Here’s a list of open source editors and add-ons that “understand” sass/scss language: <a href="http://sass-lang.com/editors.html" target="_blank">http://sass-lang.com/editors.html</a> - One editor I think is pretty damn good and that is not listed there is APTANA. You can download Aptana here: <a href="http://www.aptana.com/" target="_blank">http://www.aptana.com/</a> and get it installed.
<h2>Project folders</h2>
Your environment is now ready. So, how do we get started writing? I usually start my projects creating a dedicated folder with divided subfolders for css, javascripts, images etc. Compass gives you the possibility to do this, but I prefer to choose how my project structure will be like. One thing we really need is the “config.rb” file, which is basically a text file that contains the map of your project structure. That’s where we will point out WHERE is WHAT in our root project folder.

Now go on your desktop for example, or anywhere on your computer where you intend to keep your project and hit shit SHIFT + Right click and then “open command window here”, this way the path where you opened the terminal will already be in the right folder. Now write: “compass create new-project”. This will create a new folder named “new-project” on your desktop. Open it and delete everything but the config.rb file.

This will be the folder your project will be in. You can now create all your subdirectories. I usually use this structure for my projects:
<pre class="language-markup">
<code class="language-markup">
index.html
config.rb #must be placed in the root
css/
|
|-- main.css #this is where sass will inject your compiled sass file
|
sass/
|
|-- main.scss #this is where you will write your code
|
js/ #your js files here
images/ #your image files here</code></pre>
Now open the config.rb file. Windows will ask you to choose a software to open the file, just open it with notepad. Here’s my usual config.rb file for this webstructure. Know that any text preceded by an hashtag is “commented”. I’ve added a [number] to explain what each line means later in this post.
<pre class="language-markup">
<code class="language-markup">
# [1] Require any additional compass plugins here.

# [2] Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"

# [3] You can select your preferred output style here (can be overridden via the command line):
output_style = :compressed

# [4] To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# [5] To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# [6] If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss &amp;&amp; rm -rf sass &amp;&amp; mv scss sass</code></pre>
Let’s see what each line means:

<em>[1]</em> Plugins are compass-like add-ons that work on top of sass. For example <a href="http://jaredhardy.com/sassy-buttons/" target="_blank">http://jaredhardy.com/sassy-buttons/</a> is a plugin. After installing the gem, you’ll paste
<pre class="language-markup">
<code class="language-markup">
require 'sassy-buttons'</code></pre>
at the bottom of this line, you’ll add
<pre class="language-scss">
<code class="language-scss">
@import “sassy-buttons”;</code>
</pre>
in your main.scss file and you’ll be able to use the mixins of sassy-buttons (follow the reference on the site to know how)

<em>[2]</em> That’s your project reference map. That’s useful when you’ll start editing because following these paths compass will know where stuff are in your project.

<em>[3]</em> here you can choose the way css will be outputted from the scss. I always use <code class="language-markup">:compressed</code> because it’s lighter. The options are <code class="language-markup">:nested</code>, <code class="language-markup">:expanded</code>, <code class="language-markup">:compact</code>, or <code class="language-markup">:compressed</code>. Compressed is, of course unreadable, but you’ll notice you’ll only need the main.css for the upload on the server, you won’t work on that file, so its readability is not a problem.

<em>[4]</em> No need to explain here. Just uncomment this line and be sure it’s set to true.

<em>[5]</em> Set this annoying feature to false. When true, blocks of css will be commented. Not very useful to me.

<em>[6]</em> ignore this part and leave it commented.
<h2>Getting Started</h2>
Ok! So far so good.. but there’s still something to do! You set up your workstation, you installed the gems, you configured your config.rb but how do you tell compass to “watch” over the files you’re writing? Simple: open your project directory, shift+right-click in it, open command window and type: compass watch
From now on, compass is watching for changes. Everytime you save your main.scss, it will output the compiled code to main.css. Easy uh?

It’s time to open main.scss file and do one last little step. On top of your scss file write
<pre class="language-scss">
<code class="language-scss">@import “compass”;</code></pre>
You’re done! Good job! You can now write sass code in your main.scss file, use compass mixins and have all your work outputted in a lightweight compressed format in main.css! How cool is that?
