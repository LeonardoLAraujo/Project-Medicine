import {LitElement, html, css, TemplateResult, CSSResult} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Student } from '../type/Student';
import { AvatarShape } from './ecv-medicine-student-avatar';
import EcvMedicine from '../ecv-medicine';

/**
 * Classe que representa um web component que contem informacoes do aluno atual.
 * @class
 * @component
 */
@customElement('ecv-medicine-student-info')
export default class ECVMedicineStudentInfo extends LitElement{


    static override get styles(): CSSResult{

        return css`
        
            :host{
                display: flex;
                box-sizing: border-box;
                user-select: none;
                -webkit-user-select: none;
            }

            .medicine-student-info{
                padding: 40px;
                display: flex;
                flex-direction: column;
                align-items: center;
                flex: 1;
                color: #161616;
            }

            .medicine-student-info__name{
                font-family: PoppinsLight;
                margin-top: 16px;
            }

            .medicine-student-info__registerNumber{
                font-family: PoppinsLight;
            }

            .medicine-student-info__exitButton{
                font-family: PoppinsLight;
                font-size: 20px;
                margin-top: 20px;
            }
        
        `;

    }

    /**
     * Propriedade que representa o objeto contendo informacoes do aluno.
     * @public
     * @property
     */
    @property({ type: Object })
    student!: Student;

    protected override render(): TemplateResult{

        return html`
        <div class="medicine-student-info">
            <ecv-medicine-student-avatar .student=${this.student} .shape=${AvatarShape.Circle} width="65px" height="65px"></ecv-medicine-student-avatar>
            <div class="medicine-student-info__name">${this.student.getName()}</div>
            <div class="medicine-student-info__registerNumber">${this.student.getRegisterNumber()}</div>
            <div @click=${() => { EcvMedicine.instance.sair(); }} class="medicine-student-info__exitButton">Sair</div>
        </div>
        `;

    }

}

declare global{

   interface HTMLElementTagNameMap{

    'ecv-medicine-student-info': ECVMedicineStudentInfo

   }
}