const translations = {
  vi: {
    navHome:'Trang chủ', navSolution:'Giải pháp', navAudience:'Dành cho bạn', navAbout:'Về chúng tôi', navPartner:'Hợp tác', navNews:'Tin tức', launchPlatform:'Truy cập nền tảng ↗',
    heroLabel:'GIÁO DỤC TÀI CHÍNH CHO THẾ HỆ TRẺ VIỆT NAM', heroTitle: 'Hiểu tài chính hôm nay,<br><span>vững vàng tương lai,</span>', heroBody:'FinSmart giúp sinh viên trang bị kiến thức, kỹ năng và thói quen tài chính vững chắc, để tự tin học tập, sống độc lập và kiến tạo tương lai bền vững.', heroPrimary:'Khám phá giải pháp', heroSecondary:'Trải nghiệm nền tảng',
    platformLabel:'NỀN TẢNG CỦA FINSMART', platformTitle:'Học và quản lý tài chính thông minh, dành cho sinh viên', platformBody:'Nền tảng học tập toàn diện, kết hợp kiến thức thực tế, công cụ quản lý tài chính và trải nghiệm tương tác sinh động.', platformPoint1:'Học theo lộ trình, gắn với đời sống sinh viên', platformPoint2:'Quản lý chi tiêu, tích lũy và kế hoạch mục tiêu', platformPoint3:'Kiểm tra kiến thức và nhận chứng nhận',
    howLabel:'FINSMART HOẠT ĐỘNG NHƯ THẾ NÀO?', howTitle:'Từ kiến thức đến thói quen tài chính', howBody:'Hành trình học tập thực tiễn, cá nhân hóa và có tính ứng dụng cao, giúp sinh viên hình thành năng lực tài chính bền vững.', step1Title:'Học', step1Body:'Tiếp cận kiến thức tài chính nền tảng và nâng cao.', step2Title:'Thực hành', step2Body:'Áp dụng qua tình huống thực tế và công cụ quản lý.', step3Title:'Phát triển', step3Body:'Hình thành thói quen, lập kế hoạch và tự tin ra quyết định tài chính.',
    audienceLabel:'FINSMART DÀNH CHO AI?', audienceTitle:'Giải pháp cho sinh viên, nhà trường và đối tác đồng hành', studentTitle:'Sinh viên', studentBody:'Trang bị kiến thức và kỹ năng tài chính để học tập, sống độc lập và chuẩn bị cho sự nghiệp.', schoolTitle:'Nhà trường', schoolBody:'Nâng cao năng lực tài chính cho sinh viên, góp phần phát triển kỹ năng công dân toàn diện.', partnerTitle:'Đối tác & Nhà đầu tư', partnerBody:'Cùng FinSmart mở rộng tác động giáo dục tài chính, kiến tạo giá trị xã hội bền vững.',
    impactTitle:'Cùng FinSmart mở rộng tác động giáo dục tài chính', impactBody:'Hợp tác với chúng tôi để đưa giáo dục tài chính đến nhiều sinh viên hơn, kiến tạo một thế hệ trẻ Việt Nam tự tin, chủ động và vững vàng về tài chính.', contactCta:'Liên hệ hợp tác', deckCta:'Xem nền tảng',
    aboutLabel:'VỀ CHÚNG TÔI', aboutTitle:'FinSmart là startup giáo dục tài chính hướng đến người trẻ Việt Nam', aboutBody:'Chúng tôi kết hợp giáo dục, công nghệ và trải nghiệm tương tác để giúp người học không chỉ hiểu mà còn thực hành tài chính một cách tự tin và có trách nhiệm.', newsLabel:'TIN TỨC & NGHIÊN CỨU', newsTitle:'Không gian dành cho cập nhật, nghiên cứu và câu chuyện phát triển', newsBody:'Phần này có thể được mở rộng sau để giới thiệu bài viết, nghiên cứu, cập nhật dự án và tài liệu dành cho đối tác.', footerLine:'Hiểu tài chính. Vững tương lai.'
  },
  en: {
    navHome:'Home', navSolution:'Solution', navAudience:'For you', navAbout:'About us', navPartner:'Partnerships', navNews:'News', launchPlatform:'Open platform ↗',
    heroLabel:'FINANCIAL EDUCATION FOR YOUNG VIETNAMESE LEARNERS', heroTitle:'Financial confidence today,<br><span>a stronger future tomorrow.</span>', heroBody:'FinSmart helps students build sound financial knowledge, skills and habits so they can study with confidence, live independently and shape a more secure future.', heroPrimary:'Explore the solution', heroSecondary:'Explore platform',
    platformLabel:'THE FINSMART PLATFORM', platformTitle:'Smart financial learning and money management for students', platformBody:'A comprehensive learning platform combining practical knowledge, money-management tools and engaging interactive experiences.', platformPoint1:'Learn through a pathway connected to student life', platformPoint2:'Manage spending, savings and goal planning', platformPoint3:'Check knowledge and earn recognition',
    howLabel:'HOW FINSMART WORKS', howTitle:'From knowledge to financial habits', howBody:'A practical, personalised and application-focused learning journey that helps students build lasting financial capability.', step1Title:'Learn', step1Body:'Access foundational and advanced financial knowledge.', step2Title:'Practice', step2Body:'Apply ideas through real-life scenarios and management tools.', step3Title:'Grow', step3Body:'Build habits, plan ahead and make confident financial decisions.',
    audienceLabel:'WHO IS FINSMART FOR?', audienceTitle:'A solution for students, institutions and supporting partners', studentTitle:'Students', studentBody:'Build knowledge and financial skills for study, independence and career readiness.', schoolTitle:'Institutions', schoolBody:'Strengthen students’ financial capability as part of broader learner development.', partnerTitle:'Partners & Investors', partnerBody:'Work with FinSmart to expand financial education impact and social value.',
    impactTitle:'Work with FinSmart to expand financial education impact', impactBody:'Partner with us to bring financial education to more students and help shape a generation of confident, proactive and financially capable young Vietnamese.', contactCta:'Contact us', deckCta:'View platform',
    aboutLabel:'ABOUT US', aboutTitle:'FinSmart is a financial education startup for young Vietnamese learners', aboutBody:'We combine education, technology and interactive experience so learners can do more than understand finance — they can practise it with confidence and responsibility.', newsLabel:'NEWS & RESEARCH', newsTitle:'A space for future updates, research and growth stories', newsBody:'This section can later be expanded to showcase articles, research, project updates and partner resources.', footerLine:'Financial confidence. A stronger future.'
  }
};

let language = 'vi';
const nav = document.getElementById('primaryNav');
const menu = document.getElementById('menuToggle');
const topSwitch = document.getElementById('langButton');
const footerSwitch = document.getElementById('langButtonFooter');
function applyLanguage(lang){
  language = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const value = translations[lang][el.dataset.i18n];
    if(value !== undefined) el.innerHTML = value;
  });
  document.getElementById('currentLang').textContent = lang.toUpperCase();
  document.getElementById('otherLang').textContent = lang === 'vi' ? 'EN' : 'VN';
  document.getElementById('footerCurrentLang').textContent = lang.toUpperCase();
  document.getElementById('footerOtherLang').textContent = lang === 'vi' ? 'EN' : 'VN';
  document.title = lang === 'vi' ? 'FinSmart | Hiểu tài chính hôm nay, vững vàng tương lai.' : 'FinSmart | Financial confidence today, a stronger future tomorrow.';
}
[topSwitch, footerSwitch].forEach(btn=>btn.addEventListener('click',()=>applyLanguage(language==='vi'?'en':'vi')));
menu.addEventListener('click',()=>{const open = nav.classList.toggle('open');menu.setAttribute('aria-expanded', String(open));});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent = new Date().getFullYear();
applyLanguage('vi');
