//collego api
const photoElements = 'https://lanciweb.github.io/demo/api/pictures/'

//collego elemento hmtl
let rowContainer = document.getElementById('row')
console.log (rowContainer)



//get api

    axios.get(photoElements)
        .then((response) => {
            //assegnamo all'array una variabile
            let dataArray = response.data;
            //dichiariamo una variabile result dove mettere il risultato, 
            // così da assegnare poi result al collegamento del container
            let result = ''

            //foreach per scorrerci tutti gli elementi dell'array
            dataArray.forEach(element => {

                console.log(element);

                //effettuiamo destructuring così da prenderci i dati che ci servono dai nostri oggetti
                const {title, date, url} = element;
                console.log(title, date, url);

                // a result CONCATENIAMO l'html
                result += `<div class="col lg-4 md-6 sm-12">
                
                <div class="card">
                    <img src="${url}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                      <p class="card-text">${date}</p>
                       <p class="card-text">${title}</p>
                    </div>
                    <img src="img/pin.svg" class="position-absolute top-0 start-50 translate-middle" alt="pin">
                  </div>

              </div> `
              
              // assegnamo result al collegamento con html
              rowContainer.innerHTML = result
            });
            


            //collego la card
            const cards = document.querySelectorAll('.card');
            console.log(cards)
            // creo un ciclo for per scorrere l'array, poi un addeventlistener che mi richiama la funzione
            for (let i = 0; i < cards.length; i++) {
                let card = cards[i];  
                card.addEventListener('click', on)             
            }

            //collego il bottone
            const overlayButton = document.getElementById('overlay-button')
            console.log(overlayButton)
            //creo addeventlistener che richiama la funzione off
            overlayButton.addEventListener('click', off)


            // console.log(dataArray)
        })
        .catch ((error => {
            console.log(error)
        }))




// overlay



function on() {
    document.getElementById("overlay").style.display = "block";
    }
    
function off() {
    document.getElementById("overlay").style.display = "none";
    } 
          
          
          
        
// mostra immagine selezionata  



// //collego l'immagine dell'overlay
// const overlayImg = document.getElementById('overlay-img')
// console.log(overlayImg)



// card.addEventListener('click', function(){
//     overlayImg = this(overlayImg);

//     overlayImg.src = `${url}`
//     overlayImg.alt = `${title}`
// })


