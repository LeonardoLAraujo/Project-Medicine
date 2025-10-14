import { IconTypes } from "ecv-component";
import Medico from "../images/medico0.png";
import MedicoAnalisandoRadiografia from "../images/medica_analisando_radiografia.png";
import Medicamentos from "../images/medicamentos.png";
import MedicoUtilizandoEquipamento from "../images/medico_utilizando_equipamento.png";
import MedicoRecebendoTesoura from "../images/medico_recebendo_tesoura.png";
import Cirurgia from "../images/cirurgia.png";
import MedicosVendoRadiografia from "../images/medicos_vendo_radiografia2.png";
import CabecaHumana from "../images/cabeca_humana.png";
import LivroAberto from "../images/livro-aberto.png";
import LivroEstetoscopio from "../images/livros_e_estetoscopio.png";
import MarteloEstetoscopio from "../images/martelo_estetoscopio.png";
import MedicaSorrindo from "../images/medica_sorrindo.png";
import MedicaComPacienteCadeiraRodas from "../images/Paciente-360.png";
import Pediatra from "../images/pediatra.png";
import { html, TemplateResult } from "lit";

export type MenuPlatform = {
    icon: IconTypes | string,
    text: string,
    card: Array<CardPlatform>
}

export type CardPlatform = {
    icon: IconTypes | string,
    title: string,
    subtitle: string | undefined;
    complementTitle: string,  
    image: string,
    description: string | TemplateResult,
    complement: string,
    sourcePlatform: string,
    positionImage: any
}

