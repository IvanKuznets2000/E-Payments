
$('.starting-form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
    }).done(function() {
        $('.withdraw-form').fadeOut();

        $('.modal-success').fadeIn();
    }).fail(function() {
        $('.withdraw-form').fadeOut();

        $('.modal-fail').fadeIn();
    });
});
$('.starting-form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
    }).done(function() {
        $('.payout-form').fadeOut();

        $('.modal-success').fadeIn();
    }).fail(function() {
        $('.payout-form').fadeOut();

        $('.modal-fail').fadeIn();
    });
});