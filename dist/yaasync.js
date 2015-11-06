var yaasync = {
    assert: function(assumption, onReady, options) {

        if(typeof options != 'object') options = {};
        if(typeof options.interval != 'number') options.interval = 1000;                    
        if(typeof assumption == 'function') {
            if(assumption()) {
                yaasync.ready(onReady);
                return;
            }
        }
        else if(typeof window[assumption] != 'undefined') {
            yaasync.ready(onReady);
            return;
        }

        setTimeout(function() {
            yaasync.assert(assumption, onReady, options);
            }, options.interval); 
    },

    ready: function(onReady) {
        if(typeof onReady == 'string') {
            var node = document.createElement('script');
            node.src = onReady;
            node.setAttribute('async', '');
            document.body.appendChild(node);
        }
        else if(typeof onReady == 'function') {
            onReady();
        }
    }          
}