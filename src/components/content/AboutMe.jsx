import React from "react";
import classes from "./AboutMe.module.css";
import picture from "../../pictures/IMG_0484.jpeg";

const AboutMe = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.content}>
          <div className={classes.picture}>
            <img src={picture} alt="of a desk setup" />
          </div>
          <div className={classes.textContainer}>
            <h2>
              Framtidsorienterad Frontend-utvecklare med passion för
              användarupplevelse!
            </h2>
            <p>
              Här är en junior frontend-utvecklare med en passion för att skapa
              användarvänliga och estetiskt tilltalande webbupplevelser. Jag har
              ett öga för detaljer och en bred verktygslåda med kompetens inom
              HTML, CSS, JavaScript och React. Mitt mål är att leverera
              webbplatser som är användarvänliga, visuellt tilltalande och
              responsiva. Jag är en problemlösare som älskar utmaningar och
              strävar ständigt efter att hålla mig uppdaterad inom mitt område.
            </p>
            <p>
              Min erfarenhet som butiksäljare har utrustat mig med starka
              samarbetsfärdigheter. Jag är van vid att arbeta i grupp för att nå
              gemensamma mål och har lärt mig att anpassa mig till olika
              arbetsmiljöer och kulturer. Dessutom har jag utvecklat förmågan
              att kommunicera effektivt med människor från olika bakgrunder och
              åldersgrupper. Detta gör mig till en mångsidig och anpassningsbar
              lagspelare som är redo att bidra till framgångsrika projekt.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
