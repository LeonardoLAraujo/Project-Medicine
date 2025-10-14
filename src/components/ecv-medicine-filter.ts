import { customElement, property } from "lit/decorators.js";
import { ECVGenericFilter, LaminaeInfo } from "./ecv-generic-filter";
import { css, CSSResultGroup, html, TemplateResult } from "lit";

@customElement('ecv-medicine-filter')
export class ECVMedicineFilter extends ECVGenericFilter {

    static override styles?: CSSResultGroup | undefined = [
        css`
            
            :host{
                display: flex;
                align-items: flex-start;
                box-sizing: border-box;
            }

            .filter__container{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                row-gap: 30px;
                column-gap: 10px;
            }

            .laminae__card{
                display: flex;
                flex-direction: column;
                row-gap: 5px;
                transition: all 0.3s ease-out;
                transform: scale(0.95);
            }

            .card__name{
                font-family: InterBold;
                overflow: hidden;
                text-overflow: ellipsis;
                text-transform: uppercase;
                text-align: center;
            }

            .card__card{
                transform-origin: center;
                background-color: #EEEAEA;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 190px;
                height: 60px;
                box-shadow: 0 4px 4px 0 #91909078;
                cursor: pointer;
                
            }

            .laminae__card:hover{
                transform: scale(1);
            }

            .card__image{
                width: 49px;
                height: 49px;
                border-radius: 50%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                opacity: 0.8;
                box-shadow: 0 4px 4px 0 #00000078;
            }
        
        `
    ];

    @property({ attribute: false })
    laminaeEvent: Function = (_laminaeCallBack: LaminaeInfo | undefined) => {};

    public override renderLaminae(information: LaminaeInfo): TemplateResult {

        return html`
            <div class="laminae__card">
                <div class="card__name">${information.name}</div>
                <div class="card__card" @click=${(_e: Event) => {
                    this.laminaeEvent(information);
                    this.dispatchEvent(new Event('onchangeinformation'));
                }}>
                    <div class="card__image" style="background-image: url('${information.imageURL}')"></div>
                </div>
            </div>
        `;
    }

    protected override render(): TemplateResult {
        return html`
            <div class="filter__container">
                ${super.render()}
            </div>
        
        `;
    }
    
}