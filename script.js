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
const langLabel = document.querySelector('#lang-label');
const moreAbout = document.querySelector('#more-about');
const aboutMe = document.querySelector('#about-me');
const expertise = document.querySelector('#exp');
const expDetail = document.querySelector('#exp-det');
const socialTxt = document.querySelector('#social-txt');
const proj = document.querySelector('#proj');
const postTitle = document.querySelector('#post-title');
const postIntro = document.querySelector('#post-intro');
const readM1 = document.querySelector('#read-m1');
const readM2 = document.querySelector('#read-m2');
const blackJackTitle = document.querySelector('#b-title');
const blackJackIntro = document.querySelector('#b-intro');
const formName = document.querySelector('#form-name');
const formEmail = document.querySelector('#form-email');
const formSubject = document.querySelector('#form-subject');
const formTouch = document.querySelector('#touch');
const formMessage = document.querySelector('#form-message');
const submitBtn = document.querySelector('#submit-btn');



let languages = {
    english: {
        introduce: "Hi, I'm Milad Baig",
        settingsNode: "*Theme setting will be saved for your next visit",
        themeText: "personalize theme",
        jobDesc: "What I do?",
        jobDet: "I'm a full-stack web developer.",
        langLabel : "choose a language: " ,
        moreAbout:  "More about me",
        aboutMe: "Back End Developer with a demonstrated history of working in the computer software industry. Skilled in Back-End and Front-End Web Development , Linux System Administration, Responsive Web Design, Web Services API, Git, and JSON Web Token (JWT). Strong engineering professional with a Bachelor's degree in Computer Software Engineering with a focus on AI from Ilam University.",
        expertise: "Top expertise",
        expDetail: "Back-End developer with primary focus on Nodejs + MongoDB:",
        socialTxt: "Find me on social media",
        proj: "Some of my projects: ",
        postTitle: "NodeCafe",
        postIntro: "a simple project with focus on JWT",
        readM1: "Read more",
        readM2: "Read more",
        blackJackTitle: "BlackJack",
        blackJackIntro: "BlackJack game with javascript, HTML and Css",
        formName: "Name",
        formEmail: "Email",
        formSubject: "Subject",
        formTouch: "Get in touch",
        formMessage: "Message",
        submitBtn: "Send"
    },
    persian : {
        introduce: "سلام من میلادم 👋️ ",
        settingsNode: "تنظیمات تم و زبان برای بازدید مجدد شما از این صفحه باقی خواهد ماند",
        themeText: "شخصی سازی تم",
        jobDesc: "کار من چیه؟",
        jobDet: "من یه طراح وبم",
        langLabel : "زبان را انتخاب کنید:",
        moreAbout: "کمی بیشتر درباره من ",
        aboutMe: "من یه توسعه دهنده وبم که تمرکزم روی برنامه نویسی سمت سروره و در زمینه تکنولوژی هایی مثل فرانت اند و طراحی واکنش گراو مدیریت سیستم های لینوکسی و گیت مهارت دارم ",
        expertise: "مهارت های من",
        expDetail: "برنامه نویس سمت سرور با تمرکز روی NodeJs و MongoDB : ",
        socialTxt: "می تونید اینجاها منو پیدا کنید",
        proj: "تعدادی از پروژه های من",
        postTitle: "نودکافه",
        postIntro: "یه پروژه ساده احراز هویت با NodeJs که با استفاده از MongoDb  و JWT نوشته شده",
        readM1: "بیشتر بخوانید",
        readM2: "بیشتر بخوانید",
        blackJackTitle: "بلک جک",
        blackJackIntro: " بلک جک یه بازی ساده س که با استفاده از جاوا اسکریپت و html و css نوشته شده",
        formName: "نام",
        formEmail: "ایمیل",
        formSubject: "موضوع",
        formTouch: "ارتباط با من",
        formMessage: "پیام",
        submitBtn: "ارسال"
    }
}

const lang = localStorage.getItem('lang');
setLang(lang);




select.addEventListener("change", e => {
    const lang = e.target.value;
    setLang(lang)
})


function setLang(language){
    
    if(language === 'persian'){
        document.querySelector('body').style.direction = 'rtl'
        introduce.textContent = languages.persian.introduce;
        settingsNote.textContent = languages.persian.settingsNode;
        themeTxt.textContent = languages.persian.themeText;
        jobDesc.textContent = languages.persian.jobDesc;
        jobDet.textContent = languages.persian.jobDet;
        langLabel.textContent = languages.persian.langLabel;
        moreAbout.textContent = languages.persian.moreAbout;
        aboutMe.textContent = languages.persian.aboutMe;
        expertise.textContent = languages.persian.expertise;
        expDetail.innerHTML = `${languages.persian.expDetail} <a target="__blank"
        href="Milad's Resume newer-v.pdf">دانلود رزومه</a>`;
        socialTxt.textContent = languages.persian.socialTxt;
        proj.textContent = languages.persian.proj;
        postIntro.textContent = languages.persian.postIntro;
        postTitle.textContent = languages.persian.postTitle;
        readM1.textContent = languages.persian.readM1;
        readM2.textContent = languages.persian.readM2;
        blackJackTitle.textContent = languages.persian.blackJackTitle;
        blackJackIntro.textContent = languages.persian.blackJackIntro;
        formName.textContent = languages.persian.formName;
        formEmail.textContent = languages.persian.formEmail;
        formSubject.textContent = languages.persian.formSubject;
        formTouch.textContent = languages.persian.formTouch;
        formMessage.textContent = languages.persian.formMessage;
        submitBtn.value = languages.persian.submitBtn;
        select.innerHTML = `
        <option value="persian">فارسی</option>
        <option value="english">English</option>
        `
    }else if(language == 'english'){
        document.querySelector('body').style.direction = 'ltr'
        introduce.textContent = languages.english.introduce;
        settingsNote.textContent = languages.english.settingsNode;
        themeTxt.textContent = languages.english.themeText;
        jobDesc.textContent = languages.english.jobDesc;
        jobDet.textContent = languages.english.jobDet;
        langLabel.textContent = languages.english.langLabel;
        moreAbout.textContent = languages.english.moreAbout;
        aboutMe.textContent = languages.english.aboutMe;
        expertise.textContent = languages.english.expertise;
        expDetail.innerHTML = `${languages.english.expDetail} <a target="__blank"
        href="Milad's Resume newer-v.pdf">Download Resume</a>`;
        socialTxt.textContent = languages.english.socialTxt;
        proj.textContent = languages.english.proj;
        postIntro.textContent = languages.english.postIntro;
        postTitle.textContent = languages.english.postTitle;
        readM1.textContent = languages.english.readM1;
        readM2.textContent = languages.english.readM2;
        blackJackTitle.textContent = languages.english.blackJackTitle;
        blackJackIntro.textContent = languages.english.blackJackIntro;
        formName.textContent = languages.english.formName;
        formEmail.textContent = languages.english.formEmail;
        formSubject.textContent = languages.english.formSubject;
        formTouch.textContent = languages.english.formTouch;
        formMessage.textContent = languages.english.formMessage;
        submitBtn.value = languages.english.submitBtn;
    }
    localStorage.setItem('lang',language);
}

