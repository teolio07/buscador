var input_searcher = document.getElementById('input_searcher');
var template = ``;
var filtroOne = [];
var filtro = [];


input_searcher.addEventListener('keydown',async (e)=>{
        console.log(e)
        filtroOne = [];
        template = ``;
        if(e.key == 'Shift' || 'shift' || 'Backspace'){
                console.log('funciona')
                filtro = []
        }else{
                request = await (await fetch('https://peliculas-alvaro.herokuapp.com/api/v1/peliculas/getPeliculas')).json()
                filtro = request.filter(pelicula => pelicula.nombrePeli[0] == input_searcher.value ||
                                                pelicula.nombrePeli[0]+pelicula.nombrePeli[1] == input_searcher.value);
                
                for (let i = 0; i < filtro.length; i++){
        
                        template += `<div class='title_img'>${filtro[i].nombrePeli}</div>
                                        <img id='imagen' src='${filtro[i].imagen}'/>`
        
                }
        
                document.getElementById('search_container').innerHTML = template
        }

})