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

    })

});