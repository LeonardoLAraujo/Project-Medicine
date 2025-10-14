import {html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import ICON_BACK from "../images/iconBack.svg";
import ECVMedicineSwitchThemeColor from './ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';

@customElement('ecv-medicine-button-icon')
export default class EcvMedicineButtonIcon extends ECVMedicineSwitchThemeColor{

    static override get styles(): CSSResult{
        return css`
            :host{
                width: fit-content;
                height: fit-content;
                display: inline-block;
                cursor: pointer;
            }

            div{
                bottom: 36px;
                right: 37px;
                position: fixed;
                width: 75px;
                height: 75px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
            }

            

            img{
                width: 43px;
                -webkit-user-drag: none;
            }
        `;
    }

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    @property({attribute: false})
    onPressed: Function = () => {};

    @property({type: String})
    thema: string = "";

    protected override render(): TemplateResult{
        console.log(this.thema);
        return html`
            <style>
                div{
                    background-color: ${this.thema == "light" ? "var(--light-blue)" : "#000"};
                }

                div:hover{
                    background-color: ${this.thema == "light" ? "var(--navy-dark-blue)" : "var(--light-gray)"};
                }
            </style>
            <div @click=${this.onPressed}> 
                <img src=${ICON_BACK}>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'ecv-medicine-button-icon': EcvMedicineButtonIcon
   }
}