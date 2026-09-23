/* ═══════════════════════════════════════════
   TRANSLATIONS — Multi-Language Support
   Languages: EN, HI, AR, ES, ZH
   ═══════════════════════════════════════════ */

const TRANSLATIONS = {
  en: {
    /* Navbar */
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.quote": "GET A QUOTE",
    "nav.quote.freight": "GET A FREIGHT QUOTE",

    /* Hero */
    "hero.badge": "GLOBAL FREIGHT NETWORK",
    "hero.line1": "MOVE THE",
    "hero.line2": "WORLD.",
    "hero.line3": "WITHOUT",
    "hero.line4": "LIMITS.",
    "hero.subtext": "International air freight, ocean shipping and supply chain solutions connecting businesses across continents with precision and speed.",
    "hero.cta1": "REQUEST A QUOTE",
    "hero.cta2": "LEARN MORE",
    "hero.countries": "120+ COUNTRIES CONNECTED",
    "hero.watch": "WATCH INTRO",

    /* About */
    "about.label": "01 ─ Who We Are",
    "about.title1": "ABOUT",
    "about.title2": "AIRVOX",
    "about.desc": "A global logistics powerhouse connecting businesses across 120+ countries with precision freight solutions.",
    "about.p1": "Founded with a vision to simplify international trade, AIRVOX LOGISTICS has grown into one of the most trusted freight forwarding partners worldwide. Our integrated approach combines air, sea, and land transport with cutting-edge supply chain technology.",
    "about.p2": "Every shipment is tracked in real-time, every route optimized for speed and cost-efficiency. We don't just move cargo — we deliver certainty.",
    "about.feat1.title": "Real-Time Tracking",
    "about.feat1.desc": "Live GPS on every shipment",
    "about.feat2.title": "Global Network",
    "about.feat2.desc": "120+ countries served",
    "about.feat3.title": "Insured Cargo",
    "about.feat3.desc": "Full coverage protection",
    "about.feat4.title": "Competitive Rates",
    "about.feat4.desc": "Best value logistics",
    "about.slide1": "WAREHOUSE OPERATIONS",
    "about.slide2": "CONTAINER SHIPPING",
    "about.slide3": "AIR FREIGHT SOLUTIONS",

    /* Stats */
    "stat.countries": "Countries Served",
    "stat.shipments": "K+ Shipments / Year",
    "stat.ontime": "% On-Time Delivery",
    "stat.support": "/ 7 Live Support",

    /* Services Page */
    "svc.hero.breadcrumb.home": "HOME",
    "svc.hero.breadcrumb.services": "SERVICES",
    "svc.hero.badge": "✦  OUR SERVICES  ✦",
    "svc.hero.line1": "END-TO-END",
    "svc.hero.line2": "LOGISTICS SOLUTIONS",
    "svc.hero.subtext": "From air freight to ocean shipping, land transport to warehousing — every solution tailored for your business.",
    "svc.strip": "8 SPECIALIZED SERVICES · GLOBAL REACH · 120+ COUNTRIES",
    "svc.filter": "ALL SERVICES",

    /* Service Cards */
    "svc.air.title": "Air Freight",
    "svc.air.tag": "WORLDWIDE · EXPRESS DELIVERY",
    "svc.air.desc": "Priority air cargo solutions with guaranteed transit times across 180+ countries. From perishables to oversized freight.",
    "svc.air.f1": "→ Next-day & 48hr express options",
    "svc.air.f2": "→ Temperature-controlled cargo",
    "svc.air.f3": "→ Dangerous goods certified",

    "svc.ocean.title": "Ocean Freight",
    "svc.ocean.tag": "GLOBAL · FCL & LCL",
    "svc.ocean.desc": "Full container and less-than-container load services across all major trade lanes. Competitive rates, reliable scheduling.",
    "svc.ocean.f1": "→ FCL & LCL consolidation",
    "svc.ocean.f2": "→ Reefer container solutions",
    "svc.ocean.f3": "→ Port-to-port & door-to-door",

    "svc.land.title": "Land Transport",
    "svc.land.tag": "FTL · LTL · CROSS-BORDER",
    "svc.land.desc": "Full truckload and less-than-truckload services with real-time GPS tracking. Cross-border expertise across continents.",
    "svc.land.f1": "→ FTL & LTL nationwide coverage",
    "svc.land.f2": "→ Real-time GPS tracking",
    "svc.land.f3": "→ Cross-border documentation",

    "svc.wh.title": "Warehousing",
    "svc.wh.tag": "SMART STORAGE · FULFILLMENT",
    "svc.wh.desc": "State-of-the-art warehousing with WMS integration. Pick, pack and ship with full inventory visibility.",
    "svc.wh.f1": "→ Climate-controlled facilities",
    "svc.wh.f2": "→ WMS & barcode integration",
    "svc.wh.f3": "→ Order fulfillment & returns",

    "svc.sc.title": "Supply Chain",
    "svc.sc.tag": "END-TO-END · OPTIMIZATION",
    "svc.sc.desc": "Complete supply chain design and management. From procurement to last-mile delivery, we optimize every touchpoint.",
    "svc.sc.f1": "→ Supply chain consulting",
    "svc.sc.f2": "→ Vendor management & PO",
    "svc.sc.f3": "→ KPI dashboards & analytics",

    "svc.customs.title": "Customs Brokerage",
    "svc.customs.tag": "COMPLIANCE · CLEARANCE",
    "svc.customs.desc": "Licensed customs brokers in 120+ countries. We handle all documentation, duties, and regulatory compliance.",
    "svc.customs.f1": "→ HS code classification",
    "svc.customs.f2": "→ Duty & tax optimization",
    "svc.customs.f3": "→ Regulatory compliance audit",

    "svc.project.title": "Project Cargo",
    "svc.project.tag": "OVERSIZED · HEAVY LIFT",
    "svc.project.desc": "Specialized handling for oversized, overweight, and high-value cargo. Full project management from survey to delivery.",
    "svc.project.f1": "→ Route survey & planning",
    "svc.project.f2": "→ Heavy lift & breakbulk",
    "svc.project.f3": "→ Multi-modal coordination",

    "svc.ecom.title": "E-Commerce Logistics",
    "svc.ecom.tag": "D2C · CROSS-BORDER · FULFILLMENT",
    "svc.ecom.desc": "Integrated e-commerce fulfillment with multi-channel support. From marketplace to customer doorstep, globally.",
    "svc.ecom.f1": "→ Multi-platform integration",
    "svc.ecom.f2": "→ Returns management",
    "svc.ecom.f3": "→ Cross-border e-commerce",

    "svc.card.cta": "LEARN MORE",

    /* CTA Banner */
    "svc.cta.label": "Ready to Ship?",
    "svc.cta.title1": "GET A CUSTOM",
    "svc.cta.title2": "QUOTE",
    "svc.cta.desc": "Our logistics specialists will design the optimal solution for your cargo within 2 hours.",
    "svc.cta.btn1": "REQUEST A QUOTE",
    "svc.cta.btn2": "CALL US NOW",

    /* Contact Page */
    "contact.label": "Get In Touch",
    "contact.title1": "REQUEST A",
    "contact.title2": "QUOTE",
    "contact.desc": "Tell us about your shipment. Our freight specialists will respond within 2 hours.",
    "contact.name": "Full Name",
    "contact.company": "Company",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.origin": "Origin",
    "contact.destination": "Destination",
    "contact.service": "Service Type",
    "contact.details": "Shipment Details",
    "contact.submit": "SEND INQUIRY →",
    "contact.hq.title": "📍 Global Headquarters",
    "contact.hq.text": "AIRVOX Tower, 1200 Logistics Boulevard<br>Dubai World Central, UAE",
    "contact.ops.title": "📞 24/7 Operations Center",
    "contact.response.title": "🕐 Response Times",
    "contact.response.text": "Quote requests: <span class='highlight'>within 2 hours</span><br>Tracking support: <span class='highlight'>instant</span><br>Emergency shipments: <span class='highlight'>15 minutes</span>",
    "contact.regional.title": "🌐 Regional Offices",
    "contact.regional.text": "Shanghai · Frankfurt · London · New York<br>Singapore · São Paulo · Johannesburg",

    /* Footer */
    "footer.desc": "AIRVOX LOGISTICS is a global freight forwarding company specializing in air, sea, and land logistics solutions for businesses worldwide.",
    "footer.desc.alt": "Moving the world without limits. Your trusted partner for international freight forwarding and supply chain solutions since 2004.",
    "footer.quick": "Quick Links",
    "footer.services": "Services",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.careers": "Careers",
    "footer.news": "News",
    "footer.sustainability": "Sustainability",
    "footer.partners": "Partners",
    "footer.faq": "FAQ",
    "footer.docs": "Documentation",
    "footer.terms": "Terms & Conditions",
    "footer.getquote": "Get a Quote",
    "footer.copyright": "© 2026 AIRVOX LOGISTICS. All rights reserved.",

    /* Loader */
    "loader.tagline": "GLOBAL LOGISTICS SOLUTIONS",
    "loader.stage": "ROUTE INITIATED"
  },

  hi: {
    "nav.home": "होम",
    "nav.about": "हमारे बारे में",
    "nav.services": "सेवाएं",
    "nav.contact": "संपर्क",
    "nav.quote": "कोटेशन प्राप्त करें",
    "nav.quote.freight": "फ्रेट कोटेशन प्राप्त करें",

    "hero.badge": "वैश्विक फ्रेट नेटवर्क",
    "hero.line1": "दुनिया को",
    "hero.line2": "बदलो।",
    "hero.line3": "बिना",
    "hero.line4": "सीमाओं के।",
    "hero.subtext": "अंतर्राष्ट्रीय एयर फ्रेट, ओशन शिपिंग और सप्लाई चेन समाधान जो महाद्वीपों में व्यवसायों को सटीकता और गति से जोड़ते हैं।",
    "hero.cta1": "कोटेशन का अनुरोध करें",
    "hero.cta2": "और जानें",
    "hero.countries": "120+ देश जुड़े हुए",
    "hero.watch": "इंट्रो देखें",

    "about.label": "01 ─ हम कौन हैं",
    "about.title1": "AIRVOX के",
    "about.title2": "बारे में",
    "about.desc": "एक वैश्विक लॉजिस्टिक्स पावरहाउस जो 120+ देशों में व्यवसायों को सटीक फ्रेट समाधान प्रदान करता है।",
    "about.p1": "अंतर्राष्ट्रीय व्यापार को सरल बनाने के दृष्टिकोण से स्थापित, AIRVOX LOGISTICS दुनिया भर में सबसे विश्वसनीय फ्रेट फॉरवर्डिंग भागीदारों में से एक बन गया है।",
    "about.p2": "हर शिपमेंट की रियल-टाइम ट्रैकिंग होती है, हर मार्ग गति और लागत-दक्षता के लिए अनुकूलित होता है। हम सिर्फ कार्गो नहीं ले जाते — हम निश्चितता पहुंचाते हैं।",
    "about.feat1.title": "रियल-टाइम ट्रैकिंग",
    "about.feat1.desc": "हर शिपमेंट पर लाइव GPS",
    "about.feat2.title": "वैश्विक नेटवर्क",
    "about.feat2.desc": "120+ देश सेवा किए गए",
    "about.feat3.title": "बीमित कार्गो",
    "about.feat3.desc": "पूर्ण कवरेज सुरक्षा",
    "about.feat4.title": "प्रतिस्पर्धी दरें",
    "about.feat4.desc": "सर्वोत्तम मूल्य लॉजिस्टिक्स",
    "about.slide1": "वेयरहाउस संचालन",
    "about.slide2": "कंटेनर शिपिंग",
    "about.slide3": "एयर फ्रेट समाधान",

    "stat.countries": "सेवा किए गए देश",
    "stat.shipments": "K+ शिपमेंट / वर्ष",
    "stat.ontime": "% समय पर डिलीवरी",
    "stat.support": "/ 7 लाइव सपोर्ट",

    "svc.hero.breadcrumb.home": "होम",
    "svc.hero.breadcrumb.services": "सेवाएं",
    "svc.hero.badge": "✦  हमारी सेवाएं  ✦",
    "svc.hero.line1": "एंड-टू-एंड",
    "svc.hero.line2": "लॉजिस्टिक्स समाधान",
    "svc.hero.subtext": "एयर फ्रेट से ओशन शिपिंग, लैंड ट्रांसपोर्ट से वेयरहाउसिंग — आपके व्यवसाय के लिए हर समाधान।",
    "svc.strip": "8 विशिष्ट सेवाएं · वैश्विक पहुंच · 120+ देश",
    "svc.filter": "सभी सेवाएं",

    "svc.air.title": "एयर फ्रेट",
    "svc.air.tag": "दुनिया भर · एक्सप्रेस डिलीवरी",
    "svc.air.desc": "180+ देशों में गारंटीकृत ट्रांजिट समय के साथ प्राथमिकता एयर कार्गो समाधान।",
    "svc.air.f1": "→ अगले दिन और 48 घंटे एक्सप्रेस विकल्प",
    "svc.air.f2": "→ तापमान-नियंत्रित कार्गो",
    "svc.air.f3": "→ खतरनाक सामान प्रमाणित",

    "svc.ocean.title": "ओशन फ्रेट",
    "svc.ocean.tag": "वैश्विक · FCL और LCL",
    "svc.ocean.desc": "सभी प्रमुख व्यापार मार्गों पर पूर्ण कंटेनर और LCL सेवाएं। प्रतिस्पर्धी दरें, विश्वसनीय शेड्यूलिंग।",
    "svc.ocean.f1": "→ FCL और LCL समेकन",
    "svc.ocean.f2": "→ रीफर कंटेनर समाधान",
    "svc.ocean.f3": "→ पोर्ट-टू-पोर्ट और डोर-टू-डोर",

    "svc.land.title": "लैंड ट्रांसपोर्ट",
    "svc.land.tag": "FTL · LTL · सीमा पार",
    "svc.land.desc": "रियल-टाइम GPS ट्रैकिंग के साथ पूर्ण और आंशिक ट्रकलोड सेवाएं।",
    "svc.land.f1": "→ FTL और LTL राष्ट्रीय कवरेज",
    "svc.land.f2": "→ रियल-टाइम GPS ट्रैकिंग",
    "svc.land.f3": "→ सीमा पार दस्तावेज़ीकरण",

    "svc.wh.title": "वेयरहाउसिंग",
    "svc.wh.tag": "स्मार्ट भंडारण · पूर्ति",
    "svc.wh.desc": "WMS एकीकरण के साथ अत्याधुनिक वेयरहाउसिंग। पूर्ण इन्वेंट्री दृश्यता के साथ पिक, पैक और शिप।",
    "svc.wh.f1": "→ जलवायु-नियंत्रित सुविधाएं",
    "svc.wh.f2": "→ WMS और बारकोड एकीकरण",
    "svc.wh.f3": "→ ऑर्डर पूर्ति और रिटर्न",

    "svc.sc.title": "सप्लाई चेन",
    "svc.sc.tag": "एंड-टू-एंड · अनुकूलन",
    "svc.sc.desc": "पूर्ण सप्लाई चेन डिजाइन और प्रबंधन। खरीद से लास्ट-माइल डिलीवरी तक।",
    "svc.sc.f1": "→ सप्लाई चेन परामर्श",
    "svc.sc.f2": "→ वेंडर प्रबंधन और PO",
    "svc.sc.f3": "→ KPI डैशबोर्ड और एनालिटिक्स",

    "svc.customs.title": "कस्टम्स ब्रोकरेज",
    "svc.customs.tag": "अनुपालन · क्लीयरेंस",
    "svc.customs.desc": "120+ देशों में लाइसेंस प्राप्त कस्टम्स ब्रोकर। सभी दस्तावेज़, शुल्क और नियामक अनुपालन।",
    "svc.customs.f1": "→ HS कोड वर्गीकरण",
    "svc.customs.f2": "→ शुल्क और कर अनुकूलन",
    "svc.customs.f3": "→ नियामक अनुपालन ऑडिट",

    "svc.project.title": "प्रोजेक्ट कार्गो",
    "svc.project.tag": "ओवरसाइज़ · हैवी लिफ्ट",
    "svc.project.desc": "ओवरसाइज़, ओवरवेट और उच्च-मूल्य कार्गो के लिए विशेष हैंडलिंग।",
    "svc.project.f1": "→ मार्ग सर्वेक्षण और योजना",
    "svc.project.f2": "→ हैवी लिफ्ट और ब्रेकबल्क",
    "svc.project.f3": "→ मल्टी-मोडल समन्वय",

    "svc.ecom.title": "ई-कॉमर्स लॉजिस्टिक्स",
    "svc.ecom.tag": "D2C · सीमा पार · पूर्ति",
    "svc.ecom.desc": "मल्टी-चैनल सपोर्ट के साथ एकीकृत ई-कॉमर्स पूर्ति। बाज़ार से ग्राहक के दरवाज़े तक।",
    "svc.ecom.f1": "→ मल्टी-प्लेटफ़ॉर्म एकीकरण",
    "svc.ecom.f2": "→ रिटर्न प्रबंधन",
    "svc.ecom.f3": "→ सीमा पार ई-कॉमर्स",

    "svc.card.cta": "और जानें",

    "svc.cta.label": "शिप करने के लिए तैयार?",
    "svc.cta.title1": "कस्टम प्राप्त करें",
    "svc.cta.title2": "कोटेशन",
    "svc.cta.desc": "हमारे लॉजिस्टिक्स विशेषज्ञ 2 घंटे के भीतर आपके कार्गो के लिए इष्टतम समाधान तैयार करेंगे।",
    "svc.cta.btn1": "कोटेशन का अनुरोध करें",
    "svc.cta.btn2": "अभी कॉल करें",

    "contact.label": "संपर्क करें",
    "contact.title1": "कोटेशन का",
    "contact.title2": "अनुरोध करें",
    "contact.desc": "हमें अपनी शिपमेंट के बारे में बताएं। हमारे फ्रेट विशेषज्ञ 2 घंटे के भीतर जवाब देंगे।",
    "contact.name": "पूरा नाम",
    "contact.company": "कंपनी",
    "contact.email": "ईमेल",
    "contact.phone": "फ़ोन",
    "contact.origin": "उत्पत्ति",
    "contact.destination": "गंतव्य",
    "contact.service": "सेवा प्रकार",
    "contact.details": "शिपमेंट विवरण",
    "contact.submit": "पूछताछ भेजें →",
    "contact.hq.title": "📍 वैश्विक मुख्यालय",
    "contact.hq.text": "AIRVOX टॉवर, 1200 लॉजिस्टिक्स बुलेवार्ड<br>दुबई वर्ल्ड सेंट्रल, UAE",
    "contact.ops.title": "📞 24/7 संचालन केंद्र",
    "contact.response.title": "🕐 प्रतिक्रिया समय",
    "contact.response.text": "कोटेशन अनुरोध: <span class='highlight'>2 घंटे के भीतर</span><br>ट्रैकिंग सपोर्ट: <span class='highlight'>तुरंत</span><br>आपातकालीन शिपमेंट: <span class='highlight'>15 मिनट</span>",
    "contact.regional.title": "🌐 क्षेत्रीय कार्यालय",
    "contact.regional.text": "शंघाई · फ्रैंकफर्ट · लंदन · न्यूयॉर्क<br>सिंगापुर · साओ पाउलो · जोहान्सबर्ग",

    "footer.desc": "AIRVOX LOGISTICS एक वैश्विक फ्रेट फॉरवर्डिंग कंपनी है जो एयर, सी और लैंड लॉजिस्टिक्स समाधान में विशेषज्ञता रखती है।",
    "footer.desc.alt": "दुनिया को बिना सीमाओं के चलाना। 2004 से अंतर्राष्ट्रीय फ्रेट फॉरवर्डिंग और सप्लाई चेन समाधान के लिए आपका विश्वसनीय साथी।",
    "footer.quick": "त्वरित लिंक",
    "footer.services": "सेवाएं",
    "footer.company": "कंपनी",
    "footer.support": "सहायता",
    "footer.about": "हमारे बारे में",
    "footer.contact": "संपर्क",
    "footer.careers": "करियर",
    "footer.news": "समाचार",
    "footer.sustainability": "स्थिरता",
    "footer.partners": "भागीदार",
    "footer.faq": "सामान्य प्रश्न",
    "footer.docs": "दस्तावेज़ीकरण",
    "footer.terms": "नियम और शर्तें",
    "footer.getquote": "कोटेशन प्राप्त करें",
    "footer.copyright": "© 2026 AIRVOX LOGISTICS. सर्वाधिकार सुरक्षित।",

    "loader.tagline": "वैश्विक लॉजिस्टिक्स समाधान",
    "loader.stage": "मार्ग शुरू हुआ"
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عن الشركة",
    "nav.services": "الخدمات",
    "nav.contact": "اتصل بنا",
    "nav.quote": "احصل على عرض سعر",
    "nav.quote.freight": "احصل على عرض سعر الشحن",

    "hero.badge": "شبكة الشحن العالمية",
    "hero.line1": "حرّك",
    "hero.line2": "العالم.",
    "hero.line3": "بدون",
    "hero.line4": "حدود.",
    "hero.subtext": "حلول الشحن الجوي والبحري وسلسلة التوريد التي تربط الشركات عبر القارات بدقة وسرعة.",
    "hero.cta1": "اطلب عرض سعر",
    "hero.cta2": "اعرف المزيد",
    "hero.countries": "أكثر من 120 دولة متصلة",
    "hero.watch": "شاهد المقدمة",

    "about.label": "01 ─ من نحن",
    "about.title1": "عن",
    "about.title2": "ايرفوكس",
    "about.desc": "قوة لوجستية عالمية تربط الشركات في أكثر من 120 دولة بحلول شحن دقيقة.",
    "about.p1": "تأسست AIRVOX LOGISTICS برؤية لتبسيط التجارة الدولية، ونمت لتصبح واحدة من أكثر شركاء الشحن موثوقية حول العالم.",
    "about.p2": "كل شحنة تُتبع في الوقت الفعلي، وكل مسار مُحسّن للسرعة والكفاءة. نحن لا ننقل البضائع فحسب — بل نوصل اليقين.",
    "about.feat1.title": "تتبع مباشر",
    "about.feat1.desc": "GPS مباشر على كل شحنة",
    "about.feat2.title": "شبكة عالمية",
    "about.feat2.desc": "أكثر من 120 دولة",
    "about.feat3.title": "بضاعة مؤمنة",
    "about.feat3.desc": "تغطية تأمينية شاملة",
    "about.feat4.title": "أسعار تنافسية",
    "about.feat4.desc": "أفضل قيمة لوجستية",
    "about.slide1": "عمليات المستودعات",
    "about.slide2": "الشحن بالحاويات",
    "about.slide3": "حلول الشحن الجوي",

    "stat.countries": "دولة مخدومة",
    "stat.shipments": "ألف+ شحنة / سنوياً",
    "stat.ontime": "% توصيل في الوقت",
    "stat.support": "/ 7 دعم مباشر",

    "svc.hero.breadcrumb.home": "الرئيسية",
    "svc.hero.breadcrumb.services": "الخدمات",
    "svc.hero.badge": "✦  خدماتنا  ✦",
    "svc.hero.line1": "حلول شاملة",
    "svc.hero.line2": "لوجستية متكاملة",
    "svc.hero.subtext": "من الشحن الجوي إلى البحري، من النقل البري إلى التخزين — كل حل مصمم لعملك.",
    "svc.strip": "8 خدمات متخصصة · انتشار عالمي · أكثر من 120 دولة",
    "svc.filter": "جميع الخدمات",

    "svc.air.title": "الشحن الجوي",
    "svc.air.tag": "عالمي · توصيل سريع",
    "svc.air.desc": "حلول شحن جوي بأوقات عبور مضمونة عبر أكثر من 180 دولة.",
    "svc.air.f1": "→ خيارات اليوم التالي و 48 ساعة",
    "svc.air.f2": "→ شحن مُتحكم بدرجة حرارته",
    "svc.air.f3": "→ معتمد للبضائع الخطرة",

    "svc.ocean.title": "الشحن البحري",
    "svc.ocean.tag": "عالمي · FCL و LCL",
    "svc.ocean.desc": "خدمات حاويات كاملة وأقل من حاوية عبر جميع الممرات التجارية الرئيسية.",
    "svc.ocean.f1": "→ تجميع FCL و LCL",
    "svc.ocean.f2": "→ حلول حاويات مبردة",
    "svc.ocean.f3": "→ من ميناء لميناء ومن باب لباب",

    "svc.land.title": "النقل البري",
    "svc.land.tag": "FTL · LTL · عبر الحدود",
    "svc.land.desc": "خدمات حمولة شاحنة كاملة وجزئية مع تتبع GPS مباشر.",
    "svc.land.f1": "→ تغطية وطنية FTL و LTL",
    "svc.land.f2": "→ تتبع GPS مباشر",
    "svc.land.f3": "→ توثيق عبر الحدود",

    "svc.wh.title": "التخزين",
    "svc.wh.tag": "تخزين ذكي · تنفيذ",
    "svc.wh.desc": "مستودعات متطورة مع تكامل WMS. انتقاء وتعبئة وشحن مع رؤية كاملة للمخزون.",
    "svc.wh.f1": "→ مرافق مُتحكم بمناخها",
    "svc.wh.f2": "→ تكامل WMS والباركود",
    "svc.wh.f3": "→ تنفيذ الطلبات والمرتجعات",

    "svc.sc.title": "سلسلة التوريد",
    "svc.sc.tag": "شامل · تحسين",
    "svc.sc.desc": "تصميم وإدارة سلسلة التوريد الكاملة. من المشتريات إلى التوصيل الأخير.",
    "svc.sc.f1": "→ استشارات سلسلة التوريد",
    "svc.sc.f2": "→ إدارة الموردين وطلبات الشراء",
    "svc.sc.f3": "→ لوحات KPI والتحليلات",

    "svc.customs.title": "الخلاص الجمركي",
    "svc.customs.tag": "امتثال · تخليص",
    "svc.customs.desc": "وسطاء جمركيون مرخصون في أكثر من 120 دولة.",
    "svc.customs.f1": "→ تصنيف رموز HS",
    "svc.customs.f2": "→ تحسين الرسوم والضرائب",
    "svc.customs.f3": "→ تدقيق الامتثال التنظيمي",

    "svc.project.title": "شحنات المشاريع",
    "svc.project.tag": "ضخم · رفع ثقيل",
    "svc.project.desc": "معالجة متخصصة للبضائع ضخمة الحجم والثقيلة والعالية القيمة.",
    "svc.project.f1": "→ مسح المسار والتخطيط",
    "svc.project.f2": "→ رفع ثقيل وشحن مكسور",
    "svc.project.f3": "→ تنسيق متعدد الوسائط",

    "svc.ecom.title": "لوجستيات التجارة الإلكترونية",
    "svc.ecom.tag": "D2C · عبر الحدود · تنفيذ",
    "svc.ecom.desc": "تنفيذ متكامل للتجارة الإلكترونية مع دعم متعدد القنوات.",
    "svc.ecom.f1": "→ تكامل متعدد المنصات",
    "svc.ecom.f2": "→ إدارة المرتجعات",
    "svc.ecom.f3": "→ تجارة إلكترونية عابرة للحدود",

    "svc.card.cta": "اعرف المزيد",

    "svc.cta.label": "مستعد للشحن؟",
    "svc.cta.title1": "احصل على عرض",
    "svc.cta.title2": "سعر مخصص",
    "svc.cta.desc": "سيصمم متخصصو اللوجستيات لدينا الحل الأمثل لشحنتك خلال ساعتين.",
    "svc.cta.btn1": "اطلب عرض سعر",
    "svc.cta.btn2": "اتصل بنا الآن",

    "contact.label": "تواصل معنا",
    "contact.title1": "اطلب عرض",
    "contact.title2": "سعر",
    "contact.desc": "أخبرنا عن شحنتك. سيرد متخصصو الشحن خلال ساعتين.",
    "contact.name": "الاسم الكامل",
    "contact.company": "الشركة",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.origin": "المصدر",
    "contact.destination": "الوجهة",
    "contact.service": "نوع الخدمة",
    "contact.details": "تفاصيل الشحنة",
    "contact.submit": "إرسال الاستعلام ←",
    "contact.hq.title": "📍 المقر الرئيسي العالمي",
    "contact.hq.text": "برج ايرفوكس، 1200 شارع اللوجستيات<br>دبي وورلد سنترال، الإمارات",
    "contact.ops.title": "📞 مركز العمليات 24/7",
    "contact.response.title": "🕐 أوقات الاستجابة",
    "contact.response.text": "طلبات الأسعار: <span class='highlight'>خلال ساعتين</span><br>دعم التتبع: <span class='highlight'>فوري</span><br>الشحنات الطارئة: <span class='highlight'>15 دقيقة</span>",
    "contact.regional.title": "🌐 المكاتب الإقليمية",
    "contact.regional.text": "شنغهاي · فرانكفورت · لندن · نيويورك<br>سنغافورة · ساو باولو · جوهانسبرغ",

    "footer.desc": "AIRVOX LOGISTICS هي شركة شحن عالمية متخصصة في حلول لوجستية جوية وبحرية وبرية.",
    "footer.desc.alt": "نحرّك العالم بلا حدود. شريكك الموثوق للشحن الدولي وسلسلة التوريد منذ 2004.",
    "footer.quick": "روابط سريعة",
    "footer.services": "الخدمات",
    "footer.company": "الشركة",
    "footer.support": "الدعم",
    "footer.about": "عن الشركة",
    "footer.contact": "اتصل بنا",
    "footer.careers": "الوظائف",
    "footer.news": "الأخبار",
    "footer.sustainability": "الاستدامة",
    "footer.partners": "الشركاء",
    "footer.faq": "الأسئلة الشائعة",
    "footer.docs": "التوثيق",
    "footer.terms": "الشروط والأحكام",
    "footer.getquote": "احصل على عرض سعر",
    "footer.copyright": "© 2026 AIRVOX LOGISTICS. جميع الحقوق محفوظة.",

    "loader.tagline": "حلول لوجستية عالمية",
    "loader.stage": "تم بدء المسار"
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",
    "nav.quote": "SOLICITAR COTIZACIÓN",
    "nav.quote.freight": "COTIZACIÓN DE CARGA",

    "hero.badge": "RED GLOBAL DE CARGA",
    "hero.line1": "MUEVE EL",
    "hero.line2": "MUNDO.",
    "hero.line3": "SIN",
    "hero.line4": "LÍMITES.",
    "hero.subtext": "Soluciones de carga aérea, transporte marítimo y cadena de suministro que conectan empresas a través de continentes con precisión y velocidad.",
    "hero.cta1": "SOLICITAR COTIZACIÓN",
    "hero.cta2": "MÁS INFORMACIÓN",
    "hero.countries": "120+ PAÍSES CONECTADOS",
    "hero.watch": "VER INTRO",

    "about.label": "01 ─ Quiénes Somos",
    "about.title1": "SOBRE",
    "about.title2": "AIRVOX",
    "about.desc": "Una potencia logística global que conecta empresas en más de 120 países con soluciones de carga precisas.",
    "about.p1": "Fundada con la visión de simplificar el comercio internacional, AIRVOX LOGISTICS se ha convertido en uno de los socios de transporte más confiables del mundo.",
    "about.p2": "Cada envío se rastrea en tiempo real, cada ruta se optimiza para velocidad y eficiencia. No solo movemos carga — entregamos certeza.",
    "about.feat1.title": "Rastreo en Tiempo Real",
    "about.feat1.desc": "GPS en vivo en cada envío",
    "about.feat2.title": "Red Global",
    "about.feat2.desc": "120+ países atendidos",
    "about.feat3.title": "Carga Asegurada",
    "about.feat3.desc": "Cobertura total",
    "about.feat4.title": "Tarifas Competitivas",
    "about.feat4.desc": "La mejor logística en valor",
    "about.slide1": "OPERACIONES DE ALMACÉN",
    "about.slide2": "ENVÍO EN CONTENEDORES",
    "about.slide3": "SOLUCIONES DE CARGA AÉREA",

    "stat.countries": "Países Atendidos",
    "stat.shipments": "K+ Envíos / Año",
    "stat.ontime": "% Entrega Puntual",
    "stat.support": "/ 7 Soporte en Vivo",

    "svc.hero.breadcrumb.home": "INICIO",
    "svc.hero.breadcrumb.services": "SERVICIOS",
    "svc.hero.badge": "✦  NUESTROS SERVICIOS  ✦",
    "svc.hero.line1": "SOLUCIONES",
    "svc.hero.line2": "LOGÍSTICAS INTEGRALES",
    "svc.hero.subtext": "Desde carga aérea hasta transporte marítimo, transporte terrestre hasta almacenamiento — cada solución adaptada a su negocio.",
    "svc.strip": "8 SERVICIOS ESPECIALIZADOS · ALCANCE GLOBAL · 120+ PAÍSES",
    "svc.filter": "TODOS LOS SERVICIOS",

    "svc.air.title": "Carga Aérea",
    "svc.air.tag": "MUNDIAL · ENTREGA EXPRESS",
    "svc.air.desc": "Soluciones de carga aérea prioritaria con tiempos de tránsito garantizados en más de 180 países.",
    "svc.air.f1": "→ Opciones express de 24 y 48 horas",
    "svc.air.f2": "→ Carga con temperatura controlada",
    "svc.air.f3": "→ Certificación de mercancías peligrosas",

    "svc.ocean.title": "Transporte Marítimo",
    "svc.ocean.tag": "GLOBAL · FCL Y LCL",
    "svc.ocean.desc": "Servicios de contenedores completos y parciales en todas las principales rutas comerciales.",
    "svc.ocean.f1": "→ Consolidación FCL y LCL",
    "svc.ocean.f2": "→ Contenedores refrigerados",
    "svc.ocean.f3": "→ Puerto a puerto y puerta a puerta",

    "svc.land.title": "Transporte Terrestre",
    "svc.land.tag": "FTL · LTL · TRANSFRONTERIZO",
    "svc.land.desc": "Servicios de camión completo y parcial con rastreo GPS en tiempo real.",
    "svc.land.f1": "→ Cobertura nacional FTL y LTL",
    "svc.land.f2": "→ Rastreo GPS en tiempo real",
    "svc.land.f3": "→ Documentación transfronteriza",

    "svc.wh.title": "Almacenamiento",
    "svc.wh.tag": "ALMACENAMIENTO INTELIGENTE",
    "svc.wh.desc": "Almacenes de última generación con integración WMS. Selección, empaque y envío con visibilidad total.",
    "svc.wh.f1": "→ Instalaciones climatizadas",
    "svc.wh.f2": "→ Integración WMS y códigos de barras",
    "svc.wh.f3": "→ Cumplimiento de pedidos y devoluciones",

    "svc.sc.title": "Cadena de Suministro",
    "svc.sc.tag": "INTEGRAL · OPTIMIZACIÓN",
    "svc.sc.desc": "Diseño y gestión completa de la cadena de suministro. Desde la adquisición hasta la última milla.",
    "svc.sc.f1": "→ Consultoría de cadena de suministro",
    "svc.sc.f2": "→ Gestión de proveedores y órdenes",
    "svc.sc.f3": "→ Paneles KPI y analíticas",

    "svc.customs.title": "Agencia Aduanal",
    "svc.customs.tag": "CUMPLIMIENTO · DESPACHO",
    "svc.customs.desc": "Agentes aduanales con licencia en más de 120 países.",
    "svc.customs.f1": "→ Clasificación de códigos HS",
    "svc.customs.f2": "→ Optimización de aranceles",
    "svc.customs.f3": "→ Auditoría de cumplimiento",

    "svc.project.title": "Carga de Proyectos",
    "svc.project.tag": "SOBREDIMENSIONADO · PESADO",
    "svc.project.desc": "Manejo especializado para carga sobredimensionada, sobrepeso y de alto valor.",
    "svc.project.f1": "→ Estudio de ruta y planificación",
    "svc.project.f2": "→ Levantamiento pesado",
    "svc.project.f3": "→ Coordinación multimodal",

    "svc.ecom.title": "Logística E-Commerce",
    "svc.ecom.tag": "D2C · TRANSFRONTERIZO",
    "svc.ecom.desc": "Cumplimiento e-commerce integrado con soporte multicanal. Del mercado a la puerta del cliente.",
    "svc.ecom.f1": "→ Integración multiplataforma",
    "svc.ecom.f2": "→ Gestión de devoluciones",
    "svc.ecom.f3": "→ E-commerce transfronterizo",

    "svc.card.cta": "MÁS INFORMACIÓN",

    "svc.cta.label": "¿Listo para Enviar?",
    "svc.cta.title1": "OBTENGA UNA",
    "svc.cta.title2": "COTIZACIÓN",
    "svc.cta.desc": "Nuestros especialistas diseñarán la solución óptima para su carga en 2 horas.",
    "svc.cta.btn1": "SOLICITAR COTIZACIÓN",
    "svc.cta.btn2": "LLÁMENOS AHORA",

    "contact.label": "Contáctenos",
    "contact.title1": "SOLICITE UNA",
    "contact.title2": "COTIZACIÓN",
    "contact.desc": "Cuéntenos sobre su envío. Nuestros especialistas responderán en 2 horas.",
    "contact.name": "Nombre Completo",
    "contact.company": "Empresa",
    "contact.email": "Correo Electrónico",
    "contact.phone": "Teléfono",
    "contact.origin": "Origen",
    "contact.destination": "Destino",
    "contact.service": "Tipo de Servicio",
    "contact.details": "Detalles del Envío",
    "contact.submit": "ENVIAR CONSULTA →",
    "contact.hq.title": "📍 Sede Mundial",
    "contact.hq.text": "Torre AIRVOX, 1200 Boulevard Logístico<br>Dubai World Central, EAU",
    "contact.ops.title": "📞 Centro de Operaciones 24/7",
    "contact.response.title": "🕐 Tiempos de Respuesta",
    "contact.response.text": "Cotizaciones: <span class='highlight'>en 2 horas</span><br>Soporte de rastreo: <span class='highlight'>instantáneo</span><br>Envíos de emergencia: <span class='highlight'>15 minutos</span>",
    "contact.regional.title": "🌐 Oficinas Regionales",
    "contact.regional.text": "Shanghái · Fráncfort · Londres · Nueva York<br>Singapur · São Paulo · Johannesburgo",

    "footer.desc": "AIRVOX LOGISTICS es una empresa global de transporte especializada en soluciones logísticas aéreas, marítimas y terrestres.",
    "footer.desc.alt": "Moviendo el mundo sin límites. Su socio confiable para transporte internacional y cadena de suministro desde 2004.",
    "footer.quick": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.company": "Empresa",
    "footer.support": "Soporte",
    "footer.about": "Nosotros",
    "footer.contact": "Contacto",
    "footer.careers": "Carreras",
    "footer.news": "Noticias",
    "footer.sustainability": "Sostenibilidad",
    "footer.partners": "Socios",
    "footer.faq": "Preguntas Frecuentes",
    "footer.docs": "Documentación",
    "footer.terms": "Términos y Condiciones",
    "footer.getquote": "Solicitar Cotización",
    "footer.copyright": "© 2026 AIRVOX LOGISTICS. Todos los derechos reservados.",

    "loader.tagline": "SOLUCIONES LOGÍSTICAS GLOBALES",
    "loader.stage": "RUTA INICIADA"
  },

  zh: {
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.services": "服务",
    "nav.contact": "联系我们",
    "nav.quote": "获取报价",
    "nav.quote.freight": "获取货运报价",

    "hero.badge": "全球货运网络",
    "hero.line1": "推动",
    "hero.line2": "世界。",
    "hero.line3": "无限",
    "hero.line4": "可能。",
    "hero.subtext": "国际空运、海运和供应链解决方案，以精准和速度连接各大洲的企业。",
    "hero.cta1": "请求报价",
    "hero.cta2": "了解更多",
    "hero.countries": "120+ 个国家互联",
    "hero.watch": "观看介绍",

    "about.label": "01 ─ 我们是谁",
    "about.title1": "关于",
    "about.title2": "AIRVOX",
    "about.desc": "一个全球物流强国，通过精准的货运解决方案连接120多个国家的企业。",
    "about.p1": "AIRVOX LOGISTICS 以简化国际贸易为愿景创立，已成长为全球最值得信赖的货运代理合作伙伴之一。",
    "about.p2": "每批货物都进行实时追踪，每条路线都针对速度和成本效率进行优化。我们不仅仅是运输货物——我们传递确定性。",
    "about.feat1.title": "实时追踪",
    "about.feat1.desc": "每批货物的实时GPS",
    "about.feat2.title": "全球网络",
    "about.feat2.desc": "服务120+个国家",
    "about.feat3.title": "货物保险",
    "about.feat3.desc": "全面保障",
    "about.feat4.title": "有竞争力的价格",
    "about.feat4.desc": "最具价值的物流",
    "about.slide1": "仓库运营",
    "about.slide2": "集装箱运输",
    "about.slide3": "空运解决方案",

    "stat.countries": "服务国家",
    "stat.shipments": "K+ 货运量/年",
    "stat.ontime": "% 准时交付",
    "stat.support": "/ 7 全天候支持",

    "svc.hero.breadcrumb.home": "首页",
    "svc.hero.breadcrumb.services": "服务",
    "svc.hero.badge": "✦  我们的服务  ✦",
    "svc.hero.line1": "端到端",
    "svc.hero.line2": "物流解决方案",
    "svc.hero.subtext": "从空运到海运，从陆运到仓储——为您的企业量身定制每一个解决方案。",
    "svc.strip": "8项专业服务 · 全球覆盖 · 120+个国家",
    "svc.filter": "所有服务",

    "svc.air.title": "空运",
    "svc.air.tag": "全球 · 快递",
    "svc.air.desc": "在180多个国家提供有保证的运输时间的优先空运货物解决方案。",
    "svc.air.f1": "→ 次日和48小时快递选项",
    "svc.air.f2": "→ 温控货物",
    "svc.air.f3": "→ 危险品认证",

    "svc.ocean.title": "海运",
    "svc.ocean.tag": "全球 · FCL和LCL",
    "svc.ocean.desc": "在所有主要贸易航线上的整箱和拼箱服务。有竞争力的价格，可靠的排程。",
    "svc.ocean.f1": "→ FCL和LCL拼箱",
    "svc.ocean.f2": "→ 冷藏集装箱解决方案",
    "svc.ocean.f3": "→ 港到港和门到门",

    "svc.land.title": "陆运",
    "svc.land.tag": "FTL · LTL · 跨境",
    "svc.land.desc": "配备实时GPS追踪的整车和零担运输服务。跨大洲的跨境专业能力。",
    "svc.land.f1": "→ FTL和LTL全国覆盖",
    "svc.land.f2": "→ 实时GPS追踪",
    "svc.land.f3": "→ 跨境文件处理",

    "svc.wh.title": "仓储",
    "svc.wh.tag": "智能存储 · 履约",
    "svc.wh.desc": "配备WMS集成的先进仓储系统。拣选、包装和发货，全程库存可视化。",
    "svc.wh.f1": "→ 气候控制设施",
    "svc.wh.f2": "→ WMS和条码集成",
    "svc.wh.f3": "→ 订单履约和退货",

    "svc.sc.title": "供应链",
    "svc.sc.tag": "端到端 · 优化",
    "svc.sc.desc": "完整的供应链设计和管理。从采购到最后一公里交付。",
    "svc.sc.f1": "→ 供应链咨询",
    "svc.sc.f2": "→ 供应商管理和PO",
    "svc.sc.f3": "→ KPI仪表板和分析",

    "svc.customs.title": "报关代理",
    "svc.customs.tag": "合规 · 清关",
    "svc.customs.desc": "在120多个国家拥有持牌报关行。处理所有文件、关税和法规合规。",
    "svc.customs.f1": "→ HS编码分类",
    "svc.customs.f2": "→ 关税和税收优化",
    "svc.customs.f3": "→ 法规合规审计",

    "svc.project.title": "项目货物",
    "svc.project.tag": "超大件 · 重型吊装",
    "svc.project.desc": "超大、超重和高价值货物的专业处理。从勘察到交付的全程项目管理。",
    "svc.project.f1": "→ 路线勘察和规划",
    "svc.project.f2": "→ 重型吊装和散货",
    "svc.project.f3": "→ 多式联运协调",

    "svc.ecom.title": "电商物流",
    "svc.ecom.tag": "D2C · 跨境 · 履约",
    "svc.ecom.desc": "多渠道支持的集成电商履约。从市场到客户家门口，覆盖全球。",
    "svc.ecom.f1": "→ 多平台集成",
    "svc.ecom.f2": "→ 退货管理",
    "svc.ecom.f3": "→ 跨境电商",

    "svc.card.cta": "了解更多",

    "svc.cta.label": "准备好发货了？",
    "svc.cta.title1": "获取定制",
    "svc.cta.title2": "报价",
    "svc.cta.desc": "我们的物流专家将在2小时内为您的货物设计最佳解决方案。",
    "svc.cta.btn1": "请求报价",
    "svc.cta.btn2": "立即致电",

    "contact.label": "联系我们",
    "contact.title1": "请求",
    "contact.title2": "报价",
    "contact.desc": "告诉我们您的货运信息。我们的货运专家将在2小时内回复。",
    "contact.name": "全名",
    "contact.company": "公司",
    "contact.email": "电子邮件",
    "contact.phone": "电话",
    "contact.origin": "起运地",
    "contact.destination": "目的地",
    "contact.service": "服务类型",
    "contact.details": "货运详情",
    "contact.submit": "发送咨询 →",
    "contact.hq.title": "📍 全球总部",
    "contact.hq.text": "AIRVOX大厦，物流大道1200号<br>迪拜世界中心，阿联酋",
    "contact.ops.title": "📞 全天候运营中心",
    "contact.response.title": "🕐 响应时间",
    "contact.response.text": "报价请求：<span class='highlight'>2小时内</span><br>追踪支持：<span class='highlight'>即时</span><br>紧急货运：<span class='highlight'>15分钟</span>",
    "contact.regional.title": "🌐 区域办事处",
    "contact.regional.text": "上海 · 法兰克福 · 伦敦 · 纽约<br>新加坡 · 圣保罗 · 约翰内斯堡",

    "footer.desc": "AIRVOX LOGISTICS 是一家全球货运代理公司，专注于空运、海运和陆运物流解决方案。",
    "footer.desc.alt": "无限推动世界。自2004年以来，您值得信赖的国际货运代理和供应链合作伙伴。",
    "footer.quick": "快速链接",
    "footer.services": "服务",
    "footer.company": "公司",
    "footer.support": "支持",
    "footer.about": "关于我们",
    "footer.contact": "联系",
    "footer.careers": "职业",
    "footer.news": "新闻",
    "footer.sustainability": "可持续发展",
    "footer.partners": "合作伙伴",
    "footer.faq": "常见问题",
    "footer.docs": "文档",
    "footer.terms": "条款和条件",
    "footer.getquote": "获取报价",
    "footer.copyright": "© 2026 AIRVOX LOGISTICS。版权所有。",

    "loader.tagline": "全球物流解决方案",
    "loader.stage": "路线已启动"
  }
};

