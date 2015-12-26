
I just recently discovered and used Sass Maps, which are basically arrays of values which can be intelligently used to write less code in particular situations. This is just one use case that was useful for me and may be
 useful for you to understand the power of <a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#maps">Sass Maps</a>.

<!--more-->

I wanted to achieve something like this:

<img src="/images/blog/Screenshot_1.png" alt="Screenshot_1" />

That's basically two <code class="language-none">div.box</code> (I wanted more by the way, and more colors) with two different look&amp;feel based on a particular color.
You have a big <code class="language-none">.bar</code> on top with a red background, an <code class="language-none">h1</code> and an <code class="language-none">a</code> of that same red color.
 The next  <code class="language-none">.box</code> is based on the same scheme, but has a green color instead. What I <strong>didn't </strong>want to do was writing endless css like
<pre class="language-scss">
<code class="language-scss">
.box {
    &amp;.color1 {
      .bar {background:red}
      h1 {color:red}
      a {color:red}
        }
    &amp;.color2 {
      .bar {background:green}
      h1 {color:green}
      a {color:green}
      }
}</code></pre>

for every section. That's when sass maps and <a href="http://thesassway.com/intermediate/if-for-each-while">sass control directives</a> come in handy: all I want to do is reproduce that color scheme
 just by changing the class of the containing <code class="language-none">div.box</code> and rely on a simple set of color managed by a sass map. That's way more maintainable ...

This is my html:
 <pre class="language-markup">
<code class="language-markup">
&lt;div class="box color1"&gt;
&lt;div class="bar"&gt;
	Some text here
&lt;/div&gt;
&lt;div class="text"&gt;
  &lt;h1&gt;This is a heading &lt;/h1&gt;
  &lt;h2&gt;And this is a subtitle&lt;/h2&gt;
&lt;p&gt;Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
amet quam egestas semper. Aenean ultricies mi vitae est. &lt;a href="#"&gt;Mauris placerat eleifend&lt;/a&gt; leo.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;</code></pre>
this is the sass map:
 <pre class="language-scss">
<code class="language-scss">
$color-set: (
    color1: #03A9F4,
    color2: #FF5252,
    color3: #8BC34A
);
</code></pre>
And this is the handy function that does the magic:
<pre class="language-scss">
<code class="language-scss">   
@each $color-class, $the-color in $color-set {
  .box.#{$color-class} {
    .bar {
      background: $the-color;
      &amp;.darken{background:darken($the-color,5%)}
     } //bar

    h1, a {color:$the-color}

  } //box.#{color}
} //end of loop
    </code></pre>
<p>
You're all set, you can add or remove colors from the sass maps, and just add the appropriate class in the <code class="language-none">div.box</code>, the function will then compile the appropriate style for
 every section based on the class assigned to the <code class="language-none">div.box</code>. <br>
 You can see it in action here: <a href="http://codepen.io/vlrprbttst/pen/vHclj/">Sass Maps Test</a> on <a href="http://codepen.io">CodePen</a>.
</p>
