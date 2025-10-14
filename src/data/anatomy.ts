import boneCardImage from '../images/bones_card_image.png';
import nervesCardimage from '../images/nerves_card_image.png';
import musclesCardImage from '../images/muscles_card_image.png';
import fullSkeletonImage from '../images/caveira 1.svg';
import lastNewsToraxImage from '../images/last_news_torax.png';
import lastNewsFootImage from '../images/last_news_pe.png';
import lastNewsBonesImage from '../images/last_news_ossos.png';
import interactiveFemurImage from '../images/Highlight_cranio-01.svg';
import costela from "../images/costela.png";
import quadril from "../images/quadril.png";
import pe from "../images/pe.png";
import cranio1 from "../images/sprite_cranio/Cranio1.png";
import cranio2 from "../images/sprite_cranio/Cranio2.png";
import cranio3 from "../images/sprite_cranio/Cranio3.png";
import cranio4 from "../images/sprite_cranio/Cranio4.png";
import cranio5 from "../images/sprite_cranio/Cranio5.png";
import cranio6 from "../images/sprite_cranio/Cranio6.png";
import cranio7 from "../images/sprite_cranio/Cranio7.png";
import cranio8 from "../images/sprite_cranio/Cranio8.png";
import cranio9 from "../images/sprite_cranio/Cranio9.png";
import cranio10 from "../images/sprite_cranio/Cranio10.png";
import cranio11 from "../images/sprite_cranio/Cranio11.png";
import cranio12 from "../images/sprite_cranio/Cranio12.png";

export const anatomyData = {
  partes: [
  {
      emBreve: false,
      cartao:{
       rotulo: 'Ossos',
       imagem: `${boneCardImage}`
      },
      pagina:{
        titulo: 'Lorem Ipsum',
        descricoes: [
          `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
          `There are many variations of passages of Lorem Ipsum available,
           but the majority have suffered alteration in some form, by injected humour,
           or randomised words which don't look even slightly believable. 
           If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
           anything embarrassing hidden in the middle of text. `
        ],
        ultimosLancamentos: [`${lastNewsToraxImage}`,`${lastNewsFootImage}`,`${lastNewsBonesImage}`],
        imagem: {
          arquivo: `${fullSkeletonImage}`,
          largura: 449,
          altura: 883
        },
        itensMenuLateral: [
          {
            imagem: lastNewsToraxImage,
            rotulo: 'Torax',
            descricao: {
              nome:'',
              descricoes: ['','']
            }
          },
          {
            imagem: costela,
            rotulo: 'Costela',
            descricao: {
              nome:'',
              descricoes: ['','']
            }
          },
          {
            imagem: quadril,
            rotulo: 'Quadril',
            descricao: {
              nome:'',
              descricoes: ['','']
            }
          },
          {
            imagem: pe,
            rotulo: 'Pé',
            descricao: {
              nome:'',
              descricoes: ['','']
            }
          }
        ],
        interatividades: [
         {
           imagem: `${interactiveFemurImage}`,
           imagemAmpliada: `${cranio1}`,
           quadrosAnimacao: [
              cranio1, cranio2, cranio3, cranio4, cranio5, cranio6, cranio7, cranio8, cranio9, cranio10, cranio11, cranio12
           ],
           x: 162,
           y: 19,
           rotacao: 0,
           titulo: 'Crânio',
           descricao: {
             nome: 'Frontal',
             descricoes: [
              `O osso frontal cria a curvatura lisa da testa e protege o lobo frontal do cérebro, especialmente a placa horizontal 
              do osso etmoidal conhecida como placa cribriforme que permite que os feixes nervosos olfativos passem por sua superfície
              perfurada e levem o teto da cavidade nasal seu olfato.`
            ]
           }
         }
       ]
     }
   },
    {
      emBreve: true,
      cartao:{
       rotulo: 'Nervos',
       imagem: `${nervesCardimage}`
      },
      pagina:{
        titulo: 'tituloPagina',
        descricoes: ['',''],
        imagem: {
          arquivo: '',
          largura: 0,
          altura: 0
        },
        ultimosLancamentos: ['','',''],
        itensMenuLateral: [

        ],
        interatividades: [
         {
           imagem: 'imagemInteratividade.jpg',
           imagemAmpliada: 'imagemInteratividadeAmpliada.jpg',
           quadrosAnimacao: [
            '','','',''
           ],
           x: 50,
           y: 50,
           rotacao: 45,
           titulo: '',
           descricao: {
             nome: '',
             descricoes: ['','']
           }
         }
       ]
     }
    },
    {
      emBreve: true,
      cartao:{
       rotulo: 'Músculos',
       imagem: `${musclesCardImage}`
      },
      pagina:{
        titulo: 'tituloPagina',
        descricoes: ['',''],
        imagem: {
          arquivo: '',
          largura: 0,
          altura: 0
        },
        ultimosLancamentos: ['','',''],
        itensMenuLateral: [

        ],
        interatividades: [
         {
           imagem: 'imagemInteratividade.jpg',
           imagemAmpliada: 'imagemInteratividadeAmpliada.jpg',
           quadrosAnimacao: [
            '','','',''
           ],
           x: 50,
           y: 50,
           rotacao: 45,
           titulo: '',
           descricao: {
             nome: '',
             descricoes: ['','']
           }
         }
       ]
     }
    }
  ]
}