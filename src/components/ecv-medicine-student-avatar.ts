import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Student } from '../type/Student';

/**
 * Enum contendo os tipos de forma do avatar entre Rectangle ou  Circle.
 * @public
 * @enum
 */
export enum AvatarShape {
    Rectangle,
    Circle
}

/**
 * Classe que representa um web component contendo a imagem do estudante atual.
 * @class
 * @component
 */
@customElement('ecv-medicine-student-avatar')
export default class ECVMedicineStudentAvatar extends LitElement{

    /**
     * Propriedade que contem objeto que guarda as informacoes do aluno atual.
     * @public
     * @property
     */
    @property({ type: Object })
    student!: Student;

    /**
     * A largura do componente em pixels, valor padrao e de 36px.
     * @public
     * @property
     */
    @property({ type: String })
    width: string = '40px';

    /**
     * A altura do componente em pixels, valor padrao e de 36px.
     * @public
     * @property
     */
    @property({ type: String })
    height: string = '36px';

    /**
     * A forma atual do componente, valor padrao e de AvatarShape.Rectangle.
     * @public
     * @property
     */
    @property({ type: Number })
    shape: AvatarShape = AvatarShape.Rectangle;

    static override get styles(): CSSResult{

        return css`
        
            :host{
                display: inline-block;
                box-sizing: border-box;
            }

            .medicine-student-avatar{
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }
        
        `;

    }



    protected override render(): TemplateResult{

        return html`
            <style>

                .medicine-student-avatar{
                    width: ${this.width};
                    height: ${this.height};
                    background-image: url("${this.student.getFoto()}");
                    border-radius: ${this.shape === AvatarShape.Rectangle ? '0px' : '50%'};
                }

            </style>
            <div class="medicine-student-avatar"></div>
        `;

    }


}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-student-avatar': ECVMedicineStudentAvatar

   }
}