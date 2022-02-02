(function(){
    const colorField = document.querySelector(".cfield");
    const switcher = document.querySelector(".switcher");
    function newcolor() {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        return `rgb(${red},${green},${blue})`
    }
    switcher.addEventListener("click",function(){
        let color = newcolor()
        document.body.style.background = color
        colorField.value = color


    })
})()