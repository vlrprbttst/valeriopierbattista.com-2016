
<img src="/images/blog/seal-color-aef0354c-150x150.png" style="width:120px;height:auto;float:left; margin-right:20px" alt="sass mixin" class="cover" />

Everytime I create a new project, I always begin with some kind of starter-kit that includes the basics every
project should have. I'm talking about an html5 index file for example, a folder structure I usually tend to use,
my <a title="Grunt Boilerplate for Front End Developers and Webdesigners" href="http://valeriopierbattista.com/blog/grunt-boilerplate-for-front-end-developers-and-webdesigners/">grunt boilerplate</a> files etc.
Today I want to share what's in my <code class="markup">_mixin.scss</code> file: a selection of just <strong>four useful mixins</strong> I think every front-end developer should consider using.

<!--more-->
<h2>Basic Reset Mixin</h2>
<pre class="language-scss"><code>@mixin reset {
  margin:0;
  padding:0;
}</code></pre>

This is useful when resetting <code class="language-markup">ul</code> and <code class="language-markup">li</code> tags for example, or even <code class="language-markup">h1</code> or <code class="language-markup">p</code> tags.
<h2>Clearfix Mixin</h2>
<pre class="language-scss"><code>@mixin clearfix {
  &amp;:after {
    content: "";
    display: table;
    clear: both;
  }
}</code></pre>

This is useful in fixing the <strong>parent collapsing around floated elements</strong> problem on the fly. A use case would be having an unordered list with its list items floating left (a menu for example), the <code class="language-markup">ul</code> will collapse. Just add this mixin to have it fixed:
<pre class="language-scss"><code>ul {
  @include clearfix;
  @include reset;
  li {
    float:left;
    @include reset;
    }
}</code></pre>


<h2>Vertical align anything Mixin</h2>
<pre class="language-scss"><code>@mixin vertical-align {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}</code></pre>

I stole this mixin <a href="http://zerosixthree.se/vertical-align-anything-with-just-3-lines-of-css/" target="_blank">here</a>, this is very very useful when having to center elements vertically without knowing their heights, this
is something I use a lot. I'm not prefixing the <code class="language-css">transform</code> property because I use <a href="https://github.com/postcss/autoprefixer" target="_blank">autoprefixer</a> for this task, if you don't, be sure
to add vendor prefixes to the mixin (chrome and webkit browsers still need the <code class="language-css">-webkit-</code> prefix to have it working for example).

<h2>Mediaqueries Shorthand Mixin</h2>
How tedious is it to write the whole <code class="language-css">@media screen and (min-width:20em) {}</code> everytime you have to throw a mediaquery? This is why I always use this shorthand mixin:
<pre class="language-scss"><code>@mixin respond-to-min($breakpoint) {
    @media all and (min-width: $breakpoint + em) { @content; }
}</code></pre>


This gives you the possibility to write less and decide the breakpoint value on the fly:
<pre class="language-scss"><code>div {
  width:100%;
  @include respond-to(20) {
    width:50%;
  }
}</code></pre>


I'm more into content-centric mediaqueries rather then deciding absolute breakpoints beforehand, so this mixin suits my needs very well. If you prefer to use pixel based mediaqueries,
just change this <code class="language-scss">$breakpoint + em</code> to this <code class="language-scss">$breakpoint + px</code>. asd

These four mixins are <strong>always</strong> in my <code class="language-markup">_mixin.scss</code> file. <strong>What's in yours?</strong> Feel free to comment.
