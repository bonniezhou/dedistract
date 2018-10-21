var addUnblockButton = function(selector) {
  var $content = $(selector).first();

  var msg = "You are in control of absolutely everything that is going on in your life.";

  var holdLength = 5000;
  var intervalLength = 100;
  var heldTime = 0;

  var shrinkTimeout = null;

  var fontSize = 20;

  var shrink = function() {
    heldTime += intervalLength;
    $showButton.css('font-size',
                    fontSize * ((holdLength - heldTime) / holdLength));
    if (heldTime >= holdLength) {
      $content.show();
      $showButton.hide();
    } else {
      shrinkTimeout = setTimeout(shrink, intervalLength);
    }
  };

  var $showButton = $("<div>")
    .addClass("dedistract-header")
    .css({
      'font-family': 'monospace',
      'font-color': 'red',
      'font-size': fontSize,
      'max-width': '500px',
      'min-height': fontSize * 1.5,
      'line-height': fontSize * 1.5 + "px",
      'text-align': 'left',
      'margin-left': 30,
    })
    .html(msg)
    .mousedown(function(evt) {
      if (evt.button === 0) {
        shrinkTimeout = setTimeout(shrink, intervalLength);
      }
    })
    .mouseout(function() {
      clearTimeout(shrinkTimeout);
    })
    .mouseup(function() {
      clearTimeout(shrinkTimeout);
    });

  $content.before($showButton);
};
