import {html, css, TemplateResult, CSSResult, unsafeCSS, PropertyValues} from 'lit';
import { customElement } from 'lit/decorators.js';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import { anatomyData } from '../data/anatomy';
import anatomyMainImage from '../images/anatomy_main.png';

@customElement('medicine-anatomy')
export default class MedicineAnatomy extends ECVMedicineSwitchThemeColor{


    static override get styles(): CSSResult{

        return css`
        
            :host{
                box-sizing: border-box;
                display: block;
                -webkit-user-select: none;
                user-select: none;
            }


            @media screen and (min-width: 1280px){

                .medicine-anatomy{
                    padding: 30px 40px;
                }

                .medicine-anatomy__mainDescription{
                    position: relative;
                    background-image: url('${unsafeCSS(anatomyMainImage)}');
                    background-repeat: no-repeat;
                    background-size: cover;
                    height: 434px;
                }

                .mainDescription__shadowOverlay{
                    top: 0;
                    position: relative;
                    height: inherit;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    padding: 0 90px;
                    background-image: linear-gradient(89deg, rgba(2, 2, 2, 1) 0%, rgb(14 14 14 / 61%) 47%, rgba(0, 0, 0, 0) 100%);
                }

                .shadowOverlay__title{
                    font-size: 48px;
                    font-family: PoppinsBoldItalic;
                    color: white;
                }

                .shadowOverlay__text{
                    font-size: 20px;
                    font-family: PoppinsRegular;
                    color: white;
                    max-width: 1020px;
                }

                .medicine-anatomy__parts{
                    display: flex;
                    column-gap: 10px;
                    margin-top: 10px;
                }

                .anatomyCard {
                    background-color: #0000007b;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 523px;
                    flex: 1;
                    color: white;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .anatomyCard__shadowOverlay{
                    width: inherit;
                    height: inherit;
                    flex: 1;
                    background: linear-gradient(89deg, rgba(2, 2, 2, 1) 0%, rgb(14 14 14 / 61%) 47%, rgba(0, 0, 0, 0) 100%);
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .anatomyCard__label{
                    font-size: 64px;
                    font-family: RobotoBlackItalic;
                }

                .anatomyCard__label.transparency{
                    opacity: 0.5;
                }

                .anatomyCard__sooLong{
                    font-size: 48px;
                    font-family: PoppinsBoldItalic;
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
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

    private _gotoPreview(pageInfo: any){

        EcvMedicine.medicinePreviewPageObject = pageInfo;
        EcvMedicine.instance.goTo('/anatomy/preview');
        
    }

    private _anatomyCard(anatomy: any): TemplateResult {

        return html`
            <div class="anatomyCard" style="background-image: url('${anatomy.cartao.imagem}')">
                <div class="anatomyCard__shadowOverlay">
                    <div class="anatomyCard__label ${anatomy.emBreve ? 'transparency': ''}">${anatomy.cartao.rotulo}</div>
                    ${anatomy.emBreve ? html`<div class="anatomyCard__sooLong">Em breve</div>` : 
                    html`<div class="anatomyCard__button">
                        <ecv-medicine-orange-button @click=${() => {
                            this._gotoPreview(anatomy.pagina);
                        }} textButton="Entrar" ?boldedText=${true} cursor="pointer"></ecv-medicine-orange-button>
                        </div>
                    `}
                </div>
            </div>
        `;
    }

    protected override render(): TemplateResult{
        return html`
            <div class="medicine-anatomy">
                <div class="medicine-anatomy__mainDescription">
                    <div class="mainDescription__shadowOverlay">
                        <div class="shadowOverlay__title">Anatomia</div>
                        <div class="shadowOverlay__text">
                            Confirma a ampla variedade de vídeos disponíveis na nossa plataforma, que abordam
                            uma diversidade de temas e assuntos relevantes à área de medicina.
                        </div>
                    </div>
                </div>
                <div class="medicine-anatomy__parts">
                    ${anatomyData.partes.map(part => this._anatomyCard(part))}
                </div>
            </div>
        `;

    }

}

declare global{

   interface HTMLElementTagNameMap{

    'medicine-anatomy': MedicineAnatomy

   }
}