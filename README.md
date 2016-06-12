# ebaytools
Ebay tools for mass checkout and feedback automation. Focus is on buyer account automation.

## Bookmarklet

### Positive All
```
javascript:var jq = document.createElement('script');jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(jq); setTimeout(function() {jQuery.noConflict(); console.log('jQuery loaded'); jQuery("input[value=positive]").click(); }, 1000);void(0);
```

### Negative All
```
javascript:var jq = document.createElement('script');jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(jq); setTimeout(function() {jQuery.noConflict(); console.log('jQuery loaded'); jQuery("input[value=negative]").click(); }, 1000);void(0);
```
