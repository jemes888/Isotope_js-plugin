 var $grid = ('.grid').isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
$('.filter button').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-name');
  $grid.isotope({ filter: filterValue });
});