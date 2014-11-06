$('.gallery').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery: {enabled: true},
    tLoading : 'Loading image #%curr%...',
    mainClass : 'mfp-img-mobile',
    tError : '<a href="%url%">The image #%curr%</a> could not be loaded.',
    titleSrc: function (item) {
        return item.el.attr('title');
    }
});