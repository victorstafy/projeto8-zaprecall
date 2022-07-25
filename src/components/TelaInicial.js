import React from 'react';



export default function TelaInicial({hide_init_screen,screen_class}) {
    return (
        <div>
            <div className={screen_class[0]}>
                <img src="logo.png" alt="logo" />
                ZapRecall
                <div className="button" onClick={() => {hide_init_screen()}}>
                    Iniciar Recall!
                </div>
            </div>
        </div>
    );
        
}
