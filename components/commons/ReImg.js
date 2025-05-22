export default function ReImg(){

    return {

        OutputProcessor: function(encodedData, svgElement) {
    
            let isPng = function() {
                return encodedData.indexOf('data:image/png') === 0;
            };
    
            let downloadImage = function(data, filename) {
                let a = document.createElement('a');
                a.href = data;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
            };
    
            return {
                toBase64: function() {
                    return encodedData;
                },
                toImg: function() {
                    let imgElement = document.createElement('img');
                    imgElement.src = encodedData;
                    return imgElement;
                },
                toCanvas: function(callback) {
                    let canvas = document.createElement('canvas');
                    let boundedRect = svgElement.getBoundingClientRect();
                    canvas.width = boundedRect.width;
                    canvas.height = boundedRect.height;
                    let canvasCtx = canvas.getContext('2d');
    
                    let img = this.toImg();
                    img.onload = function() {
                        canvasCtx.drawImage(img, 0, 0);
                        callback(canvas);
                    };
                },
                toPng: function() {
                    if (isPng()) {
                        let img = document.createElement('img');
                        img.src = encodedData;
                        return img;
                    }
    
                    this.toCanvas(function(canvas) {
                        let img = document.createElement('img');
                        img.src = canvas.toDataURL();
                        return img;
                    });
                },
                toJpeg: function(quality) { // quality should be between 0-1
                    quality = quality || 1.0;
                    (function(q) {
                        this.toCanvas(function(canvas) {
                            let img = document.createElement('img');
                            img.src = canvas.toDataURL('image/jpeg', q);
                            return img;
                        });
                    })(quality);
                },
                downloadPng: function(filename) {
                    filename = filename || 'image.png';
                    if (isPng()) {
                        // it's a canvas already
                        downloadImage(encodedData, filename);
                        return;
                    }
    
                    // convert to canvas first
                    this.toCanvas(function(canvas) {
                        downloadImage(canvas.toDataURL(), filename);
                    });
                }
            };
        },
    
        fromSvg: function(svgElement) {
            let svgString = new XMLSerializer().serializeToString(svgElement);
            return new this.OutputProcessor('data:image/svg+xml;base64,' + window.btoa(svgString), svgElement);
        },
    
        fromCanvas: function(canvasElement) {
            let dataUrl = canvasElement.toDataURL();
            return new this.OutputProcessor(dataUrl);
        }
    
    };
    
};