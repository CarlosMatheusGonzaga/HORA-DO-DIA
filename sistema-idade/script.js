
function clicar(){

        var nascimento = document.getElementById('datanascimento')
        var novadata = new Date()
        var anoatual = novadata.getFullYear()
        var resposta = document.querySelector('div#res')
        idade = anoatual - nascimento.value // caso desse erro eu poderia tentar converter "Number(nascimento.value)"

        if(nascimento.value == 0 || nascimento.value > anoatual) {
            alert('[ERRO] Os dados fornecidos são invalidos. Tente novamente!') }

            else {  
            
                window.alert('Tudo certo!')

                var img = document.createElement('img')
                img.setAttribute('id', 'fotopessoa')
                var sexo = document.getElementsByName('sexselect')
                var gênero = ''
                if (sexo[0].checked) {
                    gênero = 'Homem'
                    

                    if (idade < 14) {
                        
                        resposta.innerHTML = `Você é uma crianca do gênero masculino e tem ${idade} anos.`
                        img.setAttribute('src', 'criancamasculina.png')

                        var partebranca = document.querySelector('section#partebranca')
                        partebranca.style.height = '500px'

                    }

                    else if (idade < 18) {
                        resposta.innerHTML = `Você é um adolecente do gênero masculino e tem ${idade} anos.`
                        img.setAttribute('src', 'adolescentemasculino.png')

                        var partebranca = document.querySelector('section#partebranca')
                        partebranca.style.height = '500px'
                        
                    }

                    else if (idade < 60) {
                        resposta.innerHTML = `Você é um adulto do gênero masculino e tem ${idade} anos.`
                        img.setAttribute('src', 'adultomasculino.png')

                        var partebranca = document.querySelector('section#partebranca')
                        partebranca.style.height = '500px'
                    }

                    else {
                        resposta.innerHTML = `Você é um idoso do gênero masculino e tem ${idade} anos.`
                        img.setAttribute('src', 'idosomasculino.png')

                        var partebranca = document.querySelector('section#partebranca')
                        partebranca.style.height = '500px'
                    }

                }

                else if (sexo[1].checked) {
                    gênero = 'Mulher'

                    if (idade < 14) {
                        
                        resposta.innerHTML = `Você é uma crianca do gênero feminino e tem ${idade} anos.`
                        img.setAttribute('src', 'criancafeminina.png')

                        var partebranca = document.querySelector('section#partebranca')
                        partebranca.style.height = '500px'
                    }

                    else if (idade < 18) {
                        resposta.innerHTML = `Você é uma adolecente do gênero feminino e tem ${idade} anos.`
                        img.setAttribute('src', 'adolescentefemino.png')

                        var partebranca = document.querySelector('section#partebranca')
                        partebranca.style.height = '500px'
                    }

                    else if (idade < 60) {
                        resposta.innerHTML = `Você é uma adulta do gênero feminino e tem ${idade} anos.`
                        img.setAttribute('src', 'adultofeminino.png')

                        var partebranca = document.querySelector('section#partebranca')
                        partebranca.style.height = '500px'
                    }

                    else {
                        resposta.innerHTML = `Você é uma idosa do gênero feminino e tem ${idade} anos.`
                        img.setAttribute('src', 'idosafeminino.png')

                        var partebranca = document.querySelector('section#partebranca')
                        partebranca.style.height = '500px'
                    }
                   
                }

                

            }

            resposta.appendChild(img)
        } 
        
        /* else {
            alert('tudo ok!')
            resposta.innerHTML = `Você tem ${idade} anos.`
        } */

        

