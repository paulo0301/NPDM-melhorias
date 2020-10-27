        //Alterar tamanho da fonte
        window.onload = function() {
            var elementBody = document.querySelector('body');
            var elementBtnIncreaseFont = document.getElementById('increase-font');
            var elementBtnDefaultFont = document.getElementById('default-font');
            var elementBtnDecreaseFont = document.getElementById('decrease-font');
            // Padrão de tamanho, equivale a 100% do valor definido no Body
            var fontSize = 100;
            // Valor de incremento ou decremento, equivale a 10% do valor do Body
            var increaseDecrease = 5;
            
            // Evento de click para aumentar a fonte
            elementBtnIncreaseFont.addEventListener('click', function(event) {
                if(fontSize < 150){
                    fontSize = fontSize + increaseDecrease;
                    elementBody.style.fontSize = fontSize + '%';
                }
            });
            
            // Evento de click para voltar ao padrão
            elementBtnDefaultFont.addEventListener('click', function(event) {
                fontSize = 100;
                elementBody.style.fontSize = fontSize + '%';
            });
            
            // Evento de click para diminuir a fonte
            elementBtnDecreaseFont.addEventListener('click', function(event) {
                if(fontSize > 70){
                    fontSize = fontSize - increaseDecrease;
                    elementBody.style.fontSize = fontSize + '%';
                }  
            });
        } 
        
        //Menu sandwich
        var sandwich = document.querySelector("div.sandwich");
        var navLinks = document.querySelector("nav");
        
        sandwich.addEventListener("click", () => {
            sandwich.classList.toggle("change");
            navLinks.classList.toggle("open");
        })

        //ROTACIONAR TELA QUANDO ESTIVER NA VERTICAL CELULAR        
        document.body.onresize = function(){ 
            if(window.matchMedia('(orientation: portrait)').matches){
                var telasGirar = document.querySelectorAll('.rotacionarTela');
                for(var i = 0; i <= telasGirar.length-1; i++){
                    var imgTela = document.createElement('IMG');
                    imgTela.setAttribute('src', 'imagens/RodarCelular.png');
                    imgTela.setAttribute('width', '100%');
                    imgTela.setAttribute('display', 'block');
                    imgTela.setAttribute('margin', '0 auto');
                    imgTela.setAttribute('class', 'imgGirarCelular');
                    telasGirar[i].parentNode.appendChild(imgTela);
                }
            }
            else{
                document.querySelectorAll('.imgGirarCelular').forEach(e => e.remove());
            }
        }
        