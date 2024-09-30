var json = `{
    "filmes": [
        {
            "imagem": "<img src='img/apertar1.jpg' width='300px'>",
            "titulo": "Oppenheimer",
            "diretor": "Christopher Nolan",
            "gênero": "Biografia, Drama, História",
            "sinopse": "A história de J. Robert Oppenheimer, o físico que liderou o projeto Manhattan e ajudou a desenvolver a bomba atômica."
        },
        {
            "imagem": "<img src='img/apertar2.jpg' width='300px'>",
            "titulo": "Barbie",
            "diretor": "Greta Gerwig",
            "gênero": "Aventura, Comédia, Fantasia",
            "sinopse": "Barbie e Ken deixam o mundo de Barbielândia e enfrentam a realidade no mundo humano."
        },
        {
            "imagem": "<img src='img/apertar3.jpg' width='300px'>",
            "titulo": "Guardians of the Galaxy Vol. 3",
            "diretor": "James Gunn",
            "gênero": "Ação, Aventura, Ficção Científica",
            "sinopse": "Os Guardiões enfrentam novos desafios enquanto tentam proteger a galáxia e enfrentar seus próprios passados."
        },
        {
            "imagem": "<img src='img/apertar4.jpg' width='300px'>",
            "titulo": "Duna: Parte Dois",
            "diretor": "Denis Villeneuve",
            "gênero": "Ação, Aventura, Ficção Científica",
            "sinopse": "A continuação da jornada de Paul Atreides enquanto ele se alia aos Fremen para vingar sua família."
        },
        {
            "imagem": "<img src='img/apertar5.jpg' width='300px'>",
            "titulo": "Killers of the Flower Moon",
            "diretor": "Martin Scorsese",
            "gênero": "Crime, Drama, História",
            "sinopse": "Baseado em eventos reais, o filme explora o assassinato de membros da nação Osage nos anos 1920."
        },
        {
            "imagem": "<img src='img/apertar6.jpg' width='300px'>",
            "titulo": "Spider-Man: Através do Aranhaverso",
            "diretor": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
            "gênero": "Animação, Ação, Aventura",
            "sinopse": "Miles Morales se une a Gwen Stacy e outros Spider-People em uma nova aventura através do multiverso."
        }
    ]
}`;

var data = JSON.parse(json);

function apertar1() {
    mostrarFilme(0);
}

function apertar2() {
    mostrarFilme(1);
}

function apertar3() {
    mostrarFilme(2);
}

function apertar4() {
    mostrarFilme(3);
}

function apertar5() {
    mostrarFilme(4);
}

function apertar6() {
    mostrarFilme(5);
}

function mostrarFilme(index) {
    document.getElementById('imagem').innerHTML = data.filmes[index].imagem;
    document.getElementById('titulo').innerHTML = data.filmes[index].titulo;
    document.getElementById('diretor').innerHTML = "Diretor: " + data.filmes[index].diretor;
    document.getElementById('genero').innerHTML = "Gênero: " + data.filmes[index].gênero;
    document.getElementById('sinopse').innerHTML = "Sinopse: " + data.filmes[index].sinopse;
}
