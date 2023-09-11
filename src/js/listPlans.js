document.addEventListener("DOMContentLoaded", function () {
    const plans = document.getElementById("plans");

    const cardPlans = [
        {
            "title": "PASSE DE 1 DIA",
            "content": "Teste gratuitamente",
            "link": "#PASSEDE1DIA",
            "img": "src/img/plansImg1.png",
            "recommended": false
        },
        {
            "title": "PASSE DE 1 MÊS",
            "content": "À partir de <span>R$99,90</span>",
            "link": "#PASSEDE1MES",
            "img": "src/img/plansImg2.png",
            "recommended": true
        },
        {
            "title": "PASSE DE 1 ANO",
            "content": "À partir de <span>R$999,00</span>",
            "link": "#PASSEDE1ANO",
            "img": "src/img/plansImg3.png",
            "recommended": false
        }
    ];

    cardPlans.forEach(card =>{
        const divPlansCard = document.createElement("div");
        divPlansCard.className = "plans__card";

        const alertPlansCard = document.createElement("h2");
        alertPlansCard.className = "montserrat";
        if (card.recommended) {
            alertPlansCard.classList.add("recommended");
            alertPlansCard.textContent = "RECOMENDADO POR USUÁRIOS";
        }

        const imgPlansCard = document.createElement("img");
        imgPlansCard.src = card.img;

        const titlePlansCard = document.createElement("h1");
        titlePlansCard.className = "bebasNeue";
        if (card.recommended) {
            titlePlansCard.classList.add("bg__tertiary");
        }
        titlePlansCard.textContent = card.title;

        const bodyPlansCard = document.createElement("div");
        bodyPlansCard.className = "plans-card__body";

        const contentPlansCard = document.createElement("p");
        contentPlansCard.className = "montserrat";
        contentPlansCard.innerHTML = card.content;

        const buttonPlansCard = document.createElement("button");
        buttonPlansCard.className = "btn btn-outline-secondary montserrat";
        buttonPlansCard.setAttribute("type", "button");
        buttonPlansCard.textContent = "SELECIONAR";
        if (card.recommended) {
            buttonPlansCard.classList.add("border__tertiary");
            buttonPlansCard.classList.add("color__tertiary");
        }

        bodyPlansCard.appendChild(contentPlansCard);
        bodyPlansCard.appendChild(buttonPlansCard);
        divPlansCard.appendChild(alertPlansCard);
        divPlansCard.appendChild(imgPlansCard);
        divPlansCard.appendChild(titlePlansCard);
        divPlansCard.appendChild(bodyPlansCard);
        plans.appendChild(divPlansCard);
    });
})