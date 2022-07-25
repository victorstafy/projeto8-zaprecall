import React from 'react';


export default function TelaInicial() {
    const [screen_class, setScreen_class] = React.useState("initial_screen");

    function hide_init_screen() {
        if (screen_class === "initial_screen"){
            setScreen_class("hide_screen");
          }
    }

    return (
        <div>
            <div className={screen_class}>
                <img src="logo.png" alt="logo" />
                ZapRecall
                <div className="button" onClick={() => {hide_init_screen()}}>
                    Iniciar Recall!
                </div>
            </div>
        </div>
    );
        
}