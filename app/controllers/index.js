Alloy.Globals.pageFlow = $.pageflow;

// create the first page
$.pageflow.addChild({
    arguments: {},
    controller: 'menu',
    navBarHidden: true,
});


$.container.addEventListener('androidback', function() {
    if (Alloy.Globals.pageFlow.countPages() > 1) {
        Alloy.Globals.pageFlow.back();
    } else {
        Ti.Android.currentActivity.finish();
    }
});


$.container.open();
