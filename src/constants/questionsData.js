export const questions = [
    {
        id: 1,
        img: './assets/images/questions/q1.jpg',
        questionTitle: 'هنرجوی گرامی نام خطوط مشخص شده در این تصویر چیست؟',
        questionOptions: [
            { answer: 'خطوط زیگزاگ', isCorrect: false },
            { answer: 'خطوط هاشور', isCorrect: true },
            { answer: 'خطوط شطرنجی ', isCorrect: false },
            { answer: 'هیچ کدام', isCorrect: false },
        ],
        questionDesc: `خطوط هاشور: خطوط هاشور نشان دهنده وجود موانع در راهها می باشند و باید به نحوی کشیده شوند که ترافیک را از کنار مانع عبور دهند`,
        questionSource: 'صفحه 23 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 2,
        img: './assets/images/questions/q2.jpg',
        questionTitle:
            'در بزرگراه اتومبیل شما دچار نقص فنی میشود برای هشدار به وسائل نقلیه دیگر تابلوی احتیاط را در چه فاصله ای از اتومبیل خود قرار می دهید؟ ',
        questionOptions: [
            { answer: '100 متری', isCorrect: false },
            { answer: '200 متری', isCorrect: false },
            { answer: '150 متری', isCorrect: true },
            { answer: '70 متری', isCorrect: false },
        ],
        questionDesc: `
        اگر در جاده هستیم باید مثلث خطر را در فاصله 70 متری بگذاریم و اگر در بزرگراه هستیم باید مثلث خطر را در فاصله 150 متری بگذاریم
        `,
        questionSource: 'از سری سوالات پرتکرار آزمون آیین نامه اصلی 1401',
    },
    {
        id: 3,
        img: './assets/images/questions/q3.jpg',
        questionTitle: 'در چند متر مانده به پیچ ها سبقت ممنوع است؟',
        questionOptions: [
            { answer: '100 متری', isCorrect: false },
            { answer: '50 متری', isCorrect: true },
            { answer: '150 متری', isCorrect: false },
            { answer: '60 متری', isCorrect: false },
        ],
        questionDesc: `
        از 50 متر مانده به پیچ ها تا 50 متر پس از آن یا در تقاطع راهها یا در تقاطع راه آهن، مگر آنکه به وسیله علایم، سبقت مجاز شناخته شده باشد، سبقت گرفتن ممنوع است
        `,
        questionSource: 'صفحه 50 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 4,
        img: './assets/images/questions/q4.jpg',
        questionTitle:
            'در تقاطع هم عرض اگر دو وسیله نقلیه ای که روبروی یکدیگر در حرکتند بخواهند وارد خیابان مجاور شوند حق تقدم با کدام است',
        questionOptions: [
            { answer: 'وسیله ای که به چپ گردش میکند.', isCorrect: false },
            { answer: 'وسیله ای که به راست گردش میکند.', isCorrect: true },
            {
                answer: 'منتظر میمانند تا پلیس راهنمایی بیاید.',
                isCorrect: false,
            },
            { answer: ' هیچکدام.', isCorrect: false },
        ],
        questionDesc: `
        در تقاطع هم عرض اگر دو وسیله نقلیه ای که روبروی یکدیگر در حرکتند بخواهند با هم وارد خیابان مجاور واحدی شوند، حق تقدم عبور با وسیله ای است که به سمت راست گردش می کند
        `,
        questionSource: 'صفحه 105 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 5,
        img: './assets/images/questions/q5.jpg',
        questionTitle: 'هنرجوی گرامی نوع پارک تصویر بالا را مشخص کنید',
        questionOptions: [
            { answer: 'پارک عمودی', isCorrect: false },
            { answer: 'پارک مورب', isCorrect: false },
            { answer: 'خطوط پارک افقی', isCorrect: true },
            { answer: 'پارک مناسب', isCorrect: false },
        ],
        questionDesc: `
        خطوط پارک: سه نوع خطوط پارک برای توقف وسایل نقلیه در جداول کنار خیابان وجود دارد که عبارتند از افقی، مورب و عمودی
        `,
        questionSource: 'صفحه 24 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 6,
        img: './assets/images/questions/q6.jpg',
        questionTitle: 'در میدان ها حق تقدم عبور با کدام وسیله است؟ ',
        questionOptions: [
            { answer: 'وسیله ای اول وارد می شود.', isCorrect: false },
            {
                answer: 'وسیله ای که زودتر وارد میدان شده است.',
                isCorrect: false,
            },
            {
                answer: 'وسیله ای که در درون میدان در حال حرکت است.',
                isCorrect: true,
            },
            { answer: 'هیچکدام', isCorrect: false },
        ],
        questionDesc: `
        هنگام ورود به میدان ها حق تقدم عبور با وسایل نقلیه ای است که در درون میدان در حال حرکت هستند
        `,
        questionSource: 'برگرفته از صفحه 106 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 7,
        img: './assets/images/questions/q7.jpg',
        questionTitle:
            'در یک منطقه مسکونی و شهری در حال حرکت هستید، به یک سرعت گیر نزدیک میشوید چه کاری می کنید؟',
        questionOptions: [
            {
                answer: 'با همان سرعت به راه خود ادامه می دهید.',
                isCorrect: false,
            },
            {
                answer: 'با احتیاط سرعت را کاهش می دهید.',
                isCorrect: true,
            },
            {
                answer: 'از قسمت چپ جاده عبور می کنید.',
                isCorrect: false,
            },
            {
                answer: 'فرصت ندهید عابرین از خیابان عبور کنند.',
                isCorrect: false,
            },
        ],
        questionDesc: `
        در صورت نزدیک شدن به سرعت گیر میباست سرعت را کاهش داد
        `,
        questionSource: 'برگرفته از صفحه 20 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 8,
        img: './assets/images/questions/q8.jpg',
        questionTitle:
            'وقتی در خط عبوری که حرکت می کنید اتومبیل ها توقف کرده باشند و راه مسدود شده باشد چه کار باید کرد؟',
        questionOptions: [
            {
                answer: 'شتاب بگیرید که زودتر از آنها عبور کنید.',
                isCorrect: false,
            },
            {
                answer: 'به ترافیک جهت مقابل اجازه عبور میدهید.',
                isCorrect: true,
            },
            {
                answer: '.به ترافیک مقابل اشاره کنید تا عبور کنند.',
                isCorrect: false,
            },
            {
                answer: '.به رفتن ادامه میدهید زیرا حق تقدم با شماست.',
                isCorrect: false,
            },
        ],
        questionDesc: `
        درصورت رسیدن به ترافیک باید به ترافیک جهت مقابل اجازه عبور داد
        `,
        questionSource: 'برگرفته از صفحه 48 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 9,
        img: './assets/images/questions/q9.jpg',
        questionTitle:
            'چه موقع میتوانید به صورت دنده عقب از یک خیابان فرعی به خیابان اصلی وارد شوید؟',
        questionOptions: [
            {
                answer: 'در همه مواقع',
                isCorrect: false,
            },
            {
                answer: 'تنها اگر هردو خیابان خلوت باشد.',
                isCorrect: false,
            },
            {
                answer: 'تنها اگر خیابان اصلی دارای ترافیک نباشد.',
                isCorrect: false,
            },
            {
                answer: 'هیچ موقع',
                isCorrect: true,
            },
        ],
        questionDesc: `
        هیچ موقع نمیشود به صورت دنده عقب وارد خیابان اصلی شد
        `,
        questionSource: 'برگرفته از صفحه 74 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 10,
        img: './assets/images/questions/q10.jpg',
        questionTitle:
            'در تقاطع بالا حق تقدم را مشخص کنید. ( آمبولانس در حال ماموریت است) ',
        questionOptions: [
            {
                answer: 'سبز - آمبولانس - زرد',
                isCorrect: false,
            },
            {
                answer: 'زرد - آمبولانس - سبز',
                isCorrect: false,
            },
            {
                answer: 'آمبولانس- سبز - زرد',
                isCorrect: true,
            },
            {
                answer: 'آمبولانس - زرد - سبز',
                isCorrect: false,
            },
        ],
        questionDesc: `
        حق تقدم ابتدا با وسیله نقلیه ای است که در خیابان اصلی قرار دارد ( خیابانی که دارای تابلوی ایست یا حق تقدم است خیابان فرعی می باشد) پس در این تصویر ابتدا آمبولانس (هرگاه آمبولانس در حال ماموریت باشد نسبت به خودروهایی دیگر حق تقدم عبور دارد) بعد خودرو سبز و در آخر خودرو زرد
        `,
        questionSource: 'صفحه 28 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 11,
        img: './assets/images/questions/q11.jpg',
        questionTitle: 'نام نقاط قرمز رنگ مشخص شده در تصویر بالا چیست؟',
        questionOptions: [
            {
                answer: 'نقاط خطرناک',
                isCorrect: false,
            },
            {
                answer: 'محدوده نقاط کور در خودروهای سنگین',
                isCorrect: false,
            },
            {
                answer: 'نقطه کور ماشین سنگین',
                isCorrect: false,
            },
            {
                answer: 'همه موارد',
                isCorrect: true,
            },
        ],
        questionDesc: `
        محدوده نقاط کور در خودروهای سنگین. (محدوده های قرمز رنگ)
        `,
        questionSource: 'صفحه ۹۲ کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 12,
        img: './assets/images/questions/q12.jpg',
        questionTitle: 'در تقاطع بالا حق تقدم عبور را مشخص کنید.',
        questionOptions: [
            {
                answer: 'سواری - کامیون - دوچرخه - موتور سیکلت',
                isCorrect: false,
            },
            {
                answer: 'موتور سیکلت - دوچرخه - کامیون - سواری',
                isCorrect: false,
            },
            {
                answer: 'کامیون - دوچرخه - سواری - موتور سیکلت',
                isCorrect: false,
            },
            {
                answer: 'دوچرخه - موتور سیکلت - کامیون - سواری',
                isCorrect: true,
            },
        ],
        questionDesc: `
        حق تقدم ابتدا با وسیله نقلیه ای است که در خیابان اصلی قرار دارد ( خیابانی که دارای تابلوی ایست یا حق تقدم است خیابان فرعی می باشد) پس در این تصویر ابتدا دوچرخه بدلیل اینکه در خیابان اصلی قرار دارد و به صورت مستقیم حرکت می کند، بعد موتور سیکلت بعد کامیون و در آخر سواری
        `,
        questionSource: 'صفحه 59 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 13,
        img: './assets/images/questions/q13.jpg',
        questionTitle: 'در چند متری ورودی تونل ها سبقت گرفتن ممنوع است؟',
        questionOptions: [
            {
                answer: '150 متری',
                isCorrect: false,
            },
            {
                answer: '200 متری',
                isCorrect: false,
            },
            {
                answer: '120 متری',
                isCorrect: false,
            },
            {
                answer: '100 متری',
                isCorrect: true,
            },
        ],
        questionDesc: `
        از 100 متر مانده به ورودی تونل ها و پل ها تا انتهای آنها، مگر آنکه به وسیله علایم، سبقت مجاز شناخسته شده باشد، سبقت گرفتن ممنوع است.
        `,
        questionSource: 'صفحه 50 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 14,
        img: './assets/images/questions/q14.jpg',
        questionTitle:
            'حداکثر سرعت در جاده های اصلی برون شهری چند کیلومتر است؟',
        questionOptions: [
            {
                answer: 'روزها 95 کیلومتر ، شب 85 کیلومتر',
                isCorrect: true,
            },
            {
                answer: 'روزها 110 کیلومتر ، شب 90 کیلومتر',
                isCorrect: false,
            },
            {
                answer: 'روزها 90 کیلومتر ، شب 85 کیلومتر',
                isCorrect: false,
            },
            {
                answer: 'در روزها 80 کیلومتر ، شب 90 کیلومتر',
                isCorrect: false,
            },
        ],
        questionDesc: `
    حداکثر میزان سرعت مجاز در جاده های اصلی برای انواع وسایل نقلیه، روزها 95 و شب ها 85 کیلومتر در ساعت می باشد
        `,
        questionSource: 'صفحه 48 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 15,
        img: './assets/images/questions/q15.jpg',
        questionTitle:
            'آیا رانندگان وسایل نقلیه امدادی در هنگام ماموریت مجاز به عبور از محل ممنوع می باشند؟',
        questionOptions: [
            {
                answer: 'به علت خطرات موجود نمی توانند عبور ممنوع بروند.',
                isCorrect: true,
            },
            {
                answer: 'بستگی به شرایط دارد.',
                isCorrect: false,
            },
            {
                answer: 'در هر شرایطی مجاز هستند.',
                isCorrect: false,
            },
            {
                answer: 'در صورتیکه موجب تصادف نشوند.',
                isCorrect: false,
            },
        ],
        questionDesc: `
        رانندگان وسایل نقلیه امدادی مجاز یه عبور از محل ممنوع نیستند
        `,
        questionSource: 'برگرفته از صفحه 17 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 16,
        img: './assets/images/questions/q16.jpg',
        questionTitle:
            'در چه فاصله ای از اطراف چراغهای راهنمایی و رانندگی توقف ممنوع می باشد؟',
        questionOptions: [
            {
                answer: '15 متری',
                isCorrect: true,
            },
            {
                answer: '25 متری',
                isCorrect: false,
            },
            {
                answer: '25 متری',
                isCorrect: false,
            },
            {
                answer: '5 متری',
                isCorrect: false,
            },
        ],
        questionDesc: `
        در فاصله ۱۵ متری اطراف چراغ های راهنمایی و رانندگی و یا محل هایی که توقف وسایل نقلیه مانع دید علایم راهنمایی و رانندگی بشود، توقف ممنوع است
        `,
        questionSource: 'صفحه ۵۸ کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 17,
        img: './assets/images/questions/q17.jpg',
        questionTitle:
            'چرا شکسته و کثیف بودن شیشه های خودرو می تواند خطرناک باشد؟',
        questionOptions: [
            {
                answer: 'چون باعث کاهش انعکاس نور می شود.',
                isCorrect: false,
            },
            {
                answer: 'چون باعث افزایش انعکاس نور می شود.',
                isCorrect: false,
            },
            {
                answer: 'چون باعث کاهش دید می شود.',
                isCorrect: true,
            },
            {
                answer: 'خطری ندارد.',
                isCorrect: false,
            },
        ],
        questionDesc: `
        شکسته و کثیف بودن شیشه های خودرو باعث کاهش دید میشود
        `,
        questionSource: 'برگرفته از صفحه 41 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 18,
        img: './assets/images/questions/q18.jpg',
        questionTitle: '... زدن از روی خط پر و یا یک خط ممتد ',
        questionOptions: [
            {
                answer: 'ممنوع است',
                isCorrect: true,
            },
            {
                answer: 'از 150 متری ورودی تونل ها',
                isCorrect: false,
            },
            {
                answer: 'از 100 متری مانده به پیچ ها',
                isCorrect: false,
            },
            {
                answer: 'از 100 متری پس از پیچ ها',
                isCorrect: false,
            },
        ],
        questionDesc: `
        دور زدن از روی خط پر و یا یک خط ممتد همواره ممنوع است
        `,
        questionSource: 'برگرفته از صفحه 18 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 19,
        img: './assets/images/questions/q19.jpg',
        questionTitle:
            'در هنگام ایمن کردن صحنه تصادف انجام کدامیک از موارد زیر صحیح نمی باشد؟',
        questionOptions: [
            {
                answer: 'استفاده از تابلو اعلان خطر در فاصله مناسب از تصادف',
                isCorrect: false,
            },
            {
                answer: 'پارک کردن خودروی خود در فاصله مناسب از صحنه حادثه',
                isCorrect: false,
            },
            {
                answer: 'به خطر انداختن خود برای نجات دیگران',
                isCorrect: true,
            },
            {
                answer: 'استفاده از وسایل روشنایی برای اعلان خطر در شب',
                isCorrect: false,
            },
        ],
        questionDesc: `
        همواره باید از جان خود در صحنه تصادف مراقبت کنیم
        `,
        questionSource: 'برگرفته از صفحه 68 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 20,
        img: './assets/images/questions/q20.jpg',
        questionTitle: 'کدامیک از موارد زیر در خصوص رانندگی در شب صحیح است؟',
        questionOptions: [
            {
                answer: 'با افزایش سرعت در شبها می توان کاهش دید را جبران کرد.',
                isCorrect: false,
            },
            {
                answer: 'میزان تصادفات در شب کاهش می یابد.',
                isCorrect: false,
            },
            {
                answer: 'در شب زمان کمتری طول می کشد تا راننده موانع موجود را ببیند.',
                isCorrect: false,
            },
            {
                answer: 'محدوده دید راننده در شب کاهش می یابد.',
                isCorrect: true,
            },
        ],
        questionDesc: `
        هنگام رانندگی در شب محدوده دید راننده کاهش میابد
        `,
        questionSource: 'برگرفته از صفحه 42 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 21,
        img: './assets/images/questions/q21.jpg',
        questionTitle:
            'میزان سرعت مجاز و محدودیت سرعت در جاده ها و خیابانها به چه صورت مشخص می شود؟ ',
        questionOptions: [
            {
                answer: 'با توجه به مواردی که GPS خودرو نشان می دهد.',
                isCorrect: false,
            },
            {
                answer: 'با توجه به دستور پلیس در جاده ها مشخص می شود.',
                isCorrect: false,
            },
            {
                answer: 'سرعت مجاز بسته به نوع خودرو و مدل آن قابل تغییر است.',
                isCorrect: false,
            },
            {
                answer: 'با توجه به تابلوهای نصب شده و آیین نامه راهنمایی و رانندگی.',
                isCorrect: true,
            },
        ],
        questionDesc: `
        میزان سرعت مجاز در جاده ها با توجه به تابلوها و آیین نامه راهنمایی و رانندگی مشخص میشود
        `,
        questionSource: 'برگرفته از صفحه 82 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 22,
        img: './assets/images/questions/q22.jpg',
        questionTitle: 'استفاده از بوق در کدامیک از موارد زیر مجاز است؟',
        questionOptions: [
            {
                answer: 'اطلاع و آگاه سازی سایر کاربران راه و جلوگیری از بروز سانحه و خطر',
                isCorrect: true,
            },
            {
                answer: 'اطلاع و آگاه سازی برای ادای احترام به سایر کاربران راه',
                isCorrect: false,
            },
            {
                answer: 'برای کاهش شدت تصادفات',
                isCorrect: false,
            },
            {
                answer: 'برای کاهش شدت تصادفات و آگاهی سایر کاربران راه',
                isCorrect: false,
            },
        ],
        questionDesc: `
        برای آگاه سازی سایر رانندگان میتوان از بوق استفاده کرد
        `,
        questionSource: 'برگرفته از صفحه 65 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 23,
        img: './assets/images/questions/q23.jpg',
        questionTitle:
            'کدامیک از موارد زیرنشان دهنده بوجود آمدن حالت خستگی و خواب آلودگی در حین رانندگی است؟',
        questionOptions: [
            {
                answer: 'احساس سنگینی در پلکها - کنترل آگاهانه خودرو - عدم توانایی کنترل خودرو',
                isCorrect: false,
            },
            {
                answer: 'پلک زدن - عدم کنترل خودرو',
                isCorrect: false,
            },
            {
                answer: 'افزایش سرعت واکنش نسبت به شرایط - احساس سنگینی در پلکها',
                isCorrect: false,
            },
            {
                answer: 'احساس سنگینی پلکها - عدم کنترل آگاهانه سرعت خودرو - عدم تمرکز روی رانندگی',
                isCorrect: true,
            },
        ],
        questionDesc: `
        احساس سنگینی پلکها،عدم کنترل آگاهانه سرعت خودرو و عدم تمرکز روی رانندگی از نشانه های خواب آلودگی هستند
        `,
        questionSource: 'برگرفته از صفحه 38 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 24,
        img: './assets/images/questions/q24.jpg',
        questionTitle: 'هنرجوی گرامی شکل بالا چه موردی را هشدار می دهد؟',
        questionOptions: [
            {
                answer: 'در هنگام عبور از کنار گذر حق تقدم عبور با وسیله نقلیه است',
                isCorrect: false,
            },
            {
                answer: 'اگر شما قصد گردش از قسمت کنار گذر تقاطع را دارید باید مراقب حرکت عابرین پیاده که در حال گذر می باشند بوده و به آنها اجازه عبور دهید.',
                isCorrect: true,
            },
            {
                answer: 'اگر شما قصد گردش از قسمت کنار گذر تقاطع را دارید می توانید با احتیاط عبور کنید.',
                isCorrect: false,
            },
            {
                answer: 'هیچ کدام',
                isCorrect: false,
            },
        ],
        questionDesc: `
        درهنگام عبور از قسمت کنار گذر باید به عابرین پیاده اجازه عبور دهیم
        `,
        questionSource: 'صفحه 89 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 25,
        img: './assets/images/questions/q25.jpg',
        questionTitle: 'در چند متر مانده به تونل ها و پل ها سبقت ممنوع است؟',
        questionOptions: [
            {
                answer: '100 متری',
                isCorrect: true,
            },
            {
                answer: '50 متری',
                isCorrect: false,
            },
            {
                answer: '150متری',
                isCorrect: false,
            },
            {
                answer: '70 متری',
                isCorrect: false,
            },
        ],
        questionDesc: `
        از 100 متر مانده به ورودی تونل ها و پل ها تا انتهای آنها، مگر آنکه به وسیله علایم، سبقت مجاز شناخسته شده باشد، سبقت گرفتن ممنوع است
        `,
        questionSource: 'صفحه 50 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 26,
        img: './assets/images/questions/q26.jpg',
        questionTitle: 'مقدار ولتاژ باتری در خودروهای معمول سواری چند ولت است؟',
        questionOptions: [
            {
                answer: '6 ولت',
                isCorrect: false,
            },
            {
                answer: '12 ولت',
                isCorrect: true,
            },
            {
                answer: '12 آمپر',
                isCorrect: false,
            },
            {
                answer: '24 ولت',
                isCorrect: false,
            },
        ],
        questionDesc: `
        مقدار ولتاژ باتری در خودروهای معمول سواری 12 ولت است
        `,
        questionSource: 'صفحه 140 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 27,
        img: './assets/images/questions/q27.jpg',
        questionTitle:
            'چرا موتور سواران نسبت به رانندگان اتومبیل آسیب پذیر ترند؟',
        questionOptions: [
            {
                answer: 'با سرعت بیشتری پیچ ها را طی میکنند.',
                isCorrect: false,
            },
            {
                answer: 'تغییرات سطح راه بر روی آنها تاثیرات بیشتری دارد.',
                isCorrect: true,
            },
            {
                answer: 'نسبت به اتومبیل شتاب بیشتری میگیرند.',
                isCorrect: false,
            },
            {
                answer: 'سرعت آنها از اتومبیل ها سریعتر است.',
                isCorrect: false,
            },
        ],
        questionDesc: `
        تغییرات سطح راه بر روی موتور سواران تاثیرات بیشتری دارد
        `,
        questionSource: 'برگرفته از صفحه 34 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 28,
        img: './assets/images/questions/q28.jpg',
        questionTitle:
            'کدامیک از موارد زیر در خصوص نقاط کور در وسایل نقلیه صحیح نمی باشد؟',
        questionOptions: [
            {
                answer: 'موتورسیکلت ها دارای نقاط کور نمی باشند.',
                isCorrect: true,
            },
            {
                answer: 'با تنظیم دقیق آئینه ها می توان میزن نقاط کور را کاهش داد.',
                isCorrect: false,
            },
            {
                answer: 'حتی با تنظیم دقیق آئینه ها نمی توان نقاط کور را در خودروها حذف نمود.',
                isCorrect: false,
            },
            {
                answer: 'میزان وسعت نقاط کور در خودروهای سنگین بیشتر از خودروهای سبک است.',
                isCorrect: false,
            },
        ],
        questionDesc: `
        همه وسایل نقلیه دارای نقطه کور میباشند
        `,
        questionSource: 'برگرفته از صفحه 86 کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 29,
        img: './assets/images/questions/q29.jpg',
        questionTitle: 'کدام تابلو درباره عبور عابر پیاده هشدار می دهد؟',
        questionOptions: [
            {
                answer: 'تابلوی شماره یک',
                isCorrect: false,
            },
            {
                answer: 'تابلوی شماره سه',
                isCorrect: false,
            },
            {
                answer: 'تابلوی شماره چهار',
                isCorrect: false,
            },
            {
                answer: 'تابلوی شماره دو',
                isCorrect: true,
            },
        ],
        questionDesc: `
        تابلوی شماره دو درباره عبور عابر پیاده هشدار میدهد
        `,
        questionSource: 'برگرفته از صفحه ۱۰۶ کتاب آیین نامه راهنمایی و رانندگی',
    },
    {
        id: 30,
        img: './assets/images/questions/q30.jpg',
        questionTitle:
            'به عنوان یک کمک دهنده به یک مصدوم باید چه مواردی را اولویت قرار داد؟',
        questionOptions: [
            {
                answer: 'ارزیابی موقعیت و در خواست کمک',
                isCorrect: false,
            },
            {
                answer: 'امن کردن محل حادثه',
                isCorrect: false,
            },
            {
                answer: 'ارائه کمک های اولیه',
                isCorrect: false,
            },
            {
                answer: 'همه موارد',
                isCorrect: true,
            },
        ],
        questionDesc: `
        هنگام کمک رسانی به مصدوم باید ارائه کمک های اولیه،امن کردن محل حادثه و درخواست کمک را در اولویت قرار داد
        `,
        questionSource: 'صفحه 190 کتاب آیین نامه راهنمایی و رانندگی',
    },
];
