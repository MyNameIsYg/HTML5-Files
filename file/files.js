let j = 1, i = 0, k = i + 8, start = end = 0;
const arrImg = [];
function readFile(e) {
    if (window.File) {
        var files = e.target.files;
        for (let l = 0; l < files.length; l++) {
            var file = files[l];
            var reader = new FileReader();
            if (file.type.match("image*")) {
                reader.onload = function (e) {
                    arrImg.push(e.target.result);
                    for (i; i < arrImg.length && i < 8; i++) {
                        document.getElementById('img' + i).src = arrImg[i];
                    }
                }
                i = 0;
                if (arrImg.length > 8) {
                    moveForward();
                }
                reader.readAsDataURL(file);

            }
            else
                alert("Error! The file you selected is not an image🙄😶");
        }
    }
    else {
        alert('error!🙄😶')
    }
}
function sheoImage(id) {
    document.getElementById('bigIimg').src = document.getElementById(id).src;
}

function moveForward() {
    if (start > 0) {
        //debugger
        start--;
        for (i = 7; i > 0; i--) {
            document.getElementById('img' + i).src = document.getElementById('img' + (i - 1)).src;
        }
        document.getElementById('img0').src = arrImg[start]
        end--;
    } else {
        alert('no next image🙄😶')
    }
}

function moveBack() {
    if (arrImg.length > 8 && end < arrImg.length - 1) {
        start++;
        for (i = 0; i < 7; i++) {
            document.getElementById('img' + i).src = document.getElementById('img' + (i + 1)).src;
        }
        document.getElementById('img7').src = arrImg[end + 1];
        end++;
    } else {
        alert('no back image🙄😶')
    }
}
