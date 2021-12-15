


        let button = $("#btn") .click(function () {
         
        let dia = $("#data") .val()
       
      
  $.ajax({

            url: `https://api.nasa.gov/planetary/apod?api_key=ZeoDJt0gjBBYV9gDtKcbD9PvrzwePBG6lm13YHcD&date=${dia}`,
            type: "GET",
            success: function(nasa){
                console.log(nasa)
          
            $("#descrição").text(nasa.explanation)
            $("#image").attr("src", nasa.url)
            $("#titulo").text(nasa.title)
                
            },
            error: function(error) {
                console.log(error)
            }

            })
            })


            // outro ajax para nao ficar com tela em  branco
            $.ajax({

            url: `https://api.nasa.gov/planetary/apod?api_key=ZeoDJt0gjBBYV9gDtKcbD9PvrzwePBG6lm13YHcD`,
            type: "GET",
            success: function(nasa){
                console.log(nasa)
            // let dados = nasa
                

                $("#descrição").text(nasa.explanation)
                $("#image").attr("src", nasa.url)
                $("#titulo").text(nasa.title)

                
            },
            error: function(error) {
                console.log(error)
              
            }

            })