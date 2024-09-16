function jogar (){
    tela.desenhar();
    cobra.desenhar();
    cobra.mover();
    placar.desenhar();
    alimento.desenhar()
    if (alimento.teveColisao(cobra)){
        placar.qtdPontos+=alimento.valor;
        cobra.crescer();
        alimento = new Alimento(alimento.valor++)
    }
    if (cobra.vida > 0)
        requestAnimationFrame(jogar)
    else {
        if (placar.qtdPontos > placar.recorde)
            placar.recorde = placar.qtdPontos
        placar.nomeJogo = "FIM DE JOGO"
        placar.desenhar();
}
}
    let alimento = new Alimento(2);
jogar();
document.addEventListener("keydown",(evento) => {
    if ((evento.key == 6) && (cobra.direcao== 90 || cobra.direcao== 270)) cobra.direcao=0;
    if ((evento.key == 2) && (cobra.direcao= 90 || cobra.direcao== 180)) cobra.direcao=90;
    if ((evento.key == 4) && (cobra.direcao= 180 || cobra.direcao== 270)) cobra.direcao=180;
    if ((evento.key == 8) && (cobra.direcao = 270 || cobra.direcao== 180)) cobra.direcao=270;
    console.log("Tecla Pressionada: " + evento.key);

});


