const data = {
    subjects: {
        grammer: {
            name: "النحو والصرف",
            professors: [
                "أ.د منصور عبدالسميع"
            ],
            documents: [
                {
                    title: "المقرر الإلكتروني",
                    type: "pdf",
                    path: "docs/مقرر%20النحو%20والصرف%20لطلاب%20الفرقة%20الرابعة%20قسم%20اللغة%20العربية%202022_2023.pdf"
                },
                {
                    title: "امتحان 2019",
                    type: "photo",
                    path: "docs/امتحان%20النحو%20والصرف%202019%20-%20الفرقة%20الرابعة%20آداب%20قسم%20اللغة%20العربية.jpg"
                },
                {
                    title: "امتحان 2019 (الخلف)",
                    type: "photo",
                    path: "docs/امتحان%20النحو%20والصرف%202019%20(الخلف)%20-%20الفرقة%20الرابعة%20آداب%20قسم%20اللغة%20العربية.jpg"
                },
                {
                    title: "امتحان 2018",
                    type: "photo",
                    path: "docs/امتحان%20النحو%20والصرف%202018%20-%20الفرقة%20الرابعة%20آداب%20قسم%20اللغة%20العربية.jpg"
                },
                {
                    title: "امتحان 2018 (الخلف)",
                    type: "photo",
                    path: "docs/امتحان%20النحو%20والصرف%202018%20(الخلف)%20-%20الفرقة%20الرابعة%20آداب%20قسم%20اللغة%20العربية.jpg"
                },
                {
                    title: "امتحان 2014",
                    type: "photo",
                    path: "docs/امتحان%20النحو%20والصرف%202014%20-%20الفرقة%20الرابعة%20آداب%20قسم%20اللغة%20العربية.jpg"
                },
                {
                    title: "امتحان 2014 (الخلف)",
                    type: "photo",
                    path: "docs/امتحان%20النحو%20والصرف%202014%20(الخلف)%20-%20الفرقة%20الرابعة%20آداب%20قسم%20اللغة%20العربية.jpg"
                }
            ],
            notes: [
                "الرجاء الإلتزام بالحضور مبكراً، كما أنه يتم سؤال المتأخرين ومناقشتهم.",
                "كتاب شرح ابن عقيل (الأربعة أجزاء) موجود في مكتبة الفتح بـ 120ج.",
                "التكليفات عليها درجات أعمال السنة."
            ],
            events: [
                {
                    title: "المحاضرة الثالثة عشرة :check:",
                    full_date: "السبت 11/02/2023 08:00 ص",
                    content: [
                        '<p>* تم الشرح من الفصل الأول "مفاهيم نحوية حاكمة" ص2 إلى ص9 "أن".</p><p>* كان أحدهم يفتي الناس من كتاب سيبويه مثل "حُكم إذا نسي أحدهم سجود السهو" فكان يقول: "لا شيء عليه" ودليله من كتاب سيبويه؛ المُصغر لا يُصغر.</p><br><p>* صحيفة ← (نجمعها بإضافة ألف ثالثة) ← صحايف ← صحائف (وقعت الياء بعد الألف الزائدة فتحول همزة).</p><p>* صائد ← صاائد (نلاحظ إلتقاء ساكنين) ← *لن تستطيع الحذف لأن حذف الألف الأولى يحولها إلى صيْد وهذه مصدر، والألف الثانية تدل على الجمع فلا يجوز*</p><p>↩ فتكون ← صوائد (من حمل النقيض على النقيض) *التصغير نقيض الجمع مثل صائد ← صايئد ← صويئد*.</p><br><p>* قوي (مصدرها قوّة *قُوْوَة الهاء للتأنيث*) ← (أصلها) ← قوو (قلبت الواو الثانية ياء لمناسبة الكسرة قبلها).</p><p>↩ اسم المفعول منها ← مَقْوُوو (مفعول) ← *نحذف أم نغير؟*</p><p>↩ لا نحذف لأن هناك واو من أصل الفعل. *إذاً سنغير ولكن ماذا؟*</p><p>↩ الواو الأولى لا يمكن تغييرها، إذاً نختار ما بين الثانية والثالثة؛ الطرف هو الأضعف *الأضعف هو الذي يتغير*.</p><p>↩ نغيرها إلى ماذا؟ ← (ألف أم واو أم همزة) ← مقووي (يصعب كل شيء عدا الياء) ← مقوي ي (إذا اجتمع واو وياء أولهما ساكن، تُقلب الواو ياء ثم تُضغم في الياء الثانية) ← مقويّ.</p><p>* رضي (رضو) ← (مفعول) ← مَرْضُوو ← مَرْضوي ← مرضيّ.</p><br><p>* بنى ← بِنَاْيْ (فِعال) ← بناء (وقعت الياء طرفاً بعد ألف مد زائدة، فتُقلب همزة ومثلها الواو).</p><p>* باع ← بايع ← بائع.</p><p>* قال (قول) ← قاول ← قائل.</p>',
                        "<h4>تكليف</h4><ul><li>جمع تكسير من: غريزة / عجيبة / سليقة / شعيرة / سريرة / خميلة / قبيلة / عقيدة / نفيسة / ذخيرة / سائل / مائدة / نائف</li><li>صيغة (فِعال) من: قضى / جزى / بكى / فنى / بقى / عوى</li><li>المصدر من: انقضى / افترى</li><li>اسم الفاعل من: هام / زاغ / مال / حاد / غاب / باد / كاد / غاظ / بان / صاد / طاش</li></ul>"
                    ]
                },
                {
                    title: "المحاضرة الثانية عشرة :check:",
                    full_date: "السبت 17/12/2022 08:00 ص",
                    content: [
                        "<h4>اسم فاعل من فعل ثلاثي</h4><p>* قال ← قاول ← قائل (وقعت الواو عيناً لاسم الفاعل، فقُلبت الواو همزة).</p><p>* صام ← صائم.</p><p>* قام ← قائم.</p><p>* غار ← غائر.</p><br><p>* عجوز ← عجاوز ← عجائز.</p><br><p>* قال ← (الأصل) ← قول.</p><p>* محا ← (الأصل) ← محو.</p><br><h4>جمع فاعلة على فواعل</h4><p>* واصلة ← وواصل ← أواصل (اجتمعت واوان الثانية منهما متحركة، فتقلب الأولى همزة).</p><br><p>* عائدة ← عواود ← عوائد.</p><p>* شائبة ← شوائب.</p><p>* سيد ← سييد ← سيايد ← سيائد.</p><br><p>* قام ← (المصدر) ← قِوام ← قيام (تأثراً بالكسرة).</p><br><p>* حوض ← (أصله) ← حِواض ← حياض (تأثرت الواو بالكثرة).</p><p>* وَزَن ← مِوْازن ← ميزان.</p>",
                        "<h4>تكليف</h4><ul><li>وضح ما حدث من إعلال أو إبدال: صام / نام / عاد / ساق / خان / غار / خاف</li><li>جمع تكسير: عروس / حلوب / قلوص / واقية / واثبة / واعدة / واعية</li><li>هات الأصل ثم جمع التكسير من: شائبة / هين</li><li>نأتي بالأصل من: استعلى / اعتدى / أبدى / استدعى / رعاة / قساة / ساسة / جيد / سيد / هين / لين</li></ul>"
                    ]
                },
                {
                    title: "المحاضرة الحادية عشرة :check:",
                    full_date: "السبت 10/12/2022 08:00 ص",
                    content: [
                        "<h4>قاعدة النسب</h4><p>زيادة يائين (أو ياء واحدة عليها شدة عند الكتابة).</p><p>* فتى ← فتايّ</p><ul><li>مشكلة التقاء ساكنين</li><li>ستتشابه مع المضاف إليّ (فتاي)</li><li>الانتقال من (ألف) إلى (ياء) بها صعوبة</li></ul>↩ تقلب (الألف) إلى (واو) ← فتويّ.<ul><li>تخلصنا من الالتباس ✓</li><li>تخلصنا من التقاء ساكنين ✓</li></ul><br><p>* الإشمام: هو أن تشم الصوت صوتاً آخر (نصفه صوت ونصفه صوتاً آخر مثل: مجرىٰها).</p><br><p>* مفتاح ← (جمع تكسير) ← مفاتِاح (مفاعيل) ← (تقلب الألف إلى ياء بسبب كثرة التاء) ← مَفاتِيح.</p><br><h4>قاعدة التصغير</h4><p>ضم الأول، و فتح الثاني و إضافة ياء التصغير الساكنة.<br>↩ مفتاح ← مُفاتيح ← مُفيتيح (لصعوبة النطق؛ قلب الألف إلى ياء، ومناسبة للتاء تكسر).</p><p>* كتاب ← كُتَيْاْب *التقاء ساكنين*<br>↩ (تقلب الألف إلى ياء) ← كُتييب ← كُتيّب (تضغم اليائين لأن الأولى ساكنة).</p><br><p>* غير العاقل إذا جمع أُنِث.</p><p>* مستشفى ← مستشفاْاْت *التقاء ساكنين*<br>↩ مستشفيات *قلب الألف إلى ياء* (تغيير وليس حذف).<br>↩ وكذلك في التثنية ← مستشفيان.</p><br><h4>المصدر</h4><p>* كسا (فعل) ← كساء (فعال).</p><p>* رجا (فعل) ← رجاء (فعال).</p><p>* سما (فعل) ← سماء (فعال).</p><p>* اصطفى (افتعل) ← اصطفاو (افتعال) ← اصطفاء.</p><p>* أبدى (أفعل) *من يبدو* ← إبداء (إفعال).</p>",
                        "<h4>تكليف</h4><ul><li>نأتي بجمع التكسير من: مصباح / محراث / ميزان / مقدار / مهماز (البطيء من الناس أو من يحتاج أن يهمزه) / مسمار</li><li>نأتي بالتصغير من: غلام / غزال / حمار / شعار / غراب</li><li>نأتي بالمثنى من: ذكرى</li></ul>"
                    ]
                },
                {
                    title: "المحاضرة العاشرة :check:",
                    full_date: "السبت 03/12/2022 08:00 ص",
                    content: [
                        "<h4>تكليف</h4><ul><li>هات المضارع ثم الجزم: صام / قال / صان / زار / طاف / رام / راح / جاد</li><li>هات اسم المفعول من: شاد / صاد / كاد / غاظ / زاد / دان / مال</li></ul>"
                    ]
                },
                {
                    title: "المحاضرة التاسعة :check:",
                    full_date: "السبت 26/11/2022 08:00 ص",
                    content: [
                        '<p>* الخط العثماني يختلف عما يُكتب به في هذا العصر في بعض المصطلحات.</p><p>* آمن ← (هي في الأصل) ← أَاْمَن</p><p>* سالَت هُذَيلٌ رَسولَ اللَهِ فاحِشَةً ← في هذا البيت الكلمة أصلها (سألت)، ولكن من باب التسهيل (سالت).</p><p>* عثمان، عفان ← يمنع من الصرف لأنها تكاد تكون أعجمية بسبب اللاحقة "ان" التي ادخلت من اللغة الفارسية.</p><p>* عربي، رومي ← (جمع بالحذف) ← عرب، روم.</p><p>* كلمة (فُلك) ← مفردها هو نفس جمعها.</p><p>* أسد ← (جمع بالإضافة) ← أسود<br>↩ وقد تجمع أُسُد.</p><p>* آتى ← (المصدر) ← ايتاء.</p><p>* آلف ← إئتلاف.</p><p>* حسناء ← (يمكن أن نقول) ← حسنى (ممدود يمكن أن نيسره) (قصر الممدود)<br>↩ تثنية ← حسناءان ← حسناوان (تقلب الهمزة).</p><p>* لا يجتمع تعريفان أو تأنيثان مثل: <del>الرجل العلم</del> (خطأ).</p><p>* صحراء ← (جمع مؤنث سالم) ← صحراءات ← صحراوات.</p><p>* خضراء ← (نسب) ← خضراءيّ أو خضراويّ.</p><p>* الكتابة اصطلاح، أي ما اتفق عليه الناس، لا شأن له بالقاعدة.</p><p>* رسالة ← رساالة ← رساال ← رسائل.</p><p>* قلادة ← قلاادة ← قلااد ← قلائد.</p><p>* ضَارَب ← (مبني للمجهول) ← ضُورِب (في الأصل ضُارِب)<br>↩ ولكن قلب (الألف) إلى (واو).</p><p>* آكل ← أُوكِل (فك الألف وقلب الثاني واو).</p><p>* شاعر ← (تصغير) ← شُايعر ← شويعر (قلب الألف).</p><p>* شاعرة ← شااعرة ← شااعر ← شواعر.</p><p>* جمع التكسير نقيض التصغير / (حمل النقيض على النقيض).</p>',
                        "<h4>كُتب تم ذكرها</h4><ul><li>كتاب الإمالة.</li><li>قطر الندى (ورقتين للأطفال) ← لابن هشام.</li><li>كتاب علم الأصوات ← د/ كمال بشر.</li></ul>",
                        "<h4>تكليف</h4><ul><li>نأتي بالمصدر من: آجال / آتى / آلف / آذن / آذى</li><li>نأتي بالمبني للمجهول من: شارك / قاتل / عارض / حاكم / آكل / ناقش / شاعر</li><li>نأتي بالتصغير من: صانع / خادم / عامل / حامد / شاعر</li><li>نأتي بالجمع من: عطية / هدية / مطية / خطيئة</li></ul>"
                    ]
                },
                {
                    title: "المحاضرة الثامنة :help:",
                    full_date: "السبت 19/11/2022 08:00 ص"
                },
                {
                    title: "المحاضرة السابعة :check:",
                    full_date: "السبت 12/11/2022 08:00 ص",
                    content: [
                        "<h4>المبني للمجهول</h4><ul><li>الماضي: يُضم الأول ويكسر ما قبل الآخر.</li><li>المضارع: يُضم الأول ويفتح ما قبل الآخر.</li></ul><p>* خرق الثوبُ المسمارَ<br>↩ هذا منافي للمنطق، كيف يخرق الثوب المسمار؟!<br>* يجوز كسر القاعدة في حالتين:<br>↩ 1- الكلام العام (المفهوم والمنطقي).<br>↩ 2- إذا كانت القاعدة لا تلبي ما أريد (لأن المعني هو الأصل).</p><br><p>* الفعل المعتل ← قال ← ق و ل ← قُوِل (مبني للمجهول حسب القاعدة)<br>↩ ولكن للتخفيف ← قُيل ← قِيِل.<br>↩ ويمكن أيضاً قِوِل.</p><p>* وعلى هذا: صام ← صِيم</p><br><p>شروط الفصاحة:<br>1- عدم تقارب المخارج.<br>2- شخص يدين لفظه معناه.</p><br><p>* الفعل الرباعي: أعاد ← أُعِيد (ضم + كسر).<br>↩ الخطوات: أُعْوِد ← أُعِيد (قلبت ياء بسبب ضعف الواو).</p><p>* أقتاد ← أُقتوِد ← أُقْتَيد ← أُقْتيْد.</p><p>* أنار ← أُنْوِر ← أُنِوْر ← أُنِير. (إعلال بالنقل أولاً ثم قلب الياء).</p>"
                    ]
                },
                {
                    title: "المحاضرة السادسة :help:",
                    full_date: "السبت 05/11/2022 08:00 ص"
                },
                {
                    title: "المحاضرة الخامسة :check:",
                    full_date: "السبت 29/10/2022 08:00 ص",
                    content: [
                        "<h4>الإبدال</h4><p>* يُحذف الحرف الأصلي من الكلمة إذا ضَعُف (إذا سُكن - إذا كان حرف علة).</p><p>* يوجد تغيير لفظي مثل حرف (ت) ← (تبدل إلي) ← (ط)، مثل: ضرب (افتعل) ← اضترب ← (إبدال) ← اضطرب.</p><p>* صيغ أخرى ← افتعل، يفتعل، مفتعل، افتعال.</p><p>* يَسَر (فعل) ← ايْتَسَر (افتعل) ← (قلب) ← اتْتَسَر ← (إدغام) ← اتَّسر.</p><br><p>*السؤال في الإمتحان* : أجب بالخطوات كاملة وبالتشكيل.</p><p>* دعا ← ادْتَعى ← ادْدَعى ← ادَّعى ← ادَّعا (لأن قبل الحرف الأخير فتحة وليس كسرة).</p><p>* يصعب الإبتداء بساكن، فوضع ألف الوصل ← توصلاً لنطق الحرف الساكن (افْتَعَل).</p><p>* الحرف الأخير لا داعي لتشكيله.</p><p>* وَصَف (فعل) ← اوْتَصَف (افتعل) ← (إبدال) ← اتْتَصف ← اتَّصف (تضغم التاء).</p><p>* إذا كان (الألف) حرف رابع أو خامس يقلب (ألفاً لينة) مثل: (ادّعا) من ادّعى.</p><p>* ذَكَر (فعل) ← اذْتَكر (افتعل) ← اددكر (تقلب الذال والتاء إلى دال بسبب الثقل) ← ادّكر (يضغم الحرفان).</p><p>↩ ومن ذلك أيضاً: مُفْتعل ← مُدّكِر من (مُذْتَكر).</p><p>* وَهَم (فعل) ← اوْتَهم (افتعل) ← (قلب الواو) ← اتْتَهم ← (تضغم التاء) ← اتَّهم<br>↩ من الإتهام؟ صحيح.</p><p>* زَان (فعل) ← ازْتين (افتعل) ← ازدان (تقلب التاء دالاً).</p>* (افتعل) تقلب التاء دالاً إذا وقعت بعد: ( د / ذ / ز )<p>* الإبدال 4 قواعد.</p><p>* الفعل الصحيح الثلاثي يأتي على صورة (حركة سكون حركة) ← قاعدة تُبنى على الكثير.</p>",
                        "<h4>الإعلال</h4><p>- الفعل الأجوف الثلاثي:<br>* قال ← أصلها قَوَل ← (المضارع) ← يَقْوُل (يفْعل) *نلاحظ الثقل*</p><p>↩ الحل ← إعلال بالنقل (أو بالتسكين) ← (نبدل الحركة مكان السكون) ← يَقُوْل.</p><p>* عاج / ساج ← غير معروف هل أصل الألف (واو) أم (ياء). </p><p>* صام (فعل) ← يَصْوُم (يفْعل) ← (إعلال بالنقل) ← يَصُوْم.</p><p>* طاف ← يَطْوُف ← يَطُوْف.</p><p>* سار (حركة سكون حركة) ← يَسْيِر (تنقل حركة الياء -الكسرة- إلى الساكن الصحيح قبلها -السين- وذلك لاستثقال الكسر والياء في النطق) ← فتصبح هكذا: يَسِيْر.</p><p>* أخاف (أفعل) ← (أصلها) ← خَوَف (واو) ← يُخْوف (يُفْعِل)<br>↩ 1- يُخوْف (إعلال بالنقل)<br>↩ 2- (الواو بضعفها تتأثر بالفاء، فتتحول إلى ياء) يُخيف (إعلال بالقلب).</p><p>* أضاف ← يُضْيف ← يُضيْف (إعلال بالنقل).</p><p>* أمات ← (أصلها) ← يموت (واو) ← يُمْوِت (يُفْعل)<br>↩ 1- يُموْت (إعلال بالنقل)<br>↩ 2- يُمِيت (تأثراً بالكسرة تقلب ياء) (إعلال بالقلب).</p>",
                        "<h4>تكليف على الإعلال و الإبدال</h4><p>*مطلوب تحليل الكلمات في ورقة خارجية ويتم تسليمها المحاضرة القادمة.</p><ul><li>الحل يكون على وزن مثل (افتعل) و (يفعل).</li><li>كلمات الإبدال: وعد / وصل / وعظ / وسم / وسخ / وضح / وقى / يئس / زجر / درأ / زها / زحم / طرد / طوع / صفا / صرع.</li><li>كلمات الإعلال: عاد / قام / صام / جاد / ساد.</li></ul>"
                    ]
                },
                {
                    title: "المحاضرة الرابعة :help:",
                    full_date: "السبت 22/10/2022 08:00 ص"
                },
                {
                    title: "المحاضرة الثالثة :help:",
                    full_date: "السبت 15/10/2022 08:00 ص"
                },
                {
                    title: "المحاضرة الثانية :help:",
                    full_date: "السبت 08/10/2022 08:00 ص"
                },
                {
                    title: "المحاضرة الأولى :check:",
                    full_date: "السبت 01/10/2022 08:00 ص",
                    content: [
                        "<ul><li><h4>الواجب</h4></li><li><h4>الممتنع</h4></li><li><h4>الإمكان</h4></li></ul>"
                    ]
                }
            ],
            last_update: {
                time: "10:30 م",
                date: "14/02/2023"
            }
        },
        modern_literature_poetry: {
            name: "الأدب الحديث ونصوصه (شعر) شعر التطورات الجديدة",
            professors: [
                "أ.د عبدالله عبدالحليم"
            ],
            events: [
                {
                    title: "المحاضرة الثانية :cross:",
                    full_date: "السبت 11/02/2023 02:00 م"
                },
                {
                    title: "المحاضرة الأولى :cross:",
                    full_date: "السبت 11/02/2023 11:00 ص"
                }
            ],
            last_update: {
                time: "10:30 م",
                date: "14/02/2023"
            }
        },
        modern_literature_prose: {
            name: "الأدب الحديث ونصوصه (نثر)",
            professors: [
                "أ.د عزت جاد",
                "أ.د سيد علي"
            ]
        },
        comparative_literature: {
            name: "الأدب المقارن (عربي - شرقي)",
            professors: [
                "أ.د رشا صالح"
            ]
        },
        popular_literature: {
            name: "الأدب الشعبي",
            professors: [
                "أ.د صلاح السروي"
            ]
        },
        research_methods: {
            name: "مناهج البحث الأدبي",
            professors: [
                "أ.م.د يسري عبدالله",
                "أ.م.د فاطمة قنديل"
            ],
            events: [
                {
                    title: "المحاضرة الأولى :cross:",
                    full_date: "السبت 11/02/2023 04:00 م"
                }
            ],
            last_update: {
                time: "10:30 م",
                date: "14/02/2023"
            }
        },
        criticism: {
            name: "النقد الأدبي الحديث (المناهج المعاصرة)",
            professors: [
                "أ.د جميل عبدالمجيد"
            ]
        }
    }
};

