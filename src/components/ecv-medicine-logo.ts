import {LitElement, html, css, TemplateResult, CSSResult, PropertyValues} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

/**
 * Classe que representa web component contendo o logo/area da aplicacao.
 * @class
 * @component
 */
@customElement('ecv-medicine-logo')
export default class ECVMedicineLogo extends LitElement{

   /**
    * Propriedade que representa a cor dos textos do logo, valor padrao e de white
    * @public
    * @property
    */
   @property({ type: String })
   textColors: string = 'white';

   /**
    * Propriedade interna que representa a largura atual da tela.
    * @private
    * @property
    */
   @state()
   private _currentScreenWidth: number = 0;

   static override get styles(): CSSResult{

      return css`

         :host{
            display: inline-block;
            box-sizing: border-box;
            user-select: none;
            -webkit-user-select: none;
         }

         .medicine-logo{
            text-transform: uppercase;
         }

         .medicine-logo__supText{
            font-family: 'RobotoBlackItalic';
            text-align: center;
            line-height: 0.8;
         }

         .medicine-logo__subText{
            font-family: 'InterRegular';
            font-style: italic;
         }

         .medicine-logo__leftText{
            font-family: 'RobotoBlackItalic';
         }

         .medicine-logo__rightText{
            font-family: 'InterSemiBold';
         }

         .medicine-logo__separator{
            align-self: center;
         }
      `;

   }

   override connectedCallback(): void {
      super.connectedCallback();
      window.addEventListener('resize', this._updateScreenWidth.bind(this));
   }

   override disconnectedCallback(): void {
      super.disconnectedCallback();
      window.removeEventListener('resize', this._updateScreenWidth.bind(this));
   }

   protected override firstUpdated(_changedProperties: PropertyValues): void {
      this._updateScreenWidth();
   }

   /**
    * Atualiza o valor da propriedade _currentScreenWidth com o valor da tela atual.
    * @private
    * @method
    */
   private _updateScreenWidth(): void {

      this._currentScreenWidth = window.innerWidth;
   }

   /**
    * Retorna o template HTML contendo a estrutura em formato horizontal do logo.
    * @private
    * @method
    * @returns 
    */
   private _horizontalTemplate(): TemplateResult {

      return html`
         <div class="medicine-logo__leftText"></div>
         <div class="medicine-logo__separator"></div>
         <div class="medicine-logo__rightText">medicina</div>
      `;
   }

   /**
    * Retorna o template HTML contendo a estrutura em formato vertical do logo.
    * @private
    * @method
    * @returns 
    */
   private _verticalTemplate(): TemplateResult {

      return html`
         <div class="medicine-logo__subText">medicina</div>
      `;
   }

   protected override render(): TemplateResult{

   return html`
      <style>

         .medicine-logo{
            display: ${this._currentScreenWidth >= 631 ? 'flex' : 'block'};
            color: ${this.textColors};
            font-size: ${this._currentScreenWidth >= 775 && this._currentScreenWidth < 1436 ? '20px' : this._currentScreenWidth >= 1436 ? '24px' :'16px'};
            align-items: ${this._currentScreenWidth >= 631 ? 'center' : 'start'};
         }

         .medicine-logo__supText{
            border-bottom: 1px solid ${this.textColors};
         }

         .medicine-logo__separator{
            margin: 3px 3px 0 3px;
            font-size: ${this._currentScreenWidth >= 775 && this._currentScreenWidth < 1436 ? '18px' : this._currentScreenWidth >= 1436 ? '20px' :'14px'};
         }

      </style>
      <div class="medicine-logo">
         ${this._currentScreenWidth >= 631 ? this._horizontalTemplate() : this._verticalTemplate()}
      </div>
      
   `;

 }



}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-logo': ECVMedicineLogo

   }
}