export const MENU_PLATFORM: Array<MenuPlatform> = [
    {
        icon: "admin_meds", 
        text: "Pesquisas e Casos Clinicos",
        card: [
            {
                icon: "dashboard_customize", 
                title: "Clinical Key", 
                subtitle: "",
                complementTitle: "Student",
                image: Medico, 
                description: html`Plataforma on-line de aprendizagem, com uma ampla biblioteca de <i>e-books</i>, imagens e vídeos médicos publicados pela Elsevier.`, 
                complement: "Além de permitir aos alunos avaliar, revisar e estudar em construir seu conhecimento, confiança e habilidades.",
                sourcePlatform: "https://www.clinicalkey.com/student/login",
                positionImage: {width: "63%", height: "88%", transform: "scale3D(-1.1, 1.1, 1.1)", positionX: "-12px", textWidth: "29%", descriptonWidth: ""}
            },
            {
                icon: "radiology", 
                title: "RADPrimer", 
                subtitle: "",
                complementTitle: "",
                image: MedicoAnalisandoRadiografia, 
                description: `Plataforma educacional com módulos que apresentam mais de 5.000 estudos de casos, imagens referenciais de radiologias e soluções 
                            de diagnóstico, o que permite que os médicos personalizem seu caminho educacional, com foco nos tópicos que mais importam.`, 
                complement: "",
                sourcePlatform: "https://app.radprimer.com/",
                positionImage: {width: "65%", height: "98%", transform: "scale3D(-1.1, 1.1, 1.1)", positionX: "-31px", textWidth: "", descriptonWidth: ""}
            },
            {
                icon: "admin_meds", 
                title: "Clinical ", 
                subtitle: "",
                complementTitle: "Pharmacology",
                image: Medicamentos, 
                description: `O Clinical Pharmacology é uma plataforma de referência em farmacologia clínica, desenvolvida para fornecer 
                                informações seguras, atualizadas e baseadas em evidências sobre medicamentos. É amplamente utilizada por estudantes, professores, 
                                pesquisadores e profissionais da saúde como suporte no ensino, na pesquisa e na prática clínica.`, 
                complement: "",
                sourcePlatform: "https://www.clinicalkey.com/pharmacology/",
                positionImage: {width: "70%", height: "104%", transform: "scale3D(-1.0, 1.0, 1.0)", positionX: "13px", positionY: "0rem", textWidth: "", descriptonWidth: ""}
            },
            {
                icon: "grid_view", 
                title: "Clinical Key", 
                subtitle: "",
                complementTitle: "",
                image: MedicoUtilizandoEquipamento, 
                description: `O ClinicalKey é uma plataforma de conhecimento clínico da Elsevier que oferece acesso a um vasto acervo de conteúdos 
                            atualizados e confiáveis na área da saúde. Seu objetivo é apoiar estudantes, professores e profissionais da medicina 
                            na prática clínica, no ensino e na pesquisa.`, 
                complement: ``,
                sourcePlatform: "https://www.clinicalkey.com/#!/",
                positionImage: {width: "73%", height: "100%", transform: "scale3D(-1.0, 1.0, 1.0)", positionX: "-37px", positionY: "-3rem", textWidth: "", descriptonWidth: ""}
            },
            {
                icon: "fact_check", 
                title: "BMJ Best", 
                subtitle: "",
                complementTitle: " Practice",
                image: MedicoRecebendoTesoura, 
                description: `Base de informações médicas fundamentada em evidências de pesquisa, diretrizes e opiniões de especialistas. 
                            Inclui prevenção, diagnóstico, tratamento e prognóstico.`, 
                complement: `Ferramenta desenvolvida para apoiar os médicos na tomada de decisões, desde o diagnóstico até o tratamento.`,
                sourcePlatform: "https://bestpractice.bmj.com/",
                positionImage: {width: "67%", height: "96%", transform: "scale3D(-1.1, 1.1, 1.1)", positionX: "49px", textWidth: "", descriptonWidth: ""}
            },
        ]
    },
    {
        icon: "book_6", 
        text: "Estudos e Evidências",
        card: [
            {
                icon: "prescriptions", 
                title: "Osmosis", 
                subtitle: "",
                complementTitle: "",
                image: Cirurgia, 
                description: `Plataforma de aprendizado que facilita a compreensão de tópicos médicos complexos, por meio de recursos visuais 
                        habilmente ilustrados e baseados em evidências, com base na ciência do aprendizado`, 
                complement: `Com eventos, debates de temas atuais, e campo para perguntas e respostas.`,
                sourcePlatform: "https://www.osmosis.org/login",
                positionImage: {width: "70%", height: "108%", transform: "scale3D(-1.0, 1.0, 1.0)", positionX: "-2px", positionY: "2rem", textWidth: "25%", descriptonWidth: "70%"}
            },
            {
                icon: "assignment_ind", 
                title: "STATdx", 
                subtitle: "",
                complementTitle: "",
                image: MedicosVendoRadiografia, 
                description: `Base que disponibiliza diagnósticos, imagens, casos clínicos e procedimentos que contribuem para a prática diária 
                        e atualização científica dos médicos radiologistas. Contando com uma gama de mais de 4.700 diagnósticos simples e complexos.`, 
                complement: "",
                sourcePlatform: "https://app.statdx.com/",
                positionImage: {width: "65%", height: "100%", transform: "scale3D(-1.03, 1.03, 1.03)", positionX: "-17px", positionY: "-1rem", textWidth: "25%", descriptonWidth: "84%"}
            },
            {
                icon: "pulmonology", 
                title: "Complete ", 
                subtitle: "",
                complementTitle: "Anatomy",
                image: CabecaHumana, 
                description: `Plataforma de anatomia humana em 3D, com ferramentas exclusivas de colaboração e aprendizagem.`, 
                complement: `Apresenta mais de 17.000 estruturas interativas (incluindo um coração humano vivo, pulsante e dissecável em 3D),a
                            lém de realidade aumentada, imagens radiológicas em paralelo com modelos 3D interativos,
                            entre outras ferramentas e peças para estudos.`,
                            sourcePlatform: "",
                positionImage: {width: "81%", height: "95%", transform: "scale3D(-1.03, 1.03, 1.03)", positionX: "15px", textWidth: "22%", descriptonWidth: ""}
            },
            {
                icon: "clinical_notes", 
                title: "Bates Visual", 
                subtitle: "Guide to Physical",
                complementTitle: "Examination",
                image: Pediatra, 
                description: html`Esse guia visual de exames físicos apresenta vídeos de habilidades clínicas, com técnicas de exploração da cabeça aos pés,
                            sendo baseadas nos sistemas fisiológicos e na ênfase clínica, assim como o módulo OSCE 
                            (<i>Objective Structured Clinical Examinations – Exames Clínicos Objetivos Estruturados</i>) e o trato com os pacientes. `, 
                complement: ``,
                sourcePlatform: "https://batesvisualguide.com/index.aspx",
                positionImage: {width: "60%", height: "93%", trasnform: "scale3D(-1.2, 1.2, 1.2)", positionX: "2px", positionY: "-2rem", textWidth: "", descriptonWidth: ""}
            },
        ]
    },
    {
        icon: "menu_book", 
        text: "Aprendizado",
        card: [
            {
                icon: "menu_book", 
                title: "Biblioteca ", 
                subtitle: "",
                complementTitle: "Virtual Pearson",
                image: LivroAberto, 
                description: `Acervo de livros digitais composto por mais de 15.000 títulos que abordam diferentes áreas
                            e temas do conhecimento.`, 
                complement: `Com acesso ininterrupto, seja dentro da instituição ou de modo externo, com atualização permanente de títulos, 
                            opção de download para leitura e consulta off-line, ferramentas extras de 
                            busca avançada, anotações, destaque de trechos, entre outros.`,
                sourcePlatform: "https://plataforma.bvirtual.com.br/",
                positionImage: {width: "68%", height: "88%", transform: "scale3D(-1.0, 1.0, 1.0)", positionX: "-2px", textWidth: "25%", descriptonWidth: "84%"}
            },
            {
                icon: "folder_open", 
                title: "Portal", 
                subtitle: "de Periódicos",
                complementTitle: "CAPES",
                image: LivroEstetoscopio, 
                description: `O Portal da Coordenação de Aperfeiçoamento de Pessoal de Nível Superior (CAPES) reúne um acervo com mais 
                            de 49 mil títulos, incluindo livros, patentes, normas técnicas, estatísticas e conteúdo audiovisual das 
                            principais bases de dados de cunho científico conhecidas nacional e internacionalmente.`, 
                complement: ``,
                sourcePlatform: "https://www-periodicos-capes-gov-br.ez345.periodicos.capes.gov.br/index.php?",
                positionImage: {width: "61%", height: "87%", transform: "scale3D(1.1, 1.1, 1.1)", positionX: "-10px", textWidth: "27%", descriptonWidth: "77%"}
            },
            {
                icon: "verified_user", 
                title: "Target ", 
                subtitle: "",
                complementTitle: "Gedweb",
                image: MarteloEstetoscopio, 
                description: `Sistema de gestão de normas e documentos regulatórios, que disponibiliza mais de 17.000 normas 
                            ABNT NBR/NM, Diários Oficiais, regulamentos técnicos, portarias do INMETRO, resoluções da ANEEL, 
                            procedimentos ANVISA, legislações e muito mais!`, 
                complement: ``,
                sourcePlatform: "https://www.gedweb.com.br/home/",
                positionImage: {width: "68%", height: "87%", transform: "scale3D(-1.1, 1.1, 1.1)", positionX: "-10px", textWidth: "22%", descriptonWidth: "97%"}
            },
            {
                icon: "quick_reference_all", 
                title: "ProQuest", 
                subtitle: "Research",
                complementTitle: "Library",
                image: MedicaSorrindo, 
                description: html`Base de dados multidisciplinar que contém mais de 9 mil publicações, entre elas: periódicos, livros, 
                            vídeos, áudios, dissertações, teses e <i>websites</i> multidisciplinares, oferecendo acesso ilimitado a poderosas 
                            ferramentas de pesquisa e <i>downloads</i> de capítulos sem DRM.`, 
                complement: ``,
                sourcePlatform: "https://www.proquest.com/index?accountid=43603&parentSessionId=fWv6MkTikGOjViZ%252Bb3sd44xgnVUDH5RQVQJZi%252FnPLpE%253D&parentSessionId=7fW9mSarqwJTIXQ2jgj2x2RtIlCVfmUF6N2qEIHV52A%3D",
                positionImage: {width: "58%", height: "100%", transform: "scale3D(-1.0, 1.0, 1.1)", positionX: "-31px", textWidth: "30%", descriptonWidth: "69%"}
            },
            {
                icon: "accessible_forward", 
                title: "Paciente", 
                subtitle: "",
                complementTitle: "360",
                image: MedicaComPacienteCadeiraRodas, 
                description: `Plataforma de casos clínicos, para ensinar conceitos e orientar decisões que fazem parte da rotina de médicos de outros
                            profissionais da área. Aprendizagem por meio de práticas humanizadas no ambiente digital interativa e envolvendo 
                            todas as etapas do atendimento médico ou multiprofissional. Permite a simulação e a interação do profissional 
                            com a jornada do paciente, do diagnóstico ao tratamento.`, 
                complement: ``,
                sourcePlatform: "",
                positionImage: {width: "65%", height: "98%", transform: "scale3D(1.0, 1.0, 1.0)", positionX: "19px", textWidth: "27%", descriptonWidth: "86%"}
            },
        ]
    },
];

