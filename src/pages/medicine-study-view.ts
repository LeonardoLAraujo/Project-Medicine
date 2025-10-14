import { html, css, TemplateResult, CSSResult, PropertyValues} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { StudyLesson, StudyModule } from '../type/Study';
import { studyPage } from '../data/study';
import '../components/ecv-medicine-module';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import { RouterLocation } from '@vaadin/router';
import '../components/ecv-medicine-container-background-image';
import ECVMedicineModule from '../components/ecv-medicine-module';
import { ifDefined } from 'lit/directives/if-defined.js';

const cardList: StudyModule[] = studyPage.studyCards;

@customElement('medicine-study-view')
export default class MedicineStudyView extends ECVMedicineSwitchThemeColor{


    static override get styles(): CSSResult{

        return css`
        
            :host{
                display: block;
                box-sizing: border-box;
                font-family: 'PoppinsRegular';
                -webkit-user-select: none;
                user-select: none;
            }

            .medicina-study-view__banner{
                padding:  1.5rem;
                font-size: 16px;
                color: white;
                position: relative;
            }

            .banner__title{
                margin: 0;
                font-size: 4em;
                font-family: 'PoppinsBold';
            }

            .medicine-study-view__modules{
                display: flex;
            }

            .modules__container{
                flex: 1.5;
                height: 700px;
                overflow: initial;
            }

            .modules__view{
                flex: 3;
                display: none;
                flex-direction: column;
                align-items: center;
            }

            .view__header{
                display: flex;
                width: 100%;
                justify-content: center;
                align-items: center;
                height: 88px;
                color: white;
                background-color: #525659;
                font-size: 1.5em;
                column-gap: 1rem;
            }

            .header__title{
                max-width: 600px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .frame__container{
                width: 100%;
                height: 100%;
                max-width: 800px;
                display: flex;
                align-items: center;
            }

            .view__frame{
                border: none;
                width: 100%;
                height: auto;
                aspect-ratio: 16 / 9;
                display: block;
            }

            @media (min-width: 1728px){

                .modules__container{
                    overflow: auto;
                }

                .modules__view{
                    display: flex;
                }

            }
        
        `;

    }

    @property({ attribute: false })
    location?: RouterLocation;

    @state()
    private _moduleIndex: number = 0;

    @state()
    private _currentModule!: StudyModule;

    @state()
    private _currentLessonView?: StudyLesson;

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    protected override willUpdate(_changedProperties: PropertyValues): void {

        if(_changedProperties.has('location')){
            const queryString = window.location.search;

            const urlParam = new URLSearchParams(queryString);

            const usedModuleIndexParameter = urlParam.get('module');

            this._moduleIndex = Number(usedModuleIndexParameter);

            this._currentModule = cardList[this._moduleIndex - 1];
        }
    }

    protected override async firstUpdated(_changedProperties: PropertyValues): Promise<void> {
        
        const modules: NodeListOf<ECVMedicineModule> | undefined = this.shadowRoot?.querySelectorAll('ecv-medicine-module');

        const currentModuleElement = modules?.item(this._moduleIndex - 1);

        modules?.forEach(module => {
            module.addEventListener('onclose', () => {
                this._currentLessonView = undefined;
            });
            module.addEventListener('onUpdatedView', (view: any) => {
                
                this._currentLessonView = view.detail;
            });
        });

        currentModuleElement?.toggleOpenCloseContent();
    }

    protected override render(): TemplateResult{

        return html`
        <style>
            .modules__container::-webkit-scrollbar{
                width: 10px;
            }

            .modules__container::-webkit-scrollbar-thumb {
                background-color: ${EcvMedicine.currentTheme.getBackgroundColor()};
            }

        </style>
        <div class="medicina-study-view">
            <ecv-medicine-container-background-image imageUrl="${this._currentModule.banner.background}">
                <div class="medicina-study-view__banner">
                    <h1 class="banner__title">${this._currentModule.banner.title}</h1>
                    <p class="banner__description">${this._currentModule.banner.description}</p>
                </div>
            </ecv-medicine-container-background-image>
            <div class="medicine-study-view__modules">
                <div class="modules__container">
                    ${cardList.map(module => html`<ecv-medicine-module .module=${module} .theme=${this._currentThemeColor}></ecv-medicine-module>`)}
                </div>
                <div class="modules__view">
                    <div class="view__header">
                        <ecv-icon class="header__icon" .icon=${this._currentLessonView?.icone} ?filled=${true}></ecv-icon>
                        <div class="header__title">${this._currentLessonView?.title}</div>
                    </div>
                    <div class="frame__container">
                        <iframe class="view__frame" src=${ifDefined(this._currentLessonView?.link)} allow="autoplay"></iframe>
                    </div>
                </div>
            </div>
        </div>
        `;
    }


}

declare global{

   interface HTMLElementTagNameMap{

    'medicine-study-view': MedicineStudyView

   }
}