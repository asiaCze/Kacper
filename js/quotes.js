import * as $ from './jQuery.js';

const loadRandomQuote = () => {
    const quote = jQuery.getJSON(
        "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", 
        function(a) {
            jQuery(".hero")
            .after(a[0].content + "<p>— " + a[0].title + "</p>")
      });
}

loadRandomQuote();