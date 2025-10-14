import { html, css, TemplateResult, CSSResult, LitElement, PropertyValues} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { StudyLesson, StudyModule } from '../type/Study';
import { ThemeColor } from '../type/ThemeColor';
import { IconTypes } from 'ecv-component';
import EcvMedicine from '../ecv-medicine';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('ecv-medicine-module')
export default class ECVMedicineModule extends LitElement{


    static override get styles(): CSSResult{

        return css`

            :host{
                display: block;
                box-sizing: border-box;
                font-family: 'PoppinsRegular';
                -webkit-user-select: none;
                user-select: none;
            }

            .medicine-module{
                font-family: PoppinsRegular;
                font-size: 16px;
                color: white;
            }

            .medicine-module__type{
                font-family: 'PoppinsBold';
                margin: 1px 0;
            }

            .medicine-module__title{
                margin: 1px 0;
                font-size: 0.8em;
            }

            .medicine-module__header{
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                box-shadow: 0px 4px 4px 0px #00000050;
                height: calc(80px - 2rem);
                font-size: 1em;
                padding: 1rem 0;
                cursor: pointer;
            }

            .header__left{
                flex: 5;
                text-align: center;
            }

            .header__right{
                height: 100%;
                border-left: 1px;
                border-left-color: white;
                border-left-style: solid;
                display: flex;
                justify-content: center;
                padding-left: 5px;
            }

            .medicine-module__content{
                overflow: hidden;
                transition: all 0.3s ease-out;
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin-top: 4px;
                row-gap: 0.5rem;
                position: relative;
            }

            .content__modules{
                width: 93%;
            }

            .content__module{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
            }

            .module__row{
                flex: 1;
                border: 1px solid white;
                display: none;
            }

            .module__title{
                font-size: 1em;
                font-family: PoppinsBold;
                width: 100%;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;
                column-gap: 1rem;
            }

            .module__lesson{
                width: 100%;
                display: flex;
                justify-content:center;
                column-gap: 0.5rem;
                margin: 0.5rem 0;
                align-items: center;
                cursor: pointer;
            }

            .lesson__label{
                text-align: center;
                font-size: 0.8em;
            }

            .content__view{
                min-width: 100%;
                min-height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                background-color: white;
            }

            .view__frame{
                width: 100%;
                border: none;
            }

            @media (min-width: 1024px){

                .module__row{
                    display: block;
                }
            }

            @media (min-width: 1728px){

                .module__row:nth-of-type(1){
                    display: none;
                }

                .module__lesson{
                    justify-content: flex-start;
                    margin: 0.2rem 0;
                }
            }

        `;

    }

    static instances: ECVMedicineModule[] = [];

    static closeAllInstances(): void {

        ECVMedicineModule.instances.map(instance => instance.closeContent());
    }

    @property({ attribute: false})
    module!: StudyModule;

    @property({ attribute: false})
    theme!: ThemeColor;

    @state()
    private _mobileDevice: boolean = true;

    @state()
    private _opened: boolean = false;

    @state()
    private _clickedLesson: boolean = false;

    @state()
    private _currentLesson?: StudyLesson;

    @state()
    private _contentHeight: number = 0;

    @state()
    private _contentAspectRatioHeight: number = 0;

