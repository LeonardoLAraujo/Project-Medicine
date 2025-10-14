import {html, css, TemplateResult, CSSResult, PropertyValues} from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import "../components/ecv-medicine-text";
import "../components/ecv-medicine-input";
import "../components/ecv-medicine-menu-platform";
import "../components/ecv-medicine-card-platform";
import "../components/ecv-medicine-search-input";
import EcvMedicineCardPlatform from '../components/ecv-medicine-card-platform';
import ECVMedicineSwitchThemeColor from '../components/ecv-medicine-switch-theme-color';
import EcvMedicine from '../ecv-medicine';
import EcvMedicineInput from '../components/ecv-medicine-input';

@customElement('medicine-platform')
export default class MedicinePlatform extends ECVMedicineSwitchThemeColor {

    static override get styles(): CSSResult{
        return css`
            .platform{
                display: flex;
                flex-direction: column;
                gap: 17px;
                margin-top: 2rem;
            }

            .platform__title{
                text-decoration: underline;
                margin: -10px 0px 15px 0px;
            }

            .platform__search{
                display: flex;
                flex-direction: column;
            }

            @media (min-width: 1024px){
                .platform{
                    padding: 2rem;
                    margin-top: 0rem;
                }

                .platform__search{
                    flex-direction: row-reverse;
                    align-items: center;
                    gap: 10px;
                }
            }
        `;
    }

    @state()
    valueInput: string = "";

    @state()
    private _currentScreenWidth: number = 0;

    @query("ecv-medicine-card-platform")
    public cardPlatform!: EcvMedicineCardPlatform;

    @query("ecv-medicine-input")
    medicineInput!: EcvMedicineInput;

    constructor(){
        super(EcvMedicine.currentTheme);
    }

    override connectedCallback(): void {
        super.connectedCallback();

        this._updateScreenWidth();
        window.addEventListener('resize', this._updateScreenWidth.bind(this));
    }

    override disconnectedCallback(): void {
        super.disconnectedCallback();
        window.addEventListener('resize', this._updateScreenWidth.bind(this));
    }

    protected override firstUpdated(_changedProperties: PropertyValues): void {
        const currentRouteIndex = EcvMedicine.instance.getCurrentRouteIndex();
        
        EcvMedicine.instance.topBar.selectTopBarMenuLink(currentRouteIndex);
    }

    private _updateScreenWidth() {
        this._currentScreenWidth = window.innerWidth;
    }

    public getCurrentScreenWidth(): number {
        return this._currentScreenWidth;
    }

    protected override render(): TemplateResult{
        return html`
            <style>
                .platform__title{
                    color: ${this._currentThemeColor.getBackgroundColor()};
                }
            </style>
            <div class="platform">
                <ecv-medicine-text class="platform__title" text="Pesquisas e Casos Clínicos" color=${this._currentThemeColor.getBackgroundColor()} fontSize=${this._currentScreenWidth <= 1024 ? "20px" : "30px"} fontFamily="PoppinsBoldItalic" textAlign=${this._currentScreenWidth <= 1024 ? "center" : "left"}></ecv-medicine-text>
                <div class="platform__search">
                    <ecv-medicine-search-input></ecv-medicine-search-input>
                    <ecv-medicine-menu-platform .platform=${this} backgroundColor=${this._currentThemeColor.getBackgroundColor()}></ecv-medicine-menu-platform>  
                </div>
                <ecv-medicine-card-platform .valeuInput=${this.valueInput} typeBackground=${this._currentThemeColor.getName()} backgroundColor=${this._currentThemeColor.getBackgroundColor()}></ecv-medicine-card-platform>
            </div>
        `;
    }

}

declare global{
   interface HTMLElementTagNameMap{
    'medicine-platform': MedicinePlatform
   }
}