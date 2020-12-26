import fullpage from 'fullpage.js';
import "fullpage.js/dist/fullpage.min.css";

new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ["Main", "Sale", "Newsletter", "Social"],
    fadingEffect: true,
    recordHistory: false,
    easing: 'easeInOutCubic',
    dragAndMove: true,
    // verticalCentered: false,
})