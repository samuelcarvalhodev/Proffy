import React from 'react';


import './styles.css';

import PageHeader from '../../components/pageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg'


function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
           <PageHeader
            title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição."
            />

        <main>
            <fieldset>
                <legend>Seus dados</legend>
                <Input name="name" label="Nome completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>
                <Textarea name="bio" label="Biografia"/>
            </fieldset>

            <fieldset>
                <legend>Sobre a Aula</legend>

                <Select 
                    name="subject" 
                    label="matéria"
                    option={[
                        {value:'Artes', label: 'Artes'},
                        {value:'Matemática', label: 'Matemática'},
                        {value:'Português', label:'Português'},
                        {value:'Python para Engenharia', label: 'Python para Engenharia'},
                    ]}
                />
                <Input name="cost" label="Custo da sua hora aula"/>
            </fieldset>

            <fieldset>
                <legend>
                    Horários disponíveis
                    <button type="button">
                    + Novo horário
                    </button>
                </legend>
                <div className="schedule-item">
                    <Select 
                    name="week-day" 
                    label="Dia da semana"
                    option={[
                        {value:'1', label: 'Domingo'},
                        {value:'2', label: 'Segunda-feira'},
                        {value:'3', label:'Terça-feira'},
                        {value:'4', label: 'Quarta-feira'},
                        {value:'5', label: 'Quinta-feira'},
                        {value:'6', label: 'Sexta-feira'},
                        {value:'7', label: 'Sábado'},
                    ]}
                />
                <Input name="from" label="Das" type="time"/>
                <Input name="to" label="Até" type="time"/>
                </div>
                
            </fieldset>


            <footer>
                
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante! <br/>
                    Preencha todos os dados.
                </p>
                <button type="button"> 
                    Salvar cadastro
                </button>
            </footer>
        </main>



       </div>
    )
}

export default TeacherForm;