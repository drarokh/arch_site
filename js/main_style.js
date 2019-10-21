function scroll_to(id) {
    $('html,body').animate({
        scrollTop: $('#' + id).offset().top
    }, 'slow');
}

$(document).ready(function () {
    
    $('#galPrj1').on('click', function () {
        $(this).lightGallery({
            dynamic: true,
            download: false,
            autoplayControls: false,
            share: false,
            thumbnail: false,
            zoom: false,
            mode: 'lg-fade',
            hideBarsDelay: 1000,
            dynamicEl: [{
                'src': 'img/projects/Brion_tomb/1200_675/1_1200_675.jpg',
                'responsive': 'img/projects/Brion_tomb/800_450/1_800_450.jpg 450',
            }, {
                'src': 'img/projects/Brion_tomb/1200_675/2_1200_675.jpg',
                'responsive': 'img/projects/Brion_tomb/800_450/2_800_450.jpg 450',
            }, {
                'src': 'img/projects/Brion_tomb/1200_675/3_1200_675.jpg',
                'responsive': 'img/projects/Brion_tomb/800_450/3_800_450.jpg 450',
            }, {
                'src': 'img/projects/Brion_tomb/1200_675/4_1200_675.jpg',
                'responsive': 'img/projects/Brion_tomb/800_450/4_800_450.jpg 450',
            }, {
                'src': 'img/projects/Brion_tomb/1200_675/5_1200_675.jpg',
                'responsive': 'img/projects/Brion_tomb/800_450/5_800_450.jpg 450',
            }]
        })
    });

    $('#galPrj2').on('click', function () {
        $(this).lightGallery({
            dynamic: true,
            download: false,
            autoplayControls: false,
            share: false,
            thumbnail: false,
            zoom: false,
            mode: 'lg-fade',
            hideBarsDelay: 1000,
            dynamicEl: [{
                'src': 'img/projects/wave2016/1200_675/1_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/1_800_450.jpg 450',
            }, {
                'src': 'img/projects/wave2016/1200_675/2_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/2_800_450.jpg 450',
            }, {
                'src': 'img/projects/wave2016/1200_675/3_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/3_800_450.jpg 450',
            }, {
                'src': 'img/projects/wave2016/1200_675/4_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/4_800_450.jpg 450',
                'subHtml': "<h4>Il concept parte da una selezione di un percorso the include un sistema di vuori caratteristici di Venezia</h4>"
            }, {
                'src': 'img/projects/wave2016/1200_675/5_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/5_800_450.jpg 450',
                'subHtml': "<h4>La forma risultante è stata alterata, tagliata, per connettere i due bordi</h4>"
            }, {
                'src': 'img/projects/wave2016/1200_675/6_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/6_800_450.jpg 450',
                'subHtml': "<h4>Successivamente, i vuoti principali sono diventati vuoti dell'arcipelago il quale è stato formato attraverso un processo di offset</h4>"
            }, {
                'src': 'img/projects/wave2016/1200_675/7_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/7_800_450.jpg 450',
                'subHtml': "<h4>Il progetto fornisce una doppio percorso di connessione: uno veloce e diretto, uno lento e sinuoso.<br>Poi, in ogni isola, si definisce il costruito e gli spazi verdi</h4>"
            }, {
                'src': 'img/projects/wave2016/1200_675/8_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/8_800_450.jpg 450',
                'subHtml': "<h4>La tipologia strutturale è quella dell'Overhanging Slab e definisce un \"piano nobile\" posto a +6.00 m, sul quale è collocato il costruito e le attività principali.<br>Inoltre è presente un piano secondario, situato ad un livello inferiore e che si relaziona di più con la laguna.<br>Nel livello inferiore saranno collocate attività tradizionali veneziane come il mercato, la pesca, le regate, ecc, mentre sul \"piano nobile\" è situato un parco divertimenti</h4>"
            }, {
                'src': 'img/projects/wave2016/1200_675/9_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/9_800_450.jpg 450',
            }, {
                'src': 'img/projects/wave2016/1200_675/10_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/10_800_450.jpg 450',
            }, {
                'src': 'img/projects/wave2016/1200_675/11_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/11_800_450.jpg 450',
            }, {
                'src': 'img/projects/wave2016/1200_675/12_1200_675.jpg',
                'responsive': 'img/projects/wave2016/800_450/12_800_450.jpg 450',
            }]
        })
    });

});