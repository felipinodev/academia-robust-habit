document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 850) {
        const cardDesc = document.querySelectorAll(".card-desc");
        const cardDescContent = document.querySelectorAll(".card-desc__content");
        const descCard = document.querySelectorAll(".desc__card");

        descCard.forEach(function(element) {
            element.classList.add("carousel-item");
        });

        descCard[0].classList.add("active");


        const buttonPrev = '<a class="carousel-control-prev" href="#carouselCardDesc" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></a>';
        const buttonNext = '<a class="carousel-control-next" href="#carouselCardDesc" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span></a>';

        const carouselIndicators = document.createElement("div");
        carouselIndicators.classList.add("carousel-indicators");

        for(i=0; i < descCard.length; i++) {
            const buttonCarouselIndicators = document.createElement("button");
            buttonCarouselIndicators.setAttribute("type", "button");
            buttonCarouselIndicators.setAttribute("data-bs-target", "#carouselCardDesc");
            buttonCarouselIndicators.setAttribute("data-bs-slide-to", `${i}`);
            buttonCarouselIndicators.setAttribute("aria-label", `Slide ${i+1}`);

            if(i == 0){
                buttonCarouselIndicators.setAttribute("class", "active");
                buttonCarouselIndicators.setAttribute("aria-current", "true");
            }

            carouselIndicators.appendChild(buttonCarouselIndicators);

        }

        cardDesc.forEach(function(element) {
            element.id = "carouselCardDesc";
            element.setAttribute("class", "card-desc carousel slide");
            element.setAttribute("data-ride", "carousel");
            element.innerHTML += buttonPrev;
            element.innerHTML += buttonNext;
            element.appendChild(carouselIndicators);
        });

        cardDescContent.forEach(function(element) {
            element.setAttribute("class", "card-desc__content carousel-inner");
        });
    }

});

