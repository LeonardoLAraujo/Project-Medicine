import { IconTypes } from 'ecv-component';
import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import EcvMedicine from '../ecv-medicine';
import './ecv-medicine-student-info';

@customElement('ecv-medicine-overlay-menu')
export default class ECVMedicineOverlayMenu extends LitElement{


    static override get styles(): CSSResult{

        return css`
        
            :host{
                box-sizing: border-box;
                display: block;
                position: fixed;
                right: -105%;
                top: 0;
                width: 100vw;
                background-color: #D9D9D9;
                user-select: none;
                -webkit-user-select: none;
                z-index: 99;
            }

            :host([open]){
                animation: open forwards 0.3s ease-out;
            }

            :host([close]){
                animation: close forwards 0.3s ease-out;
            }

            @keyframes open {
                0%{
                    right: -105%;
                }

                100%{
                    right: 0;
                }
            }

            @keyframes close {
                0%{
                    right: 0;
                }

                100%{
                    right: -105%;
                }
            }

            .medicine-overlay{
                height: 100vh;
                width: 100vw;
                max-height: 100%;
                overflow: auto;
            }

            .medicine-overlay-menu{
                width: 100vw;
                display: flex;
                flex-direction: column;
            }
        
            .medicine-overlay-menu__header{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 20px;
                height: 85px;
            }

            .header__title{
                font-size: 35px;
                font-family: PoppinsLightItalic;
                text-align: center;
                flex: 2;
                color: #2C2C2C;
            }

            .medicine-overlay-menu__button{
                font-size: 20px;
                font-family: PoppinsLight;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 85px;
                padding: 0 40px;
                background-color: #CCCCCC;
                margin-bottom: 2px;
                color: #161616;
            }

            @media screen and (min-width: 1280px){

                :host{
                    visibility: hidden;
                    animation: none;
                }
            }
        `;
    }

    @property({ type: Number })
    currentScreenWidth: number = 0;

    @state()
    private _opened: boolean = false;

    public open(){

        if(!this.hasAttribute('open')){
            this._opened = true;
            this.setAttribute('open','');
            this.removeAttribute('close');
        }
        
    }

    public close(){
        if(this.hasAttribute('open')){
            this._opened = false;
            this.removeAttribute('open');
            this.setAttribute('close','');
        }
        
    }

    public hasOpened(): boolean {

        return this._opened;
    }

    private _clickOnLink(pathLink: string): void {

        EcvMedicine.instance.goTo(pathLink);
        EcvMedicine.instance.enablePageScroll();
    }

    protected override render(): TemplateResult{

        return html`
            <style>

                

            </style>
            <div class="medicine-overlay">
                <div class="medicine-overlay-menu">
                    <div class="medicine-overlay-menu__header">
                        <div class="header__title">Menu</div>
                        <div @click=${() => { EcvMedicine.instance.closeSandwitchMenu(); EcvMedicine.instance.enablePageScroll(); }} class="header__menuButton">
                            <ecv-icon .icon=${IconTypes.Menu} .iconStyle=${{ size: this.currentScreenWidth >= 775 ? '35px': '30px'}}></ecv-icon>
                        </div>
                    </div>
                    ${Array.from(EcvMedicine.instance.topBar.getMenuLinks()).map((menu, _index) => html`
                        <div @click=${() => { this._clickOnLink(menu.pathLink); }} class="medicine-overlay-menu__button">${menu.textLink}</div>
                    `)}
                    <ecv-medicine-orange-button @click=${() => { EcvMedicine.instance.goToStudentCenterExternalLink(); }} textButton="Central do aluno" roundedCorners="0" buttonHeight="85" ?boldedText=${true}></ecv-medicine-orange-button>
                    <ecv-medicine-student-info .student=${EcvMedicine.student}></ecv-medicine-student-info>
                </div>
            </div>
        `;

    }


}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-overlay-menu': ECVMedicineOverlayMenu

   }
}