$(document).ready(function(){
    $(":input").bind("input change", function(){
        var elemId = $(this).attr('id')
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
        }
    });

    var statsBlock = $.parseHTML(
        '<div class="card-stats card-text">'+
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

    $(".card-stats").bind("change", function(){

    });
});