
// just functions for drop menu

export const toggleDisplay = (elem) =>{
    elem = elem.currentTarget.parentNode.children[1];
    const curDisplayStyle = elem.style.display;

    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
        elem.style.display = 'block';
    } else {
        elem.style.display = 'none';
    }
}
