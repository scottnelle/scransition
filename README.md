scransition
===========

A jquery plugin for triggering transitions when you scroll to an element. This plugin adds the class 'scransition' to your targeted elements. When an element appears on screen, the class is removed and any css associated with the class will be animated away with it. In this way, you can easily animate any CSS parameter which can be animated. This plugin requires CSS transition (or -webkit-transition) support in order for the animation to work. Currently, global support for CSS3 transitions is quite good. [Check CanIUse.com](caniuse.com/#search=transition) to see if your targeted browsers currently have support.

## Use

### JavaScript
```javascript
jQuery(document).ready(function($){
	$('h2').scransition();
	$('img').scransition({ transition:'0.4s', offset:150 });
});
```

### CSS
```css
img.scransition {
	padding-top: 15px;
	opacity: 0;
}
h2.scransition {
	padding-left: 100px;
	opacity: 0;
}
```

That's it! The targeted elements will start off with a padding offset and 0 opacity. When they scroll into the viewport, the class will be removed and they'll be eased into place while slowly fading in to 100% opacity. Easy!