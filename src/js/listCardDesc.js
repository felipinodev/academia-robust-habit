document.addEventListener("DOMContentLoaded", function () {
    const cardDesc = document.getElementById("cardDesc");

    const cards = [
        { 
            "title": "EQUIPE QUALIFICADA", 
            "content": "Profissionais altamente capacitados e motivados a ajudá-lo a alcançar seus objetivos.", 
            "link": "#EQUIPEQUALIFICADA", 
            "img": "src/img/sport1.png", 
            "button": "CONHEÇA NOSSOS PROFISSIONAIS" 
        },
        { 
            "title": "AMBIENTE MOTIVADOR", 
            "content": "Um ambiente seguro e inspirador para ajudá-lo a manter-se motivado durante seus treinos.", 
            "link": "#AMBIENTEMOTIVADOR", 
            "img": "src/img/dumbbell1.png", 
            "button": "FAÇA UM TOUR VIRTUAL" 
        },
        { 
            "title": "AULAS DIVERSAS", 
            "content": "Oferecemos uma ampla variedade de aulas, desde musculação até dança, para atender a todos os interesses.", 
            "link": "#AULASDIVERSAS", 
            "img": "src/img/trainer1.png", 
            "button": 
            "VER MODALIDADES" 
        },
        { 
            "title": "EQUIPAMENTOS MODERNOS", 
            "content": "Mantemos nossos equipamentos atualizados para garantir a segurança e eficiência de nossos clientes.", 
            "link": "#EQUIPAMENTOSMODERNOS", 
            "img": "src/img/gym1.png", 
            "button": 
            "FAÇA UM TOUR VIRTUAL" 
        },
    ];

    cards.forEach(card =>{
        const divCardDesc = document.createElement("div");
        divCardDesc.className = "desc__card";
        
        const imgCardDesc = document.createElement("img");
        imgCardDesc.src = card.img;
        
        const titileCardDesc = document.createElement("h1");
        titileCardDesc.className = "bebasNeue";
        titileCardDesc.textContent = card.title;

        const contentCardDesc = document.createElement("p");
        contentCardDesc.className = "montserrat";
        contentCardDesc.textContent = card.content;

        const buttonCardDesc = document.createElement("a");
        buttonCardDesc.className = "desc-card__button d-flex align-items-center justify-content-start buttonBeveled bebasNeue";
        buttonCardDesc.href = card.link;

        const spanCardDesc = document.createElement("span");
        spanCardDesc.textContent = card.button;

        const iCardDesc = document.createElement("i");
        iCardDesc.className = "bi bi-arrow-right-short";

        buttonCardDesc.appendChild(spanCardDesc);
        buttonCardDesc.appendChild(iCardDesc);
        divCardDesc.appendChild(imgCardDesc);
        divCardDesc.appendChild(titileCardDesc);
        divCardDesc.appendChild(contentCardDesc);
        divCardDesc.appendChild(buttonCardDesc);
        cardDesc.appendChild(divCardDesc);

    })
})