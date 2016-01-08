$(document).ready(function() {
    var opic = $.ajax({
        url: 'images.json',
        type: 'GET',
        dataType: 'JSON'

    });
    opic.success(function(data) {
        var odata = data;
        console.log(odata.length);
        console.log(odata.Images[0]);

        var index = 0;
        $('div img').attr("src", odata.Images[index].img);
        $('#nextbtn').click(function() {
            if (index < odata.Images.length - 1) {

                ++index;
                console.log(odata.Images[index]);

                $('div img').attr("src", odata.Images[index].img);
            } else {
                index = 0;
                $('div img').attr("src", odata.Images[index].img);
            }
        });

        $('#prevbtn').click(function() {
            if (index > 0) {

                --index;
                console.log(odata.Images[index]);

                $('div img').attr("src", odata.Images[index].img);
            } else {
                index = 9;
                $('div img').attr("src", odata.Images[index].img);
            }
        });
    });
});
