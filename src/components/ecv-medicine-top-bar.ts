import {html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, queryAll, state } from 'lit/decorators.js';
import './ecv-medicine-logo';
import './top-bar-link-button';
import './ecv-medicine-orange-button';
import './ecv-medicine-student-avatar';
import TopBarLinkButton from './top-bar-link-button';
import EcvMedicine from '../ecv-medicine';
import { IconTypes } from 'ecv-component';
import "ecv-component";
import ECVMedicineSwitchThemeColor from './ecv-medicine-switch-theme-color';

@customElement('ecv-medicine-top-bar')
export default class ECVMedicineTopBar extends ECVMedicineSwitchThemeColor{

    static override get styles(): CSSResult{

        return css`
        
            :host{
                display: block;
                box-sizing: border-box;
                user-select: none;
                -webkit-user-select: none;
            }

            .medicine-top-bar{
                display: flex;
                justify-content: space-between;
                height: calc(81px - 40px);
                padding: 20px 40px;
                align-items: center; 
            }

            ecv-medicine-logo{
                margin-top: 5px;
            }

            .medicine-top-bar__colorPaletButton{
                flex: 1;
            }

            .medicine-top-bar__linkButtonsContainer{
                display: none;
                justify-content: center;
                flex: 2;
                column-gap: 46px;
            }

            .medicine-top-bar__containerOrangeButton{
                display: none;
                width: 160px;
                margin: 0 20px;
            }

            ecv-medicine-student-avatar,
            ecv-medicine-orange-button{
                display: none;
            }

            @media screen and (min-width: 330px){

                .colorPaletButton__icon{

                    margin-left: -5vw;
                }
            }

            @media screen and (min-width: 631px) and (max-width: 1024px){

                .colorPaletButton__icon{

                    margin-left: -15vw;
                }
            }

            @media screen and (min-width: 1280px){

                 .colorPaletButton__icon{

                    margin-left: 0;
                }

                ecv-medicine-student-avatar,
                ecv-medicine-orange-button,
                .medicine-top-bar__linkButtonsContainer{
                    display: flex;
                }

                .medicine-top-bar__colorPaletButton{
                    cursor: pointer;
                    flex: initial;
                }

                .medicine-top-bar__containerOrangeButton{
                    display: block;
                }

                .medicine-top-bar__sandwitchButton{
                    display: none;
                }
            }
        `;

    }

    @queryAll('top-bar-link-button')
    private _topBarLinkButtons!: NodeListOf<TopBarLinkButton>;

    @property({ type: Number })
    currentScreenWidth: number = 0;

    @state()
    private _currentSelectedMenuIndex: number = 0;

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    public getMenuLinks(): NodeListOf<TopBarLinkButton> {

        return this._topBarLinkButtons;
    } 

    public getCurrentSelectedMenuIndex(): number {

        return this._currentSelectedMenuIndex;
    }

    /**
     * Seleciona um link especifico do top bar menu
     * @param index - O indice do menu
     */
    public async selectTopBarMenuLink(index: number): Promise<void> {

        await this.updateComplete;

        if(index > this._topBarLinkButtons.length - 1){
            throw new Error("Parametro index está além do alcance dos indices do menu!");
        }

        this._currentSelectedMenuIndex = index;

        this._topBarLinkButtons.forEach((button, indexButton) => {
            if(index === indexButton){
                button.setActive(true);
            }else{
                button.setActive(false);
            }
        });
    }

    private _goToHomeReference(): void {

        EcvMedicine.instance.goTo('/');
        //this.selectTopBarMenuLink(0);
    }

    private _goToPlatformsReference(): void {

        EcvMedicine.instance.goTo('/platforms');
        //this.selectTopBarMenuLink(1);
    }

    private _goToLibraryReference(): void {

        EcvMedicine.instance.goTo('/library');
        //this.selectTopBarMenuLink(2);
    }

    private _goToVideoReference(): void {

        EcvMedicine.instance.goTo('/video');
        //this.selectTopBarMenuLink(3);
    }

    private _goToLaminaeReference(): void {

        EcvMedicine.instance.goTo('/laminae');
        //this.selectTopBarMenuLink(4);
    }

    private _goToComaReference(): void {

        EcvMedicine.instance.goTo('/coma');
        //this.selectTopBarMenuLink(5);
    }

    private _goToAnatomyReference(): void {

        EcvMedicine.instance.goTo('/anatomy');
        //this.selectTopBarMenuLink(6);
    }

    private _goToStudyReference(): void {

        EcvMedicine.instance.goTo('/study');
        //this.selectTopBarMenuLink(6);
    }

    protected override render(): TemplateResult{

        return html`
            <style>

                .medicine-top-bar{
                    background-color: ${this._currentThemeColor.getBackgroundColor()};
                    color: ${this._currentThemeColor.getColor()};
                }

            </style>
            <div class="medicine-top-bar">
                <ecv-medicine-logo></ecv-medicine-logo>
                <div class="medicine-top-bar__linkButtonsContainer">
                    <top-bar-link-button @click=${this._goToHomeReference.bind(this)} textLink="HOME" pathLink="/"></top-bar-link-button>
                    <top-bar-link-button @click=${this._goToPlatformsReference.bind(this)} textLink="Plataformas" pathLink="/platforms"></top-bar-link-button>
                    <top-bar-link-button @click=${this._goToLibraryReference.bind(this)} textLink="Biblioteca" pathLink="/library"></top-bar-link-button>
                    <top-bar-link-button @click=${this._goToVideoReference.bind(this)} textLink="Vídeos" pathLink="/video"></top-bar-link-button>
                    <top-bar-link-button @click=${this._goToLaminaeReference.bind(this)} textLink="Lâminas" pathLink="/laminae"></top-bar-link-button>
                    <top-bar-link-button @click=${this._goToComaReference.bind(this)} textLink="Congresso" pathLink="/coma"></top-bar-link-button>
                    <top-bar-link-button @click=${this._goToStudyReference.bind(this)} textLink="Estudos" pathLink="/study"></top-bar-link-button>
                    <top-bar-link-button @click=${this._goToAnatomyReference.bind(this)} textLink="Anatomia" pathLink="/anatomy"></top-bar-link-button>
                </div>
                <div @click=${() => { EcvMedicine.instance.switchTheme(); }} class="medicine-top-bar__colorPaletButton">
                    <ecv-icon
                        class="colorPaletButton__icon" 
                        ?filled=${true} 
                        .icon=${IconTypes.InvertColor} 
                        .iconStyle=${{ 
                            color: 'white',
                            size: this.currentScreenWidth >= 775 ? '33px': '30px'
                        }}
                    ></ecv-icon>
                </div>
                <div @click=${() => { EcvMedicine.instance.openSandwitchMenu(); EcvMedicine.instance.disablePageScroll(); }} class="medicine-top-bar__sandwitchButton">
                    <ecv-icon .icon=${IconTypes.Menu} .iconStyle=${{ color: "white", size: this.currentScreenWidth >= 775 ? '35px': '30px'}}></ecv-icon>
                </div>
                <div class="medicine-top-bar__containerOrangeButton">
                    <ecv-medicine-orange-button @click=${() => { EcvMedicine.instance.goToStudentCenterExternalLink() }} textButton="Central" cursor="pointer"></ecv-medicine-orange-button>
                </div>
                <ecv-medicine-student-avatar .student=${EcvMedicine.student}></ecv-medicine-student-avatar>
            </div>
        `;

    }

}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-top-bar': ECVMedicineTopBar

   }
}