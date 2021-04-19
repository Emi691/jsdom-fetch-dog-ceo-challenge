console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(json => addImages(json))

function addImages(json){
    let array = json.message
    for (let i = 0; i < array.length; i++) {
        let pic = document.createElement("img")​
        pic.setAttribute('src', array[i])
        document.querySelector("#dog-image-container").appendChild(pic)
    } 
}