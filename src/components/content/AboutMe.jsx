import React from "react";
import classes from "./AboutMe.module.css";
import desk from "../../pictures/pexels-andrea-davis-3653849.jpg";
const AboutMe = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.content}>
          <div className={classes.picture}>
            <img src={desk} alt="of a desk setup" />
          </div>
          <div className={classes.textContainer}>
            <h2>
              Framtidsorienterad Frontend-utvecklare med passion för
              användarupplevelse!
            </h2>
            <p>
              Här har ni en junior frontend-utvecklare med passion för att skapa
              webbupplevelser som är användarvänliga och ser bra ut. Med ett öga
              för detaljer och en värktygslåda fylld av kunskap inom bland annat
              HTML, CSS, JavaScript och React strävar jag efter att skapa
              användarvänliga, snygga och responsiva webbplatser. Jag är en
              problemlösare som älskar utmaningar och jag arbetar ständigt för
              att hålla mig uppdaterad med min kunskap. Jag är även en bra
              lagspelare som har lätt för att samarbeta med andra människor
              vilket jag lärt mig från många års erfarenhet som butiksäljare,
              där vi som grupp arbetade tillsammans för att uppnå butikens alla
              mål. Här har jag även fått stor erfarenhet av att möta och
              komunisera med människor från olika kulturer och olika åldrar
              vilket har resulterat i att jag har lätt för att passa in i olika
              gruppkonstulationer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
