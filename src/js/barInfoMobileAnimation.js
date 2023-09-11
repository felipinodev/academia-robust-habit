window.onload = function() {
    if (window.innerWidth < 850) {
        const barInfoDiv = document.querySelector(".bar-info");
        const barInfoItemsDiv = document.querySelector(".bar-info__items");
        const divImgBarbell = '<img src="img/barbell.svg">';
    
        if (barInfoDiv) {
            const content = barInfoItemsDiv.innerHTML;
            barInfoItemsDiv.innerHTML = content + divImgBarbell + content;
        }
    }
};

