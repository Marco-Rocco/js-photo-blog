//collego api
const photoElements = 'https://lanciweb.github.io/demo/api/pictures/'

//collego elemento hmtl
let rowContainer = document.getElementById('row')
console.log (rowContainer)

//get api
    axios.get(photoElements)
        .then((response) => {
            let dataArray = response.data;
            console.log(dataArray)
        })
        .catch ((error) => {
            console.log(errore)
        })
