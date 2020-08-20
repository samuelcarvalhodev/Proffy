import React from 'react';


import './styles.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList(){
    return(
       <div id="page-teacher-list" className="container">
           <PageHeader 
            title="Estes são os proffys disponíveis."
           
           >
           <form  id="search-teachers">
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
               <Input type="time" name="time"label="Hora"/>
           </form>
           </PageHeader>
           <main>
              <TeacherItem/>
              <TeacherItem/>
              <TeacherItem/>
           </main>
       </div>
    )
}

export default TeacherList;