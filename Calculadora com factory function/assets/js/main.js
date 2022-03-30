function criaCalculadora(){
    return{
        display: document.querySelector('.display'), //display - atributo do objeto
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },
        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realisaConta()
                }
            })
        },

        realisaConta(){
            let conta = this.display.value

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('conta inválida')
                    return;
                }

                this.display.value = conta
            } catch(e){
                alert('Conta inválida')
                return
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1) //tamanho da string, -1
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){ //ou com arrow function (e) =>  
                const el = e.target  // o que eu to clicando na pagina
                
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm()
                }
                
                if(el.classList.contains('btn-eq')){
                    this.realisaConta()
                }
            }.bind(this))//
        },
        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
}

const calculadora = criaCalculadora()

calculadora.inicia()