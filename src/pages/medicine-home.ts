import { html, css, TemplateResult, CSSResult, unsafeCSS, PropertyValues} from 'lit';
import { customElement } from 'lit/decorators.js';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import mainVideo from '../videos/CAPA_ANIMADO.mp4';
import gradientBackground from '../images/fundo_Gradiente.png';
import medicineLogoImage from '../images/logoMedicina.png';


/**
 * Classe que representa web component contendo a pagina de home da aplicacao.
 * @class
 * @component
 */
@customElement('medicine-home')
export default class MedicineHome extends ECVMedicineSwitchThemeColor{


    static override get styles(): CSSResult{

        return css`
        
            :host{
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                box-sizing: border-box;
                user-select: none;
                -webkit-user-select: none;
                -webkit-user-drag: none;
                height: calc(100vh - 81px);
                background-color: #002d6b;
            }

            video{
                display: none;
                position: absolute;
                width: 100%;
                max-width: 1920px;
                object-fit: fill;
                height: auto;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }

            .medicina-home__welcomeBlock{
                font-size: clamp(18px, 2vw, 35px);
                font-family: PoppinsRegular;
                color: white;
                margin-top: 60px;
                align-self: flex-start;
            }

            .medicine-home__containerMedia{
                position: relative;
                display: flex;
                flex-direction: column;
                row-gap: 40px;
                align-items: center;
                flex: 1;
                background-image: url("${unsafeCSS(gradientBackground)}");
                background-repeat: no-repeat;
                background-size: cover;
                background-color: #002d6b;
                padding: 40px 20px;
                max-width: 1920px;
                width: calc(100% - 40px);
            }

            .containerBackground__image{
                width: 100%;
                -webkit-user-drag: none;
            }

            .medicine-home__descriptionText{
                font-size: clamp(16px, 1vw, 22px);
                font-family: PoppinsRegular;
                color: white;
                line-height: 1.3;
                width: 99%;
            }

            .medicine-home__EnterButtonContainer{
                width: 100%;
            }

            @media screen and (min-width: 1024px){

                .medicine-home__containerMedia{
                    background-image: none;
                    padding: 0;
                    height: inherit;
                    overflow: hidden;
                }

                .medicina-home__welcomeBlock{
                    position: absolute;
                    left: 6vw;
                    top: 40px;
                    align-self: flex-start;
                }

                video{
                    display: block;
                }

                .containerBackground__image{
                    display: none;
                }

                .medicine-home__descriptionText{
                    position: absolute;
                    left: 6vw;
                    bottom: 130px;
                    align-self: flex-start;
                    width: calc(100% - 80px);
                }

                .medicine-home__EnterButtonContainer{
                    position: absolute;
                    bottom: 40px;
                    width: 317px;
                    left: 6vw;
                }
            }

            @media screen and (min-width: 1440px){

                .medicine-home__descriptionText{
                    max-width: 600px;
                }

                .medicine-home__EnterButtonContainer{
                      width: 317px;
                }
            }

            @media screen and (min-width: 1921px){

                .medicina-home__welcomeBlock{
                    left: 100px;
                }

                .medicine-home__descriptionText{
                    left: 100px;
                }
            }

            @media screen and (min-height: 1366px){

                .medicina-home__welcomeBlock{
                    font-size: 35px;
                }

                video{
                    border: 1px solid #008994;
                }

                .medicine-home__descriptionText{
                    font-size: 20px;
                }
            }

        `;

    }

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    protected override firstUpdated(_changedProperties: PropertyValues): void {

        const currentRouteIndex = EcvMedicine.instance.getCurrentRouteIndex();

        EcvMedicine.instance.topBar.selectTopBarMenuLink(currentRouteIndex);
    }

    protected override render(): TemplateResult{

        return html`
            <style>

                h1{
                    color: ${this._currentThemeColor.getColor()};
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }

            </style>
            <div class="medicine-home__containerMedia">
                <video src="${mainVideo}" autoplay muted loop></video>
                <div class="medicina-home__welcomeBlock">Bem-vindo(a), ${EcvMedicine.student.getFirstName()}!</div>
                <img class="containerBackground__image" src="${medicineLogoImage}">
                <div class="medicine-home__descriptionText">
                    Para ampliar seus conhecimentos, navegue nas plataformas 
                    disponíveis nas abas, visualizando casos, tirando dúvidas e expandindo seus horizontes sobre a área
                    médica com os acervos enriquecedores que disponibilizamos para você!
                </div>
                <div class="medicine-home__EnterButtonContainer">
                    <ecv-medicine-orange-button
                        @click=${() => EcvMedicine.instance.goTo('/platforms')} 
                        textButton="Entrar" 
                        buttonHeight="50" 
                        cursor="pointer" 
                        
                        ?boldedText=${true}
                    ></ecv-medicine-orange-button>
                </div>
            </div>
        `;

    }



}

declare global{

   interface HTMLElementTagNameMap{

    'medicine-home': MedicineHome

   }
}