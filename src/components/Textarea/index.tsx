import React, {TextareaHTMLAttributes} from 'react';

import './styles.css'

/*extender esse recurso do React (TextAreaHTMLAttributes) e passando uma generic <e uma variavel global dentro>
que deixa em aberto para que seja passado mais atributos mesmo que eu não 
tenha explicitamente declarado na interface*/
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
label: string;
name: string;
}
/**para não precisar passar por paramentro todas as possiveis
*propriedades vou utilizar o rest operator que salva todas as
*propriedades restantes dentro de uma variavel e passo para o Textarea */
const Textarea: React.FC<TextareaProps> = ({label, name, ...rest }) =>{
    return(
        <div className="textarea-block">
            <label htmlFor={name} >{label}</label>
            <textarea id={name} {...rest}/>
        </div>
    );
}

export default Textarea;