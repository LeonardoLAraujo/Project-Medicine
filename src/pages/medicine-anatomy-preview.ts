import {html, css, TemplateResult, CSSResult, PropertyValues, unsafeCSS} from 'lit';
import { customElement, state } from 'lit/decorators.js';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import backButtonImage from '../images/preview_back_arrow.png';
import rightArrowImage from '../images/arrow_right.png';
import { styleMap } from 'lit/directives/style-map.js';
import skeletonBottomShadow from '../images/preview_skeleton_bottom_shadow.png';
import "../components/ecv-medicine-button-icon";

@customElement('medicine-anatomy-preview')
export default class MedicineAnatomyPreview extends ECVMedicineSwitchThemeColor{


    static override get styles(): CSSResult{

        return css`
        
            :host{
                box-sizing: border-box;
                display: block;
                padding: 20px;
                -webkit-user-select: none;
                user-select: none;
            }

            .anatomy-preview{
                display: flex;
                height: 977px;
                padding: 80px;
            }

            .anatomy-preview__leftSide{
                border-right: 1px solid white;
                color: white;
                flex: 1;
                padding: 20px 40px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: calc(50% - 160px);
                
            }

            .leftSide__title{
                font-size: 80px;
                font-family: RobotoBlackItalic;
            }

            .leftSide__scrollView{
                height: 500px;
                overflow: hidden auto;
            }

            .leftSide__description{
                max-width: 725px;
                margin: 50px 0;
                font-size: 16px;
                font-family: PoppinsRegular;
            }

            .lastNews__title{
                font-size: 24px;
                font-family: PoppinsBold;
                margin-bottom: 20px;
                text-indent: 52px;
            }

            .lastNews__slider{
                display: flex;
                align-items: center;
                column-gap: 20px;
                height: 130px;
            }

            .slider__mask{
                width: 600px;
                height: 100%;
            }

            .mask__itens{
                height: inherit;
                display: flex;
                overflow: hidden;
                column-gap: 20px;
            }

            .itens__image{
                background-size: cover;
                background-repeat: no-repeat;
                flex: 1;
                cursor: pointer;
            }

            .backArrow__icon,
            .forwardArrow__icon{
                background-image: url("${unsafeCSS(rightArrowImage)}");
                background-repeat: no-repeat;
                background-size: cover;
                width: 52px;
                height: 52px;
                cursor: pointer;
                -webkit-user-drag: none;
            }

            .slider__backArrow .backArrow__icon{
                transform: scaleX(-1);
            }

            .anatomy-preview__rightSide{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: calc(50% - 160px);
            }

            .rightSide__backButton{
                background-image: url("${unsafeCSS(backButtonImage)}");
                background-size: cover;
                background-repeat: no-repeat;
                width: 73px;
                height: 62px;
                cursor: pointer;
                position: absolute;
                bottom: 62px;
                right: 0;
            }

            .rightSide__instructions{
                width: 150px;
                position: absolute;
                right: 0;
            }

            .instructions__text{
                color: white;
                font-family: PoppinsItalic;
                font-size: 14px;
                width: 114px;
            }

            .instructions__arrow{
                position:absolute;
                right: 0;
            }

            .rightSide__image{
                -webkit-user-drag: none;
                position: relative;
            }

            .rightSide__interactiveImage{
                position: absolute;
                opacity: 0;
                z-index: 1;
                cursor: pointer;
                width: 116px;
                height: 116px;
                mix-blend-mode: overlay;
            }

            .rightSide__interactiveImage:hover{
                opacity: 1;
            }

            .rightSide__bottomShadow{
                position: absolute;
                width: 100%;
                height: 173px;
                bottom: 0;
                -webkit-user-drag: none;
            }
        
        `;

    }

    @state()
    _pageTitle: string = '';

    @state()
    _pageDescriptions: string[] = [];

    @state()
    _pageImage: string = '';

    @state()
    _lastNewsImages: string[] = [];

    @state()
    _interactiveBlocks: any[] = [];

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        
        this._pageTitle = EcvMedicine.medicinePreviewPageObject.titulo;
        this._pageDescriptions = EcvMedicine.medicinePreviewPageObject.descricoes;
        this._pageImage = EcvMedicine.medicinePreviewPageObject.imagem.arquivo;
        this._lastNewsImages = EcvMedicine.medicinePreviewPageObject.ultimosLancamentos;
        this._interactiveBlocks = EcvMedicine.medicinePreviewPageObject.interatividades;

        EcvMedicine.instance.topBar.selectTopBarMenuLink(6);
    }

    private _backBeforePage(){

        EcvMedicine.instance.goTo('/anatomy');
    }

    private _gotoDetails(details: any) {

        EcvMedicine.medicineDetailsCurrentInteractive = details;

        EcvMedicine.instance.goTo('/anatomy/preview/details');
    }

    protected override render(): TemplateResult{

        return html`
            <style>

                .anatomy-preview{
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                }

            </style>
            <div class="anatomy-preview">
                <div class="anatomy-preview__leftSide">
                    <div class="leftSide__title">${this._pageTitle}</div>
                    <div class="leftSide__scrollView">
                        ${this._pageDescriptions.map(description => html`<div class="leftSide__description">${description}</div>`)}
                    </div>
                    <div class="leftSide__lastNews">
                        <div class="lastNews__title">Últimos lançados!</div>
                        <div class="lastNews__slider">
                            <div class="slider__backArrow">
                                <div class="backArrow__icon"></div>
                            </div>
                            <div class="slider__mask">
                                <div class="mask__itens">
                                    ${this._lastNewsImages.map((image) => html`<div class="itens__image" style="background-image: url('${image}')"></div>`)}
                                </div>
                            </div>
                            <div class="slider__forwardArrow">
                                <div class="forwardArrow__icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="anatomy-preview__rightSide">
                    <div class="rightSide__image" style="background-image: url('${this._pageImage}'); width: ${EcvMedicine.medicinePreviewPageObject?.imagem?.largura}px; height: ${EcvMedicine.medicinePreviewPageObject.imagem.altura}px">
                        <div class="rightSide__instructions">
                            <div class="instructions__text">
                                Passe o mouse sobre os ossos e 
                                clique para visualizar as informações!
                            </div>
                        </div>
                        ${this._interactiveBlocks.map(block => {

                            const interactiveXPosition = block.x;
                            const interactiveYPosition = block.y;

                            return html`<img @click=${() => {
                                this._gotoDetails(block);
                            }} class="rightSide__interactiveImage" src="${block.imagem}" style=${styleMap({ left: `${interactiveXPosition}px`, top: `${interactiveYPosition}px` })}>`
                        })}
                    </div>
                    <img class="rightSide__bottomShadow" src="${skeletonBottomShadow}">
                    <ecv-medicine-button-icon thema=${this._currentThemeColor.getName()} .onPressed=${this._backBeforePage}></ecv-medicine-button-icon>
                </div>
            </div>
        `;

    }



}

declare global{

   interface HTMLElementTagNameMap{

    'medicine-anatomy-preview': MedicineAnatomyPreview

   }
}