<img src="/images/blog/prepros.png" alt="optimized-by-tinypng" style="width:200px;float:left;margin-right:20px" class="cover" />

No more command line non-sense with Prepros! YAY! One thing i love about Prepros is how easy it is: just add a project, specify where your sass, js and html files are and you are good to go, Prepros will compile the rest. And it compiles HAML too! Gettingstarted is easy and <a href="http://alphapixels.com/prepros/docs/" target="_blank">the official documentation</a> is pretty complete,  i've learnt how to use the software lightning-fast reading the docs section of the website. In this post i will highlight the features I think are the most interesting.

<!--more-->
<h2>Getting Started</h2>
Download the software at <a href="http://alphapixels.com/prepros/" target="_blank">http://alphapixels.com/prepros/</a> , install and open it.

<img src="/images/blog/first.png" alt="first"  />

Now set-up your first project dragging and dropping the folder into the window or clicking the PLUS button on the top right menu.
<a href="/images/downloads/prepros-testing.zip">You can download the sample project I used for this demo clicking here!</a> Once you're done, Prepros will scan your uploaded folder and put your to-be-processed files in the main window

<img src="/images/blog/openproject.png" alt="openproject" />

You can specify a number of options that are strictly related to the current project you're working in, you can view the option window clicking the gear icon on the bottom left-menu (that's your project related menu)

<img src="/images/blog/project-specific-options.png" alt="project-specific-options"  />

One GREAT feature Prepros has is the <strong>live refresh option</strong>. Once the files are compiled, your browser will automatically refresh so you can see the changes without hitting f5, or f9, or ctrl+f5, or ctrl+r like a mad man. You can see the live refresh in action using the Prepros debug engine clicking on the globe icon. You can also select your output folders in the second tab and the third tab as an interesting filter option that allows you to exclude certain files from the project based on comma-separated names. One great other feature I love about this software is the image optimization engine. Clicking on the photo icon, Prepros will recognize all the images of your project and will losslessly optimize it!

<img src="/images/blog/imageopti.png" alt="imageopti" />

I've done a quick test on image optimization and the compression is quite OK. I optimized the same PNG file with Prepros and TinyPng.org (see my <a title="Lossless PNG compression the quick way" href="http://valeriopierbattista.com/blog/lossless-png-compression-the-quick-way/">previous post </a>for
more info) and well, TinyPNG.org wins. But still, you have a quick tool to fairly optimize your pngs, and it does gifs and jpgs too!
<h2>What about JS?</h2>
Prepros does great on JS too! It automatically minifies and concatenates your js files into ONE if you want, and is intelligent enough to ignore the already minified js in your folders. I won't go deep in this because <a href="http://alphapixels.com/prepros/docs/js-concat-minify.html"
target="_blank">the docs section on the official website</a> explains everything and is pretty straight forward.
<h2> Some advice</h2>
Setting default overall options from the top right menu won't work for me. I got stuff set there, but opening a new project won't keep that options. I suggest you click on single files in your main window and choose the options you prefer for each one

  <img src="/images/blog/fullcompass-support.png" alt="fullcompass-support"/>


Prepros comes with Sass, Compass and Haml support already installed, no need to install the gem files BUT... somehow, using the full Compass support (which includes ALL of Compass features and not only the CSS3 module) will ignore your config.rb root file, and will generate compass default folders in your project folder. To avoid this, go to the overall settings and click on  "use custom ruby" specifying the path of ruby.exe in your computer. This will use your pre-installed gems and with this on, you can use compass plugins too!

<img src="/images/blog/advancedsettings.png" alt="advancedsettings" />

Thumbs up for this great software!
