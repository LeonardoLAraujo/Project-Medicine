import {html, css, TemplateResult, CSSResult, CSSResultGroup} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '../components/ecv-medicine-search-input';
import '../components/ecv-medicine-underline-title';
import '../components/ecv-medicine-area-title';
import EcvMedicine from '../ecv-medicine';
import { ifDefined } from 'lit/directives/if-defined.js';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';

/**
 * Classe que representa web component que contem uma pagina de um modelo generico como base para criacao de outras paginas com layout semelhante.
 * @class
 * @component 
 */
@customElement('medicine-generic-page')
export default class MedicineGenericPage extends ECVMedicineSwitchThemeColor{


    static override get styles(): CSSResult | CSSResultGroup{

        return css`
   
            :host{
                display: block;
                box-sizing: border-box;
            }

            .medicine-generic{
                background-color: #D9D9D9;
            }

            .medicine-generic__header{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 16px 20px 20px;
                background-color: #D9D9D9;
            }

            .medicine-generic__background{
                overflow: hidden;
                height: 390.76px;
            }

            .background__image{
                height: 100%;
                width: 100%;
                max-width: 100%;
                object-fit: fill;
                user-select: none;
                -webkit-user-drag: none;
                background-size: cover;
            }

            .medicine-generic__description{
                user-select: none;
                -webkit-user-select: none;
                padding-bottom: 30px;
                text-align: center;
                font-size: 16px;
                font-family: PoppinsRegular;
                color: white;
            }

            ecv-medicine-area-title{
                margin-top: 40px;
            }

            .medicine-generic__description p {
                font-family: PoppinsLight;
                margin: 40px;
            }

            ecv-medicine-orange-button{
                margin: 80px 30px 30px;
            }

            @media screen and (min-width: 483px){

                .medicine-generic__background{
                    height: 571.93px;
                }

                .background__image{
                    transform: scale(1.1);
                    background-position-x: -122px;
                    background-position-y: 10px;
                }

                .medicine-generic__description{
                    font-size: 20px;
                }

                .medicine-generic__description p {
                    margin: 40px 50px;
                }

                ecv-medicine-orange-button{
                    margin: 80px 40px 30px 40px;
                }
            }

            @media screen and (min-width: 631px){

                .medicine-generic__background{
                    height: 579.87px;
                }

                .background__image{
                    transform: scale(1.3);
                    background-position-x: -18px;
                    background-position-y: 58px;
                }

                .medicine-generic__description p {
                    margin: 40px 130px;
                }

                ecv-medicine-orange-button{
                    margin: 80px 70px 30px 70px;
                }
            }

            @media screen and (min-width: 775px){

                .medicine-generic__background{
                    height: 597.15px;
                }

                .background__image{
                    transform: scale(1);
                    background-position-x: 0px;
                    background-position-y: -23px;
                }

                .medicine-generic__description p {
                    margin: 40px 100px;
                }
            }

            @media screen and (min-width: 1024px){

                .medicine-generic__background{
                    height: 565.87px;
                }

                .background__image{
                    transform: scale(1.35);
                    background-position-x: 168px;
                    background-position-y: 58px;
                    background-size: contain;
                }

                .medicine-generic__description{
                    gap: 117px;
                }

                .medicine-generic__description p {
                    margin: 20px 240px;
                }

                ecv-medicine-orange-button{
                    margin-left: 150px;
                    margin-right: 150px;
                }
            }

            @media screen and (min-width: 1728px){

                .medicine-generic{
                    padding: 0 40px 40px;
                }

                .medicine-generic__header{
                    justify-content: start;
                }

                .medicine-generic__description{
                    display: flex;
                    padding-bottom: 0px;
   
                    margin-top: 10px;
                }

                .medicine-generic__background{
                    width: 1021px;
                    height: 835px;
                }

                .background__image{
                    transform: scale(1);
                    background-color: transparent;
                    background-position: left;
                }

                .description__rightSide{
                    padding-top: 40px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    max-width: 570px;
                    margin-left: 10px;
                }

                .medicine-generic__description p {
                    margin: 20px 0;
                    text-align: left;
                }

                ecv-medicine-orange-button{
                    width: 100%;
                    margin: 0;
                    margin-top: 30px;
                }
            }
   
        `;

    }

    /**
     * Representa o texto do titulo tracejado da pagina.
     * @public
     * @property
     */
    @property({ type: String })
    underlineTitle: string = '';

    /**
     * Representa o texto do titulo da area em questao.
     * @public
     * @property
     */
    @property({ type: String })
    areaTitle?: string;

    /**
     * Representa o texto formatado em negrito da area em questao.
     * @public
     * @property
     */
    @property({ type: String })
    boldedAreaTitle?: string;

    /**
     * Representa o endereco atual da imagem da pagina.
     * @public
     * @property
     */
    @property({ type: String })
    pageImage: string = '';
    
    /**
     * Representa o conteudo em HTML TemplateResult da pagina.
     * @public
     * @property
     */
    @property({ type: Object })
    pageContent: TemplateResult = html``;

    /**
     * A funcao a ser invocada quando o usuario clica no botao entrar da pagina.
     * @public
     * @property
     */
    @property({ attribute: false })
    enterEvent: VoidFunction = () => {};

    /**
     * Propriedade interna que representa o valor da largura da tela atual.
     * @private
     * @property
     */
    @state()
    private _currentScreenWidth: number = EcvMedicine.instance.getCurrentScreenWidth();

    protected override firstUpdated(){
        this.switchCurrentTheme();

    }

    override connectedCallback(): void {
        super.connectedCallback();

        window.addEventListener('resize', this._updateScreenWidthValue.bind(this));
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();

        window.removeEventListener('resize', this._updateScreenWidthValue.bind(this));
    }

    /**
     * Atualiza o valor da propriedade _currentScreenWidth pegando o valor atual da largura da tela.
     */
    private _updateScreenWidthValue(): void {

        this._currentScreenWidth = window.innerWidth;
    }

    protected override render(): TemplateResult{

        return html`
        
            <style>

                .background__image{
                    background-image: url("${this.pageImage}");
                    background-repeat: no-repeat;
                    background-position: center;
                }

                .medicine-generic__description{
                    background-color: ${this.getCurrentThemeColor()?.getBackgroundColor()};
                }

            </style>
            <div class="medicine-generic">
                <div class="medicine-generic__header">
                    <ecv-medicine-underline-title underlineTitle="${this.underlineTitle}" titleSize="40px" color="${EcvMedicine.currentTheme.getName() === 'light' ? 'var(--dark-blue)' : 'var(--light-dark)'}"></ecv-medicine-underline-title>
                </div>
                <ecv-medicine-search-input></ecv-medicine-search-input>
                
                <div class="medicine-generic__description">
                    <div class="medicine-generic__background">
                        <div class="background__image"></div>
                    </div>
                    <div class="description__rightSide">
                        <ecv-medicine-area-title text="${ifDefined(this.areaTitle)}" strongText="${ifDefined(this.boldedAreaTitle)}" textSize="${this._currentScreenWidth < 482 ? '37.5px' : this._currentScreenWidth < 1366 ? '56px' : '82.07px'}" direction="vertical"></ecv-medicine-area-title>
                        ${this.pageContent}
                        <ecv-medicine-orange-button boldedText textButton="Entrar" buttonHeight="55" cursor="pointer" @click=${this.enterEvent.bind(this)}></ecv-medicine-orange-button>
                    </div>
                </div>
            </div>
        `;

    }


}

declare global{

   interface HTMLElementTagNameMap{

    'medicine-generic-page': MedicineGenericPage

   }
}