/* Language metadata */
const LANGUAGES = {
  en: { code: "en", label: "EN", name: "English", dir: "ltr" },
  hi: { code: "hi", label: "हिं", name: "हिन्दी", dir: "ltr" },
  ar: { code: "ar", label: "عر", name: "العربية", dir: "rtl" },
  es: { code: "es", label: "ES", name: "Español", dir: "ltr" },
  zh: { code: "zh", label: "中", name: "中文", dir: "ltr" }
};

/* ═══════════════════════════════════════════
   TRANSLATION ENGINE
   ═══════════════════════════════════════════ */
let currentLang = localStorage.getItem("airvox_lang") || "en";

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("airvox_lang", lang);

  const dict = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = LANGUAGES[lang].dir;

  /* Translate all elements with data-i18n */
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      if (dict[key].includes("<")) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  /* Translate placeholders */
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  /* Translate option elements */
  document.querySelectorAll("[data-i18n-text]").forEach(el => {
    const key = el.getAttribute("data-i18n-text");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  /* Update all lang-selector buttons */
  document.querySelectorAll(".lang-selector").forEach(btn => {
    btn.innerHTML = LANGUAGES[lang].label + ' <span class="lang-arrow">▾</span>';
  });

  /* Update page title */
  const titles = {
    en: { "index.html": "AIRVOX LOGISTICS — Move The World Without Limits", "services.html": "Services — AIRVOX LOGISTICS", "contact.html": "Contact — AIRVOX LOGISTICS" },
    hi: { "index.html": "AIRVOX LOGISTICS — दुनिया को बिना सीमाओं के बदलो", "services.html": "सेवाएं — AIRVOX LOGISTICS", "contact.html": "संपर्क — AIRVOX LOGISTICS" },
    ar: { "index.html": "AIRVOX LOGISTICS — حرّك العالم بدون حدود", "services.html": "الخدمات — AIRVOX LOGISTICS", "contact.html": "اتصل بنا — AIRVOX LOGISTICS" },
    es: { "index.html": "AIRVOX LOGISTICS — Mueve El Mundo Sin Límites", "services.html": "Servicios — AIRVOX LOGISTICS", "contact.html": "Contacto — AIRVOX LOGISTICS" },
    zh: { "index.html": "AIRVOX LOGISTICS — 推动世界 无限可能", "services.html": "服务 — AIRVOX LOGISTICS", "contact.html": "联系我们 — AIRVOX LOGISTICS" }
  };
  const page = location.pathname.split("/").pop() || "index.html";
  if (titles[lang] && titles[lang][page]) {
    document.title = titles[lang][page];
  }
}

/* ═══════════════════════════════════════════
   LANGUAGE DROPDOWN BUILDER
   ═══════════════════════════════════════════ */
function buildLangDropdowns() {
  document.querySelectorAll(".lang-selector").forEach(btn => {
    /* Prevent rebuilding if already built */
    if (btn.parentElement.classList.contains("lang-wrapper")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "lang-wrapper";

    /* Create dropdown */
    const dropdown = document.createElement("div");
    dropdown.className = "lang-dropdown";

    Object.values(LANGUAGES).forEach(l => {
      const item = document.createElement("button");
      item.className = "lang-option" + (l.code === currentLang ? " active" : "");
      item.setAttribute("data-lang", l.code);
      item.innerHTML = '<span class="lang-option-code">' + l.label + '</span><span class="lang-option-name">' + l.name + '</span>';
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        applyLanguage(l.code);
        /* Update active state */
        dropdown.querySelectorAll(".lang-option").forEach(o => o.classList.remove("active"));
        item.classList.add("active");
        /* Update all other dropdowns too */
        document.querySelectorAll('.lang-option[data-lang="' + l.code + '"]').forEach(o => o.classList.add("active"));
        document.querySelectorAll('.lang-option:not([data-lang="' + l.code + '"])').forEach(o => o.classList.remove("active"));
        closeAllDropdowns();
      });
      dropdown.appendChild(item);
    });

    /* Wrap button */
    btn.parentNode.insertBefore(wrapper, btn);
    wrapper.appendChild(btn);
    wrapper.appendChild(dropdown);

    /* Toggle dropdown */
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns();
      if (!isOpen) dropdown.classList.add("open");
    });
  });

  /* Close on outside click */
  document.addEventListener("click", closeAllDropdowns);
}

function closeAllDropdowns() {
  document.querySelectorAll(".lang-dropdown").forEach(d => d.classList.remove("open"));
}

/* ═══════════════════════════════════════════
   INIT — Apply saved language & build dropdowns
   ═══════════════════════════════════════════ */
function initTranslations() {
  buildLangDropdowns();
  if (currentLang !== "en") {
    applyLanguage(currentLang);
  } else {
    /* Still update button labels */
    document.querySelectorAll(".lang-selector").forEach(btn => {
      btn.innerHTML = LANGUAGES[currentLang].label + ' <span class="lang-arrow">▾</span>';
    });
  }
}

/* Handle case where DOMContentLoaded already fired (scripts at bottom of body) */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTranslations);
} else {
  initTranslations();
}
