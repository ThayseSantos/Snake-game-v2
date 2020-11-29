let canvas = document.getElementById("snake"); // ID do canvas
let context = canvas.getContext("2d"); //context renderiza o desenho do canvas
let box = 32;  //tamanho dos quadradinhos
let snake= [];
snake[0] =  //dentro do array
{
    x: 8 * box, //tamanho
    y: 8 * box
}
let direction = "direita";

// retorna posições aleatórias da comida (x e y):
let food = 
{
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//funções usadas:

function criarBackground()// aqui começa o canvas (criar background)
{
    context.fillStyle/*estilo do canvas*/ = "#84ab60"; //cor do plano de fundo
    context.fillRect(0 , 0 , 16 * box , 16 * box); // x y altura largura
}

function criarCobrinha()//criar cobrinha array
{ 
    for(corpo= 0 ; corpo < snake.length ; corpo++)
    {
        context.fillStyle = "#8859B5"; //cor da cobra
        context.fillRect(snake[corpo].x , snake[corpo].y , box , box); // dimensões da cobra
    }
}

function drawfood()
{
    context.fillStyle = "#ad3333";
    context.fillRect(food.x , food.y , box , box);  //coordenadas da maçã
}

//transmitir o código da tecla para a função (setinha) :
document.addEventListener('keydown' , update); //evento de click chama updade(funcao)

function update (event)
{
    //se o número do código for x , a cobra muda a direção:
    if(event.keyCode == 37 && direction !="direita")
    direction = "esquerda";

    if(event.keyCode == 38 && direction !="baixo")
    direction = "cima";

    if(event.keyCode == 39 && direction !="esquerda")
    direction = "direita";

    if(event.keyCode == 40 && direction !="cima")
    direction = "baixo";
    
}

//funções usadas no start:
function iniciarjogo() 
{    

    //modificar aqui depois para ela bater na moldura do game:
    if (snake[0].x > 15 * box && direction == "direita") 
    {
        window.location.replace("jogardnv.html");
    }
    
    if (snake[0].x < 0 && direction == "esquerda") 
    {
        window.location.replace("jogardnv.html");
    }  

    if (snake[0].y > 15 * box && direction == "baixo") 
    {
        window.location.replace("jogardnv.html");
    }   

    if (snake[0].y < 0 && direction == "cima") 
    {
        window.location.replace("jogardnv.html");
    }


    for(corpo = 1 ; corpo < snake.length ; corpo++)
    {
        if(snake[0].x == snake[corpo].x && snake[0].y == snake[corpo].y)
        {
            clearInterval(jogo);
            window.location.replace("jogardnv.html");
            

        }
    }
    // chamar as funções usadas (cobra,fundo e comida):
    criarBackground();
    criarCobrinha();
    drawfood();

    
    //setar movimentos para ponto de partida:
    let snakex = snake[0].x; //posição 0 de x
    let snakey = snake[0].y; // posição 0 de y

    //condicionais para lados usado plano cartesiano:
    //acrescenta ou diminui o corpo:

    if(direction == "direita") snakex += box ; 
    if(direction == "esquerda") snakex -= box ; 
    if(direction == "cima") snakey -= box ;
    if(direction == "baixo") snakey += box ;

    //condições de adicionar corpinho ao passar pela maçã:
    if(snakex != food.x || snakey != food.y)
    {
        snake.pop();
    }
    else
    {
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    // tira o ultimo elemento do array e acrescenta à frente pra mov:

    let cabecanova =
    {
        x: snakex,
        y: snakey
    }

    snake.unshift(cabecanova);

}

let jogo = setInterval(iniciarjogo , 100); //passando o intervalo p iniciar jogo(renovar e nao travar)






