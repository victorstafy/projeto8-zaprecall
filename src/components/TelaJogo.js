import React from 'react';

const questions_list=["O que é JSX?","O React é __","Componentes devem iniciar com __","Podemos colocar __ dentro do JSX",
"O ReactDOM nos ajuda __","Usamos o npm para __","Usamos props para __","Usamos estado (state) para __"];

const answer_list=["Uma extensão de linguagem do JavaScript","uma biblioteca JavaScript para construção de interfaces",
"letra maiúscula","expressões","interagindo com a DOM para colocar componentes React na mesma",
"gerenciar os pacotes necessários e suas dependências","passar diferentes informações para componentes",
"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"];

const n_quest=4;

let n_clicks=[0,0,0,0];

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

    quest_index.sort(compare);
    let quest_index_choosen=quest_index.slice(0,n_quest);
    
    for (let i=0;i<quest_index_choosen.length;i++){
        questions_list_chosen.push(questions_list[quest_index_choosen[i]])
        answer_list_chosen.push(answer_list[quest_index_choosen[i]])
    }
    return [questions_list_chosen,answer_list_chosen]
}

let [questions_list_chosen,answer_list_chosen]=choose_questions();

const init_text=["flashcard 1","flashcard 2","flashcard 3","flashcard 4"];

export default function TelaJogo({screen_class}) { 
// estado inicial para cada carta
    const [card_state_1, setCard_state_1] = React.useState(
    {class:'flashcard',text:init_text[0],icon:<ion-icon name="play-outline"></ion-icon>,text_class:"",
    class_inner_divs:["hide_screen","hide_screen","hide_screen","hide_screen"],onclick_div: change_state});
    
    const [card_state_2, setCard_state_2] = React.useState(
        {class:'flashcard',text:init_text[1],icon:<ion-icon name="play-outline"></ion-icon>,text_class:"",
        class_inner_divs:["hide_screen","hide_screen","hide_screen","hide_screen"],onclick_div:change_state});

    const [card_state_3, setCard_state_3] = React.useState(
        {class:'flashcard',text:init_text[2],icon:<ion-icon name="play-outline"></ion-icon>,text_class:"",
        class_inner_divs:["hide_screen","hide_screen","hide_screen","hide_screen"],onclick_div:change_state});

    const [card_state_4, setCard_state_4] = React.useState(
        {class:'flashcard',text:init_text[3],icon:<ion-icon name="play-outline"></ion-icon>,text_class:"",
        class_inner_divs:["hide_screen","hide_screen","hide_screen","hide_screen"],onclick_div:change_state});

    let card_state=[card_state_1,card_state_2,card_state_3,card_state_4];
    let set_card_state_l=[setCard_state_1,setCard_state_2,setCard_state_3,setCard_state_4];

    const [wrong,setWrong]= React.useState(0);
    const [almost,setAlmost]= React.useState(0)
    const [right,setRight]= React.useState(0)

    const [bottom_icon,setBottom_icon]=React.useState([" "," "," "," "])

    function update_wrong (index){
        setWrong(wrong+1)
        set_card_state_l[index]({text:init_text[index],icon:<ion-icon name="close-circle"></ion-icon>,class:'flashcard',text_class:"strikethrough-red",
        class_inner_divs:["hide_screen","hide_screen","hide_screen","hide_screen"]});
        alert(bottom_icon)
        setBottom_icon(bottom_icon.unshift("close-circle"));
        setBottom_icon(bottom_icon.slice(0,bottom_icon.length-1));
        console.log(bottom_icon)
    }

    function update_almost (index){
        setAlmost(almost+1)
        set_card_state_l[index]({text:init_text[index],icon:<ion-icon name="help-circle"></ion-icon>,class:'flashcard',text_class:"strikethrough-orange",
        class_inner_divs:["hide_screen","hide_screen","hide_screen","hide_screen"]});
        setBottom_icon(bottom_icon.unshift("help-circle"));
        setBottom_icon(bottom_icon.slice(0,bottom_icon.length-1));
        console.log(bottom_icon)
    }

    function update_right (index){
        setRight(right+1)
        set_card_state_l[index]({text:init_text[index],icon:<ion-icon name="checkmark-circle"></ion-icon>,class:'flashcard',text_class:"strikethrough-green",
        class_inner_divs:["hide_screen","hide_screen","hide_screen","hide_screen"]});
        setBottom_icon(bottom_icon.unshift("checkmark-circle"));
        setBottom_icon(bottom_icon.slice(0,bottom_icon.length-1));
        console.log(bottom_icon)
    }

    function change_state(n_click,c_index){
        n_click++
        n_clicks[c_index]=n_click;

        if (n_click===1){
            set_card_state_l[c_index](
                {class:'flashcard_a',text:questions_list_chosen[c_index],icon:<ion-icon name="refresh" onClick={() => {change_state(n_click,c_index)}}></ion-icon>,text_class:"question_text",
                class_inner_divs:["hide_screen","hide_screen","hide_screen","hide_screen"],onclick_div:()=>{}}
            )
        }
        else if (n_click===2){
            set_card_state_l[c_index](
                {class:'flashcard_a',text:answer_list_chosen[c_index],icon:" ",text_class:"question_text",
                class_inner_divs:["zap_block","zap_div1","zap_div2","zap_div3"],onclick_div:()=>{}}
            )
        }
    }

    return (
        <div>
            <div className={screen_class[1]}>
                <img src="logo-pequeno.png" alt="logo-pequeno" />
                <p>Zap Recall</p>
            </div>

            <div className={screen_class[2]}>
            {n_clicks.map((n_click,index) => (    
                <div className={card_state[index].class+" "+card_state[index].text_class} 
                onClick={() => {card_state[index].onclick_div(n_click,index)}}>
                    {card_state[index].text} {card_state[index].icon}
                    <div class={card_state[index].class_inner_divs[0]}>
                        <div class={card_state[index].class_inner_divs[1]} onClick={() => { update_wrong(index) }} >Não lembrei</div>
                        <div class={card_state[index].class_inner_divs[2]} onClick={() => { update_almost(index) }} >Quase não lembrei</div>
                        <div class={card_state[index].class_inner_divs[3]} onClick={() => { update_right(index) }} >Zap!</div>
                    </div>
                </div>
            ))}
            </div>

            <div className={screen_class[3]}>
                   "{almost+wrong+right}/4 Concluídos" 
                   <div class="footer_icons"> 
                        <ion-icon name={bottom_icon[3]}></ion-icon>
                        <ion-icon name={bottom_icon[2]}></ion-icon>
                        <ion-icon name={bottom_icon[1]}></ion-icon>
                        <ion-icon name={bottom_icon[0]}></ion-icon>
                   </div>
            </div>
        </div>
    )
}