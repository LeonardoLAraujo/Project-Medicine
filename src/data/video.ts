import { Video } from "../type/video";

const BANNER: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/500px-YouTube_Logo_2017.svg.png";

export type ObjectVideo = {
    videos: Array<Video>,
    lives: Array<Video>
}



export const videos: ObjectVideo = {
    videos: [

    ],
    lives: [
        {
            title: "Developing with library ECV COMPONENT",
            duration: "1:53:20",
            participantes: "Leonardo Leal",
            description: "The ecv-component is a JavaScript/TypeScript library designed to streamline the development of web layouts using reusable Web Components built with the LitElement library. It aims to enhance productivity and maintain consistency across projects by providing a standardized set of components.",
            image: BANNER, 
            source: "https://www.youtube.com/watch?v=tPBbeszlIXw&t=556s",  
            data: '15/05/2024'
        },
        {
            title: "Usando o component Lit Player Youtube",
            duration: "1:56:50",
            participantes: "Deborah Rezende",
            description: "LitPlayerYoutube é um player de vídeo baseado no YouTube, desenvolvido com Lit, que utiliza a API oficial do YouTube para controlar a reprodução de vídeos.",
            image: BANNER, 
            source: "https://www.youtube.com/watch?v=L-hQnWvCWpg&t=114s",  
            data: '30/05/2022'
        }
    ]
}