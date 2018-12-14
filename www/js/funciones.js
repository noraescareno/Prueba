var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        $('#b_camara').click(function(){
            navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                destinationType: Camera.DestinationType.FILE_URI,
                encodingType: Camera.EncodingType.PNG
            });
        });
    
        function onSuccess(imageURI) {
            alert('foto: '+imageURI);
            $('#div_foto').html('<img style="width:150px;height:150px;" id="myImage" src="'+imageURI+'" />');
        }
        
        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
};

app.initialize();
