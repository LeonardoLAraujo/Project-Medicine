import {html, css, TemplateResult, CSSResult, LitElement} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { StudyModule } from '../type/Study';

@customElement('ecv-medicine-card-study')
export default class EcvMedicineCardStudy extends LitElement{

    static override get styles(): CSSResult{
        return css`
            .card{
                width: 100%;
                max-width: 500px;
                height: calc(100% - 20px);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                display: flex;
                flex-direction: column;
                border-radius: 8px;
            }
            
            .card__background{
                width: 100%;
                height: 115px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                border-radius: 8px 8px 0px 0px;
                position: relative;
            }

            .background__module{
                position: absolute;
                top: 30px;
                left: 0px;
                color: #fff;
                padding: 0.1rem 1rem;
            }

            .background__module span{
                opacity: 1;
            }

            .card__content{
                display: flex;
                flex-direction: column;
                padding: 1rem;
                background-color: #fff;
                border-radius: 0px 0px 8px 8px;
                height: calc(100% - 115px);
                justify-content: space-between;
                position: relative;
            }

            .card__content h2,
            .card__content p{
                margin: 0;
                text-align: center;
            }

            .card__content h2{
                color: #474747;
                font-size: 20px;
            }

            .card__content p{
                font-size: 14px;
                margin-top: 1rem;
            }

            .card__content button{
                padding: 0.5rem 0.5rem;
                width: 100%;
                font-family: PoppinsBold;
                background-color: var(--dark-orange);
                border: none;
                border-radius: 5px;
                color: #fff;
                cursor: pointer;
                font-size: 20px;
                align-self: flex-end;
                margin-top: 1rem;
            }

            .card__content button:hover{
                background-color: var(--orange);
            }
        `;
    }   

    @property({attribute: false})
    module: StudyModule | null = null;

    @property({type: String})
    nameThemeColor: string = "light";
    
    protected override render(): TemplateResult{
        return html`
            <style>
                .card__background{
                    background-image: url(${this.module?.thumb});
                }

                .background__module{
                    background-color: ${this.nameThemeColor == "light" ? "#002957c3" : "#252525c5"};
                }   
            </style>
            <div class="card">
                <div class="card__background">
                    <div class="background__module">
                        <span>Módulo ${this.module?.romanNumber}</span>
                    </div>
                </div>
                <div class="card__content">
                    <h2>${this.module?.title}</h2>
                    <p>
                        ${this.module?.description.slice(0, 150)}...
                    </p>
                    <button>Entrar</button>
                </div>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'ecv-medicine-card-study': EcvMedicineCardStudy
    }
}