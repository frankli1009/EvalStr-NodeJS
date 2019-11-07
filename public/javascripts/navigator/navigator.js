var imageManager = {
    imagePath: 'images/',
    imageFiles: ['MathExp1.png', 'MathExp2.png', 'MathExp3.png'],
    curImageIndex: 0,
    getNextImage: function () {
        if (this.curImageIndex >= 3) {
            this.curImageIndex = 0;
        }
        return this.imagePath + this.imageFiles[this.curImageIndex++];
    }
}

var imageInterval = null;

var navigating = function (item) {
    console.log(item);
    console.log($('#data'));
    console.log($('#data').find('input[name="exptype"]').val())
    $('#nav>li>a').each(function () {
        $(this).removeClass('focused');
    });
    item.addClass('focused');
    $('#data').find('input[name="exptype"]').val(item.data('exptype'));
};

$(document).ready(() => {
    console.log("navigator - document is ready.");
    $('#navImage').attr('src', imageManager.getNextImage());
    $('#nav>li').each(function () {
        $(this).on('click', 'a', function (e) {
            e.preventDefault();
            navigating($(this));
        })
    });

    if (imageInterval != null) {
        clearInterval(imageInterval);
    }

    imageInterval = setInterval(function () {
        $('#navImage').attr('src', imageManager.getNextImage());
    }, 3000);
});