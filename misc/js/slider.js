(function($){

Drupal.behaviors.atSlider = {};
Drupal.behaviors.atSlider.attach = function (context, settings) {

    $('.entity-bean.bean-slider').each(function(){
        // Find delta, options
        var delta = $(this).parents('.at-slider:eq(0)').data('delta').replace(/^slider-/, '');
        var options = settings.at_slider[delta];
        
        $(this)
            .find('.field-collection-container .field-name-slider-item .field-items')
            .cycle(options);
    });

};

})(jQuery);
