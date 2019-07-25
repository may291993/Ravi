function changeImage (element) {
    var n,
        imageData = [
            [
                {
                    src: "https://ae01.alicdn.com/kf/HTB1HwOEeaSWBuNjSsrbq6y0mVXat/Bamboo-Fiber-Mens-Dress-Shirt-2018-Brand-New-Solid-Color-Long-Sleeve-White-Shirt-Men-Casual.jpg_640x640.jpg",

                },
                {
                    src: "http://cdn.memegenerator.net/images/300x/159304.jpg",
                
                }
            ],
            [
                {
                    src: "http://static.guim.co.uk/sys-images/Sport/Pix/pictures/2008/10/31/1225454147507/Mike-Tyson-001.jpg",
                
                },
                {
                    src: "http://playerperspective.com/wp-content/uploads/2011/05/mike-tyson-3.jpg",
                    
                }
            ],
            [
                {
                    src: "http://cdn.slashgear.com/wp-content/uploads/2012/04/halo-master-chief-1.jpg",
                    
                },
                {
                    src: "http://static.guim.co.uk/sys-images/Technology/Pix/pictures/2012/3/5/1330958259135/Halo-4-007.jpg",
                
                }
            ]
        ];
    if (element > -1) {
        document.getElementById('image' + element).src = imageData[element][1].src;
        document.getElementById('caption' + element).innerHTML = imageData[element][1].caption;
    } else {
        for (n = 0; n < imageData.length; n++) {
            document.getElementById('image' + n).src = imageData[n][0].src;
            document.getElementById('caption' + n).innerHTML = imageData[n][0].caption;
        }

    }
}
