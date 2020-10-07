var rodada = 1;
var matriz = Array(3);

$(document).ready(function(){

    $('#btn_iniciar_jogo').click(function(){

        if($('#apelido_jogador1').val() == ''){
            alert('Apelido do Jogador 1 não foi preenchido');
            return false;
        }

        if($('#apelido_jogador2').val() == ''){
            alert('Apelido do Jogador 2 não foi preenchido');
            return false;
        }

        $('#nome_jogador1').html($('#apelido_jogador1').val());
        $('#nome_jogador2').html($('#apelido_jogador2').val());

        $('#pagina_inicial').hide();
        $('#palco_jogo').show();

        $('.jogada').click(function(){
            
            var id_campo_clicado = this.id;
            jogada(id_campo_clicado);

        });

        function jogada(id){

            var icone = '';
            var ponto = 0;
            
            if((rodada % 2) == 1){
                icone = 'url("imagens/marcacao_1.png")';
                ponto = -1;
            } else {
                icone = 'url("imagens/marcacao_2.png")';
                ponto = 1;
            }
            rodada ++;

            $('#'+id).css('background-image', icone);

        }

    })

});