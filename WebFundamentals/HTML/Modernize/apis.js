$(document).ready(function(){

    

    $(document).on('click', '#box1 a,h3', function(){
        var url1 = 'https://anapioficeandfire.com/api/houses/7/';

        function callApi(){
            $.ajax({
                url: url1 ,
                dataType: 'json',
                success: function( face ){

                    console.log(face);
                        var html_str = `
                                        <div>

                                            <span>${face.name}</span><br>
                                            <span>${face.words}</span><br>
                                            <span>${face.titles}</span>

                                        </div>
                                        `;
                    $(".message-box").html(html_str);
                }
            });
        };

        callApi();
    });

    $(document).on('click', '#box2 a,h3', function(){

        var url2 = 'https://anapioficeandfire.com/api/houses/8/';

        function callApi(){
            $.ajax({
                url: url2 ,
                dataType: 'json',
                success: function( face ){

                    console.log(face);
                        var html_str = `
                                        <div>

                                            <span>${face.name}</span><br>
                                            <span>${face.words}</span><br>
                                            <span>${face.titles}</span>

                                        </div>
                                        `;
                    $(".message-box").html(html_str);
                }
            });
        };

        callApi();
    });

    $(document).on('click', '#box3 a,h3', function(){

        var url3 = 'https://anapioficeandfire.com/api/houses/10/';

        function callApi(){
            $.ajax({
                url: url3 ,
                dataType: 'json',
                success: function( face ){

                    console.log(face);
                        var html_str = `
                                        <div>

                                            <span>${face.name}</span><br>
                                            <span>${face.words}</span><br>
                                            <span>${face.titles}</span>

                                        </div>
                                        `;
                    $(".message-box").html(html_str);
                }
            });
        };

        callApi();
    });

    $(document).on('click', '#box4 a,h3', function(){

        var url4 = 'https://anapioficeandfire.com/api/houses/4/';

        function callApi(){
            $.ajax({
                url: url4 ,
                dataType: 'json',
                success: function( face ){

                    console.log(face);
                        var html_str = `
                                        <div>

                                            <span>${face.name}</span><br>
                                            <span>${face.words}</span><br>
                                            <span>${face.titles}</span>

                                        </div>
                                        `;
                    $(".message-box").html(html_str);
                }
            });
        };

        callApi();
    });

});
