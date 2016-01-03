I finally got to test the behavior of regular images on some retina displays today and see first hand how web images react on high pixel density displays (such as retina displays).

<img src="/images/blog/ipads.jpg" alt="ipads-1024x768" class="cover" />

<!--more-->

I prepared an example you can <a href="/downloads/retina-images.zip">download here</a> so you can see for yourself.

I decided to follow instructions from the official "<a href="https://developer.apple.com/library/safari/documentation/NetworkingInternet/Conceptual/SafariImageDeliveryBestPractices/ServingImagestoRetinaDisplays/ServingImagestoRetinaDisplays.html">Serving Images Efficiently to Displays of Varying Pixel Density</a>" article from the Apple Developer website and here's my considerations.
<h2>What's the matter with regular images on retina displays?</h2>
Long story short: they render blurry. This happens because, on higher pixel density displays, <a href="http://www.quirksmode.org/blog/archives/2010/04/a_pixel_is_not.html">a pixel is not a pixel</a>. On iPads with retina displays for examples, 1 regular pixels is made of FOUR pixels. So a 50x50px image will be rendered as a 25x25px stretched out to 50x50px. The result is quite aweful as you can imagine.

In my example, my image (called twitter.png) is 125x125px for normal displays, and scaled up to 250x250px for kick-ass retinas (this one is called twitter_2x.png). The dimensions are doubled just because I'm targeting iPads in my example.  The iPad has a "device-pixel-ratio" of 2 (double than normal). Other devices may have 1.3, 1.5 or even 3 (I'm looking at you Samsung S4), you do the math.
<h2>The "I don't care" case</h2>
If you don't care for the looks of your images on high-def displays,  just keep doing as you always did:
<pre class="language-markup"><code class="language-markup">&lt;img src="images/twitter.png"&gt;</code></pre>
One image for everyone. Retina displays will render it blurry but hey... who cares?
<h2>The "I care but I'm doing it wrong" case</h2>
In this case, you serve high definition images for everyone via html:
<pre class="language-markup"><code class="language-markup">&lt;img src="images/twitter_2x.png" width="125" height="125"&gt;</code></pre>
You're pointing to a bigger file sized image which will work out perfectly on iPads with retina, but will look slightly "wrong" on normal displays (blur again argh). You're also wasting bandwidth, which is not good. You're serving a BIG image even to a devices that don't need it.

One other thing you need to specify is the css pixel dimensions of the image in the img attributes, which I personally hate to do. You need to do it because the src points to a big image you need to shrink down, else, you'd be back to case 1: a big blurred image.
<h2>The "I'm targeting just (some) Apple mobile devices" case</h2>
Apple developer suggests this method, which i never heard before. I find it quite unconvenient as it's supported only by newer Apple devices (no desktop, no android, no iPad1, no older iPod Touch). It suggests to load two different images with css background with the following code:
<pre class="language-css"><code class="language-css">.header {
  background: url(../images/notworking.png); /*this image kicks in if the webkit image set feature is not supported */
  background: -webkit-image-set(url(../images/twitter.png) 1x, url(../images/twitter_2x.png) 2x);
  height: 125px;
  /* height in CSS pixels */
  width: 125px;
  /* width in CSS pixels */
}</code></pre>
Of course if this is not working you could back it up with a fallback image (notworking.png in my case) but that's too much syntax to write for something that is not even supported in the latest Chrome for Desktop. This leads us to the best way to deliver the right image to the right device in my opinion: using mediaqueries!
<h2> @media all and (-webkit-device-pixel-ratio: 2)</h2>
Using the css backgroud property you can target "normal" displays and with a simple mediaquery you can override the image path targeting higher density screens with the following code:
<pre class="language-css"><code class="language-css">.header-mq {
  background-image: url(../images/twitter.png);
  height: 125px;
  width: 125px;
}

@media all and (-webkit-device-pixel-ratio: 2) {
  .header-mq {
    background-image: url(../images/twitter_2x.png);
    -webkit-background-size: 100%;
    background-size: 100%;
  }
}</code></pre>
This code speaks for itself and what's best is it just WORKS.. On mobile, on desktop browsers, both on Apple or Android. Mediaqueries just work!
<h2>Serving Images With JavaScript</h2>
I won't cover this topic on this post as I think it deserves one on its own. There are many many ways so serve the right images to the right device with javascript but it can get quite tricky. Quoting Apple Developer's website:
<blockquote>You are placing code relating to visual data in your logic, a faux pas according to the Model-View-Controller design pattern.</blockquote>
I would like to give it a try soon though.
<h2>What's my device pixel density?</h2>
Tada! <a href="http://bjango.com/articles/min-device-pixel-ratio/">http://bjango.com/articles/min-device-pixel-ratio/</a>

Access this website from any device and you will know ;)
