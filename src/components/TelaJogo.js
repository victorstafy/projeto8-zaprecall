import React from 'react';

const questions_list=["O que é JSX?","O React é __","Componentes devem iniciar com __","Podemos colocar __ dentro do JSX",
"O ReactDOM nos ajuda __","Usamos o npm para __","Usamos props para __","Usamos estado (state) para __"];

const answer_list=["Uma extensão de linguagem do JavaScript","uma biblioteca JavaScript para construção de interfaces",
"letra maiúscula","expressões","interagindo com a DOM para colocar componentes React na mesma",
"gerenciar os pacotes necessários e suas dependências","passar diferentes informações para componentes",
"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"];

const n_quest=4;

function compare() { 
	return Math.random() - 0.5; 
}

function choose_questions(){
    let questions_list_chosen=[];
    let answer_list_chosen=[];
    let quest_index=[];

    for (let i=0;i<questions_list.length;i++){
        quest_index.push(i);
    }
    console.log(quest_index)

    quest_index.sort(compare);
    let quest_index_choosen=quest_index.slice(0,n_quest);
    
    for (let i=0;i<quest_index_choosen.length;i++){
        questions_list_chosen.push(questions_list[quest_index_choosen[i]])
        answer_list_chosen.push(answer_list[quest_index_choosen[i]])
    }
    return [questions_list_chosen,answer_list_chosen]
}



export default function TelaJogo({screen_class}) { 
   let [questions_list_chosen,answer_list_chosen]=choose_questions()
    return (
        <div>
            <div className={screen_class[1]}>
                <img src="logo-pequeno.png" alt="logo-pequeno" />
                <p>Zap Recall</p>
            </div>
            <div className={screen_class[2]}>
            {questions_list_chosen.map((question) => (    
                <div className='flashcard'>
                    {question} <ion-icon name="play-outline"></ion-icon>
                </div>
            ))}
            </div>
            <div className={screen_class[3]}>
                   "0/4 Concluídos" 
            </div>
        </div>
    )
}