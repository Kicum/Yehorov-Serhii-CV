function zoomPhoto() {
    document.querySelector('.photo__style').classList.toggle('photo__hover')
}

const a = document.getElementById("a-section");
const b = document.getElementById("b-section");
const c = document.getElementById("c-section");
const d = document.getElementById("d-section");

window.addEventListener(
    "keydown",
    (event) => {
       if (event.defaultPrevented) {
        return; 
       }

        if (event.key === 'a') {
            a.scrollIntoView();
        } else if(event.key === 'b') {
            b.scrollIntoView(); 
        } else if(event.key === 'c') {
               c.scrollIntoView(); 
        } else if(event.key === 'd') {
                d.scrollIntoView();
        }
        event.preventDefault();
    },
    true
  );