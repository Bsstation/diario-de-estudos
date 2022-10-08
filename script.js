function alteraConteudo(index = 0){
    for(var i = 0; i <= 10; i++){
        var content = document.querySelector('#content' + i);
        if(index == i){
            content.style.display = 'block';
        }else{
            content.style.display = 'none';
        }
    }
}