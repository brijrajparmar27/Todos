
const toogle = document.querySelector(".searchtoogle");
const searchbar = document.querySelector(".search input");
const notes = document.querySelector(".addNote");
const notelist = document.querySelector(".notes");
const emptyhandler = document.querySelector(".imgempty");
const searchnote = document.querySelector(".find");

const checkempty = ()=>{
    const notecontent = document.querySelectorAll(".note");
    if(notecontent.length == 0)
    {
        emptyhandler.classList.add("show");
        emptyhandler.classList.remove("hide");
    }
    else
    {
        emptyhandler.classList.add("hide");
        emptyhandler.classList.remove("show");
    }
}

toogle.addEventListener("click",(e)=>{

    if(searchbar.classList.contains("show"))
    {
        searchbar.classList.remove("show");
        searchbar.classList.add("hide");
    }
    else if(searchbar.classList.contains("hide"))
    {
        searchbar.classList.add("show");
        searchbar.classList.remove("hide");
    }
    else
    {
        searchbar.classList.add("show");
        searchbar.classList.remove("hide");
    }
})

const createtemplate = (text)=>{
    let template = `
        <div class="note">
            <label>${text}</label>
            <img src="assets/del.ico" alt="delete" class="deletenote">
        </div>
    `;
    notelist.innerHTML = template+notelist.innerHTML;
    checkempty();
}

notes.addEventListener("submit",(e)=>{
    e.preventDefault();
    let notetext = notes.new.value.trim();
    if(notetext != "")
    {
        createtemplate(notetext);
    }
    notes.new.value = "";
})

notelist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("deletenote"))
    {
        e.target.parentElement.remove();
        checkempty();
    }
})

const filternotes = (term) => {
    Array.from(notelist.children)
        .filter(note => !note.textContent.includes(term))
        .forEach(note=>note.classList.add("hide"))
    

        Array.from(notelist.children)
        .filter(note => note.textContent.includes(term))
        .forEach(note=>note.classList.remove("hide"))
}

searchnote.addEventListener("keyup",(e)=>{
    let term = searchnote.value;
    filternotes(term.trim());
    
})
