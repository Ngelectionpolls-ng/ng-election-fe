"use client"

const camera = function () {
    let width = 0;
    let height = 0;
    
    const createObjects = function () {

        const capture = document.querySelector('#capture');
        const captured = document.querySelector('#captured');
    
        const video = document.createElement('video');
        video.id = 'video';
        video.width = width;
        video.height = height;
        video.autoplay = true;
        video.classList = "mx-auto my-auto bg-black w-[800px] h-[500px]";
        capture.appendChild(video);
    
        const canvas = document.createElement('canvas');
        canvas.id = 'canvas';
        canvas.width = width;
        canvas.height = height;
        captured.appendChild(canvas);
    }

    const removeObjects = function (video, canvas) {

        const capture = document.querySelector('#capture');
        const captured = document.querySelector('#captured');
    
        capture.removeChild(video);
        captured.removeChild(canvas);
    }
    
    
    return {
        video: null,
        context: null,
        canvas: null,
    
        startCamera: function (w = 800, h = 500) {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                width = w;
                height = h;
    
                createObjects();
    
                this.video = document.getElementById('video');
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');
        
                (function (video) {
                    navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
                        video.srcObject = stream;
                        video.play();
                    });
                })(this.video)
    
            }
        },
    
    
        takeSnapshot: function () {
            this.context.drawImage(this.video, 0, 0, width, height);
        },

        stopCamera: function () {
            this.video.pause();
            const stream = video.srcObject;
            const tracks = stream.getTracks();

            tracks.forEach((track) => {
                track.stop();
            });

            video.srcObject = null;

            removeObjects(video, canvas);
        }
    
    }
    }();
    
    export default camera;