import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem,  {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';




function TeacherList(){
const [teachers, setTeachers] = useState([]);

const [subject, setSubject] = useState('');
const [week_day, setWeekday] = useState('');
const [time, setTime] = useState('');

async function searchTeachers(e: FormEvent){
    e.preventDefault();
    

   const response = await api.get('classes', {
        params: {
            subject,
            week_day,
            time,
        }
    });

   setTeachers(response.data);
    

}




return(
       <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">

           <form  id="search-teachers" onSubmit={searchTeachers}>
           <Select 
                    name="subject" 
                    label="matéria"
                    value={subject}
                    onChange={(e) => { setSubject(e.target.value) }}
                    option={[
                        {value:'Artes', label: 'Artes'},
                        {value:'Matemática', label: 'Matemática'},
                        {value:'Português', label:'Português'},
                        {value:'Python para Engenharia', label: 'Python para Engenharia'},
                    ]}
                />
               
               <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={week_day}
                    onChange={(e) => { setWeekday(e.target.value) }}
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
               <Input 
                    type="time" 
                    name="time"
                    label="Hora" 
                    value={time}
                    onChange={(e) => { setTime(e.target.value) }}
                />

                    <button type='submit'>
                        Buscar
                    </button>

           </form>
           </PageHeader>
           {/* Devido o .map precisar de um key unica,
            tivemos que criar uma exportação de uma interface de teacherItem para pegar o ID de la*/}
           <main>
               {teachers.map((teacher: Teacher) =>{
                   return <TeacherItem key={teacher.id} teacher={teacher}/>;
               })}
             
           </main>
       </div>
    )
}

export default TeacherList;