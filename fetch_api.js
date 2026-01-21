const generateBtn = document.getElementById('generate-btn');
const display = document.getElementById('display');
const dogImageElement = document.getElementById('dog-image');
const apiUrl = 'https://dog.ceo/api/breeds/image/random'



// function to fetch a random dog image from the api url
const getImage = () => {
    fetch(apiUrl).then(res => res.json()).then(data => {
            dogImageElement.src = data.message;
        }
    )
}