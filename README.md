Toasty.js
=============

Mortal Kombat's Toasty! easter egg for the web

### GET OVER HERE
Toasty.js is a simple jquery plugin based on the Raptorize plugin featured on ZURB Playground (http://zurb.com/playground/jquery-raptorize) and created by Mark Hayes (@mhayes). The Toasty.js plugin emulates the easter egg of the same name found in the Mortal Kombat video games, for an example of the easter egg you can watch <a href="http://www.youtube.com/watch?v=aLaERVA-P6o">this</a> video. 

### Implementation
Adding Toasty.js to your site is as simple as attaching the scripts to activate the plugin in the head of each page you'd like it in. Add the following to the head of each Toasty.js page:

```
<!-- jQuery: Grab Google CDN jQuery. fall back to local if necessary -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script>!window.jQuery && document.write('<script src="jquery-2.2.4.min.js"><\/script>')</script>

<!-- The toasty.js file  -->
<script src="toasty.js"></script>
```

**Technical Note:** Keep in mind that the 'script src=' values must point to the location you've saved the corresponding Toasty! files. Toasty.js has been tested with jQuery versions 1.x and 2.x. It isn't compatible with jQuery 3.x at this time.

### Choose your destiny
Toasty.js can be activated on a click event, a timer which waits for a set time after the page is loaded, or the legendary Konami Code. Each of these activation methods has their own script for the head section of your webpage as follows:

```
<!-- For the button version -->
<script type="text/javascript">
	$(window).load(function() {
		$('.button').toasty();
		});
</script>

<!-- For the Timer version -->
<script type="text/javascript">
	$(window).load(function() {
		$('.button').toasty({
			'enterOn' : 'timer',
			'delayTime' : 2000
		});
	});
</script>
	
<!-- For the Konami Code version -->
<script type="text/javascript">
	$(window).load(function() {
		$('.button').toasty({
			'enterOn' : 'konami-code'
		});
	});
</script>
```

**Technical Note:** The 'delayTime' : 2000 entry under the Timer version dictates how long the script waits in milliseconds after the page loads before activating the Toasty.js plugin. The Konami Code version will only activate once per page load.

### Support or Contact
Having trouble getting things set up? Open an issue and I'll make a best effort to respond when I can.
