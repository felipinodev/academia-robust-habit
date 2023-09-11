document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 850) {
        const plans = document.querySelectorAll(".plans");
        const plansContent = document.querySelectorAll(".plans__content");
        const plansCard = document.querySelectorAll(".plans__card");

        plansCard.forEach(function(element) {
            element.classList.add("carousel-item");
        });

        plansCard[0].classList.add("active");


        const buttonPrev = '<a class="carousel-control-prev" href="#carouselPlans" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span></a>';
        const buttonNext = '<a class="carousel-control-next" href="#carouselPlans" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span></a>';

        const carouselIndicators = document.createElement("div");
        carouselIndicators.classList.add("carousel-indicators");

        for(i=0; i < plansCard.length; i++) {
            const buttonCarouselIndicators = document.createElement("button");
            buttonCarouselIndicators.setAttribute("type", "button");
            buttonCarouselIndicators.setAttribute("data-bs-target", "#carouselPlans");
            buttonCarouselIndicators.setAttribute("data-bs-slide-to", `${i}`);
            buttonCarouselIndicators.setAttribute("aria-label", `Slide ${i+1}`);

            if(i == 0){
                buttonCarouselIndicators.setAttribute("class", "active");
                buttonCarouselIndicators.setAttribute("aria-current", "true");
            }

            carouselIndicators.appendChild(buttonCarouselIndicators);

        }

        plans.forEach(function(element) {
            element.id = "carouselPlans";
            element.setAttribute("class", "plans carousel slide");
            element.setAttribute("data-ride", "carousel");
            element.innerHTML += buttonPrev;
            element.innerHTML += buttonNext;
            element.appendChild(carouselIndicators);
        });

        plansContent.forEach(function(element) {
            element.setAttribute("class", "plans__content carousel-inner");
        });

    
    }

});

