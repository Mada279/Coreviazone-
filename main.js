const translations = {
    ar: {
        "nav-profile": "البروفايل", "nav-passport": "الجواز", "nav-arsenal": "الترسانة",
        "profile-badge": "مختبر الهندسة الدقيقة", "profile-title": "مؤسسة Coreviazone الهندسية",
        "profile-short": "المختبر الهندسي المعتمد والمتخصص في توريد وفحص أجهزة الـ Workstation وفق معايير CZ العالمية.",
        "p-vision-title": "رؤيتنا الهندسية",
        "p-vision-text": "نحن لا نبيع مجرد أجهزة، بل نقدم حلولاً تقنية موثوقة لضمان استقرار العتاد تحت أقصى ظروف العمل.",
        "p-protocol-title": "بروتوكول الفحص",
        "li-1": "• فحص الدوائر الكهربائية تحت المجهر.",
        "li-2": "• اختبار الإجهاد الحراري 24 ساعة.",
        "li-3": "• التوثيق بالكاميرات الحرارية.",
        "li-4": "• شهادة مطابقة المكونات الأصلية.",
        "read-more": "اقرأ المزيد", "read-less": "إغلاق التفاصيل",
        "passport-title": "نظام الجواز الرقمي", "btn-buy": "اطلب الآن (واتساب)",
        "admin-title": "إضافة جهاز للترسانة", "admin-save": "نشر الجهاز", "rights": "© 2026 جميع الحقوق محفوظة لـ كورفيازون."
    },
    en: {
        "nav-profile": "Profile", "nav-passport": "Passport", "nav-arsenal": "Arsenal",
        "profile-badge": "Precision Engineering Lab", "profile-title": "Coreviazone Engineering",
        "profile-short": "Certified engineering lab specializing in Workstation inspection and supply per CZ global standards.",
        "p-vision-title": "Our Vision",
        "p-vision-text": "We don't just sell devices; we provide reliable tech solutions to ensure hardware stability under stress.",
        "p-protocol-title": "Inspection Protocol",
        "li-1": "• Microscopic PCB circuit inspection.",
        "li-2": "• 24-hour thermal stress testing.",
        "li-3": "• Professional thermal imaging.",
        "li-4": "• 100% Original component certification.",
        "read-more": "Read More", "read-less": "Show Less",
        "passport-title": "Digital Passport System", "btn-buy": "Order via WhatsApp",
        "admin-title": "Add New Device", "admin-save": "Publish Device", "rights": "© 2026 Coreviazone Engineering. All Rights Reserved."
    }
};

let currentLang = 'ar';
let products = JSON.parse(localStorage.getItem('cz_db_final')) || [
    { id: "CZ-101", name: "Dell Precision 7560", price: "48,500 EGP", cpu: "i9-11th Gen", temp: "72°C", battery: "94%", hard: "Healthy", thermalImg: "", img: "https://via.placeholder.com/300" }
];

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    document.getElementById('themeBtn').innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.getElementById('htmlTag').dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langBtnText').innerText = currentLang === 'ar' ? 'EN' : 'AR';
    updateTexts();
    displayProducts();
}

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

function displayProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.img}" onerror="this.src='https://via.placeholder.com/300'">
            <h3>${p.name}</h3>
            <div style="font-size:1.4rem; font-weight:900; color:var(--cyan); margin:10px 0;">${p.price}</div>
            <button class="save-btn" onclick="window.location.href='https://wa.me/971568683872?text=Order:${p.id}'">
                ${translations[currentLang]['btn-buy']}
            </button>
        </div>
    `).join('');
}

function toggleProfile() {
    const more = document.getElementById('profileMore');
    const btn = document.getElementById('profileBtn');
    if (more.style.display === "none") {
        more.style.display = "block";
        btn.innerText = translations[currentLang]['read-less'];
    } else {
        more.style.display = "none";
        btn.innerText = translations[currentLang]['read-more'];
    }
}

function showAdmin() { if(prompt("Pass:") === "123") document.getElementById('adminPanel').style.display = 'flex'; }
function hideAdmin() { document.getElementById('adminPanel').style.display = 'none'; }

function addNewProduct() {
    const newP = {
        id: document.getElementById('pId').value.toUpperCase(),
        name: document.getElementById('pName').value,
        price: document.getElementById('pPrice').value,
        cpu: document.getElementById('pCpu').value,
        temp: document.getElementById('pTemp').value,
        battery: document.getElementById('pBattery').value,
        hard: document.getElementById('pHard').value,
        thermalImg: document.getElementById('pThermalImg').value,
        img: document.getElementById('pImg').value
    };
    products.push(newP);
    localStorage.setItem('cz_db_final', JSON.stringify(products));
    displayProducts(); hideAdmin();
}

function checkPassport() {
    const code = document.getElementById('passportInput').value.trim().toUpperCase();
    const found = products.find(p => p.id === code);
    const res = document.getElementById('passportResult');
    if(found) {
        res.style.display = 'block';
        document.getElementById('resultHeader').innerHTML = `<h3 style="color:var(--cyan)">${found.name}</h3>`;
        document.getElementById('techSpecs').innerHTML = `<p>Test: PASSED ✅</p><p>Temp: ${found.temp} | Battery: ${found.battery}</p>`;
        document.getElementById('thermalImgContainer').innerHTML = found.thermalImg ? `<img src="${found.thermalImg}" style="width:100%; border-radius:10px;">` : "";
        document.getElementById('qrcode').innerHTML = "";
        new QRCode(document.getElementById('qrcode'), { text: "CZ-" + found.id, width: 100, height: 100 });
    } else { alert("Not Found"); }
}

window.onload = () => { updateTexts(); displayProducts(); };
