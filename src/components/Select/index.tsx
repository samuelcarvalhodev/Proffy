import React, {SelectHTMLAttributes} from 'react';

import './styles.css'

/*extender esse recurso do React (SelectHTMLAttributes) e passando uma generic <e uma variavel global dentro>
que deixa em aberto para que seja passado mais atributos mesmo que eu não 
tenha explicitamente declarado na interface*/
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
label: string;
name: string;
option: Array<{
    value:string,
    label:string
}>;
}
/**para não precisar passar por paramentro todas as possiveis
*propriedades vou utilizar o rest operator que salva todas as
*propriedades restantes dentro de uma variavel e passo para o Select */
const Select: React.FC<SelectProps> = ({label, name, option, ...rest }) =>{
    return(
        <div className="select-block">
            <label htmlFor={name} >{label}</label>
            <select  id={name} {...rest}>
                <option value="" selected disabled hidden>Selecione Uma opção</option>
                {option.map(option => {
                    return <option key={option.value} value= {option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;