import React, { useState } from 'react';
import { Camera } from 'lucide-react';

const languages = {
  ko: { flag: '🇰🇷', name: '한국어' },
  en: { flag: '🇬🇧', name: 'English' },
  fr: { flag: '🇫🇷', name: 'Français' },
  ja: { flag: '🇯🇵', name: '日本語' },
};

const translations = {
  ko: {
    title: '첨단 콜드브루 머신',
    home: '홈',
    features: '특징',
    specs: '사양',
    contact: '연락처',
    heroTitle: '혁명적인 콜드브루 기술',
    heroSubtitle: '우리의 첨단 머신으로 완벽한 콜드브루를 경험하세요',
    learnMore: '더 알아보기',
    keyFeatures: '주요 특징',
    feature1: '냉장 밀폐 추출',
    feature2: '스프레이 물 분사 시스템',
    feature3: '대용량 (최대 3kg의 커피)',
    feature4: '정밀 제어를 위한 디지털 입력',
    imageCaption: '콜드브루 머신 이미지',
    contactUs: '문의하기',
    name: '이름',
    email: '이메일',
    message: '메시지',
    send: '보내기',
  },
  en: {
    title: 'Advanced Cold Brew Machine',
    home: 'Home',
    features: 'Features',
    specs: 'Specifications',
    contact: 'Contact',
    heroTitle: 'Revolutionary Cold Brew Technology',
    heroSubtitle: 'Experience the perfect cold brew with our advanced machine',
    learnMore: 'Learn More',
    keyFeatures: 'Key Features',
    feature1: 'Refrigerated, sealed extraction',
    feature2: 'Spray water distribution system',
    feature3: 'Large capacity (up to 3kg of coffee)',
    feature4: 'Digital input for precise control',
    imageCaption: 'Image of the Cold Brew Machine',
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
  },
  fr: {
    title: 'Machine à Café Froid Avancée',
    home: 'Accueil',
    features: 'Caractéristiques',
    specs: 'Spécifications',
    contact: 'Contact',
    heroTitle: 'Technologie Révolutionnaire de Café Froid',
    heroSubtitle: 'Découvrez le café froid parfait avec notre machine avancée',
    learnMore: 'En Savoir Plus',
    keyFeatures: 'Caractéristiques Principales',
    feature1: 'Extraction réfrigérée et scellée',
    feature2: 'Système de distribution d\'eau par pulvérisation',
    feature3: 'Grande capacité (jusqu\'à 3 kg de café)',
    feature4: 'Entrée numérique pour un contrôle précis',
    imageCaption: 'Image de la Machine à Café Froid',
    contactUs: 'Contactez-nous',
    name: 'Nom',
    email: 'E-mail',
    message: 'Message',
    send: 'Envoyer',
  },
  ja: {
    title: '先進的なコールドブリューマシン',
    home: 'ホーム',
    features: '特徴',
    specs: '仕様',
    contact: 'お問い合わせ',
    heroTitle: '革新的なコールドブリュー技術',
    heroSubtitle: '当社の先進的なマシンで完璧なコールドブリューを体験してください',
    learnMore: '詳細を見る',
    keyFeatures: '主な特徴',
    feature1: '冷蔵密閉抽出',
    feature2: 'スプレー式水分配システム',
    feature3: '大容量（最大3kgのコーヒー）',
    feature4: '精密制御のためのデジタル入力',
    imageCaption: 'コールドブリューマシンの画像',
    contactUs: 'お問い合わせ',
    name: '名前',
    email: 'メールアドレス',
    message: 'メッセージ',
    send: '送信',
  },
};

const LanguageSelector = ({ setLanguage }) => (
  <div className="absolute top-0 right-0 p-4">
    {Object.entries(languages).map(([code, { flag, name }]) => (
      <button key={code} onClick={() => setLanguage(code)} className="mx-1">
        {flag} {name}
      </button>
    ))}
  </div>
);

const Header = ({ t }) => (
  <header className="bg-blue-600 text-white p-4 relative">
    <h1 className="text-2xl font-bold">{t.title}</h1>
    <nav className="mt-2">
      <a href="#home" className="mr-4">{t.home}</a>
      <a href="#features" className="mr-4">{t.features}</a>
      <a href="#specs" className="mr-4">{t.specs}</a>
      <a href="#contact" className="mr-4">{t.contact}</a>
    </nav>
  </header>
);

const Hero = ({ t }) => (
  <section className="bg-gray-100 p-8 text-center">
    <h2 className="text-3xl font-bold mb-4">{t.heroTitle}</h2>
    <p className="mb-4">{t.heroSubtitle}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">{t.learnMore}</button>
  </section>
);

const Features = ({ t }) => (
  <section className="p-8">
    <h2 className="text-2xl font-bold mb-4">{t.keyFeatures}</h2>
    <ul className="list-disc pl-5">
      <li>{t.feature1}</li>
      <li>{t.feature2}</li>
      <li>{t.feature3}</li>
      <li>{t.feature4}</li>
    </ul>
  </section>
);

const ImageSection = ({ t }) => (
  <section className="bg-gray-200 p-8 text-center">
    <Camera size={48} className="mx-auto mb-4" />
    <p>{t.imageCaption}</p>
  </section>
);

const Contact = ({ t }) => (
  <section className="p-8">
    <h2 className="text-2xl font-bold mb-4">{t.contactUs}</h2>
    <form>
      <input type="text" placeholder={t.name} className="block w-full mb-2 p-2 border rounded" />
      <input type="email" placeholder={t.email} className="block w-full mb-2 p-2 border rounded" />
      <textarea placeholder={t.message} className="block w-full mb-2 p-2 border rounded"></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{t.send}</button>
    </form>
  </section>
);

const HomePage = () => {
  const [language, setLanguage] = useState('ko');
  const t = translations[language];

  return (
    <div>
      <LanguageSelector setLanguage={setLanguage} />
      <Header t={t} />
      <Hero t={t} />
      <Features t={t} />
      <ImageSection t={t} />
      <Contact t={t} />
    </div>
  );
};

export default HomePage;
