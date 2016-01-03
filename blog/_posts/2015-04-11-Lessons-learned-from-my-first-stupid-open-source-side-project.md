<img src="/images/blog/dux.png" alt="dux" class="cover"/>

It has been a while since I wanted to create an open source project, something just for fun and not necessarily <strong>useful</strong>.

The idea for <a title="drunkuserexperience.com" href="http://www.drunkuserexperience.com" target="_blank">www.drunkuserexperience.com</a> came after
<a href="http://tech.co/the-user-is-drunk-pay-this-ux-designer-to-get-drunk-and-evaluate-your-sites-ux-2015-03" target="_blank">reading about this guy </a> getting paid to get drunk and evaluate the client's website's UX is an altered state.
The idea was pretty funny and I thought I could do better offering a similar "service" for free.
I imagined a webpage where you could insert the URL of your website that would then be rendered in an <code class="language-html">iframe</code> all moving and blurry using css <code class="language-css">filter</code> and
<code class="language-css">transform</code> properties. Without thinking too much, I started working on it.
<!--more-->
<h2>The user must be guided and nothing has to be taken for granted</h2>
After just a couple of days of work I considered the project finished, so I started sharing the link with friends. I gathered some insights and first impressions from the users and some nice considerations came up from it, which brought me to
 iterate again and again and again on the UX of this little project.

<h2>UI and UX problems</h2>
Many didn't understand what the website was for because initially an open link was already provided, but it ended up being a distraction as the user just stared at the open website in the iframe and struggled to understand they
 had to actually insert a URL of their choice in the upper box.

This is what it looked like initially:

<img src="/images/blog/drunkux-3-1024x749.png" alt="drunkux-3"/>

What I expected the user to do was deleting the vice.com url from the input, insert a new one, click GO and when the website opened hit the <b><i class="fa fa-beer"></i> DRUNK VISION</b> button. This flow ended up being too much to
understand for the average user so I decided to leave the url input field empty and put an alert that invites the user to write a URL of their own right after the page loads.

<img src="/images/blog/drunkux-1-1024x177.png" alt="drunkux-1" />

I've also removed the <b>drunk vision button</b>, deciding to automatically start the effect as the newly input website opened, offering instead a <b>sober up</b> button to stop or toggle the animation.

<h2>"X-Frame-Options: SAMEORIGIN" response header</h2>
Another interesting thing I've noticed from google analytics was that the first website that comes up on a person's mind is very very often <strong>www.google.com</strong>, or social network websites. All of these cannot be rendered
 in an <code class="language-html">iframe</code> for <a href="http://stackoverflow.com/questions/8700636/how-to-show-google-com-in-an-iframe" target="_blank">security reasons</a> and that was a big weakness.
  I faced the problem adding a javascript <code class="language-javascript">function</code> that checked the value of the text input. I did a search on <a href="http://www.alexa.com/topsites" target="_blank">Alexa</a> for the most
  visited websites on the internet (which are all very likely to <em>not</em> load in an <code class="language-html">iframe</code> and are also very likely to be a user's first choice) and any time the input box contained the names
   of these websites, an alert would prompt the user to go for something else.

<img src="/images/blog/drunkux-2-1024x255.png" alt="drunkux-2" />

These tweaks ended up improving the website's user experience and conversion.

<h2>Lessons learned</h2>
Iterate until your reach the best experience possible asking for improvement suggestions from people you know at early stages of development.
<strong>Listen</strong> to <strong>anything</strong> your test subjects say and improve accordingly. Also when approaching a side-project, <strong>Keep It Simple</strong> and
 <strong>Stupid </strong>(<a href="http://en.wikipedia.org/wiki/KISS_principle">KISS</a>) and don't create necessarily something useful and serious, you can still get rewarded
  with people having some fun and sharing it with friends <i class="fa fa-smile-o"></i>.
