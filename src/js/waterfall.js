var $grid = $('.waterfall').masonry({
  itemSelector: '.waterfall-item',
});
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});
