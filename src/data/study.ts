import { IconTypes } from "ecv-component";
import { StudyPage } from "../type/Study";
import IMAGE_ANTISSEPSIA from '../images/antissepsia.png';
import IMAGEM_AMBIENTE_CIRURGICO from '../images/ambiente_cirurgico.png';
import IMAGEM_SUTURAS_CONTINUAS from '../images/saturas_continuas.png';
import IMAGEM_ANESTESIA_LOCAL from '../images/anestesia_local.png';
import IMAGEM_ACESSOS_VENOSOS from '../images/acesso_venoso.png';
import NOTEBOOK from '../images/notebook.png';
import USER_NOTEBOOK from "../images/user_notebook.png";
import { html } from "lit";

export const studyPage: StudyPage = {
    banner: {
        background: NOTEBOOK,
        title: 'Estudos',
        description: html`Aqui você encontra uma série de lâminas organizadas para te ajudar a visualizar melhor <br>
                            os conteúdos que está estudando. É um apoio visual pensado para facilitar o dia a dia e 
                            deixar o<br> aprendizado mais leve e eficiente. Fique à vontade para explorar e usar sempre 
                            que quiser<br> reforçar o que viu na teoria.`
    },
    studyCards: [
        {
            id: 1,
            romanNumber: "I",
            type: 'Módulo',
            title: 'Antissepsia, assepsia e esterilização',
            thumb: IMAGE_ANTISSEPSIA,
            description:`Exemplificar uso dessa aprendizagem em ambientes da prática assistencial. 
            Identificar falhas e acertos no seu treinamento de paramentação. 
            Paramentar-se adequadamente tornando...`,
            moduleLessons: [
                 {
                    label: 'Aula teórica',
                    lessons: [
                        {
                            type: 'pdf',
                            title: 'Aula teórica',
                            icone: IconTypes.Book,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        }
                    ]
                },
                {
                    label: 'Material Teórico/Estudos',
                    lessons: [
                        {
                            type: 'pdf',
                            title: 'ANVISA - Higienização das Mãos',
                            icone: IconTypes.PictureAsPDF,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        },
                        {
                            type: 'pdf',
                            title: 'Cartaz Antissepsia Cirúrgica das Mãos',
                            icone: IconTypes.PictureAsPDF,
                            link: 'https://drive.google.com/file/d/1HHPSslptj2nM8C1tTq_-feMW4oDAK1vT/preview'
                        },
                        {
                            type: 'pdf',
                            title: 'Surgical Scrubs - Novo Método de Antissepsia',
                            icone: IconTypes.PictureAsPDF,
                            link: 'https://drive.google.com/file/d/1tQ-QOq6G3yhf41rvkkzerdgu01b7QUMZ/preview'
                        }
                    ]
                },
                {
                    label: 'Vídeos',
                    lessons: [
                        {
                            type: 'video',
                            title: 'Preparo para escovação',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Escovação',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Secagem das Mãos',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Vestindo avental cirúrgico',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Colocação de Luvas Estéreis',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        }
                    ]
                }
            ],
            banner: {
                background: USER_NOTEBOOK,
                title: 'Estudos',
                description: html`Aqui você encontra uma série de lâminas organizadas para te ajudar a visualizar melhor os conteúdos que está estudando. 
                É um apoio visual pensado para facilitar o dia a dia e deixar o aprendizado mais leve e eficiente. 
                Fique à vontade para explorar e usar sempre que quiser reforçar o que viu na teoria.`
            }
        },
        {
            id: 2,
            romanNumber: "II",
            type: 'Módulo',
            title: 'O Ambiente Cirúrgico',
            thumb: IMAGEM_AMBIENTE_CIRURGICO,
            description:`Conceituar a zona de proteção, zona limpa, zona estéril e trazer Práticas de Escovação e paramentação cirúrgicas.`,
            moduleLessons: [
                {
                    label: 'Aula teórica',
                    lessons: [
                        {
                            type: 'pdf',
                            title: 'Aula teórica',
                            icone: IconTypes.Book,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        }
                    ]
                },
                {
                    label: 'Material Teórico/Estudos',
                    lessons: []
                },
                {
                    label: 'Vídeos',
                    lessons: [
                        {
                            type: 'video',
                            title: 'Preparo para escovação',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Escovação',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Secagem das Mãos',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Vestindo avental cirúrgico',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Colocação de Luvas Estéreis',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        }
                    ]
                }
            ],
            banner: {
                background: USER_NOTEBOOK,
                title: 'Estudos',
                description: html`Aqui você encontra uma série de lâminas organizadas para te ajudar a visualizar melhor os conteúdos que está estudando. 
                É um apoio visual pensado para facilitar o dia a dia e deixar o aprendizado mais leve e eficiente. 
                Fique à vontade para explorar e usar sempre que quiser reforçar o que viu na teoria.`
            }
        },
        {
            id: 8,
            romanNumber: "VIII",
            type: 'Módulo',
            title: 'Suturas Contínuas',
            thumb: IMAGEM_SUTURAS_CONTINUAS,
            description:`Realizar as 2 suturas continuas propostas: chuleio simples, chuleio ancorado, sutura intradérmica. Revisar aula Sutura simples e nós manuais `,
            moduleLessons: [
                 {
                    label: 'Aula teórica',
                    lessons: []
                },
                {
                    label: 'Material Teórico/Estudos',
                    lessons: []
                },
                {
                    label: 'Vídeos',
                    lessons: [
                        {
                            type: 'video',
                            title: 'Chuleio Simples',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Cheleio Ancorado',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        }
                    ]
                }
            ],
            banner: {
                background: USER_NOTEBOOK,
                title: 'Estudos',
                description: html`Aqui você encontra uma série de lâminas organizadas para te ajudar a visualizar melhor os conteúdos que está estudando. 
                É um apoio visual pensado para facilitar o dia a dia e deixar o aprendizado mais leve e eficiente. 
                Fique à vontade para explorar e usar sempre que quiser reforçar o que viu na teoria.`
            }
        },
        {
            id: 9,
            romanNumber: "IX",
            type: 'Módulo',
            title: 'Princípios de Anestesia Local, Drenagem de abscesso e exérese em fuso',
            thumb: IMAGEM_ANESTESIA_LOCAL,
            description:`Entender o conceito de anestesia local. Aprender o uso correto dos anestésicos locais...`,
            moduleLessons: [
                 {
                    label: 'Aula teórica',
                    lessons: [
                        {
                            type: 'pdf',
                            title: 'Aula teórica Profa. Adriana Caputo',
                            icone: IconTypes.Book,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        }
                    ]
                },
                {
                    label: 'Material Teórico/Estudos',
                    lessons: [
                        {
                            type: 'pdf',
                            title: 'Drenagem de Abscesso',
                            icone: IconTypes.PictureAsPDF,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        },
                        {
                            type: 'pdf',
                            title: 'Minimizing the pain of local anesthesia injection',
                            icone: IconTypes.PictureAsPDF,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        }
                    ]
                },
                {
                    label: 'Vídeos',
                    lessons: [
                        {
                            type: 'video',
                            title: 'Anestesia Local e Drenagem de Abscesso',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Antissepsia do Paciente - Parte 01',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        },
                        {
                            type: 'video',
                            title: 'Antissepsia do Paciente - Parte 02',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        }
                    ]
                }
            ],
            banner: {
                background: USER_NOTEBOOK,
                title: 'Estudos',
                description: html`Aqui você encontra uma série de lâminas organizadas para te ajudar a visualizar melhor os conteúdos que está estudando. 
                É um apoio visual pensado para facilitar o dia a dia e deixar o aprendizado mais leve e eficiente. 
                Fique à vontade para explorar e usar sempre que quiser reforçar o que viu na teoria.`
            }
        },
        {
            id: 10,
            romanNumber: "X",
            type: 'Módulo',
            title: 'Acessos venosos',
            thumb: IMAGEM_ACESSOS_VENOSOS,
            description:`Reconhecer os diferentes dispositivos para acesso venoso. Saber escolher o melhor dispositivo nas diversas situações clínicas`,
            moduleLessons: [
                 {
                    label: 'Aula teórica',
                    lessons: [
                        {
                            type: 'pdf',
                            title: 'Aula teórica',
                            icone: IconTypes.Book,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        }
                    ]
                },
                {
                    label: 'Material Teórico/Estudos',
                    lessons: [
                        {
                            type: 'pdf',
                            title: 'Trombose e cateter',
                            icone: IconTypes.PictureAsPDF,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        },
                        {
                            type: 'pdf',
                            title: 'Uso ultrassom inserção cateter',
                            icone: IconTypes.PictureAsPDF,
                            link: 'https://www.telecom.uff.br/pet/petws/downloads/apostilas/HTML.pdf'
                        }
                    ]
                },
                {
                    label: 'Vídeos',
                    lessons: [
                        {
                            type: 'video',
                            title: 'Passagem de acesso venoso central - NEJM',
                            icone: IconTypes.PlayArrow,
                            link: 'https://www.youtube.com/watch?v=tPBbeszlIXw&t=1s'
                        }
                    ]
                }
            ],
            banner: {
                background: USER_NOTEBOOK,
                title: 'Estudos',
                description: html`Aqui você encontra uma série de lâminas organizadas para te ajudar a visualizar melhor os conteúdos que está estudando. 
                É um apoio visual pensado para facilitar o dia a dia e deixar o aprendizado mais leve e eficiente. 
                Fique à vontade para explorar e usar sempre que quiser reforçar o que viu na teoria.`
            }
        },
    ]
}