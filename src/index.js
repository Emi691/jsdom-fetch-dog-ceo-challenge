console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    fetchImages() 
    fetchBreeds()

    document.querySelector('#dog-breeds').addEventListener("click", function(event){
        let breed = event.target
        breed.style.color = 'cornflowerblue'
    }) 
    
    document.querySelector('#breed-dropdown').addEventListener("change", function(event){
        console.log("change")
        let letter = event.target.value
        fetchBreeds(letter)
    })
})

function fetchBreeds(letter){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(json => addBreeds(json, letter)) 
}

function addBreeds(json, letter){
    let array = Object.keys(json.message)
    if(letter){
        document.querySelector('#dog-breeds').innerText = ""
        array = Object.keys(json.message).filter((word) => word.startsWith(letter))
    }
    for(let i = 0; i < array.length; i++){
        let breed = document.createElement('li')
        let key = array[i]
        breed.innerText = [key]
        let innerArray = json["message"][key]
        let subBreeds = document.createElement('ul')
        if (innerArray.length > 0)
            for(let n = 0; n < innerArray.length; n++){
                let subBreed = document.createElement('li')
                subBreed.innerText = innerArray[n]
                subBreeds.appendChild(subBreed)
            }
        breed.appendChild(subBreeds)
        document.querySelector("#dog-breeds").appendChild(breed)    
    }
} 
    
function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => addImages(json))

    function addImages(json){
        let array = json.message
        for (let i = 0; i < array.length; i++) {
            let pic = document.createElement('img')
            pic.setAttribute('src', array[i])
            document.querySelector("#dog-image-container").appendChild(pic)
        } 
    }
}




