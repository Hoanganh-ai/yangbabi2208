// Thay đổi nội dung búc thư ở đây
var letterContent =" Cảm ơn em đã dành thời gian để nhìn trò trẻ con của anhh, anh có những điều muốn gởi gắm đến em ❤️ ,hiện tại có thể anh chưa quen được với việc có ai đó trong cuộc sống của mình và có thể nhiều lúc vô ý làm em buồn , nhưng anh sẽ cố gắng hơn để có thể quan tâm em nhiều hơn . Hiện tại mình chưa là gì nhưng tương lai sau khi tìm hiểu nhiều hơn chúng ta có thể là gì đó hơn hiện tại hehe. Năm sau khi anh về nước công chúa có thể sắp xếp gặp tôi được không :333, nếu được tôi cũng sẽ về tham dự lễ tốt nghiệp của nàng nựa❤️. Love you💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})