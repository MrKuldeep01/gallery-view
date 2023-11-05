let imgarr = [
    {
        src: "imgBase/img (1).jpeg"
    },
    {
        src: "imgBase/img (2).jpeg"
    },
    {
        src: "imgBase/img (3).jpeg"
    },
    {
        src: "imgBase/img (4).jpeg"
    },
    {
        src: "imgBase/img (5).jpeg"
    },
    {
        src: "imgBase/img (6).jpeg"
    },
    {
        src: "imgBase/img (7).jpeg"
    }, {
        src: "imgBase/img (8).jpeg"
    }, {
        src: "imgBase/img (9).jpeg"
    }, {
        src: "imgBase/img (10).jpeg"
    }, {
        src: "imgBase/img (11).jpeg"
    },
    {
        src: "imgBase/img (12).jpg"
    }, {
        src: "imgBase/img (13).jpg"
    }, {
        src: "imgBase/img (14).jpg"
    }, {
        src: "imgBase/img (15).jpg"
    },
    {
        src: "imgBase/img (1).jpeg"
    },
    {
        src: "imgBase/img (2).jpeg"
    },
    {
        src: "imgBase/img (3).jpeg"
    },
    {
        src: "imgBase/img (4).jpeg"
    },
    {
        src: "imgBase/img (5).jpeg"
    },
    {
        src: "imgBase/img (6).jpeg"
    },
    {
        src: "imgBase/img (7).jpeg"
    }, {
        src: "imgBase/img (8).jpeg"
    }, {
        src: "imgBase/img (9).jpeg"
    }, {
        src: "imgBase/img (10).jpeg"
    }, {
        src: "imgBase/img (11).jpeg"
    },
    {
        src: "imgBase/img (12).jpg"
    }, {
        src: "imgBase/img (13).jpg"
    }, {
        src: "imgBase/img (14).jpg"
    }, {
        src: "imgBase/img (15).jpg"
    },
    {
        src: "imgBase/img (1).jpeg"
    },
    {
        src: "imgBase/img (2).jpeg"
    },
    {
        src: "imgBase/img (3).jpeg"
    },
    {
        src: "imgBase/img (4).jpeg"
    },
    {
        src: "imgBase/img (5).jpeg"
    },
    {
        src: "imgBase/img (6).jpeg"
    },
    {
        src: "imgBase/img (7).jpeg"
    }, {
        src: "imgBase/img (8).jpeg"
    }, {
        src: "imgBase/img (9).jpeg"
    }, {
        src: "imgBase/img (10).jpeg"
    }, {
        src: "imgBase/img (11).jpeg"
    },
    {
        src: "imgBase/img (12).jpg"
    }, {
        src: "imgBase/img (13).jpg"
    }, {
        src: "imgBase/img (14).jpg"
    }, {
        src: "imgBase/img (15).jpg"
    },
    {
        src: "imgBase/img (1).jpeg"
    },
    {
        src: "imgBase/img (2).jpeg"
    },
    {
        src: "imgBase/img (3).jpeg"
    },
    {
        src: "imgBase/img (4).jpeg"
    },
    {
        src: "imgBase/img (5).jpeg"
    },
    {
        src: "imgBase/img (6).jpeg"
    },
    {
        src: "imgBase/img (7).jpeg"
    }, {
        src: "imgBase/img (8).jpeg"
    }, {
        src: "imgBase/img (9).jpeg"
    }, {
        src: "imgBase/img (10).jpeg"
    }, {
        src: "imgBase/img (11).jpeg"
    },
    {
        src: "imgBase/img (12).jpg"
    }, {
        src: "imgBase/img (13).jpg"
    }, {
        src: "imgBase/img (14).jpg"
    }, {
        src: "imgBase/img (15).jpg"
    },
    {
        src: "imgBase/img (1).jpeg"
    },
    {
        src: "imgBase/img (2).jpeg"
    },
    {
        src: "imgBase/img (3).jpeg"
    },
    {
        src: "imgBase/img (4).jpeg"
    },
    {
        src: "imgBase/img (5).jpeg"
    },
    {
        src: "imgBase/img (6).jpeg"
    },
    {
        src: "imgBase/img (7).jpeg"
    }, {
        src: "imgBase/img (8).jpeg"
    }, {
        src: "imgBase/img (9).jpeg"
    }, {
        src: "imgBase/img (10).jpeg"
    }, {
        src: "imgBase/img (11).jpeg"
    },
    {
        src: "imgBase/img (12).jpg"
    }, {
        src: "imgBase/img (13).jpg"
    }, {
        src: "imgBase/img (14).jpg"
    }, {
        src: "imgBase/img (15).jpg"
    },
    
]
// console.log(imgarr[1].src);
// document.querySelectorAll('.hi').
imgarr.forEach(e => 
{
    let imgarea= document.querySelector(".imgarea");
box=document.createElement('div');
box.innerHTML=`
<img class="hi" src="${e.src}" alt="">
`;
box.classList="imgbox";
imgarea.appendChild(box);
})
