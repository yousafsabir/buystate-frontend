/**
 * Easy selector helper function
 */
export const select = (el, all = false) => {
    el = el.trim();
    if (all) {
        return [...document.querySelectorAll(el)];
    } else {
        return document.querySelector(el);
    }
};
/**
 * Easy event listener function
 */
export const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
        if (all) {
            selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
            selectEl.addEventListener(type, listener);
        }
    }
};

/**
 * Easy on scroll event listener
 */
export const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
};
