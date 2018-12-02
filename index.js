/**
 * @param {HTMLElement} element
 * @param {string} className - class which added on element when it place inside viewport
 * @param {int} [percent=0] - how much percent form bottom viewport you need
 * @param {removeClass} [removeClass=false] - class which added on element when it place outside viewport
 */

function trackedElementOnScroll(element, className, percent = 0, removeClass = false) {
    if(element === undefined || className === undefined) return false;
    window.addEventListener("scroll", () => {
        if(element.getBoundingClientRect().top - window.innerHeight * (100 - percent) / 100 < 0) {
            element.classList.add(className);
            if(removeClass) element.classList.remove(removeClass);
        } else {
            if(removeClass) {
                element.classList.remove(className);
                element.classList.add(removeClass);
            }
        }
    })
}
