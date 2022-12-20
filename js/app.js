const data = {
    "subjects": {
        "grammer": {
            "name": "النحو والصرف",
            "professor_1": "د/ منصور عبدالسميع", // max 2
            "last_update": "21/12/2022 02:00", // optional
            "notes": [
                "الرجاء الإلتزام بالحضور مبكراً، كما أنه يتم سؤال المتأخرين ومناقشتهم",
                "كتاب شرح ابن عقيل الأربعة أجزاء موجودين في مكتبة الفتح بـ 120ج",
                "التكليفات عليها درجات أعمال السنة"
            ],
            "events": [
                {
                    "content": "المحاضرة الثانية عشرة",
                    "at": "السبت 17/12/2022 08:00",
                    "image": "check"
                },
                {
                    "content": "المحاضرة الحادية عشرة",
                    "at": "السبت 10/12/2022 08:00",
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
                    "at": "السبت 03/12/2022 08:00",
                    "inner": [
                        "<h4>تكليف</h4><ul><li>هات المضارع ثم الجزم: صام / قال / صان / زار / طاف / رام / راح / جاد</li><li>هات اسم المفعول من: شاد / صاد / كاد / غاظ / زاد / دان / مال</li></ul>"
                    ],
                    "image": "check"
                },
                {
                    "content": "المحاضرة التاسعة",
                    "at": "السبت 26/11/2022 08:00",
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
                    "at": "السبت 19/11/2022 08:00",
                    "image": "help"
                },
                {
                    "content": "المحاضرة السابعة",
                    "at": "السبت 12/11/2022 08:00",
                    "inner": [
                        "<ul>المبني للمجهول<li>الماضي: يُضم الأول ويكسر ما قبل الآخر.</li><li>المضارع: يُضم الأول ويفتح ما قبل الآخر.</li></ul><p>* خرق الثوبُ المسمارَ<br/>↩ هذا منافي للمنطق، كيف يخرق الثوب المسمار؟!<br/>* يجوز كسر القاعدة في حالتين:<br/>↩ 1- الكلام العام (المفهوم والمنطقي).<br/>↩ 2- إذا كانت القاعدة لا تلبي ما أريد (لأن المعني هو الأصل).</p><br/><p>* الفعل المعتل ← قال ← ق و ل ← قُوِل (مبني للمجهول حسب القاعدة)<br/>↩ ولكن للتخفيف ← قُيل ← قِيِل.<br/>↩ ويمكن أيضاً قِوِل.</p><p>* وعلى هذا: صام ← صِيم</p><br/><p>شروط الفصاحة:<br/>1- عدم تقارب المخارج.<br/>2- شخص يدين لفظه معناه.</p><br/><p>* الفعل الرباعي: أعاد ← أُعِيد (ضم + كسر).<br/>↩ الخطوات: أُعْوِد ← أُعِيد (قلبت ياء بسبب ضعف الواو).</p><p>* أقتاد ← أُقتوِد ← أُقْتَيد ← أُقْتيْد.</p><p>* أنار ← أُنْوِر ← أُنِوْر ← أُنِير. (إعلال بالنقل أولاً ثم قلب الياء).</p>"
                    ],
                    "image": "check"
                },
                {
                    "content": "المحاضرة السادسة",
                    "at": "السبت 05/11/2022 08:00",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الخامسة",
                    "at": "السبت 29/10/2022 08:00",
                    "inner": [
                        "<h4>الإبدال</h4><p>* يُحذف الحرف الأصلي من الكلمة إذا ضَعُف (إذا سُكن - إذا كان حرف علة).</p><p>* يوجد تغيير لفظي مثل حرف (ت) ← تبدل إلي ← (ط)، مثل: ضرب ← (افتعل) ← اضترب ← إبدال ← اضطرب.</p><p>* صيغ أخرى ← افتعل، يفتعل، مفتعل، افتعال.</p><p>* يَسَر (فعل) ← ايْتَسَر (افتعل) ← (قلب) ← اتْتَسَر ← (إدغام) ← اتَّسر.</p><br/><p>* السؤال في الإمتحان: أجب بالخطوات كاملة وبالتشكيل.</p><p>* دعا ← ادْتَعى ← ادْدَعى ← ادَّعى ← ادَّعا (لأن قبل الحرف الأخير فتحة وليس كسرة).</p><p>* يصعب الابتداء بساكن، فوضع ألف الوصل ← توصلاً لنطق الحرف الساكن (افْتَعَل).</p><p>* الحرف الأخير لا داعي لتشكيله.</p><p>* وَصَف (فعل) ← اوْتَصَف (افتعل) ← اتْتَصف (إبدال) ← اتَّصف (تضغم التاء).</p><p>* إذا كان الألف حرف رابع أو خامس يقلب ألف ← (ادّعا) من ادّعى.</p><p>* ذَكَر (فعل) ← اذْتَكر (افتعل) ← اددكر (تقلب الذال والتاء إلى دال بسبب الثقل) ← ادّكر (يضغم الحرفان).</p><p>ومن ذلك أيضاً: مُفْتعل ← مُدّكِر من (مُذْتَكر).</p><p>* وَهَم (فعل) ← اوْتَهم (افتعل) ← (قلب الواو) ← اتْتَهم ← (تضغم التاء) ← اتَّهم<br/>من الإتهام؟ صحيح.</p><p>* زَان (فعل) ← ازْتين (افتعل) ← ازدان (تقلب التاء دالاً).</p>* (افتعل) تقلب التاء دالاً إذا وقعت بعد:<ul><li>د</li><li>ذ</li><li>ز</li></ul><p>* الإبدال 4 قواعد.</p><p>* الفعل الصحيح الثلاثي يأتي على صورة (حركة سكون حركة) ← قاعدة تُبنى على الكثير.</p>",
                        "<h4>الإعلال</h4><p>- الفعل الأجف الثلاثي:<br>* قال ← أصلها قَوَل ← (المضارع) ← يَقْوُل (يفْعل) *نلاحظ الثقل*</p><p>↩ الحل ← إعلال بالنقل (أو بالتسكين) ← (نبدل الحركة مكان السكون) ← يَقُوْل.</p><p>* عاج / ساج ← غير معروف هل أصل الألف (واو) أم (ياء). </p><p>* صام (فعل) ← يَصْوُم (يفْعل) ← (إعلال بالنقل) ← يَصُوْم.</p><p>* طاف ← يَطْوُف ← يَطُوْف.</p><p>* سار (حركة سكون حركة) ← يَسْيِر (تنقل حركة الياء -الكسرة- إلى الساكن الصحيح قبلها -السين- وذلك لاستثقال الكسر والياء في النطق) ← فتصبح هكذا: يَسِيْر.</p><p>* أخاف (أفعل) ← أصلها خَوَف (واو) ← يُخْوف (يُفْعِل)<br/>↩ 1- يُخوْف (إعلال بالنقل)<br/>↩ 2- (الواو بضعفها تتأثر بالفاء، فتتحول إلى ياء) يُخيف (إعلال بالقلب).</p><p>* أضاف ← يُضْيف ← يُضيْف (إعلال بالنقل).</p><p>* أمات ← أصلها ← يموت (واو) ← يُمْوِت (يُفْعل)<br/>↩ 1- يُموْت (إعلال بالنقل)<br/>↩ 2- يُمِيت (تأثراً بالكسرة تقلب ياء) (إعلال بالقلب).</p>",
                        "<h4>تكليف  على الإعلال والإبدال</h4><br/>مطلوب تحليل الكلمات في ورقة خارجية ويتم تسليمها المحاضرة القادمة.<ul><li>الحل يكون على وزن مثل (افتعل) و (يفعل).</li><li>كلمات الإبدال: وعد / وصل / وعظ / وسم / وسخ / وضح / وقى / يئس / زجر / درأ / زها / زحم / طرد / طوع / صفا / صرع.</li><li>كلمات الإعلال: عاد / قام / صام / جاد / ساد.</li></ul>"
                    ],
                    "image": "check"
                },
                {
                    "content": "المحاضرة الرابعة",
                    "at": "السبت 22/10/2022 08:00",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الثالثة",
                    "at": "السبت 15/10/2022 08:00",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الثانية",
                    "at": "السبت 08/10/2022 08:00",
                    "image": "help"
                },
                {
                    "content": "المحاضرة الأولى",
                    "at": "السبت 01/10/2022 08:00",
                    "inner": [
                        "<h4>الواجب</h4>",
                        "<h4>الممتنع</h4",
                        "<h4>الإمكان</h4>"
                    ],
                    "image": "check"
                }
            ]
        },
        "history": {
            "name": "تاريخ مصر الحديث والمعاصر",
            "professor_1": "د/ محمد صبري الدالي",
            "last_update": "",
            "notes": [],
            "events": []
        },
        "art": {
            "name": "الأدب الحديث ونصوصه",
            "professor_1": "د/ عبدالله عبدالحليم",
            "last_update": "",
            "notes": [
                "الدكتور بيسيب حرية اختيار الأبيات، ويتم تحليلها تحليل بلاغي (أي استخراج المعاني والكنايات والاستعارات وشرح البيت...الخ)"
            ],
            "events": []
        },
        "criticism": {
            "name": "النقد الأدبي الحديث",
            "professor_1": "د/ صلاح السروي",
            "professor_2": "د/ رشا صالح",
            "last_update": "",
            "notes": [],
            "events": []
        },
        "interpretation": {
            "name": "اتجاهات التفسير في العصر الحديث",
            "professor_1": "د/ عجمية براية",
            "last_update": "",
            "notes": [],
            "events": []
        },
        "english": {
            "name": "اللغة الأوروبية (إنجليزي)",
            "professor_1": "د/ نبيلة رشاد",
            "last_update": "",
            "notes": [],
            "events": []
        },
        "spanish": {
            "name": "اللغة الأوروبية (أسباني)",
            "professor_1": "د/ علي أمين",
            "last_update": "",
            "notes": [],
            "events": []
        },
        "turkish": {
            "name": "اللغة الشرقية (تركي)",
            "professor_1": "د/ ندي عبدالمنعم",
            "last_update": "",
            "notes": [],
            "events": []
        },
        "persian": {
            "name": "اللغة الشرقية (فارسي)",
            "professor_1": "د/ رباب المحمدي",
            "last_update": "",
            "notes": [],
            "events": []
        },
        "hebrew": {
            "name": "اللغة الشرقية (عبري)",
            "professor_1": "د/ أبوالعزايم فرج",
            "professor_2": "د/ نورهان خالد",
            "last_update": "",
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
    let url = "index.html";
    if (index_page && subject_page) {
        if (subjects.includes(p)) {
            // show subject data
            index_page.className = "hidden";
            subject_page.className = "";
            let html = [];
            let sub = data["subjects"][p];
            url += "?subject=" + p;
            document.title = sub.name + " - كلية الآداب قسم اللغة العربية جامعة حلوان";

            let last_update = sub.last_update? `<span>آخر تحديث: ${sub.last_update}</span>`: "";
            html.push(`<h1>مادة ${sub.name}</h1>${last_update}`);

            if (sub.notes && Object.values(sub.notes).length) {
                // Notes
                html.push('<div class="container_subject"><h2>الملاحظات</h2><div class="notes">');
                let count = 1;
                for (n of Object.values(sub.notes)) {
                    html.push(`<div><h3>${count}#</h3><p>${n}</p></div>`);
                    count++;
                }
                html.push('</div></div>');
            }
            if (sub.events && Object.values(sub.events).length) {
                // Events
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
            document.title = "صفحة الطالب الجامعي - كلية الآداب قسم اللغة العربية جامعة حلوان";
        }
        window.history.replaceState(null, null, url);
    }
};

const detectChange = () => {
    let page = "index";
    if (window.location.search) {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has("subject")) page = searchParams.get("subject");
    }
    switch_page(page);
};
detectChange();

window.addEventListener("popstate", () => {
    detectChange();
});

const pushTheState = () => {
    window.history.pushState(null, null, window.location.href);
};

document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("go_home")) {
        pushTheState();
        switch_page("index");
    } else if (subjects.includes(e.target.id)) {
        pushTheState();
        switch_page(e.target.id);
    } else if (e.target.parentElement && subjects.includes(e.target.parentElement.id)) {
        pushTheState();
        switch_page(e.target.parentElement.id);
    } else if (e.target.parentElement && e.target.parentElement.parentElement && subjects.includes(e.target.parentElement.parentElement.id)) {
        pushTheState();
        switch_page(e.target.parentElement.parentElement.id);
    }
});