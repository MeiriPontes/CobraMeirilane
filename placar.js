const placar = {
    largura:800,
    altura:60,
    corFundo: "green",
    corTexto: "black",
    nomeJogo: "IFRJ COBRA",
    qtdPontos:0,
    desenhar(){
        canvasCtx.fillStyle = this.corFundo;
        canvasCtx.fillRect(0,0,this.largura,this.altura)
    
    canvasCtx.fillStyle=this.corTexto;
    canvasCtx.font= "26px Fantasy";
    canvasCtx.textAlign = "center";
    canvasCtx.textBaseline= "midle";
    canvasCtx.fillText(this.nomeJogo,400,30);
    canvasCtx.font= "16px Fantasy";
    canvasCtx.textAlign="right";
    canvasCtx.fillText(this.qtdPontos+" ptos",780,45);
    canvasCtx.fillText(cobra.vida +" vida(s)",780,15);

}

  
    
}
placar.desenhar();
