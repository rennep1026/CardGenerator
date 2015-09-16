$(document).ready(function(){
    $(":input").bind("input change", function(){
        var elemId = $(this).attr('id');
        switch (elemId) {
            case "cardTitleIn":
                $(".card-progress .card-title").text($(this).val());
                break;
            case "cardCatIn":
                $(".card-progress .card-category").text($(this).val());
                break;
            case "cardStats":
                if($(this).prop("checked") === true){
                    $('.card-progress .card-desc').prepend($(statsBlock).clone());
                } else {
                    $('.card-progress .card-stats').remove();
                }
                break;
            case "cardStatsStr":
                var abScore = $(this).val() || 10;
                $(".card-progress .card-stats-str p").text(abScore+" ("+abilityMod[abScore]+")");
                break;
            case "cardStatsDex":
                var abScore = $(this).val() || 10;
                $(".card-progress .card-stats-dex p").text(abScore+" ("+abilityMod[abScore]+")");
                break;
            case "cardStatsCon":
                var abScore = $(this).val() || 10;
                $(".card-progress .card-stats-con p").text(abScore+" ("+abilityMod[abScore]+")");
                break;
            case "cardStatsInt":
                var abScore = $(this).val() || 10;
                $(".card-progress .card-stats-int p").text(abScore+" ("+abilityMod[abScore]+")");
                break;
            case "cardStatsWis":
                var abScore = $(this).val() || 10;
                $(".card-progress .card-stats-wis p").text(abScore+" ("+abilityMod[abScore]+")");
                break;
            case "cardStatsCha":
                var abScore = $(this).val() || 10;
                $(".card-progress .card-stats-cha p").text(abScore+" ("+abilityMod[abScore]+")");
                break;
            case "cardDesc":
                var html = $('<p>').append($.parseHTML($(this).val()));
                $(".card-progress .card-desc .card-text").empty().append(html);
                break;
            case "cardAttr":
                if($(this).prop("checked") === true){
                    $('.card-progress .card-inner').append($(attrArea).clone());
                } else {
                    $('.card-progress .card-bottom').remove();
                }
                break;
            case "cardAttrText":
                $(".card-progress .card-bottom p").text($(this).val());
                break;
        }
    });

    $('#cardAdd').click(function(){
        var num = parseInt($("#cardCount").val() || 1);
        console.log(num);
        for(var i=0; i<num; i++){
            $('.card-container').append($('.card-progress .card').clone());
        }
    });

    var attrArea = $.parseHTML(
        '<div class="card-bottom">'+
            '<svg class="card-hr-style" width="100" height="1" viewBox="0 0 100 1">'+
                '<polyline points="0,0 100,0.5 0,1" fill="black"></polyline>'+
            '</svg>'+
            '<p></p>'+
        '</div>'
    );

    var statsBlock = $.parseHTML(
        '<div class="card-stats">'+
            '<div class="card-stats-str"><span>Str</span><p>10 (0)</p></div>'+
            '<div class="card-stats-dex"><span>Dex</span><p>10 (0)</p></div>'+
            '<div class="card-stats-con"><span>Con</span><p>10 (0)</p></div>'+
            '<div class="card-stats-int"><span>Int</span><p>10 (0)</p></div>'+
            '<div class="card-stats-wis"><span>Wis</span><p>10 (0)</p></div>'+
            '<div class="card-stats-cha"><span>Cha</span><p>10 (0)</p></div>'+
        '</div>'
    );

    var abilityMod =    ['-5','-5','-4','-4','-3','-3','-2','-2','-1','-1','0','0',
                        '+1','+1','+2','+2','+3','+3','+4','+4','+5','+5','+6','+6',
                        '+7','+7','+8','+8','+9','+9','+10','+10'];

    var svgFiles = [];



    $( "#svgViewer" ).dialog({
        autoOpen: false,
        width: 780,
        height: 600
    });
    $( "#svgOpener" ).click(function() {
        $.get("svg.txt", null, function(data){
            svgFiles = data.split('\n');
            console.log(svgFiles);
            for(var i=0; i<svgFiles.length-1; i++){
                var svgImg = $('<span class="card-icon">')
                    .append($('<img class="lazy '+svgFiles[i]+'" data-original="svg/'+svgFiles[i]+'">'));
                $('#svgViewer').append(svgImg);
            }
            $("img.lazy").lazyload({
                container: $('#svgViewer'),
                threshold: 200
            });
            $("#svgViewer .card-icon img").click(function(){
                $('.card-progress .card-icon').empty().append($(this).clone());
            });
        });
        $( "#svgViewer" ).dialog( "open" );
    });
});