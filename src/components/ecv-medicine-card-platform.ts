import {html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, queryAll, state } from 'lit/decorators.js';
import { CardPlatform, MENU_PLATFORM, MenuPlatform } from '../data/platform';
import "./ecv-medicine-card-button-platform";
import EcvMedicineCardButtonPlatform from './ecv-medicine-card-button-platform';
import "./ecv-medicine-orange-button";
import ECVMedicineSwitchThemeColor from './ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import { cache } from 'lit/directives/cache.js';

@customElement('ecv-medicine-card-platform')
export default class EcvMedicineCardPlatform extends ECVMedicineSwitchThemeColor{

    static override get styles(): CSSResult{
        return css`
            .cardPlatform{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                gap: 5px;
                position: relative;
            }

            .cardPlatform__content{
                display: flex;
                flex-direction: column;
                width: 100%;
            }

            .cardPlatform__content[actual="actual"]{
                background-color: var(--dark-blue);
                color: #fff;
            }

            .content__platform{
                display: none;
                flex-direction: column;
                justify-content: center;
                padding-bottom: 36px;
                overflow: hidden;
            }

            .content__image{
                padding-top: 10px;
                width: 100%;
                transform: scale(1.5);
                object-fit: contain;
                height: 248px;
                margin-top: 5rem;
            }

            .cardPlatform__content button{
                display: flex;
                align-items: center;
                justify-content: center;
                align-self: center;
                font-family: PoppinsBold;
                font-size: 14px;
                width: 90%;
                background-color: var(--dark-orange);
                border: none;
                padding: 1rem;
                color: #fff;
                cursor: pointer;
                height: 45px;  
            }

            .cardPlatform__content button:hover{
                background-color: var(--orange);
            }

            .content__detail{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: calc(100% - 32px);
                padding: 1rem;
                text-align: center;
                font-family: PoppinsLight;
                font-size: 12px;
                margin-top: 4rem;
            }

            .content__detail p {
                width: 90%;
            }

            .platformDesktop,
            .cardPlatform__menu{
                display: none;
            }

            @media (min-width: 768px){
                .content__image{
                    margin-top: 14rem;
                    transform: scale(2.9);
                }

                .content__detail{
                    margin-top: 15rem;
                }

                .content__detail{   
                    font-size: 16px;
                }

                .content__detail p{
                    width: 85%;
                }
            }

            @media (min-width: 1024px){
                .cardPlatform{
                    gap: 0px;
                    overflow: hidden;
                }

                .menuDesktop{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    flex-wrap: wrap;
                }

                .platformDesktop{
                    width: 100%;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                    height: 850px;
                }

                .cardPlatform__menu{
                    display: flex;
                    padding: 0.5rem;
                    position: relative;
                    z-index: 2;
                }

                .platformDesktop__image{
                    width: 100%;
                    height: -webkit-fill-available;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: left;
                    background-position-y: 4px;
                    background-position-x: -238px;
                    transform: scale3D(-1.1, 1.1, 1.1);
                }

                p{
                    margin: 0;
                    color: #fff;
                }

                .platformDesktop__introduction{
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    padding: 3rem;
                    gap: 40px;
                    width: 60%;
                    position: relative;
                    z-index: 2;
                }

                .introduction__title,
                .introduction__subtitle{
                    font-size: 60px;
                    align-self: flex-start;
                }

                .introduction__title,
                .introduction__subtitle{
                    font-family: PoppinsLightItalic;
                }

                .introduction__complementTitle{
                    font-size: 56px;
                    font-family: PoppinsBoldItalic;
                }

                .introduction__text{
                    display: flex;
                    flex-direction: column;
                    gap: 26px;
                }

                .introduction__button{
                    width: 100%;
                }
            }

            @media (min-width: 1200px){
                .platformDesktop{
                    justify-content: flex-end;
                    font-family: PoppinsLight;
                }

                .introduction__complement{
                    display: flex;
                    flex-direction: column;
                }

                .introduction__text{
                    width: 100%;
                }
                

                .introduction__title,
                .introduction__complementTitle,
                .introduction__subtitle{
                    font-size: 48px;
                    align-self: flex-start;
                }

                .introduction__complementTitle,
                .introduction__subtitle{
                    margin-top: -25px;
                }

                .platformDesktop__image{
                    width: 66%;
                    height: 85%;
                    position: absolute;
                    left: 0;
                    background-position-x: 66px;
                }

                .platformDesktop__introduction{
                    align-items: flex-start;
                    width: 30%;
                    padding: 3.5rem;
                    gap: 30px;
                }

                .introduction__button{
                    width: 95%;
                    margin-top: 2rem;
                }
            }


            @media (min-width: 1400px){
                .introduction__complementTitle{
                    font-size: 55px;
                    margin-top: -18px;
                }

                .introduction__title,
                .introduction__subtitle{
                    font-size: 47px
                }

                .platformDesktop__image{
                    width: 65%;
                    height: 85%;
                }

                .platformDesktop__introduction{
                    padding: 4rem;
                    padding-bottom: 6rem;
                }
            }

            @media (min-width: 1428px){
                .introduction__title,
                .introduction__subtitle{
                    font-size: 64px;
                }

                .introduction__button{
                    width: 79%;
                }
            }
        `;
    }

