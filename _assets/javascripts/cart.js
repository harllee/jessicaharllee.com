$(function() {
  return $('#cart_form').on('click', '.remove', function(event) {
    event.preventDefault();
    return $(this).closest('.table').find('input[id$=_qty]').val(0).closest('form').submit();
  });
});
