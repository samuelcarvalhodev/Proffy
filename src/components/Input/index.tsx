import React, {InputHTMLAttributes} from 'react';

import './styles.css'

/*extender esse recurso do React (InputHTMLAttributes) e passando uma generic <e uma variavel global dentro>
que deixa em aberto para que seja passado mais atributos mesmo que eu não 
tenha explicitamente declarado na interface*/
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
label: string;
name: string;
}
/**para não precisar passar por paramentro todas as possiveis
*propriedades vou utilizar o rest operator que salva todas as
*propriedades restantes dentro de uma variavel e passo para o input */
const Input: React.FC<InputProps> = ({label, name, ...rest }) =>{
    return(
        <div className="input-block">
            <label htmlFor={name} >{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
    );
}

export default Input;