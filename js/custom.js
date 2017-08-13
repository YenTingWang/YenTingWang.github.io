$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '475102893',
        limit: 15,
        resolution: 'standard_resolution',
        accessToken: '475102893.1677ed0.277e5c090b5c4458b1b52c11a2272fcd',
        sortBy: 'most-recent',
        template: '<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 gallery"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });
});