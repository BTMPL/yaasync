## Synopsis

yaasync loader od "Yet Another Async" loader is a simple library that will let you load and call your JS synchronically depending on conditions you speciffy. It's a *simple* alternative to using big libraries such as [head.js](http://headjs.com/)

## Code Example

You need to load yaasync.js synchronically or wrap your binding in window.onload. After you've loaded the library you can make calls to `yaasync.assert`:

    yasstnc.assert(condition, callback)
    
example:

    yaasync.assert('jQuery', function() {
        jQuery('#log').html('jQuery was succesfully loaded')
    });
    
`condition` can be either an anonymous function (that will evaluate to `true` once the conditions are met) or string containing the variable name. In case you're using the string option, the variable must be globaly visible as `window.variable`

## License

A short snippet describing the license (MIT, Apache, etc.)