    constructor(){
        super(EcvMedicine.currentTheme);
    }
    
    private _listMenuPlatformCard: Array<MenuPlatform> = MENU_PLATFORM;

    @state()
    public indexMenuPlatform: number = 0;

    @state()
    private _indexCardPlatform: number = 0;

    @state()
    private _currentScreenWidth: number = 0;

    @queryAll(".cardPlatform__content")
    private _containerCardPlatform!: NodeListOf<HTMLDivElement>;

    @queryAll("ecv-medicine-card-button-platform")
    private _allMedicineCardButtonPlatform!: Array<EcvMedicineCardButtonPlatform>;
    
    @queryAll(".menu__buttonPlatformDesktop")
    private _allMenuButtonPlatformDesktop!: Array<EcvMedicineCardButtonPlatform>;

    @queryAll(".content__platform")
    private _allContentPlatform!: NodeListOf<HTMLDivElement>;

    @property({type: String})
    backgroundColor: string = "";

    @property({type: String})
    typeBackground: string = "";

    @property({attribute: false})
    valeuInput: string = "";

    override connectedCallback(): void {
        super.connectedCallback();

        this._updateScreenWidth();
        window.addEventListener('resize', this._updateScreenWidth.bind(this));
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        window.addEventListener('resize', this._updateScreenWidth.bind(this));
    }

    private _updateScreenWidth() {
        this._currentScreenWidth = window.innerWidth;
    }

    public getCurrentScreenWidth(): number {
        return this._currentScreenWidth;
    }

    protected override firstUpdated(): void {
        this.switchCurrentTheme();
        this._currentScreenWidth < 1200 ? this._allMedicineCardButtonPlatform[0].click() : this._allMenuButtonPlatformDesktop[0].click();
    }

    private goToPlatform(link: string): void{
        window.open(link, "_blank");
    }

    public selectedFirstPlatformMobile(): void{
        this._allMedicineCardButtonPlatform[0]?.click();
    }

    private resetCardMobile(): void{
        this._containerCardPlatform.forEach((card: HTMLDivElement) => {
            card.removeAttribute("actual");
        });

        this._allMedicineCardButtonPlatform.forEach((button: EcvMedicineCardButtonPlatform) => {
            button.isCurrentCard = false;
            button.isCurrent = false;
        });

        this._allContentPlatform.forEach((platform: HTMLDivElement) => {
            platform.style.display = "none";
        });
    }

    private resetCardDesktop(): void{
        this._allMenuButtonPlatformDesktop.forEach((platform: EcvMedicineCardButtonPlatform) => {
            platform.isCurrentCard = false;
            platform.isCurrent = false;
            platform.style.display = "flex";
        });
    }

    private alterCardPlatformMobile(index: number): void{
        this.resetCardMobile();

        this._containerCardPlatform[index].setAttribute("actual", "actual");
        this._allMedicineCardButtonPlatform[index].isCurrentCard = true;
        this._allMedicineCardButtonPlatform[index].isCurrent = true;
        this._allContentPlatform[index].style.display = "flex";
    }

    private alterCardPlatformDesktop(index: number): void{
        this.resetCardDesktop();

        this._allMenuButtonPlatformDesktop[index].isCurrentCard = true;
        this._allMenuButtonPlatformDesktop[index].isCurrent = true;

        this._indexCardPlatform = index;
    }

