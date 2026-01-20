const translations = {
    ar: {
        "nav-profile": "البروفايل", "nav-passport": "الجواز", "nav-arsenal": "الترسانة",
        "hero-badge": "معتمد مخبرياً", "hero-title": "هندسة المستقبل مع <span class='highlight'>COREVIAZONE</span>",
        "hero-description": "هدفنا هو التحول الكامل نحو الجودة والشفافية التامة، للمرة الأولى على الإطلاق. ملفات كل جهاز لدينا مُتتبع ويخضع لأعمق الفحوصات في كل مكون، من أدق أجزائه. للمستهلكين الذين تبحث عن الشفافية الكاملة والجودة القصوى.",
        "read-more": "اقرأ المزيد",
        "digital-passport-title": "نظام الجواز الرقمي", "device-id-label": "معرف الجهاز", "search-btn": "بحث",
        "inspection-results": "نتائج الفحص الشامل", "certified-pass": "اجتياز معتمد",
        "thermal-info": "صورة حرارية توضح الأداء الداخلي تحت الضغط.",
        "add-new-device-title": "إضافة جهاز جديد", "order-whatsapp": "اطلب الآن (واتساب)", "save-publish": "حفظ ونشر",
        "arsenal-title": "ترسانتنا", "rights": "© 2026 Coreviazone - جميع الحقوق محفوظة."
    },
    en: {
        "nav-profile": "Profile", "nav-passport": "Passport", "nav-arsenal": "Arsenal",
        "hero-badge": "Laboratory Certified", "hero-title": "Engineering the Future with <span class='highlight'>COREVIAZONE</span>",
        "hero-description": "Our goal is complete transparency and quality. Every device we provide is tracked and undergoes the deepest component-level inspections, for consumers seeking full transparency and ultimate quality.",
        "read-more": "Read More",
        "digital-passport-title": "Digital Passport System", "device-id-label": "Device ID", "search-btn": "Search",
        "inspection-results": "Comprehensive Inspection Results", "certified-pass": "Certified Pass",
        "thermal-info": "Thermal image showing internal performance under load.",
        "add-new-device-title": "Add New Device", "order-whatsapp": "Order Now (WhatsApp)", "save-publish": "Save & Publish",
        "arsenal-title": "Our Arsenal", "rights": "© 2026 Coreviazone - All Rights Reserved."
    }
};

let currentLang = 'ar';
let products = JSON.parse(localStorage.getItem('cz_products_db')) || [
    { 
        id: "CZ-7701", name: "Dell Precision 7560", price: "48,500 EGP", 
        cpu: "i9-11th | 32GB RAM", temp: "71°C", battery: "94%", hard: "100%", 
        thermalImg: "https://i.ibb.co/XF3vj9Y/thermal.webp", img: "https://i.ibb.co/3kXJ8H9/laptop-mockup.webp" 
    },
    { 
        id: "CZ-5502", name