const index_page = document.querySelector("#index");
const study_schedule = document.querySelector("#study_schedule");
const subjects_div = document.querySelector("#subjects");

const subject_page = document.querySelector("#subject");
const subject_content = document.querySelector("#subject_content");

const switchPage = (page) => {
    let html = [];
    if (index_page && study_schedule && subjects_div && subject_page && subject_content) {
        if (page in data.subjects) {
            // Show Subject data
            index_page.className = "hidden";
            subject_page.className = "";
            let subject = data["subjects"][page];
            document.title = subject.name + " - كلية الآداب قسم اللغة العربية جامعة حلوان 2022/2023";
            let last_update = subject.last_update? `<span>آخر تحديث: ${subject.last_update.date} ${subject.last_update.time} <img id="refresh" alt="أيقونة التحديث" src="img/refresh.png"></span>`: "";
            let professors = "";
            if (subject.professors && subject.professors.length) {
                for (let professor of subject.professors) {
                    professors += `<p>${professor}</p>`;
                }
            }
            html.push(`<h1>مادة ${subject.name}</h1>${professors}${last_update}`);

            if (subject.documents && subject.documents.length) {
                html.push('<div class="subject_section"><h2>المستندات الإلكترونية</h2><div id="docs">');
                for (let document of subject.documents) {
                    html.push(`<a target="_blank" href="${document.path}"><img src="img/${document.type}.png" alt="أيقونة المستند الإلكتروني"><p><strong>${document.title}</strong></p></a>`);
                }
                html.push("</div></div>");
            }

            html.push('<div class="subject_section"><h2>الملاحظات</h2>');
            if (subject.notes && subject.notes.length) {
                html.push('<div class="notes">');
                let count = 1;
                for (let note of subject.notes) {
                    html.push(`<div><h3>${count}#</h3><p>${note}</p></div>`);
                    count++;
                }
                html.push("</div>");
            } else {
                html.push("<p>لا توجد ملاحظات.</p>");
            }
            html.push("</div>");

            html.push('<div class="subject_section"><h2>الأحداث</h2>');
            if (subject.events && subject.events.length) {
                html.push('<ul class="tree">');
                for (let event of subject.events) {
                    let title = event.title;
                    title = title && title.replace(/:check:/g, '<img src="img/check.png" alt="علامة صحيح">');
                    title = title && title.replace(/:help:/g, '<img src="img/help.png" alt="علامة غير معروف">');
                    title = title && title.replace(/:cross:/g, '<img src="img/cross.png" alt="علامة خطأ">');

                    let content = "";
                    if (event.content && event.content.length) {
                        content += '<ul>';
                        for (let sub_leaf of event.content) {
                            sub_leaf = sub_leaf.replace(/\*/g, '<span class="blue">*</span>');
                            sub_leaf = sub_leaf.replace(/←/g, '<span class="blue">←</span>');
                            sub_leaf = sub_leaf.replace(/↩/g, '<span class="blue">↩</span>');
                            content += `<li class="branch"><div class="leaf">${sub_leaf}</div></li>`;
                        }
                        content += "</ul>";
                    }
                    html.push(`<li class="branch"><div class="leaf"><h3>${title}</h3><span class="event_date">${event.full_date}</span></div>${content}</li>`);
                }
                html.push("</ul>");
            } else {
                html.push("<p>لا توجد أحداث لعرضها!</p>");
            }
            html.push("</div>");

            subject_content.innerHTML = html.join("");
        } else {
            // Show Index page
            index_page.className = "";
            subject_page.className = "hidden";
            document.title = "صفحة الطالب الجامعي - كلية الآداب قسم اللغة العربية جامعة حلوان 2022/2023";
            for ( subject_name in data.subjects ) {
                let subject = data["subjects"][subject_name];
                let professors = "";
                if (subject.professors && subject.professors.length) {
                    professors += "<div>";
                    for (let professor of subject.professors) {
                        professors += `<p>${professor}</p>`;
                    }
                    professors += "</div>";
                }
                let last_update = subject.last_update? `<div class="last_update"><div><i><img src="img/refresh.png" alt="أيقونة التحديث">${subject.last_update.time}</i><i>${subject.last_update.date}</i></div></div>`: "";
                html.push(`<a href="index.html?subject=${subject_name}"><div class="subject"><div><img src="img/books.png" alt="أيقونة كُتب"><h2>${subject.name}</h2></div>${professors}${last_update}</div></a>`);
            }
            study_schedule.innerHTML = `<h2>الجدول الدراسي</h2><div id="study_schedule_container"><table><thead><tr><th></th><th colspan="2">08 - 10</th><th colspan="2">10 - 12</th><th colspan="2">12 - 02</th><th colspan="2">02 - 04</th><th colspan="2">04 - 06</th></tr></thead><tbody><tr><td><h3>السبت</h3></td><td colspan="4"><div><h4>${data["subjects"]["grammer"].name}</h4><p>${data["subjects"]["grammer"].professors[0]}</p><strong>م17ج</strong></div></td><td colspan="4"><div><h4>${data["subjects"]["modern_literature_poetry"].name}</h4><p>${data["subjects"]["modern_literature_poetry"].professors[0]}</p><strong>م17ج</strong></div></td><td colspan="2"><div><h4>${data["subjects"]["research_methods"].name}</h4><p>${data["subjects"]["research_methods"].professors[0]}</p><strong>م17ج</strong></div></td></tr><tr><td><h3>الأربعاء</h3></td><td colspan="2"><div><h4>${data["subjects"]["comparative_literature"].name}</h4><p>${data["subjects"]["comparative_literature"].professors[0]}</p><strong>م18و</strong></div></td><td colspan="2"><div><h4>${data["subjects"]["modern_literature_prose"].name}</h4><p>${data["subjects"]["modern_literature_prose"].professors[0]}</p><strong>م18و</strong></div></td><td colspan="2"><div><h4>${data["subjects"]["comparative_literature"].name}</h4><p>${data["subjects"]["comparative_literature"].professors[0]}</p><strong>م18و</strong></div></td><td colspan="2"><div><h4>${data["subjects"]["popular_literature"].name}</h4><p>${data["subjects"]["popular_literature"].professors[0]}</p><strong>م18و</strong></div></td><td colspan="2"><div><h4>${data["subjects"]["modern_literature_prose"].name}</h4><p>${data["subjects"]["modern_literature_prose"].professors[1]}</p><strong>م18و</strong></div></td></tr><tr><td><h3>الخميس</h3></td><td colspan="2"></td><td colspan="4"><div><h4>${data["subjects"]["criticism"].name}</h4><p>${data["subjects"]["criticism"].professors[0]}</p><strong>م18و</strong></div></td><td colspan="2"><div><h4>${data["subjects"]["popular_literature"].name}</h4><p>${data["subjects"]["popular_literature"].professors[0]}</p><strong>م18و</strong></div></td><td colspan="2"><div><h4>${data["subjects"]["research_methods"].name}</h4><p>${data["subjects"]["research_methods"].professors[1]}</p><strong>م18و</strong></div></td></tr></tbody></table></div><span>آخر تحديث: 15/02/2023 02:30 ص <img id="refresh" alt="أيقونة التحديث" src="img/refresh.png"></span>`;
            subjects_div.innerHTML = html.length? html.join(""): "<p>لا توجد معلومات.</p>";
        }
    }
};

const detectChange = () => {
    let page = "index";
    if (window.location.search) {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has("subject")) page = searchParams.get("subject");
    }
    switchPage(page);
};
detectChange();