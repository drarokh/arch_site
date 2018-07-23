$(document).ready(function () {
    $("#navbarFullMenu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 600, function () {
                window.location.hash = hash;
            });
        }
    });

    $('#gal_prj_1').on('click', function () {
        $(this).lightGallery({
            dynamic: true,
            download: false,
            autoplayControls: false,
            share: false,
            thumbnail: false,
            zoom: false,
            mode: 'lg-fade',
            dynamicEl: [{
                "src": 'img/projects/Brion_tomb/1200_675/1_1200_675.jpg',
                'subHtml': '<h4>1Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/projects/Brion_tomb/1200_675/2_1200_675.jpg',
                'subHtml': "<h4>1Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/projects/Brion_tomb/1200_675/3_1200_675.jpg',
                'thumb': 'img/thumb-3.jpg',
                'subHtml': "<h4>1Coniston Calmness</h4><p>Beautiful morning</p>"
            }, {
                'src': 'img/projects/Brion_tomb/1200_675/4_1200_675.jpg',
                'thumb': 'img/thumb-3.jpg',
                'subHtml': "<h4>1Coniston Calmness</h4><p>Beautiful morning</p>"
            }, {
                'src': 'img/projects/Brion_tomb/1200_675/5_1200_675.jpg',
                'thumb': 'img/thumb-3.jpg',
                'subHtml': "<h4>1Coniston Calmness</h4><p>Beautiful morning</p>"
            }]
        })
    });

    $('#gal_prj_2').on('click', function () {
        $(this).lightGallery({
            dynamic: true,
            download: false,
            autoplayControls: false,
            share: false,
            thumbnail: false,
            mode: 'lg-fade',
            dynamicEl: [{
                "src": 'img/1.jpg',
                'thumb': 'img/thumb-1.jpg',
                'subHtml': '<h4>2Fading Light</h4><p>Classic view from Rigwood Jetty on Coniston Water an old archive shot similar to an old post but a little later on.</p>'
            }, {
                'src': 'img/2.jpg',
                'thumb': 'img/thumb-2.jpg',
                'subHtml': "<h4>2Bowness Bay</h4><p>A beautiful Sunrise this morning taken En-route to Keswick not one as planned but I'm extremely happy I was passing the right place at the right time....</p>"
            }, {
                'src': 'img/3.jpg',
                'thumb': 'img/thumb-3.jpg',
                'subHtml': "<h4>2Coniston Calmness</h4><p>Beautiful morning</p>"
            }]
        })
    });

});