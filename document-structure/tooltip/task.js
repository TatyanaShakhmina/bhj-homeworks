const hasTooltips = document.querySelectorAll(".has-tooltip");

let tooltip = document.createElement("div");
tooltip.classList.add('tooltip');
tooltip.textContent = '';

document.body.appendChild(tooltip);

hasTooltips.forEach(function(hasTooltip) {
    hasTooltip.addEventListener('click', function(event) {
        event.preventDefault();

        if (tooltip.textContent === hasTooltip.title) {
            tooltip.classList.toggle('tooltip_active');
        } else {
            tooltip.textContent = hasTooltip.title;
            tooltip.classList.add('tooltip_active');
        }

        const rect = hasTooltip.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.top + rect.height}px`;

    });
});