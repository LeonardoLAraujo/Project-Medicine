import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ecv-medicine-modal-anatomy-details')
export default class EcvMedicineModalAnatomyDetails extends LitElement{

   static override get styles(): CSSResult{
      return css`
         .modal{
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 400px;
         }

         .modal h1{
            color: var(--orange);
            font-family: InterBlackItalic;
            font-size: 50px;
         }

         p, h1{
            margin: 0;
         }

         .modal__description{
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 3rem;
            background-color: #fff;
            font-family: PoppinsRegular;
         }
      `;
   }

   @property({attribute: false})
   details: any;

   private generateDescripton(): Array<TemplateResult> {
      return this.details.descricoes.map((text: string) => html`<p>${text}</p>`)
   }

   protected override render(): TemplateResult{
      return html`
         <div class="modal">
            <h1>${this.details.nome}</h1>
            <div class="modal__description">
               ${this.generateDescripton()}
            </div>
         </div>
      `;
   }

}

declare global{
   interface HTMLElementTagNameMap{
    'ecv-medicine-modal-anatomy-details': EcvMedicineModalAnatomyDetails
   }
}