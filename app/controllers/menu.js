var args = arguments[0] || {};

var api = {
    init: function() {
        $.demo1.addEventListener('click', function(e) {
            Alloy.Globals.pageFlow.addChild({
                arguments: {},
                controller: 'demo1/index',
                navBar: {
                    backgroundColor: '#F511F9',
                    title: 'Demo 1',
                    top: 10,
                    bottom: 10
                },
                direction: {
                    top: -0.5,
                    left: 1
                }
            });
        });
        $.demo2.addEventListener('click', function(e) {
            Alloy.Globals.pageFlow.addChild({
                arguments: {},
                controller: 'demo2/index',
                navBar: {
                    backgroundColor: '#F5F5F9',
                    right: 'demo2/close'
                }
            });
        });
    }
};

api.init();
