# Podcast Manager

### Descrição
Um app ao estilo netflix, onde possa centralizar diferentes episódios podcasts 
separados por categoria.

### Domínio
Podcasts feitos em vídeo

### Features
- Listar os episódios podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

### Feature:
Listar os episódios podcasts em sessões de categorias.

### Como vou implementar
Vou retornar em uma API REST (JSON) o nome podcast, 
nome do episódio, imagem de capa, link, category  
 ```js
 [
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        categories: ["saúde", "esporte", "bodybuilder"]
    },
    {
        podcastName: "flow",
        episode: "PETER JORDAN + BRENO JORDAN - Flow #350",
        videoId: "RejZhH-Dfjs",
        cover: "https://i.ytimg.com/vi/RejZhH-Dfjs/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=RejZhH-Dfjs",
        categories: ["tecnologia", "comics", "animes"]
    }
 ]
 ```