    private generateCardMobile(): Array<TemplateResult> {
        

        return this._listMenuPlatformCard[this.indexMenuPlatform].card.map((card: CardPlatform, index: number) => 
            html`<div class="cardPlatform__content" style="background-color: ${this.backgroundColor}">
                    <ecv-medicine-card-button-platform backgroundColor=${this.backgroundColor} .icon=${card.icon} text=${card.title} .complementTitle=${card.complementTitle} @click=${() => {this.alterCardPlatformMobile(index)}}></ecv-medicine-card-button-platform>
                    <div class="content__platform">
                        <img class="content__image" src=${card.image}>
                        <div class="content__detail">
                            <p>${card.description}</p>
                            ${cache(card.complement != "" ? html`<p>${card.complement}</p>` : html``)}
                        </div>
                        <button @click=${() => {this.goToPlatform(card.sourcePlatform)}}>Entrar</button>
                    </div>
                </div>
        `);
    }


    private genereteCardDesktop(): Array<TemplateResult> {
        return this._listMenuPlatformCard[this.indexMenuPlatform].card.map((card: CardPlatform, index: number) => 
            html`
                <div class="cardPlatform__menu" style="background-color: ${this.typeBackground == "dark" ? "#000" : "var(--navy-dark-blue)"}">
                    <ecv-medicine-card-button-platform class="menu__buttonPlatformDesktop" backgroundColor=${this.backgroundColor} .icon=${card.icon} .complementTitle=${card.complementTitle} text=${card.title} @click=${() => {this.alterCardPlatformDesktop(index)}}></ecv-medicine-card-button-platform>
                </div>
            `);
    }

    private generatePlatform(){
        return html`
                <style>
                    .platformDesktop,
                    .cardPlatform__content{
                        background-color: ${this.backgroundColor}
                    }

                    @media (min-width: 1428px){
                        .platformDesktop__image{
                            width: ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.width != "" ? this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.width : "58%"} !important;
                            height: ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.height != "" ? this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.height : "88%"} !important;
                            transform: ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.transform != "" ? this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.transform : "scale3D(-1.2, 1.2, 1.2)"} !important;
                            background-position-x: ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.positionX != "" ? this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.positionX : "66px"} !important;
                            background-position-y: ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.positionY != "" ? this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.positionY : "0px"} !important;
                        } 

                        .platformDesktop__introduction{
                            width: ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.textWidth != "" ? this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.textWidth : "30%"} !important;
                            padding: 4rem;
                            padding-bottom: 7rem;
                        }

                        .introduction__text{
                            width: ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.descriptonWidth != "" ? this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].positionImage.descriptonWidth : "86%"} !important;
                        }
                    }
                </style>
                <div class="platformDesktop">
                    <div class="platformDesktop__image" style="background-image: url(${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].image})"></div>
                    <div class="platformDesktop__introduction">
                        <div class="introduction__complement">
                            <p class="introduction__title">${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].title}</p>
                            ${cache(this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].subtitle?.trim() != "" ? 
                                html`<p class="introduction__subtitle">
                                        ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].subtitle}
                                    </p>` 
                                : html``)} 
                            ${cache(this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].complementTitle.trim() != "" ?
                                html`<p class="introduction__complementTitle">
                                        ${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].complementTitle}
                                    </p>` 
                                : html``)}
                        </div>
                        <div class="introduction__text">
                            <p class="text__description">${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].description}</p>
                            <p class="text__complement">${this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].complement}</p>
                        </div>
                        <div class="introduction__button">
                            <ecv-medicine-orange-button textButton="Entrar" buttonHeight=60 ?boldedText=${true} cursor="pointer" size=20 @click=${() => {this.goToPlatform(this._listMenuPlatformCard[this.indexMenuPlatform].card[this._indexCardPlatform].sourcePlatform)}}></ecv-medicine-orange-button>
                        </div>
                    </div>
                </div>
        `;
    }

    protected override render(): TemplateResult{
        return html`
            <div class="cardPlatform">
                ${cache(this._currentScreenWidth < 1200 ? this.generateCardMobile() : html`
                                                                                    <div class="menuDesktop" style="background-color: ${this.typeBackground == "dark" ? "#000" : "var(--navy-dark-blue)"}">
                                                                                        ${this.genereteCardDesktop()}
                                                                                    </div>
                                                                                    <div class="platformDesktop">
                                                                                        ${this.generatePlatform()}
                                                                                    </div>`
                                                                                )}
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'ecv-medicine-card-platform': EcvMedicineCardPlatform
   }
}