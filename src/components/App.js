import TelaInicial from './TelaInicial';
import TelaJogo from './TelaJogo';
import React from 'react';


export default function App() {
  const [screen_class, setScreen_class] = React.useState(["initial_screen","hide_screen","hide_screen","hide_screen"]);
  function hide_init_screen() {
      setScreen_class(["hide_screen","quizz_top","quizz_content","quizz_footer"]);
  }

  return (
    <div>
      <TelaInicial screen_class={screen_class} hide_init_screen={hide_init_screen}/>
      <TelaJogo screen_class={screen_class}/>
    </div>
  );
}