import {html, css, TemplateResult, CSSResult} from 'lit';
import { customElement } from 'lit/decorators.js';
import "../components/ecv-medicine-container-background-image";
import "../components/ecv-medicine-card-study";
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import { studyPage } from '../data/study';
import { StudyModule, StudyPage } from '../type/Study';

@customElement('medicine-study')
export default class MedicineStudy extends ECVMedicineSwitchThemeColor{

    constructor(){
        super(EcvMedicine.currentTheme);
    }
    
    static override get styles(): CSSResult{
        return css`
            .study{
                display: flex;
                flex-direction: column;
            }

            .study__introduction{
                position: relative;
                z-index: 1;
                color: #fff;
                padding: 1rem;
            }

            .study__introduction h1,
            .study__introduction p{
                margin: 0;
            }

            .study__introduction h1{
                font-family: PoppinsBold;
                font-size: 57px;
            }

            .study__introduction p{
                font-size: 14px;
            }

            .study__cards{
                display: flex;
                flex-wrap: wrap;
                padding: 1rem;
                justify-content: center;
                gap: 15px;
            }

            @media (min-width: 1024px){

                .study__introduction{
                    width: calc(100% - 4rem);
                    padding: 0rem 0rem 0rem 4rem;
                }

                .study__introduction h1{
                    font-size: 78px;
                    width: fit-content;
                }

                .study__introduction p{
                    font-size: 16px;
                }
            }
        `;
    }

    public static study: StudyPage = studyPage;

    public static getStudyModule(): StudyModule[]{
        return this.study.studyCards;
    }
    
    protected override firstUpdated(): void {
        const currentRouteIndex = EcvMedicine.instance.getCurrentRouteIndex(); 
        EcvMedicine.instance.topBar.selectTopBarMenuLink(currentRouteIndex);
    }

    private _goToModule(e: MouseEvent): void{
        const module = (e.currentTarget as any).module as StudyModule;

        EcvMedicine.instance.goTo(`/study/view?module=${module.id}`);
    }

    private _generateStudyCards(): Array<TemplateResult>{
        return MedicineStudy.study.studyCards.map((studyCard: StudyModule) => html`<ecv-medicine-card-study 
                                                                            .module=${studyCard}
                                                                            .nameThemeColor=${this._currentThemeColor.getName()}
                                                                            @click=${this._goToModule}>
                                                                        </ecv-medicine-card-study>`);
    }

    protected override render(): TemplateResult{
        return html`
            <div class="study">
                <ecv-medicine-container-background-image .imageUrl=${MedicineStudy.study.banner.background}>
                    <div class="study__introduction">
                        <h1>${MedicineStudy.study.banner.title}</h1>
                        <p>
                            ${MedicineStudy.study.banner.description}
                        </p>
                    </div>
                </ecv-medicine-container-background-image>
                <div class="study__cards">
                    ${this._generateStudyCards()}
                </div>
            </div>
        `;
    }

}

declare global{
    interface HTMLElementTagNameMap{
        'medicine-study': MedicineStudy
    }
}