import {html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import ECVMedicineSwitchThemeColor from './ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';

@customElement('ecv-medicine-tag-video-search')
export default class EcvMedicineTagVideoSearch extends ECVMedicineSwitchThemeColor{

    static override get styles(): CSSResult{
        return css`
            :host{
                width: fit-content;
                height: fit-content;
                display: inline-block;
            }

            .tag{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 133px;
                padding: 1rem;
                color: #fff;
                cursor: pointer;
                font-size: 16px;
            }
        `;
    }

    @state()
    isPressedTag: boolean = false;

    @property({type: String})
    backgroundColor: string = "";

    @property({type: String})
    text: string = "";

    @property({type: String})
    thema: string = "";

    @property({attribute: false})
    onPressed: Function = () => {};

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    private selectingTag(): void{
        this.isPressedTag = !this.isPressedTag;

        if(this.isPressedTag){
            this.backgroundColor= "var(--light-blue)";
        }else{
            this.backgroundColor = "var(--dark-blue)";
        }
      
    }

    protected override render(): TemplateResult{
        return html`
            <style>
                .tag{
                    background-color: ${this.backgroundColor};
                }
                
                .tag:hover{
                    background-color: ${this.thema == "light" ? "var(--light-blue)" : "var(--light-gray)"};
                }
            </style>

            <div class="tag" @click=${() => {this.onPressed(); this.selectingTag()}}>
                ${this.text}
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'ecv-medicine-tag-video-search': EcvMedicineTagVideoSearch
    }
}