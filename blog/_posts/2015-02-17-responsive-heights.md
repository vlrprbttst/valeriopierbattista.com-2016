
Responsive webdesign is very much centered on how to manage the widths of our elements, but what about the heights? 
Heights are usually tied to the lenght of the content, and are rarely a problem to address, but in some cases (<strong>especially on mobile</strong>) sometimes you need some elements to always be visibile on the screen,
 and some others (usually content boxes) to scroll, as you want all the content to appear on the window without having to scroll down the whole page to reveal more.

<!--more-->

Let's imagine a scenario like the one in this  picture:

<img src="/images/blog/responsive-heights11.png" alt="responsive heights"  />

We have our app, or website, with three main elements:
<ul>
	<li>A logo on top</li>
	<li>Some content (stroked in red)</li>
	<li>An advertisement banner</li>
</ul>
Let's say both the <strong>banner</strong> and the <strong>logo</strong> on our screen has to be fixed positioned, so they'll always have to be visible, and the content  in our red-stroked box must scroll, as we don't know how much content we
 will place in that box.

The first thing I'd think of doing is using <code class="language-css">position:fixed</code> for the logo and the banner, giving some top and bottom padding or margin to the body so that the content would scroll
 and won't overlap on the fixed elements. But let's say <a href="http://bradfrost.com/blog/mobile/fixed-position/" target="_blank">Fixed Positioning</a> was not an option, how would you manage the 
 <strong>height </strong>of the <code class="language-css">#content</code> div?

We could use <strong>percentage heights</strong> for the containers of my elements, maybe something like
<pre class="language-css"><code>
#logo,
#banner {height:15%}
#content {height:70%}</code>
</pre>
but what happens when you have a device with a larger screen? The logo and the banner would adapt to the larger screen size and may exceed the 15% height and the layout would then break.
 When working on very complex projects, you may also not have complete control over the html and you may end up in a situation where your element is deeply nested inside a dynamically generated html structure. 
 Giving <code class="language-css">#logo</code> a percentage height would be uneffective in this scenario:
 
<pre class="language-markup"><code class="language-markup">&lt;div class="something"&gt;
  &lt;div class="something-else"&gt;
    &lt;div class="something-elser"&gt;
      &lt;div id="logo"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

The question still remains: what height should we give to the <code class="language-markup">#content</code> element? And how? Using <code class="language-css">calc()</code> or <code class="language-css">flex</code> for the job would be wonderful,
 but the support is <a href="http://caniuse.com/#search=calc" target="_blank">still</a> <a href="http://caniuse.com/#search=flexbox" target="_blank">sketchy</a>. My last thought was inevitably giving the element a px height with jQuery.
<p class="codepen" data-height="337" data-theme-id="8358" data-slug-hash="hrAli" data-default-tab="result" data-user="vlrprbttst">See the Pen <a href="http://codepen.io/vlrprbttst/pen/hrAli/">dynamic height of a div based on other divs and window.innerHeight</a> by Valerio (<a href="http://codepen.io/vlrprbttst">@vlrprbttst</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script src="//assets.codepen.io/assets/embed/ei.js" async=""></script>

This simple function gives a div a dynamic height based on the heights of other divs and in relation to the window inner height:

<pre class="language-javascript"><code>(function () {
    var heights = window.innerHeight;
    var outerHeights = $("#logo").outerHeight(true) + $("#banner").outerHeight(true);
    $('#content').css('height', (heights - outerHeights) + "px");
})();
</code>
</pre>
What this function does is calculating the height of the window and the height of the elements that needs to be always visible (including their paddings, margins, borders etc.) and then it does
 a subtraction between the <code class="language-javascript">window.innerHeight</code> and those two other elements (<code class="language-css">#logo</code> and <code class="language-css">#banner</code> in our case) and
  gives a px height to our scrollable area (<code class="language-css">#content</code>). Add a <code class="language-javascript">$(window).resize</code> function to your code and you are covered even when the user 
  stretches or shrinks the browser window, or if he flips the device to a different orientation.

I used this very function to manage the height of the navigation of my website for example, to avoid the following:

<img src="/images/blog/responsive-heights2-1024x572.png" alt="responsive-heights2" />

Be aware that, if the result of the function returns a negative number, the layout will break. This little function turned out to be very useful in many
 scenarios I've encountered but if you would have managed this problem in other ways, please write it in the comments, I'd be glad to read about other point of views and options.
 