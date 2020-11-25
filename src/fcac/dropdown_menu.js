
// just functions for drop menu

export const toggleDisplay = (elem) =>{
    const drops = document.getElementsByClassName('menu');
    elem = elem.currentTarget.parentNode.children[1];
    const curDisplayStyle = elem.style.display;

    //hide all menus that are not current
    Object.entries(drops).forEach((drop)=>{
        if (drop !== elem.currentTarget ){
            drop[1].style.display='none';
        }
    })

    if (curDisplayStyle === 'none' || curDisplayStyle === ''){
        elem.style.display = 'block';
    } else {
        elem.style.display = 'none';
    }
}
