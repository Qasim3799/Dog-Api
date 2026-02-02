const generateBtn = document.getElementById('generate-btn');
const display = document.getElementById('display');
const dogImageElement = document.getElementById('dog-image');
const apiUrl = 'https://dog.ceo/api/breeds/image/random'



// function to fetch a random dog image from the api url
const getImage = async () => {
    const res = await fetch(apiUrl);

    try{
        if(!res.ok){
            alert('Something went wrong')
            throw new Error('Something went wrong')
        }

        const data = await res .json()
        console.log(data)
        // dogImageElement.src = data.message

        const url = data.message
        const pattern = /breeds\/\w*-?\w*/gi    // regex pattern to extract the dog breed from the url
        const breed = url.match(pattern)[0].replace('breeds/', '')

        display.innerHTML = `
            <img id="dog-image" src="${data.message}">
            <p id='breed'>${breed}</p>
        `
    }
    catch(err){
        console.error(err)
    }
}


// async function getImage(){

// }
