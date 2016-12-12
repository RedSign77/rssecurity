(function ($) {
    $(document).ready(function () {
        $('button').bind('click', function(){
           var btn = $(this);
            if (btn.data('url')) {
                window.location.href = btn.data('url');
            }
        });
    });
})(jQuery);
