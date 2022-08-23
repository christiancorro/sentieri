function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        console.log(reader.result);
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

// let img;
function compressImage(imgToCompress, maxWidth = 1280, quality = 0.5) {

    return new Promise((resolve, reject) => {
        const originalWidth = imgToCompress.width;
        const originalHeight = imgToCompress.height;


        const ratio = originalWidth / originalHeight;


        console.log(imgToCompress);

        // img = imgToCompress;
        console.log(imgToCompress.width);
        // console.log(img.width);

        // resizing the image
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");


        const canvasWidth = maxWidth;
        const canvasHeight = maxWidth / ratio;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        context.drawImage(
            imgToCompress,
            0,
            0,
            maxWidth,
            maxWidth / ratio
        );

        // reducing the quality of the image
        canvas.toBlob(
            (blob) => {
                if (blob) {
                    // showing the compressed image
                    // resizedImage.src = URL.createObjectURL(blob);
                    console.log("Image compressed");
                    resolve(blob);
                }
            },
            "image/jpeg",
            quality
        );
    });


}
