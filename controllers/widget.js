$.hide = hide;
$.show = show;

(function constructor(args) {

  if (!OS_IOS && !OS_ANDROID) {
    console.warn('[loadIndicator] only supports iOS and Android.');
    return;
  }

  delete args.children;

  _.extend($, args);

  if (OS_IOS) {
  } else if (OS_ANDROID) {
  }

})(arguments[0] || {});

function hide () {
  $.loadingOverlay.hide();
  $.loadingIndicator.hide();
}

function show () {
  $.loadingOverlay.show();
  $.loadingIndicator.show();
}