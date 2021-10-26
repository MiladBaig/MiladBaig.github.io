let themeDots = document.querySelectorAll('.theme-dot');

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('green');
} else {
    setTheme(theme);
}

themeDots.forEach(themeDot => {
    themeDot.addEventListener('click', e => {
        const mode = e.target.dataset.mode;
        setTheme(mode);
    })
})



function setTheme(mode) {
    if (mode == 'light') {
        document.querySelector('#theme-style').href = "default.css";
    }
    if (mode == "blue") {
        document.querySelector('#theme-style').href = "./themes/blue.css";
    }
    if (mode == "green") {
        document.querySelector('#theme-style').href = "./themes/green.css";
    }
    if (mode == "purple") {
        document.querySelector('#theme-style').href = "./themes/purple.css";
    }

    localStorage.setItem('theme', mode);
}


// multilingual just for test
const select = document.querySelector('#langs');
const introduce = document.querySelector("#introduce");
const settingsNote = document.querySelector('#settings-note');
const themeTxt = document.querySelector('#theme-txt');
const jobDet = document.querySelector('#job-det');
const jobDesc = document.querySelector('#job-desc');

let languages = {
    english: {
        introduce: "Hi, I'm Milad Baig",
        settingsNode: "*Theme setting will be saved for your next visit",
        themeText: "personalize theme",
        jobDesc: "What I do?",
        jobDet: "I'm a full-stack web developer."
    },
    persian : {
        introduce: "👋️ سلام من میلادم",
        settingsNode: "تنظیمات تم و زبان برای بازدید مجدد شما از این صفحه باقی خواهد ماند",
        themeText: "شخصی سازی تم",
        jobDesc: "کار من چیه؟",
        jobDet: "من یه طراح وبم"
    }
}


select.addEventListener("change", e => {
    const lang = e.target.value;
    setLang(lang)
})


function setLang(language){
    
    if(language === 'persian'){
        introduce.textContent = languages.persian.introduce;
        settingsNote.textContent = languages.persian.settingsNode;
        introduce.style.fontSize = "1.8rem";
        themeTxt.textContent = languages.persian.themeText;
        jobDesc.textContent = languages.persian.jobDesc;
        jobDet.textContent = languages.persian.jobDet;
    }else if(language == 'english'){
        introduce.textContent = languages.english.introduce;
        settingsNote.textContent = languages.english.settingsNode;
        themeTxt.textContent = languages.english.themeText;
        jobDesc.textContent = languages.english.jobDesc;
        jobDet.textContent = languages.english.jobDet;

    }
    localStorage.setItem('lang',language);
}

