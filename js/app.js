const data = {
    "subjects": {
        "grammer": {
            "name": "النحو والصرف",
            "professor_1": "د/ منصور عبدالسميع", // max 2
            "last_update": "16/12/2022 21:16", // optional
            "notes": [
                "الرجاء الإلتزام بالحضور مبكراً، كما أنه يتم سؤال المتأخرين ومناقشتهم",
                "كتاب شرح ابن عقيل الأربعة أجزاء موجودين في مكتبة الفتح بـ 120ج",
                "التكليفات عليها درجات أعمال السنة"
            ],
            "events": [
                {
                    "content": "المحاضرة الثانية عشرة",
                    "at": "السبت 17/12/2022 08:00 ص",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الحادية عشرة",
                    "at": "السبت 10/12/2022 08:00 ص",
                    "inner": [
                        "قاعدة النسب",
                        "جمع غير العاقل",
                        "التصغير",
                        "<h4>تكليف</h4><ul><li>نأتي بجمع التكسير من: مصباح / محراث / ميزان / مقدار / مهماز / مسمار</li><li>نأتي بالتصغير من: غلام / غزال / حمار / شعار / غراب</li><li>نأتي بالمثنى من: ذكرى</li></ul>"
                    ],
                    "image": "check"
                },
                {
                    "content": "المحاضرة العاشرة",
                    "at": "السبت 03/12/2022 08:00 ص",
                    "inner": [
                        "<h4>تكليف</h4><ul><li>هات المضارع ثم الجزم: صام / قال / صان / زار / طاف / رام / راح / جاد</li><li>هات اسم المفعول من: شاد / صاد / كاد / غاظ / زاد / دان / مال</li></ul>"
                    ],
                    "image": "check"
                },
                {
                    "content": "المحاضرة التاسعة",
                    "at": "السبت 26/11/2022 08:00 ص",
                    "inner": [
                        "الجمع (بالحذف - بالإضافة - المؤنث السالم - التكسير)",
                        "النسب",
                        "المبني للمجهول",
                        "<h4>تكليف</h4><ul><li>نأتي بالمصدر والمبني للمجهول: آتى / آلف / آذن / آذى</li><li>نأتي بالمبني للمجهول: شارك / قاتل / عارض / حاكم / آكل / ناقش / شاعر</li><li>نأتي بالتصغير: صانع / خادم / عامل / حامد / شاعر</li><li>نأتي بالجمع: عطية / هدية / مطية / خطيئة</li></ul>"
                    ],
                    "image": "check"
                },
                {
                    "content": "المحاضرة الثامنة",
                    "at": "السبت 19/11/2022 08:00 ص",
                    "image": "help"
                },
                {
                    "content": "المحاضرة السابعة",
                    "at": "السبت 12/11/2022 08:00 ص",
                    "inner": [
                        "المبني للمجهول",
                        "الفعل المعتل",
                        "شروط الفصاحة",
                        "الفعل الرباعي"
                    ],
                    "image": "check"
                },
                {
                    "content": "المحاضرة السادسة",
                    "at": "السبت 05/11/2022 08:00 ص",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الخامسة",
                    "at": "السبت 29/10/2022 08:00 ص",
                    "inner": [
                        "الإبدال",
                        "الإعلال (بالقلب - بالنقل)",
                        "<h4>تكليف  على الإعلال والإبدال</h4><br/>مطلوب تحليل كلمات في ورقة خارجية ويتم تسليمها المحاضرة القادمة.<ul><li>الحل يكون على وزن مثل (افتعل)</li><li>كلمات الإبدال: وعد / وصل / وعظ / وسم / وسخ / وضح / وقى / يئس / زجر / درأ / زها / زحم / طرد / طوع / صفا / صرع</li><li>كلمات الإعلال: عاد / قام / صام / جاد / ساد</li></ul>"
                    ],
                    "image": "check"
                },
                {
                    "content": "المحاضرة الرابعة",
                    "at": "السبت 22/10/2022 08:00 ص",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الثالثة",
                    "at": "السبت 15/10/2022 08:00 ص",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الثانية",
                    "at": "السبت 08/10/2022 08:00 ص",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الأولى",
                    "at": "السبت 01/10/2022 08:00 ص",
                    "inner": [
                        "الواجب",
                        "الممتنع",
                        "الإمكان"
                    ],
                    "image": "check"
                }
            ]
        },
        "history": {
            "name": "تاريخ مصر الحديث والمعاصر",
            "professor_1": "د/ محمد صبري الدالي",
            "last_update": "16/12/2022 21:16",
            "notes": [],
            "events": []
        },
        "art": {
            "name": "الأدب الحديث ونصوصه",
            "professor_1": "د/ عبدالله عبدالحليم",
            "last_update": "16/12/2022 21:16",
            "notes": [
                "الدكتور بيسيب حرية اختيار الأبيات، ويتم تحليلها تحليل بلاغي (أي استخراج المعاني والكنايات والاستعارات وشرح البيت...الخ)"
            ],
            "events": []
        },
        "criticism": {
            "name": "النقد الأدبي الحديث",
            "professor_1": "د/ صلاح السروي",
            "professor_2": "د/ رشا صالح",
            "last_update": "16/12/2022 21:16",
            "notes": [],
            "events": []
        },
        "interpretation": {
            "name": "اتجاهات التفسير في العصر الحديث",
            "professor_1": "د/ عجمية براية",
            "last_update": "16/12/2022 21:16",
            "notes": [],
            "events": []
        },
        "english": {
            "name": "اللغة الأوروبية (إنجليزي)",
            "professor_1": "د/ نبيلة رشاد",
            "last_update": "16/12/2022 21:16",
            "notes": [],
            "events": []
        },
        "spanish": {
            "name": "اللغة الأوروبية (أسباني)",
            "professor_1": "د/ علي أمين",
            "last_update": "16/12/2022 21:16",
            "notes": [],
            "events": []
        },
        "turkish": {
            "name": "اللغة الشرقية (تركي)",
            "professor_1": "د/ ندي عبدالمنعم",
            "last_update": "16/12/2022 21:16",
            "notes": [],
            "events": []
        },
        "persian": {
            "name": "اللغة الشرقية (فارسي)",
            "professor_1": "د/ رباب المحمدي",
            "last_update": "16/12/2022 21:16",
            "notes": [],
            "events": []
        },
        "hebrew": {
            "name": "اللغة الشرقية (عبري)",
            "professor_1": "د/ أبوالعزايم فرج",
            "professor_2": "د/ نورهان خالد",
            "last_update": "2022/12/15",
            "notes": [],
            "events": []
        }
    }
};

