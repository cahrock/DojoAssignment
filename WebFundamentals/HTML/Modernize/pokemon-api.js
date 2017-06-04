$(document).ready(function(){

    for(var i=1; i<=151; i++){

        var imgPoke = $('<img  src="http://pokeapi.co/media/img/' +  i +  '.png"></img>');
        $('section ').append(imgPoke)
        $(imgPoke).attr('id', i)
    }

    $('img').on('click', function(){
        var imgId = this.id;
        $('aside').css('visibility', 'visible')
        $('aside').append(getDetail(imgId))
    })


    function getDetail(id){
        var imgPoke = '<img id="imgbox" src="http://pokeapi.co/media/img/' +  id +  '.png"></img>';
        var imgDetail = 'http://pokeapi.co/api/v1/pokemon/' + id ;
        $.get(imgDetail, function (data){
            var html_str = `
                            <div class="apis">
                                <p><span><h1>${data.name}</h1></span> </p> <br>
                                <span>${imgPoke}</span> <br>
                                <p><span>Type : </span> ${data.types[0].name} </p> <br>

                                <p><span>Height : </span> ${data.height}</p> <br>
                                <p><span>Width : </span> ${data.weight} </p> <br>
                            </div>
                            `;

            $("aside").html(html_str);
        },"json");
    }
});