    override connectedCallback(): void {
        super.connectedCallback();

        ECVMedicineModule.instances.push(this);

        this._setMobileDevice();

        EcvMedicine.instance.addEventListener('onUpdatedScreenWidth', () => {

            this._setMobileDevice();
            this._setContentHeightAspectRatio();
            this._setContentHeight();
        });

        this.addEventListener('onopen', async (): Promise<void> =>  {

            if(this._mobileDevice){
                this.scrollIntoView({ behavior: 'smooth' });
            }else{
                this._setContentHeight();
                await this._selectFirstLesson();
                await this.scrollToFirstLesson();
            }
        });

        this.addEventListener('onclose', () => {
            this._currentLesson = undefined;
        });
    }

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        
        setTimeout(() => {
            this._setContentHeight();
        }, 100);
    }

    private _unselectAllLessons(): void {

        const lessonsElements = this.shadowRoot?.querySelectorAll('.module__lesson');

        lessonsElements?.forEach(lesson => {
            if(lesson.classList.contains('selected')){
                lesson.classList.remove('selected');
            }
        });
    }

    private _getFirstLessonElement(): HTMLDivElement | undefined {

        return (this.shadowRoot?.querySelectorAll('.module__lesson')[0] as HTMLDivElement);
    }

    private _getHeaderElement(): HTMLDivElement | undefined {

        return (this.shadowRoot?.querySelector('.medicine-module__header') as HTMLDivElement);
    }

    private async _selectFirstLesson(): Promise<void> {
        
        await new Promise((resolve) => {

            setTimeout(resolve, 100);
        });

        this._getFirstLessonElement()?.click();
    }

    private _setMobileDevice(): void {

        this._mobileDevice = this._isMobileDevice();
    }

    private _isMobileDevice(): boolean {

        return window.innerWidth < 1728 ? true : false;
    }

    private _setContentHeight(): void {

        this._contentHeight = (this.shadowRoot?.querySelector('.medicine-module__content') as HTMLDivElement)?.scrollHeight;
    }

    private _setContentHeightAspectRatio(): void {

        this._contentAspectRatioHeight = this._getContentHeightAspectRatio();
    }

    private _getContentHeightAspectRatio(): number {

        return window.innerWidth <= 425 ? 248 : 
            window.innerWidth > 425 && window.innerWidth <= 768 ? 400 : 550;
    }

    public async scrollToFirstLesson(): Promise<void> {

        await new Promise((resolve) => {

            setTimeout(resolve, 100);
        });

        this.parentElement!.scrollTop = 0;
        
        await new Promise((resolve) => {

            setTimeout(resolve, 100);
        });
        
        this._getHeaderElement()?.scrollIntoView({ behavior: 'smooth' });
    }

    public toggleOpenCloseContent(){
        if(!this._opened){
            ECVMedicineModule.closeAllInstances();
        }
        this._opened = !this._opened;
        this._clickedLesson = false;
        this._unselectAllLessons();
        this.dispatchEvent(new CustomEvent(this._opened ? 'onopen' : 'onclose'));
    }

    public closeContent(): void {

        this._opened = false;
        this._clickedLesson = false;
        this.dispatchEvent(new CustomEvent('onclose'));
    }

    public openContent(): void {

        this._opened = true;
        this.dispatchEvent(new CustomEvent('onopen'));
    }

    public isOpened(): boolean {

        return this._opened;
    }

    private _updateView(e: MouseEvent): void {

        const lesson = (e.currentTarget as HTMLDivElement).getAttribute('lesson') as string;

        const currentLessonElement = (e.currentTarget as HTMLDivElement);

        this._unselectAllLessons();

        if(!currentLessonElement.classList.contains('selected')){
            currentLessonElement.classList.add('selected');
        }

        this._currentLesson = JSON.parse(lesson);

        this._clickedLesson = true;

        this.dispatchEvent(new CustomEvent('onUpdatedView', { detail: this._currentLesson }));
    }

    protected override render(): TemplateResult{

        const headerBackground = this._opened && EcvMedicine.currentTheme.getName() === 'light' ? '#002857' :
        this._opened && EcvMedicine.currentTheme.getName() === 'dark' ? '#252525' :'#383838';
        
        const contentBackground = this._opened && EcvMedicine.currentTheme.getName() === 'light' ? '#053062' : '#252525';

        const hoverBackground = EcvMedicine.currentTheme.getName() === 'light' ? '#075F88' : '#383838';

        return html`
            <style>

                .medicine-module{
                    background-color: ${contentBackground};
                }

                .medicine-module__header{
                    background-color: ${headerBackground};
                }

                .module__lesson:not(.selected):hover{
                    background-color: ${hoverBackground};
                }
                
                .module__lesson.selected{
                    background-color: ${hoverBackground};
                }

                .medicine-module__content{
                    height: ${this._opened && !this._mobileDevice ? `${this._contentHeight}px`:
                     this._opened && this._mobileDevice && !this._clickedLesson ? `${this._contentHeight}px` :
                     this._opened && this._mobileDevice && this._clickedLesson ? `${this._contentAspectRatioHeight}px` : '0'};
                    padding: ${this._opened ? `0.5rem 0`: '0'};
                }

                .right__icon{
                    transform: ${this._opened ? 'scaleY(-1)': 'scaleY(1)'};
                }

                .content__view{
                    display: ${this._clickedLesson && this._mobileDevice ? 'block' : 'none'};
                    height: 100%;
                }

                .view__frame{
                    height: 100%;
                }

            </style>
            <div class="medicine-module">
                <div class="medicine-module__header" @click=${this.toggleOpenCloseContent}>
                    <div class="header__left">
                        <p class="medicine-module__type">${this.module.type} ${this.module.romanNumber}</p>
                        <p class="medicine-module__title">${this.module.title}</p>
                    </div>
                    <div class="header__right">
                        <ecv-icon class="right__icon" .icon=${IconTypes.ArrowDropDown} .iconStyle=${{ size: '2rem' }}></ecv-icon>
                    </div>
                </div>
                <div class="medicine-module__content">
                    <div class="content__modules">
                        ${this.module.moduleLessons.map(module => {
                            return html`
                            <div class="content__module">
                                ${module.lessons.length > 0 ? html`<div class="module__title"><div class="module__row"></div>${module.label}<div class="module__row"></div></div>` : html``}
                                ${module.lessons.map(lesson => 
                                    html`<div class="module__lesson" lesson=${JSON.stringify(lesson)} @click=${this._updateView}>
                                            <ecv-icon 
                                                .icon=${lesson.icone} 
                                                .iconStyle=${{ size: lesson.type === 'video' ? '1.5rem' : '1rem' }}
                                                ?filled=${true}>
                                            </ecv-icon>
                                            <div class="lesson__label">${lesson.title}</div>
                                        </div>
                                    `)}
                            </div>`;
                        })}
                    </div>
                    ${this._mobileDevice ? html`
                        <div class="content__view">
                            ${this._clickedLesson ? html`<iframe class="view__frame" src=${ifDefined(this._currentLesson?.link)}></iframe>` : html``}
                        </div>
                            ` : html``
                    }
                </div>
            </div>
        `;

    }



}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-module': ECVMedicineModule

   }
}