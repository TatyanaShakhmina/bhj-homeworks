const hasTooltips = document.querySelectorAll(".has-tooltip");

hasTooltips.forEach(function(hasTooltip) {
    hasTooltip.addEventListener('click', function(event) {
        event.preventDefault();

        let nowTooltip = document.querySelector('.tooltip_active');

        if (nowTooltip) {
            nowTooltip.remove();
        }

        let tooltip = document.createElement("div");
        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.textContent = hasTooltip.title;

        const rect = hasTooltip.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.top + rect.height}px`;

        document.body.appendChild(tooltip);

        tooltip.addEventListener('click', function() {
            tooltip.remove();
        });
    });
});