const subjects = [];
const sections = document.querySelector(".sections");
const index_page = document.querySelector("#index");
const subject_page = document.querySelector("#subject");
const subject_content = document.querySelector("#subject_content");

let html = [];
for ( subject in data["subjects"] ) {
    subjects.push(subject);
    let sub = data["subjects"][subject];
    if (sections) {
        let last_update = sub.last_update? `<i>آخر تحديث: ${sub.last_update}</i>`: "";
        let professors = `<p>${sub.professor_1}</p>`;
        if (sub.professor_2) professors += `<p>${sub.professor_2}</p>`;
        html.push(`<section id="${subject}"><div class="info"><h2>${sub.name}</h2>${professors}${last_update}</div><div class="image"><img src="img/books.png" alt="كتب" /></div></section>`);
    }
}
if (sections) sections.innerHTML = html.join(""); // fastest

const switch_page = (p) => {
    if (index_page && subject_page) {
        let pp = "index.html";
        if (subjects.includes(p)) {
            // show subject data
            index_page.className = "hidden";
            subject_page.className = "";
            pp += `?subject=${p}`;
            let html = [];
            let sub = data["subjects"][p];
            let last_update = sub.last_update? `<span>آخر تحديث: ${sub.last_update}</span>`: "";
            html.push(`<h1>مادة ${sub.name}</h1>${last_update}`);
            if (sub.notes && Object.values(sub.notes).length) {
                html.push('<div class="container_subject"><h2>الملاحظات</h2><div class="notes">');
                let count = 1;
                for (n of Object.values(sub.notes)) {
                    html.push(`<div><h3>${count}#</h3><p>${n}</p></div>`);
                    count++;
                }
                html.push('</div></div>');
            }
            if (sub.events && Object.values(sub.events).length) {
                html.push('<div class="container_subject" ><h2>الأحداث</h2><ul class="tree">');
                for (e of Object.values(sub.events)) {
                    let inner = "";
                    if (e.inner && e.inner.length) {
                        inner += "<ul>";
                        for (i of e.inner) {
                            inner += `<li><div>${i}</div></li>`;
                        }
                        inner += "</ul>";
                    }
                    let content = e.content;
                    if (e.image === "help") {
                        content += ' <img src="img/help.png" alt="علامة غير معروف" />';
                    } else if (e.image === "check") {
                        content += ' <img src="img/check.png" alt="علامة صح" />';
                    } else if (e.image === "cross") {
                        content += ' <img src="img/cross.png" alt="علامة خطأ" />';
                    }
                    html.push(`<li><div><h3>${content}</h3><span>${e.at}</span></div>${inner}</li>`);
                }
                html.push("</ul></div>");
            } else {
                html.push(`<div class="container_subject"><p>!لا يوجد أحداث لعرضها</p></div>`);
            }
            if (subject_content) subject_content.innerHTML = html.join("");
        } else {
            // show index page
            index_page.className = "";
            subject_page.className = "hidden";
        }
        window.history.replaceState(null, null, pp);
    }
};

if (window.location.search) {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("subject")) switch_page(searchParams.get("subject"));
}

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("go_home")) {
        switch_page("index");
    } else if (subjects.includes(e.target.id)) {
        switch_page(e.target.id);
    } else if (e.target.parentElement && subjects.includes(e.target.parentElement.id)) {
        switch_page(e.target.parentElement.id);
    } else if (e.target.parentElement && e.target.parentElement.parentElement && subjects.includes(e.target.parentElement.parentElement.id)) {
        switch_page(e.target.parentElement.parentElement.id);
    }
});