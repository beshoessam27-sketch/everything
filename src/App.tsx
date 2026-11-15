/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Trigger Git Update: v1.0.1 - Ensuring all public/ folder assets are synchronized correctly!

import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Heart, Sparkles, ChevronDown, Flame, X } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

// Robust component to handle case/naming mismatches for image deployments (Git/Vercel)
interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackUnsplash?: string;
}

const ResilientImage: React.FC<ResilientImageProps> = ({ src, fallbackUnsplash, className, alt, ...props }) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  
  const candidates = useMemo(() => {
    if (!src) return [];
    const list: string[] = [src];
    
    // Auto generate all common extension variants for resilient self-healing
    if (src.endsWith('.jpeg') && !src.endsWith('.jpg.jpeg')) {
      list.push(src.replace('.jpeg', '.jpg.jpeg'));
    }
    if (src.endsWith('.jpg.jpeg')) {
      list.push(src.replace('.jpg.jpeg', '.jpeg'));
    }
    if (src.endsWith('.jpeg')) {
      list.push(src.replace('.jpeg', '.jpg'));
    }
    if (src.endsWith('.jpg')) {
      const parent = src.slice(0, -4);
      list.push(parent + '.jpeg');
      list.push(parent + '.jpg.jpeg');
    }
    if (src.endsWith('.png')) {
      list.push(src.replace('.png', '.jpg'));
      list.push(src.replace('.png', '.jpeg'));
    }
    
    // Curated high quality Backup Fallbacks (in case local assets are missing on Vercel)
    if (fallbackUnsplash) {
      list.push(fallbackUnsplash);
    } else {
      // General lovely romantic placeholders
      list.push("https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800");
    }
    
    return Array.from(new Set(list));
  }, [src, fallbackUnsplash]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (candidateIndex < candidates.length - 1) {
      console.log(`Failed loading ${candidates[candidateIndex]}, attempting fallback: ${candidates[candidateIndex + 1]}`);
      setCandidateIndex(prev => prev + 1);
    } else {
      console.error(`All image fallbacks failed for ${src}`);
      if (props.onError) {
        props.onError(e);
      }
    }
  };

  useEffect(() => {
    setCandidateIndex(0);
  }, [src]);

  return (
    <img
      src={candidates[candidateIndex]}
      className={className}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

// --- CUSTOMIZABLE DATA ---
const BIRTHDAY = "2/6/2009";
const ANNIVERSARY = "7/1/2023";
const SANDY_NAME = "ساندي";
const DAYS_SINCE = 1243;
const START_DATE_TEXT = "January 7th, 2023";
const BG_MUSIC_PATH = "/song.mp3";
const PLAYLIST = [
  "/song.mp3",
  "/song.2.mp3",
  "/song.3.mp3"
];

// === الوقت المجمّد عند يوم الاثنين 9 نوفمبر 2026 ===
const _FROZEN_START = new Date("2023-01-07T19:00:00");
const _FROZEN_END   = new Date("2026-11-09T00:00:00");
const FROZEN_TIME = (() => {
  let y = _FROZEN_END.getFullYear() - _FROZEN_START.getFullYear();
  let m = _FROZEN_END.getMonth()    - _FROZEN_START.getMonth();
  let d = _FROZEN_END.getDate()     - _FROZEN_START.getDate();
  let h = _FROZEN_END.getHours()    - _FROZEN_START.getHours();
  let min = _FROZEN_END.getMinutes() - _FROZEN_START.getMinutes();
  let s = _FROZEN_END.getSeconds()  - _FROZEN_START.getSeconds();
  if (s   < 0) { s   += 60; min--; }
  if (min < 0) { min += 60; h--;   }
  if (h   < 0) { h   += 24; d--;   }
  if (d   < 0) { d += new Date(_FROZEN_END.getFullYear(), _FROZEN_END.getMonth(), 0).getDate(); m--; }
  if (m   < 0) { m   += 12; y--;   }
  const totalDays = Math.floor((_FROZEN_END.getTime() - _FROZEN_START.getTime()) / (1000 * 60 * 60 * 24));
  return { totalDays, y, m, d, h, min, s };
})();

const REASONS = [
  "بتضحكيني حتى في أصعب أيامي",
  "واقفه في ضهري مهما حصل",
  "ضحكتك بتنور دنيتي",
  "بحب اهتمامك بكل تفصيلة",
  "بتخليني عايز أكون أحسن عشانك",
  "ببقى على طبيعتي معاكي دايما",
  "بتخلي أي لحظة عادية تبقى مميزة",
  "بتلهميني كل يوم",
  "بتسمعيني في أكتر وقت بكون محتاج فيه ده",
  "بتشوفي أحلى ما فيا",
  "بحب الطريقة اللي بتحسسيني بيها إني محبوب",
  "أحلى حضن في الدنيا",
  "إنتي بيتي ومكاني الآمن",
  "بنضحك على نفس الحاجات",
  "إنتي أعز أصحابي وشريكة حياتي",
  "بحب نظرتك ليا",
  "قبلاني زي مانا بكل عيوبي",
  "بتحسسيني إن ليا قيمة كبيرة",
  "دايما موجودة جنبي لما بحتاجلك",
  "بتحسسيني إني مميز كل يوم",
  "بتفتكري أصغر التفاصيل عني",
  "إنتي السكن والراحة ليا",
  "بتحسسيني بحبك بمليون طريقة",
  "بتخليني أحلم بأحلام أكبر",
  "بنعرف نتكلم في أي حاجة وكل حاجة",
  "أكتر حد بحب أقضي وقتي معاه",
  "بتسامحيني حتى لما بغلط",
  "نصيحتك دايما هي الأصح",
  "روحك أجمل روح شوفتها",
  "بحب خوفك عليا واهتمامك بيا",
  "بتضحكيني لحد ما بطني توجعني",
  "بحب الحياة اللي بنبنيها سوا",
  "كل يوم معاكي هو هدية من ربنا",
  "بتشجعيني أحقق أحلامي",
  "خفة دمك اللي مفيش زيها",
  "أنقى وأجدع شخصية عرفتها",
  "إنتي السبب اللي مخليني أصدق في الحب",
  "وجودك بس بيخلي كل حاجة أحسن",
  "بحس إني كامل وإنتي جنبي",
  "قلبك كبير وبتهتمي بالكل",
  "بحس إني محظوظ بيكي كل يوم",
  "بحب الهزار والكلمات اللي بيننا بس",
  "بقدر أحكيلك كل اللي جوايا ف",
  "مابتسيبينيش أواجه أي حاجة لوحدي",
  "حبك ليا ملهوش حدود",
  "بتخليني أبتسم من غير أي مجهود",
  "إنتي السند وقت الشدة",
  "علمتيني يعني إيه حب حقيقي",
  "بتفهميني من غير ما أتكلم",
  "كلامك بيطمن قلبي وبيريحني",
  "بحب  خوفك عليا",
  "مابتتصنعيش وبتحبي تكوني نفسك",
  "كل لحظة معاكي فيها سحر خاص",
  "بتعرفيني أكتر من أي حد في الدنيا",
  "بتقدري الحاجات البسيطة اللي بعملها",
  "مابتتخليش عني أبداً مهما حصل",
  "قلبك ده دهب صافي",
  "الحب معاكي سهل ومريح",
  "بتنوري أيامي الضلمة",
  "مآنسة وحدتي ومليالي قلبي بالحب"
]; // تم التعديل ليناسب اسم ملفك الحالي

const STORY_TEXT = `حبيتك من اول نظرة عيني شافتها ليكي .. حتي منغير م اعرفك ولا اعرف اسمك ولا اعرف اي حاجه عنك.. جمالك اليوم ده كان كفاية يخليني مبطلش تفكير كان كفاية انو يخليني اقول لنفسي ازاي في حد بالجمال ده .. انا متوقعتش اننا نتكلم او ممكن نعرف بعض ولا ان القلب ممكن يحب حد ميعرفوش بس كل اللي اعرفه ان حسيت احساس كنت اول مرة احسه 🫂.. و بصراحه مكملتش نص ساعه و حسيت احساس مش اول مرة احسه بس لا ده احساس عمره م هيتكرر تاني طول حياتي اول م جيتي ورايا و ناديتي عليا.. اول م بصيتلك عرفت ان انتي اللي وقعت ف حب جمالها بس اللي معرفتوش ان احنا عارفين بعض اصلا🫂❤.. ازاي ممكن ده يحصل وازاي في صدف كدا  .. انا لو فضلت اوصف ف جمالك عمري كله مش هديكي حقك..  من بعد اليوم ده و انا حياتي كلها اتغيرت و بتاكد من ده لحد اللحظة اللي بكتب فيها الكلام ده... من يومها ونا حاسس ب اكتفاء غريب و كل يوم اكتفائي بيكي بيزيد اكن لو الدنيا كلها اختفت و مفاضلش غيرك يبقي الدنيا لسه موجودة ❤
عيشت احلي سنيني معاكي و لسه هعيش احلي سنين عمري اللي جاي ونتي معايا.. هتفضلي اجمل حاجه حصلتلي و اجمل حاجه ربنا بعتهالي ، انا بحبك اوي يا ${SANDY_NAME} و هفضل احبك طول العمر`;

const RoseDecoration = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="currentColor"
  >
    <path d="M50 30c-5-15-25-15-25 0 0 15 25 35 25 35s25-20 25-35c0-15-20-15-25 0z" />
    <path d="M50 35c-3-8-15-8-15 0 0 8 15 20 15 20s15-12 15-20c0-8-12-8-15 0z" opacity="0.6" />
    <circle cx="50" cy="85" r="3" />
    <path d="M50 65v20" stroke="currentColor" strokeWidth="1" />
    <path d="M50 75c-5 0-10-5-10-5M50 70c5 0 10-5 10-5" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

const JOURNEY_MEMORIES = [
  {
    id: 1,
    date: "7/1/2023",
    title: "بداية الحكاية",
    description: "اول يوم شفتك فيه، اليوم اللي غير حياتي كلها وخلاني اعرف معنى الحب بجد.\n(معلش بقا مفيش صورة حقيقية عشان لسه اول يوم 😂)",
    image: "/first_meet.jpeg",
    secretButtonText: "افتحي دي",
    secretMessage: "وجودك هو أجمل بداية لكل شيء في حياتي ❤️",
  },
  {
    id: 2,
    date: "17/2/2023",
    title: "اول فلانتين",
    description: "اول مقابلة و اول فلانتين و اول خناقة و اول حضن .. بحبك اوي",
    image: "/second_meet.jpeg",
    secretButtonText: "دوسي هنا",
    secretMessage: "كل لحظة معاكي هي عيد حب حقيقي ليا 🌹",
  },
  {
    id: 3,
    date: "4/4/2023",
    title: "Memories",
    description: "ضحكتك في اليوم ده كانت منورة الدنيا، وكل صورة ليكي محفورة في قلبي.",
    image: "/third_meet.jpeg",
    secretButtonText: "مش كل مرة هقولك افتحي دي",
    secretMessage: "ضحكتك بتخطف قلبي كل يوم من أول وجديد ✨",
  },
  {
    id: 4,
    date: "9/11/2023",
    title: "يوم بتحبيه",
    description: "اليوم ده انتي بتحبيه عشان كنتي خايفه و لما كلمتيني جيتلك علطول و مسكت ايدك طمنتك و شوفت عيونك قد اي كانت مبسوطة .. انا دايما جمبك",
    image: "/fourth_meet.jpeg",
    secretButtonText: "فتحي مخك و شوفي انا كاتبلك اي هنا",
    secretMessage: "انتي مش بس حبيبتي، انتي بنتي وأماني وكل دنيتي 🥺",
  },
  {
    id: 5,
    date: "12/8/2025",
    title: "أجمل ما رأت عيني",
    description: "عمري م شوفت ولا هشوف اجمل منك",
    image: "/fifth_meet.jpeg",
    secretButtonText: "طب شوفي دي كده",
    secretMessage: "عيني متشوفش غيرك لأن مفيش أجمل منك أبداً 💖",
  },
  {
    id: 6,
    date: "7/1/2026",
    title: "عنيكي بحر غريق",
    description: "حد يلحقني عشان بغرق 😂❤️",
    image: "/sixth_meet.jpeg",
    secretButtonText: "اضغطي بقلبك مش بإيدك",
    secretMessage: "أنا غرقان فيكي ومبسوط إني مش لاقي طوق نجاة 🌊",
  },
  {
    id: 7,
    date: "2/9/2025",
    title: "جمال ميتوصفش",
    description: "كل م ابص عليكي اقع ف حب جمالك من اول و جديد",
    image: "/seventh_meet.jpeg",
    secretButtonText: "افتحيها بسرررعة",
    secretMessage: "هفضل أقع في حبك كل يوم وكأنها أول مرة 😍",
  },
  {
    id: 8,
    date: "28/3/2026",
    title: "أحلى عيد ميلاد",
    description: "ده احلي عيد ميلاد اتعملي فحياتي .. دايما بتعملي كل حاجه تفرحني .. انا بحبك اوي",
    image: "/eighth_meet.jpeg",
    secretButtonText: "آخر رسالة مؤقتاً",
    secretMessage: "كل سنة وانتي أقرب الناس لقلبي وروحي، بحبك 🎂❤️",
  },
];

const SecretMessage = ({ buttonText, message }: { buttonText: string, message: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-5/12 flex items-center justify-center mt-8 md:mt-0 relative z-20">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="button"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-pink-300 text-pink-600 px-6 py-3 rounded-2xl font-arabic font-bold shadow-md hover:bg-pink-50 transition-colors"
            dir="rtl"
          >
            💌 {buttonText}
          </motion.button>
        ) : (
          <motion.div
            key="message"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-pink-50/95 backdrop-blur-md p-5 rounded-2xl border border-pink-300 shadow-lg text-center w-full max-w-sm"
            dir="rtl"
          >
            <p className="text-pink-800 font-arabic font-semibold text-lg leading-relaxed">
              {message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// === مكوّن المطر ===
const Rain = React.memo(() => {
  const drops = React.useMemo(() =>
    [...Array(55)].map((_, i) => ({
      left:     `${((i * 1.82) % 100).toFixed(2)}%`,
      height:   `${45 + (i * 29 % 90)}px`,
      duration: `${(0.55 + (i * 0.037 % 0.75)).toFixed(2)}s`,
      delay:    `${((i * 0.13) % 2.8).toFixed(2)}s`,
      alpha:    (0.12 + (i % 6) * 0.05).toFixed(2),
      width:    i % 5 === 0 ? '1.5px' : '1px',
    })), []
  );
  return (
    <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none', zIndex:1 }}>
      {drops.map((d, i) => (
        <div key={i} style={{
          position: 'absolute', top: 0, left: d.left,
          width: d.width, height: d.height,
          background: `linear-gradient(to bottom, transparent, rgba(160,180,230,${d.alpha}))`,
          animation: `rainDrop ${d.duration} ${d.delay} infinite linear`,
          borderRadius: '0 0 2px 2px',
        }} />
      ))}
    </div>
  );
});

const LiveCounter = () => {
  // === عداد حي بيعدّ من يوم الانفصال (9/11/2026) لحد دلوقتي ===
  const breakupDate = new Date("2026-11-09T00:00:00");

  const calcElapsed = () => {
    const now = new Date();
    const diff = Math.max(0, now.getTime() - breakupDate.getTime());
    const totalSecs = Math.floor(diff / 1000);
    const s   = totalSecs % 60;
    const min = Math.floor(totalSecs / 60) % 60;
    const h   = Math.floor(totalSecs / 3600) % 24;
    const d   = Math.floor(totalSecs / 86400);
    return { d, h, min, s };
  };

  const [elapsed, setElapsed] = useState(calcElapsed);

  useEffect(() => {
    const id = setInterval(() => setElapsed(calcElapsed()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-8 md:gap-14" dir="rtl">
        {[
          { label: 'يوم',   value: elapsed.d   },
          { label: 'ساعة',  value: elapsed.h   },
          { label: 'دقيقة', value: elapsed.min },
          { label: 'ثانية', value: elapsed.s   },
        ].map((unit, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <span
              className="font-mono tabular-nums"
              style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', fontWeight: 300, color: 'rgba(220,185,208,0.88)', letterSpacing: '0.04em', lineHeight: 1 }}
            >
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="font-arabic text-xs" style={{ color: 'rgba(180,140,165,0.5)', letterSpacing: '0.08em' }}>
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};


const GALLERY_PHOTOS = [
  { id: 1, src: "/gallery1.jpeg", label: "بالدنيا" },
  { id: 2, src: "/gallery2.jpeg", label: "ايدك" },
  { id: 3, src: "/gallery3.jpeg", label: "ومسكة" },
  { id: 4, src: "/gallery4.jpeg", label: "جمبي" },
  { id: 5, src: "/gallery5.jpeg", label: "وجودك" },
];

const LOVE_LETTER = `كل يوم بفضل اشكر ربنا عليكي و عارف ان مهما عملت مش هوفيكي حقك .. انا عيشت معاكي اجمل سنين عمري و عارف ان سنيني الجاية معاكي كلها حب عارف ان معايا ست البنات .. الكلام عمره م هيعبر عن اللي انا حاسس بيه مفيش غير ان اشوفك دلوقتي و اخدك ف حضني و اغمض عيني و انسي نفسي ونا ف حضنك .. انا مش عايز من الدنيا غيرك و هفضل احاول عشانك عمري كله عشان انا مش عايز حياتي تكمل غير بيكي .. حياتي منغيرك ملهاش معني ولا ليها لازمة  انا بحبك اوي يبنوتي و هفضل احبك عمري كله ...`;

const BOOK_PAGES = [
  {
    id: 1,
    image: "/book1.jpeg",
    text: "شايفه قد ايه انتي جميلة 🥹\nبجد جمالك ميتوصفش ولا ضحكتك ولا هعرف اقولك قد اي كل م ابص عليكي قلبي يتنطط من الفرحه.. حقيقي بحبك 🥹❤",
  },
  {
    id: 2,
    image: "/book2.jpeg",
    text: "بفضل ابص عليكي وعلي ملامحك و اقول ازاي ممكن يكون في حد عنده كل التفاصيل و الجمال ده..\nببقي عايز انط جوا الموبايل واخدك فحضني وافضل ابوس فيكي 🥲🫂",
  },
  {
    id: 3,
    image: "/book3.jpeg",
    text: "الكون كله ف كفة ونتي ف كفة لوحدك..\nانتي دايما ف الكفة الكسبانه يتاج راسي.. انا بعشقك يكل الدنيا 🥹🌍",
  },
  {
    id: 4,
    image: "/book4.jpeg",
    text: "انا بجد مشوفتش جمال كدت فحياتي.. خفي عليا شوية بقا انا قلبي الصغير لا يتحمل 🥹🫂\nانا يبختي اخدت حظي اللي من الدنيا كلو فيكي انتي 🥹🫂🌍",
  },
];

const LoveEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.8 }}
            className="relative w-full cursor-pointer group"
            onClick={() => setIsOpen(true)}
          >
            {/* Envelope body */}
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, #fff0f4, #ffe4ec)',
                boxShadow: '0 20px 60px rgba(200,80,100,0.2), 0 4px 15px rgba(0,0,0,0.1)',
                paddingBottom: '65%',
              }}
            >
              {/* Envelope back flap (bottom triangle) */}
              <div className="absolute bottom-0 left-0 right-0 z-10"
                style={{
                  height: '55%',
                  background: 'linear-gradient(160deg, #ffd0dc, #ffb8c8)',
                  clipPath: 'polygon(0 100%, 50% 0, 100% 100%)'
                }}
              />
              {/* Left triangle */}
              <div className="absolute top-0 left-0 bottom-0 z-10"
                style={{
                  width: '51%',
                  background: 'linear-gradient(135deg, #ffc5d3, #ffb0c0)',
                  clipPath: 'polygon(0 0, 100% 50%, 0 100%)'
                }}
              />
              {/* Right triangle */}
              <div className="absolute top-0 right-0 bottom-0 z-10"
                style={{
                  width: '51%',
                  background: 'linear-gradient(225deg, #ffc5d3, #ffb0c0)',
                  clipPath: 'polygon(100% 0, 0 50%, 100% 100%)'
                }}
              />

              {/* Top flap (closed) */}
              <motion.div
                className="absolute top-0 left-0 right-0 z-30 origin-top"
                animate={{ rotateX: 0 }}
                style={{
                  height: '55%',
                  background: 'linear-gradient(170deg, #ffe0e8, #ffc8d5)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  boxShadow: '0 4px 12px rgba(200,80,100,0.15)'
                }}
              />

              {/* Wax seal with rose */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-1">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                  style={{ background: 'radial-gradient(circle, #b91c1c, #7f1d1d)' }}
                >
                  <RoseDecoration className="w-10 h-10 text-red-200" />
                </div>
              </div>

              {/* "Open it, my lady" text */}
              <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center z-40">
                <p className="font-serif italic text-rose-700/70 text-base tracking-widest">
                  Open it, my lady
                </p>
              </div>
            </div>

            {/* Hover hint */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-center mt-4 text-pink-400 font-arabic text-sm"
            >
              ✉️ دوسي هنا ينور عيني
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            className="relative w-full"
          >
            {/* Letter paper */}
            <div
              className="relative rounded-3xl p-8 md:p-12"
              style={{
                background: 'linear-gradient(135deg, #fff9f5, #fff0f4)',
                boxShadow: '0 20px 60px rgba(200,100,120,0.2), inset 0 1px 1px rgba(255,255,255,0.9)',
              }}
            >
              {/* Fold corner */}
              <div className="absolute top-0 right-0 w-10 h-10"
                style={{
                  background: 'linear-gradient(225deg, #ffd0dc 50%, transparent 50%)',
                  borderTopRightRadius: '1.5rem'
                }}
              />
              {/* Rose on corner */}
              <div className="absolute -top-3 -right-3 z-10">
                <div className="text-red-600 drop-shadow-lg">
                  <RoseDecoration className="w-12 h-12" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px flex-1 bg-gradient-to-l from-pink-300 to-transparent" />
                <Heart size={18} fill="#f43f5e" className="text-rose-500" />
                <span className="font-serif italic text-[#7a6558]">الي معشوقتي ساندي</span>
                <Heart size={18} fill="#f43f5e" className="text-rose-500" />
                <div className="h-px flex-1 bg-gradient-to-r from-pink-300 to-transparent" />
              </div>

              <p
                dir="rtl"
                className="text-lg md:text-xl leading-[2.3] text-[#5c4a43] font-arabic text-center whitespace-pre-line"
              >
                {LOVE_LETTER}
              </p>

              <div className="mt-8 flex flex-col items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.15, 1], filter: ['drop-shadow(0 0 0px #ef4444)', 'drop-shadow(0 0 8px #ef4444)', 'drop-shadow(0 0 0px #ef4444)'] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart fill="#ef4444" className="text-red-500" size={32} />
                </motion.div>
                <span className="font-serif italic text-[#7a6558]/70 text-sm tracking-widest">Forever & Always — Besho</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BookViewer = ({ onBack }: { onBack: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = BOOK_PAGES.length;

  const goNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(p => p + 1);
  };

  const goPrev = () => {
    if (currentPage > 0) setCurrentPage(p => p - 1);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* ── CLOSED BOOK COVER ── */
          <motion.div
            key="cover"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ rotateY: -110, opacity: 0, transformOrigin: 'left center' }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full max-w-sm cursor-pointer perspective-1000"
            onClick={() => setIsOpen(true)}
          >
            {/* 3D Book Container */}
            <div className="relative group transition-transform duration-500 hover:rotate-y-[-10deg]">

              {/* Stacked Pages Effect (Thickness) */}
              <div className="absolute right-[-8px] top-[4px] bottom-[4px] w-4 bg-[#f5f0e8] rounded-r-sm shadow-md border-y border-r border-[#dcd4c0]"
                style={{ backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0px, rgba(0,0,0,0.05) 1px, transparent 2px)' }} />

              {/* Cover hinge/spine area */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-black/10 z-20 pointer-events-none rounded-l-xl"
                style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.2) 0%, transparent 100%)' }} />

              {/* Main Cover */}
              <div className="relative rounded-xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.7)] border-l-2 border-black/20" style={{ minHeight: '450px' }}>
                {/* Background Image */}
                <ResilientImage
                  src="/my_new_cover.jpeg"
                  className="absolute inset-0 w-full h-full object-cover"
                  fallbackUnsplash="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800"
                />

                {/* Book Texture Overlay */}
                <div className="absolute inset-0 bg-white/5 pointer-events-none mix-blend-overlay" />

                {/* Subtle Gold border */}
                <div className="absolute inset-4 border border-white/20 rounded-lg pointer-events-none z-10" />

                {/* Cover content - Positioned at bottom */}
                <div className="absolute inset-x-0 bottom-10 z-20 px-8 text-center">
                  <p className="text-white font-arabic italic text-sm md:text-base drop-shadow-[0_2px_10px_rgba(0,0,0,1)] font-medium">
                    افتحي الكتاب عشان تشوفي قد ايه انتي جميلة
                  </p>
                  <div className="w-16 h-[2px] bg-amber-400/50 mx-auto mt-3 shadow-lg" />
                </div>
              </div>

              {/* Cover edge highlight */}
              <div className="absolute inset-0 border-l border-white/30 rounded-xl pointer-events-none z-30" />
            </div>

            {/* Hint text */}
            <motion.p
              animate={{ opacity: [0.4, 1, 0.4], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="text-center mt-8 text-amber-300 font-arabic text-sm drop-shadow-md"
            >
              📖 دوسي على الكتاب عشان تفتحيه
            </motion.p>
          </motion.div>
        ) : (
          /* ── OPEN BOOK PAGES ── */
          <motion.div
            key="pages"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full flex flex-col items-center gap-6"
          >
            {/* Page counter */}
            <p className="text-amber-300/60 font-serif italic text-sm tracking-widest">
              Page {currentPage + 1} of {totalPages}
            </p>

            {/* Page card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
              >
                {/* Photo */}
                <div
                  className="w-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-amber-100/10 mb-6"
                  style={{ aspectRatio: '4/5' }}
                >
                  <ResilientImage
                    src={BOOK_PAGES[currentPage].image}
                    alt={`Page ${currentPage + 1}`}
                    className="w-full h-full object-cover"
                    fallbackUnsplash="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800"
                  />
                </div>

                {/* Caption */}
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,245,220,0.10), rgba(255,200,150,0.06))',
                    border: '1px solid rgba(200,160,100,0.25)',
                  }}
                >
                  <RoseDecoration className="w-6 h-6 text-rose-400 mx-auto mb-4" />
                  <p
                    dir="rtl"
                    className="text-amber-50/90 font-arabic text-lg md:text-xl leading-[2] whitespace-pre-line"
                  >
                    {BOOK_PAGES[currentPage].text}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-8 mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goPrev}
                disabled={currentPage === 0}
                className="w-12 h-12 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-300 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-amber-400/10 transition-colors"
              >
                ‹
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {BOOK_PAGES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`rounded-full transition-all duration-300 ${i === currentPage ? 'w-6 h-2 bg-amber-400' : 'w-2 h-2 bg-amber-400/30'}`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goNext}
                disabled={currentPage === totalPages - 1}
                className="w-12 h-12 rounded-full border border-amber-400/40 flex items-center justify-center text-amber-300 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-amber-400/10 transition-colors"
              >
                ›
              </motion.button>
            </div>

            {/* Last page ending */}
            {currentPage === totalPages - 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-6 mt-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Heart fill="#ef4444" className="text-red-500" size={32} />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window as any).setGlobalView("reasons")}
                  className="bg-rose-500 text-white px-8 py-3 rounded-full font-arabic text-sm shadow-lg flex items-center gap-2"
                >
                  بحب فيكي إيه؟ <Sparkles size={16} />
                </motion.button>
              </motion.div>
            )}

            {/* Back link */}
            <button
              onClick={onBack}
              className="mt-4 text-[10px] uppercase tracking-[0.3em] text-amber-300/30 hover:text-amber-300/70 transition-colors"
            >
              Back to gallery
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IntimateWhisperCard = ({ title, desc }: { title: string; desc: string }) => {
  const [revealed, setRevealed] = useState(false);
  return (
    <motion.div
      onClick={() => setRevealed(!revealed)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="h-44 md:h-52 bg-gradient-to-br from-rose-950/50 to-purple-950/50 border border-rose-900/40 rounded-3xl p-4 flex flex-col items-center justify-center text-center cursor-pointer shadow-lg relative overflow-hidden transition-all duration-300"
    >
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="front"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-rose-900/60 flex items-center justify-center text-rose-300">
              💋
            </div>
            <span className="font-arabic font-bold text-rose-200 text-lg leading-relaxed">
              {title}
            </span>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-full h-full flex items-center justify-center p-1"
          >
            <p className="font-arabic text-rose-100 text-sm leading-relaxed text-center" dir="rtl">
              {desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- SENSUAL DATA FOR THE DYNAMIC EXPLORER ---
const SENSUAL_SECTIONS = {
  features: {
    title: "ملامحكِ الفاتنة الساحرة ✨",
    subtitle: "كل ملمح في وجهك هو لوحة مرسومة بالجمال والدلال والأنوثة الطاغية...",
    spots: [
      {
        id: "feat-beauty",
        label: "الجمال الطاغٍ 🌍🌹",
        title: "جمالكِ الساحر",
        content: "مهما بالغت في وصفك و مهما ازداد بي الحديث لن اصل الي وصف قطرة من قطرات بحر جمالك.. ❤️‍🩹\nانتي يا فتاتي الصغيرة اجمل و أرق و الطف انسانة عرفتها يوماً .. انتي فتاتي الجميلة 🌍🌹\nسأقول في جمالك ما لم يوفيه حقه لكني سأحاول ان أُجدي نفعاً..✨"
      },
      {
        id: "feat-hair",
        label: "شعرُكِ الحريري 💇‍♀️",
        title: "خصلات الليل المنسابة",
        content: "سوف ابدأ من شعرك الناعم الذي يبهرني كل مرة آراه فيها مثلما ابهرني في اول لقاء لنا، ذلك الشعر الناعم الحريري البني..  علي كتفيك ينساب الليل كأن النجوم تاهت فيه شعرك نهر من الليل انا اسبح فيه واغرق فيه و احترق 💗"
      },
      {
        id: "feat-eyes",
        label: "عينيكِ الآسرة 👀",
        title: "بحر عينيكِ الواسع",
        content: "أما عن عينيكي فهي صحراء اكون متعطش لها في ذروة النهار و اتوه فيها عندما يحل الليل انظر الي عينيكي و انسي من اكون.. لا أمّل النظر اليها فهي جذابة اقل ما يقال عنها عيناكِ غابتا نخيلٍ ساعةَ السحرِ\nأو شرفتانِ راحَ ينأى عنهما القمرُ.. 🌍❤️‍🩹"
      },
      {
        id: "feat-lips",
        label: "شفتاكِ الكرزية 👄",
        title: "التهام شفتيكِ الفاتنة",
        content: "ثم انظر اللي شفتاكي و تملئني شهوتي و تأخذني الي ان التهمهم بفمي.. اقبلك بعنف حتي ينهار قلبك و تستسلمي و تسلمي لي باقي جسدك لكي افعل به ما تريده ذروتي ✨❤️ ."
      }
    ]
  },
  body: {
    title: "قوامكِ وجسدكِ المثير 🔥",
    subtitle: "تفاصيل جسدك الناري الممتلئ بالفتنة والإثارة التي تذيب روحي وعقلي...",
    spots: [
      {
        id: "body-breasts",
        label: "(بزازك)نهودك الكبيرة🍒",
        title: "صدركِ المثير ونقائه",
        content: "انظر الي نهودك الكبيرتين ثم اقترب منهم لاذوق طعم حليبك.. اضع حلماتك بين فمي و اظل امتصهم وانا متمسك بنهودك الناعمتين اضغط عليهم و اسحبك منهم بفمي.. اجعل لساني يَمر عليهم لاضع بصمتي ❤️‍🩹\nانا اعشق صدرك يا فتاتي المفضلة ❤️‍🩹🌍"
      },
      {
        id: "body-intimacy",
        label: "بين فخذيكِ (كسك) 🔞",
        title: "الأنوثة الطاغية وعالم المتعة الكاملة",
        content: "ثم انزل ب يدي لتصل الي منالها؟..  نعم اريد ما بين فخذيكي 🫂❤️‍🩹\nاضع اصابعي علي مهبلك و اتحسس حرارته.. اداعبه ب اصابعي و افركه وانا متمسك بنهودك .. أُدخل اصبعي بداخله لاكتشف اروع اماكن جسدك ثم اخرج اصبعي و اتذوق طعم مهبلك.. ما اروعه ❤️‍🩹\nما اجمل شفتاكي التي هي بين فخذيكي يا جميلتي.. سوف اخرج قضيبي لكي يتذوقها.. سوف اضع قضيبي في كسك الوردي يا عاهرتي الجميلة\nاريدك انا تجلسي عليه لكي اوريكي معني العنف و أري نهودك ترقص امامي🌍❤️‍🩹\nلا اريد ان اخرج قضيبي من كسك الي الابد.. اعشق جسدك اعشق نهودك ، مهبلك ، مؤخرتك الكبيرة.. ما اجمل جسدك يا عاهرتي 🫂"
      },
      {
        id: "body-butt",
        label: "مؤخرتُكِ البارزة 🍑",
        title: "مؤخرتكِ المثيرة وجنونها",
        content: "كل مرة انظر فيها الي مؤخرتك البارزة اتعجب و اقول ما اجملها.. اتمني لو اتحسسها الان و اضع اصبعي في منتصفها مثلما افعل دائما ❤️‍🩹\nاعشق ادخال قضيبي في مؤخرتك بعنف و اجعلك تتألمي🫦🌍"
      },
      {
        id: "body-passion",
        label: "الامتلاك الكامل والجنون 🫦",
        title: "سلمي لي جسدكِ بالكامل",
        content: "مهما بالغت في وصف جسدك الذي لن و لم اكتفي من رؤيته سأظل لم اصف شيئا بعد\nسلمي نفسك لي فقط بدون ملابس و سأجعلك تصرخين حباً\nدعيني انظر الي مهبلك البارز و اداعبه.. دعيني احرك نهودك الكبيرة و اراها ترقص دائما.. انحني امامي ل اري مؤخرتك تنفتح امامي ثم اُدخل قضيبي بها و امتطيكي مثلا فرسة جميلة ذات شعر حريري\nدعيني اتملك منك فقط يا محبوبتي ❤️‍🩹🫂\nاعشقك و اعشق جسدك يصغيرتي❤️‍🩹🫂"
      }
    ]
  }
};

const SensualExplorer = () => {
  const [activeSection, setActiveSection] = useState<"features" | "body">("features");
  const [selectedSpotId, setSelectedSpotId] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState<Record<string, boolean>>({});

  const handleSectionChange = (sec: "features" | "body") => {
    setActiveSection(sec);
    setSelectedSpotId(null);
  };

  const handleSpotClick = (spotId: string) => {
    setSelectedSpotId(spotId);
  };

  const toggleReveal = (spotId: string) => {
    setIsRevealed(prev => ({ ...prev, [spotId]: true }));
  };

  const activeSectionData = SENSUAL_SECTIONS[activeSection];
  const allSpots = [...SENSUAL_SECTIONS.features.spots, ...SENSUAL_SECTIONS.body.spots];
  const selectedSpot = allSpots.find(s => s.id === selectedSpotId);

  return (
    <div className="w-full flex flex-col items-center mt-2 max-w-4xl">
      {/* Interactive Tabs for Section Selection */}
      <div className="flex gap-2 p-1.5 bg-black/40 backdrop-blur-md rounded-full border border-rose-950/40 mb-8 z-10">
        <button
          onClick={() => handleSectionChange("features")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm md:text-base font-arabic font-bold transition-all duration-300 ${activeSection === "features"
            ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-600/30"
            : "text-rose-300 hover:text-rose-100 hover:bg-rose-950/20"
            }`}
        >
          <span>✨</span> ملامحكِ الفاتنة
        </button>
        <button
          onClick={() => handleSectionChange("body")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm md:text-base font-arabic font-bold transition-all duration-300 ${activeSection === "body"
            ? "bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-lg shadow-rose-600/30"
            : "text-rose-300 hover:text-rose-100 hover:bg-rose-950/20"
            }`}
        >
          <span>🔥</span> جسدكِ المثير
        </button>
      </div>

      {/* Main Content Area */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
        {/* Hotspots Buttons List */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-[2rem] border border-rose-950/50 shadow-xl flex flex-col h-full justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-arabic font-bold text-rose-300 mb-2 text-right" dir="rtl">
                {activeSectionData.title}
              </h3>
              <p className="text-pink-200/50 font-arabic text-xs leading-relaxed text-right mb-6" dir="rtl">
                {activeSectionData.subtitle}
              </p>

              <div className="flex flex-col gap-2.5">
                {activeSectionData.spots.map((spot) => {
                  const isSelected = selectedSpotId === spot.id;
                  const isOpened = isRevealed[spot.id];
                  return (
                    <motion.button
                      key={spot.id}
                      whileHover={{ scale: 1.02, x: -3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSpotClick(spot.id)}
                      className={`w-full p-3.5 rounded-xl flex items-center justify-between transition-all duration-300 border text-right font-arabic font-bold ${isSelected
                        ? "bg-gradient-to-r from-rose-900/50 to-pink-900/50 border-rose-500 text-rose-100 shadow-[0_0_12px_rgba(244,63,94,0.15)]"
                        : "bg-black/20 border-rose-950/30 text-rose-300 hover:bg-rose-950/20"
                        }`}
                      dir="rtl"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className={`text-lg ${isSelected ? "text-rose-400" : "text-rose-500/70"}`}>
                          {activeSection === "features" ? "🌹" : "💋"}
                        </span>
                        <span className="text-sm md:text-base font-semibold">{spot.label}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-rose-400/40 font-normal">
                          {isSelected ? "مفتوح" : isOpened ? "تم الكشف" : "استكشفي"}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${isSelected ? "bg-rose-500 animate-ping" : isOpened ? "bg-rose-500/60" : "bg-rose-950/80"}`} />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-2 items-center text-[10px] text-rose-500/40 uppercase tracking-[0.2em] font-serif">
              <span>{activeSection === "features" ? "FACIAL SELECTION" : "PHYSICAL SELECTION"}</span>
              <span>•</span>
              <span>BESHO & SASO</span>
            </div>
          </div>
        </div>

        {/* Detailed Sensual Reader Screen */}
        <div className="md:col-span-7 flex">
          <AnimatePresence mode="wait">
            {selectedSpot ? (
              <motion.div
                key={selectedSpot.id}
                initial={{ opacity: 0, scale: 0.97, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full bg-gradient-to-br from-rose-950/80 to-[#1b0307]/95 backdrop-blur-md p-6 md:p-8 rounded-[2rem] border border-rose-500/20 shadow-2xl flex flex-col justify-between relative overflow-hidden"
              >
                {/* Passion glows */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-[60px] pointer-events-none" />

                <div>
                  {/* Reader Header */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-rose-900/20">
                    <span className="text-[10px] text-rose-500/40 tracking-wider font-serif uppercase">
                      {activeSection === "features" ? "Sensual Features" : "Sensual Body"}
                    </span>
                    <div className="flex items-center gap-2 text-right" dir="rtl">
                      <span className="text-lg">{activeSection === "features" ? "✨" : "🔥"}</span>
                      <h4 className="text-lg md:text-xl font-arabic font-extrabold text-rose-300">
                        {selectedSpot.title}
                      </h4>
                    </div>
                  </div>

                  {/* Private Reveal Gate */}
                  {!isRevealed[selectedSpot.id] ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center py-10 text-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1], filter: ["drop-shadow(0 0 0px #ef4444)", "drop-shadow(0 0 10px #ef4444)", "drop-shadow(0 0 0px #ef4444)"] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-14 h-14 rounded-full bg-rose-900/40 border border-rose-500/30 flex items-center justify-center text-2xl mb-5 cursor-pointer hover:bg-rose-900/60 transition-colors"
                        onClick={() => toggleReveal(selectedSpot.id)}
                      >
                        💋
                      </motion.div>
                      <p className="font-arabic text-rose-200/90 text-sm md:text-base mb-4 leading-relaxed max-w-xs" dir="rtl">
                        هذا الجزء يحتوي على كلمات دافئة ومثيرة لكي وحدكِ... 🔞
                      </p>
                      <button
                        onClick={() => toggleReveal(selectedSpot.id)}
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-600 to-pink-600 hover:brightness-110 text-white font-arabic text-xs font-bold shadow-lg transition-all"
                      >
                        المسي هنا لكشف الشغف 🔥
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p
                        className="font-arabic text-rose-100/90 text-base md:text-lg leading-[2.1] text-right whitespace-pre-line"
                        dir="rtl"
                      >
                        {selectedSpot.content}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Reader Footer Controls */}
                <div className="mt-8 pt-3 border-t border-rose-900/10 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setSelectedSpotId(null)}
                    className="text-[10px] text-rose-400/40 hover:text-rose-400 font-arabic transition-colors"
                  >
                    إغلاق ✕
                  </button>
                  <div className="flex gap-1.5 items-center">
                    <Heart size={12} className="text-rose-500 fill-rose-500" />
                    <span className="text-[10px] text-rose-400/50 font-arabic" dir="rtl">
                      أعشق تفاصيلك بالكامل
                    </span>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Idle state - beautiful guidance screen */
              <motion.div
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full min-h-[300px] bg-black/15 backdrop-blur-sm border border-dashed border-rose-900/20 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center text-rose-300/40 hover:text-rose-300/60 transition-colors duration-500"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-full bg-rose-950/30 border border-rose-900/10 flex items-center justify-center text-2xl mb-4 text-rose-400/50 shadow-inner"
                >
                  💋
                </motion.div>
                <h4 className="text-base md:text-lg font-arabic font-bold text-rose-200/70 mb-1" dir="rtl">
                  شغف ينتظر الاكتشاف...
                </h4>
                <p className="font-arabic text-xs text-rose-400/40 max-w-[280px] leading-relaxed" dir="rtl">
                  اضغطي على أي ملمح أو جزء من القائمة لاستكشاف الكلمات الشغوفة التي تصف فتنتكِ وجسدكِ... 🔥
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const SURPRISE_PHOTOS = [
  "/lov1.jpeg",
  "/lov2.jpeg",
  "/lov3.jpeg",
  "/lov4.jpeg",
  "/lov5.jpeg",
  "/lov6.jpeg",
  "/lov7.jpeg",
  "/lov8.jpeg",
  "/lov9.jpeg",
  "/lov10.jpeg",
];

const ConfettiCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#f9bec7", "#ffd166", "#06d6a0", "#118ab2"];

    const createParticle = (x: number, y: number, isLaunch = false) => {
      return {
        x,
        y,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: isLaunch ? Math.random() * 12 - 6 : Math.random() * 4 - 2,
        speedY: isLaunch ? Math.random() * -15 - 5 : Math.random() * 3 + 1,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 10 - 5,
      };
    };

    // Initialize with a big burst
    for (let i = 0; i < 150; i++) {
      particles.push(createParticle(width / 4, height, true));
      particles.push(createParticle((3 * width) / 4, height, true));
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Continual gentle rain from top
      if (particles.length < 250 && Math.random() < 0.3) {
        particles.push(createParticle(Math.random() * width, -10));
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        // If it was a launch particle, gravity pulls it down. If it's a rain particle, it just floats down.
        if (p.speedY < 0) {
          p.speedY += 0.2;
        } else {
          p.speedY = Math.min(p.speedY + 0.05, 3); // terminal velocity
        }
        p.speedX *= 0.99; // air resistance
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();

        if (p.y > height + 20 || p.x < -20 || p.x > width + 20) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50 w-full h-full" />;
};

const StarryBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(80)].map((_, i) => {
        const size = Math.random() * 2.5 + 0.5;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        return (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        );
      })}
    </div>
  );
};

const BurstParticles = ({ x = 0, y = 0 }: { x?: number; y?: number }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
      {[...Array(60)].map((_, i) => {
        const angle = (i * 360) / 60 + Math.random() * 10;
        const distance = Math.random() * 200 + 100;
        const duration = Math.random() * 1.5 + 1.2;
        const color = ["#ff0055", "#ff5500", "#ffcc00", "#00ffcc", "#ff00ff", "#ff73a1"][i % 6];
        return (
          <motion.div
            key={i}
            initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
            animate={{
              scale: [0, 1.2, 0.6, 0],
              x: Math.cos((angle * Math.PI) / 180) * distance,
              y: Math.sin((angle * Math.PI) / 180) * distance,
              opacity: [1, 1, 0.8, 0],
            }}
            transition={{
              duration,
              ease: "easeOut",
            }}
            className="absolute w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}`, left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
          />
        );
      })}
    </div>
  );
};

const FloatingPhoto = ({ src, delay, side }: { src: string; delay: number; side: "left" | "right" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100vh", scale: 0.7, rotate: side === "left" ? -15 : 15 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: ["85vh", "-30vh"],
        scale: [0.7, 1, 1, 0.8],
        rotate: side === "left" ? [-15, 8, -8] : [15, -8, 8],
      }}
      transition={{
        duration: 16,
        delay,
        ease: "linear",
      }}
      className="absolute w-28 md:w-36 bg-white p-2 pb-6 shadow-2xl rounded-sm border border-pink-200 z-10 hidden sm:block"
      style={{
        left: side === "left" ? `${Math.random() * 12 + 4}%` : undefined,
        right: side === "right" ? `${Math.random() * 12 + 4}%` : undefined,
        top: 0,
      }}
    >
      <div className="w-full h-24 md:h-32 overflow-hidden bg-pink-50">
        <ResilientImage src={src} alt="Floating memory" className="w-full h-full object-cover" />
      </div>
      <div className="h-4 bg-white mt-2 flex items-center justify-center">
        <Heart size={10} fill="#f43f5e" className="text-rose-500 animate-pulse" />
      </div>
    </motion.div>
  );
};

const BirthdaySurprisePage = ({ onBack }: { onBack: () => void }) => {
  const [stage, setStage] = useState<"intro" | "credits" | "reveal">("intro");
  const [introIndex, setIntroIndex] = useState(0);
  const [wish, setWish] = useState("");
  const [wishSaved, setWishSaved] = useState(false);
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const introTexts = [
    "كل قصة حب بتبدأ بصدفة... ✨",
    "لكن حكايتنا كانت أجمل صدفة في حياتي كلها... ❤️",
    "ومن يوم ما دخلتي حياتي وكل ثانية فيها طعم تاني... 🥰",
    "والنهارده... بنحتفل بأجمل وأغلى يوم في السنة..."
  ];

  // Stage 1: Intro timing
  useEffect(() => {
    if (stage !== "intro") return;

    if (introIndex < introTexts.length) {
      const timer = setTimeout(() => {
        setIntroIndex((prev) => prev + 1);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [introIndex, stage]);

  // Stage 2: Scroll finish automation
  useEffect(() => {
    if (stage !== "credits") return;

    const timer = setTimeout(() => {
      setStage("reveal");
    }, 32000); // Wait for credit roll duration
    return () => clearTimeout(timer);
  }, [stage]);

  const handleSaveWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wish.trim()) return;
    const existingWishes = JSON.parse(localStorage.getItem("sandy_birthday_wishes") || "[]");
    existingWishes.push({ wish, date: new Date().toISOString() });
    localStorage.setItem("sandy_birthday_wishes", JSON.stringify(existingWishes));
    setWishSaved(true);
  };

  return (
    <div className="min-h-screen w-full relative overflow-y-auto bg-[#060102] text-white flex flex-col justify-center items-center pt-10 pb-36 md:pb-44 px-4 select-none">
      <StarryBackground />

      <AnimatePresence mode="wait">
        {/* ───────── STAGE 1: INTRO ───────── */}
        {stage === "intro" && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            className="relative z-10 w-full max-w-2xl text-center flex flex-col items-center justify-center min-h-[400px]"
          >
            <AnimatePresence mode="wait">
              {introIndex < introTexts.length ? (
                <motion.p
                  key={introIndex}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.05 }}
                  transition={{ duration: 1 }}
                  className="font-arabic text-2xl md:text-4xl text-rose-200/90 leading-relaxed font-semibold filter drop-shadow-[0_2px_8px_rgba(244,63,94,0.3)] px-6"
                  dir="rtl"
                >
                  {introTexts[introIndex]}
                </motion.p>
              ) : (
                <motion.div
                  key="name-reveal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Fireworks bursts */}
                  <BurstParticles x={-100} y={-100} />
                  <BurstParticles x={120} y={-150} />
                  <BurstParticles x={0} y={0} />

                  <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="text-6xl md:text-9xl font-arabic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-rose-500 tracking-wide filter drop-shadow-[0_0_25px_rgba(244,63,94,0.6)] mb-8"
                  >
                    ساندي ❤️
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="font-arabic text-xl md:text-2xl text-pink-200/80 mb-12"
                    dir="rtl"
                  >
                    اليوم هو عيد ميلاد ملكة قلبي وسر حياتي... 👑🎂
                  </motion.p>

                  <motion.button
                    whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(244,63,94,0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    onClick={() => setStage("credits")}
                    className="bg-gradient-to-r from-rose-600 to-pink-600 border border-rose-400 text-white font-arabic font-bold text-lg px-12 py-4 rounded-full shadow-lg flex items-center gap-3 animate-pulse cursor-pointer"
                  >
                    افتحي المفاجأة 🎁
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ───────── STAGE 2: CREDITS ROLL & FLOATING PHOTOS ───────── */}
        {stage === "credits" && (
          <motion.div
            key="credits-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            className="w-full min-h-screen relative flex items-center justify-center overflow-hidden"
          >
            {/* Skip Button */}
            <button
              onClick={() => setStage("reveal")}
              className="absolute top-6 right-6 z-40 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 rounded-full font-arabic text-xs font-bold tracking-wider text-rose-200 backdrop-blur-md cursor-pointer transition-all"
            >
              تخطي العرض ⏭️
            </button>

            {/* Floating Photos left/right */}
            <FloatingPhoto src={SURPRISE_PHOTOS[0]} delay={0.5} side="left" />
            <FloatingPhoto src={SURPRISE_PHOTOS[1]} delay={3} side="right" />
            <FloatingPhoto src={SURPRISE_PHOTOS[2]} delay={5.5} side="left" />
            <FloatingPhoto src={SURPRISE_PHOTOS[3]} delay={8} side="right" />
            <FloatingPhoto src={SURPRISE_PHOTOS[4]} delay={10.5} side="left" />
            <FloatingPhoto src={SURPRISE_PHOTOS[5]} delay={13} side="right" />
            <FloatingPhoto src={SURPRISE_PHOTOS[6]} delay={15.5} side="left" />
            <FloatingPhoto src={SURPRISE_PHOTOS[7]} delay={18} side="right" />
            <FloatingPhoto src={SURPRISE_PHOTOS[8]} delay={20.5} side="left" />
            <FloatingPhoto src={SURPRISE_PHOTOS[9]} delay={23} side="right" />

            {/* Credits container */}
            <div className="relative w-full max-w-xl h-[70vh] overflow-hidden z-20 flex flex-col justify-start items-center">
              {/* Fade masks */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#060102] to-transparent z-30 pointer-events-none" />
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#060102] to-transparent z-30 pointer-events-none" />

              <motion.div
                initial={{ y: "70vh" }}
                animate={{ y: "-180%" }}
                transition={{ duration: 45, ease: "linear" }}
                className="flex flex-col items-center gap-12 font-arabic text-center py-10"
              >
                <div className="flex flex-col items-center gap-4">
                  <Heart size={32} fill="#ef4444" className="text-rose-500 animate-pulse" />
                  <h2 className="text-2xl md:text-3xl font-bold text-rose-300">رحلتنا الجميلة</h2>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xl md:text-2xl text-pink-100 font-semibold" dir="rtl">
                    بدأنا بصدفة في 7 يناير 2023 📅
                  </p>
                  <p className="text-base md:text-lg text-pink-200/70" dir="rtl">
                    اليوم ده اللي اتكتبت فيه بداية أجمل قصة في حياتي...
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xl md:text-2xl text-pink-100 font-semibold" dir="rtl">
                    أول لقاء وأول خناقة وأول حضن في 17 فبراير 🌹
                  </p>
                  <p className="text-base md:text-lg text-pink-200/70" dir="rtl">
                    عرفت فيه يعني إيه دفا حقيقي، وإزاي لمسة إيدك بتطمن روحي...
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xl md:text-2xl text-pink-100 font-semibold" dir="rtl">
                    أيامنا الحلوة وصورنا سوا 📸
                  </p>
                  <p className="text-base md:text-lg text-pink-200/70" dir="rtl">
                    كل صورة أخدناها كانت شاهدة على ضحكة طالعة من القلب، وحب بيكبر كل يوم...
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xl md:text-2xl text-pink-100 font-semibold" dir="rtl">
                    أنتِ السند وأنتِ الأمان 🥺🫂
                  </p>
                  <p className="text-base md:text-lg text-pink-200/70" dir="rtl">
                    مفيش لحظة كنت فيها محتاجلك إلا ولقيتك واقفه جنبي وفي ضهري...
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xl md:text-2xl text-pink-100 font-semibold" dir="rtl">
                    كل تفصيلة فيكي بعشقها 👄✨
                  </p>
                  <p className="text-base md:text-lg text-pink-200/70" dir="rtl">
                    ضحكتك، كلامك، عنيكي اللي بتوه فيها، شعرك، وجنوننا الخاص سوا...
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  <p className="text-xl md:text-2xl text-pink-100 font-semibold" dir="rtl">
                    والنهاردة... 🎂🎉
                  </p>
                  <p className="text-base md:text-lg text-pink-200/70" dir="rtl">
                    بنحتفل بأحلى هدية ربنا رزقني بيها في دنيتي كلها...
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4 mt-8">
                  <Sparkles size={32} className="text-yellow-400" />
                  <p className="text-2xl md:text-3xl text-rose-300 font-bold" dir="rtl">
                    جاهزة للمفاجأة الكبرى؟ 😍
                  </p>
                  <div className="w-12 h-px bg-rose-400 mt-2" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ───────── STAGE 3: THE REVEAL & CONFETTI ───────── */}
        {stage === "reveal" && (
          <motion.div
            key="reveal-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, type: 'spring', bounce: 0.2 }}
            className="w-full max-w-4xl relative z-10 flex flex-col items-center py-6"
          >
            <ConfettiCanvas />

            {/* Giant beating heart collage */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="relative w-48 h-48 md:w-60 md:h-60 mb-8 filter drop-shadow-[0_0_30px_rgba(244,63,94,0.6)] cursor-pointer"
            >
              <div
                className="w-full h-full bg-rose-600 flex items-center justify-center overflow-hidden"
                style={{
                  clipPath: 'polygon(50% 15%, 80% 0%, 100% 20%, 100% 50%, 50% 95%, 0% 50%, 0% 20%, 20% 0%)'
                }}
              >
                <ResilientImage
                  src="/fifth_meet.jpeg"
                  className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500"
                  fallbackUnsplash="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800"
                />
              </div>
            </motion.div>

            {/* Giant Birthday Message Card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-pink-500/20 rounded-[3rem] p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(244,63,94,0.15)] mb-10"
            >
              <div className="flex justify-center gap-2 items-center mb-6">
                <Sparkles className="text-yellow-400 animate-spin" size={24} />
                <h2 className="text-3xl md:text-5xl font-arabic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-rose-400">
                  كل سنة وأنتي طيبة يا قلب بيشو! 🎂💖🎉
                </h2>
                <Sparkles className="text-yellow-400 animate-spin" size={24} />
              </div>

              <p
                dir="rtl"
                className="text-lg md:text-xl leading-[2.1] text-pink-100/90 font-arabic font-normal mb-8 whitespace-pre-line"
              >
                {`آخر حاجة عايز أقولهالك إنك أجمل وأحن وأرق بنت أنا شوفتها في حياتي.. إنتي دنيتي اللي أنا عايشها ومبسوط فيها وحابب يومي عشانها.. كل حاجة معاكي من ساعة ما عرفتك وهي ليها طعم تاني الدنيا كلها ليها طعم تاني..`}

                {`عيد ميلادك ده مش مجرد يوم اتولدتي فيه وعدي وخلاص على كدا لا ❤️🩹🫂 ده اليوم اللي اتولدت فيه أجمل إنسانة في الدنيا كلها.. اليوم اللي عشانه أنا بعيش أحلى أيامي دلوقتي.. اليوم اللي عشانه أنا حياتي بقت أحسن وأجمل وحبيت الحياة بسببه..`}

                {`مهما اتكلمت وقولت مش هوفيكي حقك يتاج راسي ولا هعرف أقول كل اللي يوصفك بس اللي في قلبي ليكي كبير وكتير أوي.. كل لحظة معاكي ليها إحساس مميز ومختلف وكل موقف بيحصل بيخليني أتأكد إن حياتي مش هينفع تكمل غير بيكي ❤️🩹`}

                {`بنيت أحلامي ومستقبلي وبيتي وأطفالي عليكي إنتي.. خلاص يا ساسو الدنيا كلها بقا واقفة عليكي ♥🫂`}

                {`أحنا خلاص وصلنا لآخر حاجة في الهدية الصغننة دي 🎁 يارب تكون عجبتك.. كل حرف فيها كتبته ليكي بقلبي وكل حاجة اتعملت بحب 💖`}

                {`آخر حاجة 🫂
كل سنة وإنتي طيبة ومعايا ودايما سنداني ومفرحاني 🫂
كل سنة وإنتي بنتي اللي بتكبر كل يوم قدام عيني وبتطبع بطبعي 🫂
كل سنة وإنتي حبيبتي وحبيبت أيامي وأحلامي 🫂
كل سنة وإنتي حبي وعشقي وعمري ودنيتي وسنيني اللي جاية
وكل سنة وإنتي جنبي يست البنات ❤️🩹`}

                {`بحبك أوي ❤️🩹🫂🌍`}
              </p>

              {/* Wishes Gift Box Section */}
              <div className="border-t border-pink-500/20 pt-8 mt-6">
                {!isBoxOpen ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsBoxOpen(true)}
                    className="flex flex-col items-center justify-center cursor-pointer group"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, -10, 10, -10, 10, 0],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.5,
                        repeatDelay: 1
                      }}
                      className="text-6xl mb-4"
                    >
                      🎁
                    </motion.div>
                    <p className="font-arabic text-yellow-300 font-bold text-lg group-hover:text-yellow-200 transition-colors animate-pulse" dir="rtl">
                      اضغطي هنا عشان تفتحي هدية عيد ميلادك 🎁✨
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="flex flex-col gap-8 text-center"
                  >
                    {/* The Secret Promise */}
                    <div className="bg-gradient-to-br from-rose-950/40 to-pink-950/40 p-6 rounded-2xl border border-rose-500/30 text-right" dir="rtl">
                      <div className="flex items-center gap-2 mb-3 justify-center">
                        <span>💍</span>
                        <h4 className="font-arabic text-xl font-bold text-yellow-300">عهد حبي الأبدي ليكي</h4>
                        <span>💍</span>
                      </div>
                      <p className="font-arabic text-pink-100/90 text-base leading-relaxed text-center">
                        "أوعدك يا ساندي إني هفضل جنبك وسندك في كل لحظة، هفرح لفرحك وأشيل عنك حزنك، ومسيبش إيدك أبداً مهما واجهنا. هفضل أحاول أسعدك بكل الطرق لآخر نفس فيا.. ومحضرلك مفاجأة تانية لما نتقابل يا جميلتي! 🌹"
                      </p>
                    </div>

                    {/* Submit Wish Box */}
                    {!wishSaved ? (
                      <form onSubmit={handleSaveWish} className="flex flex-col gap-4 items-center">
                        <label className="font-arabic text-base text-pink-200" dir="rtl">
                          اكتبي أمنية عيد ميلادك النهاردة في صندوق النجوم 💫
                        </label>
                        <textarea
                          value={wish}
                          onChange={(e) => setWish(e.target.value)}
                          placeholder="مثلاً: نفضل مع بعض طول العمر..."
                          className="w-full max-w-md p-4 bg-black/40 border border-pink-500/30 rounded-2xl text-white font-arabic text-right focus:outline-none focus:border-pink-500 transition-all placeholder:text-pink-300/30"
                          rows={3}
                          dir="rtl"
                          required
                        />
                        <button
                          type="submit"
                          className="px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-pink-600 text-white font-arabic font-bold text-sm shadow-lg hover:brightness-110 cursor-pointer"
                        >
                          أرسلي الأمنية للنجوم ✨
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center gap-3 text-center"
                      >
                        <BurstParticles />
                        <span className="text-4xl">🌟</span>
                        <h4 className="font-arabic text-lg font-bold text-yellow-300" dir="rtl">
                          أمنيتك وصلت للنجوم يا روحي... 🥺✨
                        </h4>
                        <p className="font-arabic text-sm text-pink-200/70" dir="rtl">
                          وعد مني هعمل كل اللي أقدر عليه عشان أحققهالك، وتكون دايماً أيامك مليانة هنا وضحك.
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Final control back */}
            <div className="flex gap-4 z-20">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStage("intro")}
                className="bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-3 rounded-full font-arabic text-sm cursor-pointer"
              >
                شوفي العرض تاني 🎬
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="bg-gradient-to-r from-rose-600 to-pink-600 border border-rose-500 text-white px-8 py-3 rounded-full font-arabic text-sm shadow-md cursor-pointer"
              >
                العودة للصفحة السابقة 🔙
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NAV_VIEWS: { id: "landing" | "story" | "journey" | "gallery" | "book" | "reasons" | "beauty" | "surprise"; label: string; icon: string }[] = [
  { id: "landing", label: "Our Spark", icon: "✨" },
  { id: "story", label: "Our Story", icon: "📖" },
  { id: "journey", label: "Our Path", icon: "👣" },
  { id: "gallery", label: "Moments", icon: "📸" },
  { id: "book", label: "Love Book", icon: "📕" },
  { id: "reasons", label: "Confession", icon: "💖" },
  { id: "beauty", label: "Your Grace", icon: "💋" },
  { id: "surprise", label: "Sweet Gift", icon: "🎁" }
];

export default function App() {
  const [view, setView] = useState<"landing" | "story" | "journey" | "gallery" | "book" | "reasons" | "beauty" | "surprise">("landing");


  // Expose setView to global for the BookViewer workaround
  useEffect(() => {
    (window as any).setGlobalView = setView;
  }, []);

  useEffect(() => {
    if (view === "beauty" || view === "book" || view === "surprise") {
      document.body.style.backgroundColor = view === "surprise" ? "#060102" : "#120205";
    } else if (view === "landing") {
      document.body.style.backgroundColor = "#0d0a12";
    } else {
      document.body.style.backgroundColor = "#fff0f4";
    }
  }, [view]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showFinalLetter, setShowFinalLetter] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audioCandidateIndex, setAudioCandidateIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto generate candidate variants for robust file self-healing
  const getAudioCandidatesForTrack = (trackSrc: string) => {
    if (!trackSrc) return [];
    const list = [trackSrc];
    
    // Fallback patterns for double extension issues
    if (trackSrc.endsWith(".mp3") && !trackSrc.endsWith(".mp3.mp3")) {
      list.push(trackSrc + ".mp3");
    } else if (trackSrc.endsWith(".mp3.mp3")) {
      list.push(trackSrc.replace(".mp3.mp3", ".mp3"));
    }
    
    // Case sensitivity variants
    if (trackSrc.includes(".MP3")) {
      list.push(trackSrc.replace(".MP3", ".mp3"));
    } else {
      list.push(trackSrc.replace(".mp3", ".MP3"));
    }
    
    return Array.from(new Set(list));
  };

  const activeAudioSrc = useMemo(() => {
    const trackSrc = PLAYLIST[currentSongIndex];
    if (!trackSrc) return "";
    const candidates = getAudioCandidatesForTrack(trackSrc);
    return candidates[audioCandidateIndex] || trackSrc;
  }, [currentSongIndex, audioCandidateIndex]);

  const handleSongEnded = () => {
    if (audioRef.current) {
      setAudioCandidateIndex(0);
      const nextIndex = (currentSongIndex + 1) % PLAYLIST.length;
      setCurrentSongIndex(nextIndex);
    }
  };

  const handleAudioError = (e: any) => {
    const audioEl = audioRef.current;
    
    if (audioEl && audioEl.error) {
      const code = audioEl.error.code;
      const message = audioEl.error.message;
      console.warn(`HTML5 Audio Element Error [code: ${code}]: ${message || 'No direct message description'}`);
      
      // Code 1 is MEDIA_ERR_ABORTED - triggered when the loading of the media resource is aborted
      // (e.g., standard action when changing views, tracks, or when browser interrupts stream connection).
      if (code === 1) {
        console.log("Audio loading was aborted (normal browser behavior when changing views or tracks). Not a fatal error.");
        return;
      }
    } else {
      // Sometimes an error event fires on mounting/unmounting without a real fatal error in the audio element
      console.log("Transient audio error event received without a fatal media element error. Ignoring.");
      return;
    }

    const trackSrc = PLAYLIST[currentSongIndex];
    if (!trackSrc) return;
    const trackCandidates = getAudioCandidatesForTrack(trackSrc);
    
    if (audioCandidateIndex < trackCandidates.length - 1) {
      console.warn(`Audio variant failed: ${trackCandidates[audioCandidateIndex]}. Trying variant ${trackCandidates[audioCandidateIndex + 1]}`);
      setAudioCandidateIndex(prev => prev + 1);
    } else {
      console.error(`All variants failed for track at index ${currentSongIndex}. Advancing playlist...`);
      setAudioCandidateIndex(0);
      const nextIndex = (currentSongIndex + 1) % PLAYLIST.length;
      setCurrentSongIndex(nextIndex);
    }
  };

  useEffect(() => {
    setAudioCandidateIndex(0);
  }, [currentSongIndex]);

  useEffect(() => {
    if (audioRef.current && !isLoading) {
      audioRef.current.load();
      if (!isMuted) {
        audioRef.current.play().catch(err => {
          console.log("Auto-play on track change failed: ", err);
        });
      }
    }
  }, [activeAudioSrc, isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => { });
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(err => console.error("Playback failed:", err));
        audioRef.current.muted = false;
        setIsMuted(false);
      } else {
        const nextMuted = !isMuted;
        audioRef.current.muted = nextMuted;
        setIsMuted(nextMuted);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#fff0f4] text-[#5c4a43] font-serif selection:bg-rose-300 overflow-x-hidden relative">
      {/* Integrated Romantic Timeline Navigation Bar */}
      {!isLoading && (
        <div 
          className={`fixed bottom-0 left-0 right-0 z-50 w-full transition-all duration-500 rounded-t-[1.75rem] md:rounded-t-[2.5rem] px-4 py-2.5 pb-4 md:py-3 md:pb-5 border-t backdrop-blur-xl shadow-[0_-15px_40px_rgba(0,0,0,0.1)] pointer-events-auto ${
            ["book", "beauty", "surprise"].includes(view)
              ? "bg-[#0c0305]/95 border-[#2d0a11]/40 text-amber-100/90 shadow-[0_-15px_40px_rgba(0,0,0,0.9)]"
              : "bg-white/90 border-pink-100/65 text-[#5c4a43] shadow-[0_-15px_40px_rgba(244,63,94,0.06)]"
          }`}
        >
          {/* Subtle Decorative Center Accent */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full opacity-35 bg-current" />

          <div className="max-w-4xl mx-auto flex items-center justify-between gap-1 overflow-x-auto scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden relative py-1">
            {/* The Connecting Line track (Simulating a gold/rose gold thread or string of hearts) */}
            <div className={`absolute left-[6%] right-[6%] top-[35%] -translate-y-1/2 h-[1px] -z-10 hidden sm:block ${
              ["book", "beauty", "surprise"].includes(view)
                ? "bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"
                : "bg-gradient-to-r from-transparent via-pink-400/35 to-transparent"
            }`} />

            {NAV_VIEWS.map((nav, index) => {
              const isActive = view === nav.id;
              const hasPassed = NAV_VIEWS.findIndex(n => n.id === view) >= index;

              return (
                <button
                  key={nav.id}
                  onClick={() => setView(nav.id)}
                  className="flex flex-col items-center gap-1 group relative cursor-pointer min-w-[38px] md:min-w-[60px] py-0.5"
                >
                  {/* Indicator Dot/Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-7 h-7 md:w-9 md:h-9 rounded-full flex items-center justify-center text-xs md:text-sm border transition-all duration-300 relative ${
                      isActive
                        ? ["book", "beauty", "surprise"].includes(view)
                          ? "bg-amber-400 border-amber-300 text-stone-950 shadow-[0_0_12px_rgba(251,191,36,0.6)] animate-pulse"
                          : "bg-pink-500 border-pink-400 text-white shadow-[0_0_12px_rgba(236,72,153,0.4)] animate-pulse"
                        : hasPassed
                          ? ["book", "beauty", "surprise"].includes(view)
                            ? "bg-rose-950/60 border-rose-900 text-rose-300"
                            : "bg-pink-100 border-pink-200 text-pink-600"
                          : ["book", "beauty", "surprise"].includes(view)
                            ? "bg-stone-900 border-stone-800 text-stone-500 hover:text-stone-200"
                            : "bg-pink-50/30 border-pink-100/50 text-[#7a6558]/40 hover:text-pink-500"
                    }`}
                  >
                    <span>{nav.icon}</span>

                    {/* Active highlight pulser */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full animate-ping border border-current opacity-30 pointer-events-none" />
                    )}
                  </motion.div>

                  {/* Label - Classy English romantic serif font */}
                  <span 
                    className={`text-[8px] md:text-[10px] font-sans tracking-wide italic transition-all duration-300 whitespace-nowrap ${
                      isActive 
                        ? ["book", "beauty", "surprise"].includes(view) ? "text-amber-400 font-bold" : "text-pink-600 font-bold"
                        : ["book", "beauty", "surprise"].includes(view) ? "text-stone-500 group-hover:text-amber-200" : "text-[#7a6558]/50 group-hover:text-pink-600"
                    }`}
                  >
                    {nav.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fff0f4]"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8"
            >
              <Heart className="w-24 h-24 text-pink-500 drop-shadow-lg" fill="currentColor" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-2xl md:text-4xl font-arabic font-bold text-pink-800 text-center px-6 leading-relaxed"
              dir="rtl"
            >
              ثواني يروحي اول ميشوف عنيكي هيشتغل ❤️
            </motion.h2>
          </motion.div>
        ) : view === "landing" ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8 }}
            className="relative min-h-screen w-full overflow-y-auto"
            style={{ background: '#080610' }}
          >
            {/* === مطر === */}
            <Rain />

            {/* === ضوء خافت في الأعلى === */}
            <div
              className="absolute top-0 left-0 right-0 pointer-events-none"
              style={{ height: '40vh', background: 'radial-gradient(ellipse at 50% 0%, rgba(100,60,100,0.12) 0%, transparent 70%)', zIndex: 2 }}
            />

            {/* === زر الموسيقى === */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              onClick={toggleMute}
              className="fixed top-5 left-5 z-50 w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all"
              style={{
                background: 'rgba(50,30,55,0.6)',
                border: '1px solid rgba(150,100,130,0.25)',
                backdropFilter: 'blur(10px)',
                color: 'rgba(200,160,185,0.7)',
              }}
            >
              {isMuted ? '🔇' : '🎵'}
            </motion.button>

            {/* === المحتوى الرئيسي === */}
            <div
              className="relative flex flex-col items-center text-center px-6 pt-20 pb-44"
              style={{ zIndex: 3, maxWidth: '480px', margin: '0 auto', gap: 0 }}
            >

              {/* قلب مكسور */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                style={{ marginBottom: '1.5rem' }}
              >
                <motion.span
                  animate={{ opacity: [0.55, 1, 0.55] }}
                  transition={{ repeat: Infinity, duration: 3.5 }}
                  style={{ fontSize: '3rem', display: 'block' }}
                >
                  💔
                </motion.span>
              </motion.div>

              {/* العنوان */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1.2 }}
                className="font-serif italic"
                style={{
                  fontSize: 'clamp(2.2rem, 10vw, 3.8rem)',
                  color: 'rgba(220, 192, 210, 0.92)',
                  textShadow: '0 0 40px rgba(180,100,150,0.2)',
                  letterSpacing: '0.03em',
                  marginBottom: '0.6rem',
                  lineHeight: 1.1,
                }}
              >
                Besho &amp; Saso
              </motion.h1>

              {/* نطاق التاريخ */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 1 }}
                className="font-mono tracking-widest"
                style={{
                  fontSize: 'clamp(0.65rem, 3vw, 0.78rem)',
                  color: 'rgba(180, 145, 165, 0.45)',
                  letterSpacing: '0.22em',
                  marginBottom: '3.5rem',
                }}
              >
                7 · 1 · 2023 &nbsp;—&nbsp; 9 · 11 · 2026
              </motion.p>

              {/* الرقم الكبير للأيام */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 1.2 }}
                style={{ marginBottom: '1.2rem' }}
              >
                <span
                  className="font-mono font-thin block"
                  style={{
                    fontSize: 'clamp(5.5rem, 28vw, 9rem)',
                    color: 'rgba(225, 192, 212, 0.95)',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    textShadow: '0 0 60px rgba(180,100,150,0.15)',
                  }}
                >
                  {FROZEN_TIME.totalDays}
                </span>
              </motion.div>

              {/* جملة حزينة عن الأيام */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="font-arabic leading-relaxed"
                dir="rtl"
                style={{
                  fontSize: 'clamp(0.9rem, 4vw, 1.1rem)',
                  color: 'rgba(200, 165, 185, 0.6)',
                  maxWidth: '300px',
                  marginBottom: '3rem',
                  lineHeight: 2,
                }}
              >
                يوم كنت فيهم مبسوط.. ويوم واحد كان كفاية يهد كل ده.
              </motion.p>

              {/* فاصل */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
                style={{
                  width: '120px', height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(180,120,160,0.3), transparent)',
                  marginBottom: '1.6rem',
                }}
              />

              {/* تسمية العداد */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="font-arabic"
                dir="rtl"
                style={{
                  fontSize: 'clamp(0.7rem, 3vw, 0.82rem)',
                  color: 'rgba(180, 140, 160, 0.4)',
                  letterSpacing: '0.08em',
                  marginBottom: '1.4rem',
                }}
              >
                من آخر مرة كنا فيها لسه مع بعض
              </motion.p>

              {/* العداد المجمّد - 4 وحدات */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 1 }}
                style={{ marginBottom: '3.5rem', width: '100%' }}
              >
                <LiveCounter />
              </motion.div>

              {/* فاصل ثاني */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                style={{
                  width: '120px', height: '1px',
                  background: 'linear-gradient(to right, transparent, rgba(180,120,160,0.2), transparent)',
                  marginBottom: '2.5rem',
                }}
              />

              {/* الجمل الحزينة المتفرقة */}
              {[
                { text: 'لسه بفتح الموبايل أدوّر على اسمك.', delay: 1.9 },
                { text: 'الأماكن هي هي.. إنتي بس مش فيها.', delay: 2.1 },
                { text: 'ولسه كل ما أسمع الأغنية.. بسكت.', delay: 2.3 },
              ].map((item, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay, duration: 1 }}
                  className="font-arabic"
                  dir="rtl"
                  style={{
                    fontSize: 'clamp(0.95rem, 4.5vw, 1.15rem)',
                    color: 'rgba(205, 170, 190, 0.58)',
                    marginBottom: i < 2 ? '1.4rem' : '3rem',
                    lineHeight: 2,
                  }}
                >
                  {item.text}
                </motion.p>
              ))}

              {/* الجملتان الأخيرتان - أقوى وأكبر */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 1.3 }}
                className="flex flex-col items-center gap-3"
                dir="rtl"
              >
                <p
                  className="font-arabic"
                  style={{ fontSize: 'clamp(1rem, 5vw, 1.25rem)', color: 'rgba(215, 180, 200, 0.72)', lineHeight: 2 }}
                >
                  مش وجع إنك مشيتي..
                </p>
                <motion.p
                  animate={{ opacity: [0.65, 1, 0.65] }}
                  transition={{ repeat: Infinity, duration: 4.5 }}
                  className="font-arabic"
                  style={{
                    fontSize: 'clamp(1.1rem, 5.5vw, 1.4rem)',
                    color: 'rgba(230, 195, 215, 0.88)',
                    fontWeight: 700,
                    lineHeight: 2,
                    textShadow: '0 0 20px rgba(180,100,150,0.15)',
                  }}
                >
                  الوجع إني لسه بحبك.
                </motion.p>
              </motion.div>

              {/* زر رسالة أخيرة */}
              <motion.button
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowFinalLetter(true)}
                className="mt-12 px-6 py-2.5 rounded-full flex items-center gap-2.5 cursor-pointer transition-all duration-300"
                style={{
                  background: 'rgba(40, 22, 45, 0.65)',
                  border: '1px solid rgba(190, 130, 165, 0.35)',
                  backdropFilter: 'blur(12px)',
                  color: 'rgba(235, 205, 225, 0.85)',
                  boxShadow: '0 4px 25px rgba(0,0,0,0.4)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="font-arabic text-xs tracking-wider">«رسالة أخيرة»</span>
              </motion.button>

            </div>

            {/* مودال الرسالة الأخيرة */}
            <AnimatePresence>
              {showFinalLetter && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setShowFinalLetter(false)}
                  className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto"
                  style={{
                    background: 'rgba(5, 3, 8, 0.88)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-lg rounded-2xl p-7 md:p-9 text-right"
                    dir="rtl"
                    style={{
                      background: 'linear-gradient(165deg, rgba(26, 16, 30, 0.95) 0%, rgba(14, 9, 18, 0.98) 100%)',
                      border: '1px solid rgba(190, 130, 165, 0.25)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(160, 90, 130, 0.15)',
                      maxHeight: '85vh',
                      overflowY: 'auto',
                    }}
                  >
                    {/* زر الإغلاق */}
                    <button
                      onClick={() => setShowFinalLetter(false)}
                      className="absolute top-5 left-5 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all cursor-pointer hover:bg-white/10"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        color: 'rgba(230, 195, 215, 0.7)',
                      }}
                      aria-label="إغلاق"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* عنوان المودال */}
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-rose-300/15">
                      <span className="text-base">✉️</span>
                      <h3
                        className="font-arabic text-base md:text-lg font-semibold tracking-wide"
                        style={{ color: 'rgba(235, 205, 222, 0.95)' }}
                      >
                        رسالة أخيرة
                      </h3>
                    </div>

                    {/* نص الرسالة */}
                    <div
                      className="font-arabic space-y-4 leading-loose text-sm md:text-base font-normal select-text"
                      style={{ color: 'rgba(225, 205, 220, 0.88)', lineHeight: 2.2 }}
                    >
                      <p>
                        ساندي، بعتلك الرسالة دي لأننا مودّعناش بعض ومشينا فجأة، وحسيت إن مينفعش نخلّيها تعدّي كده.
                      </p>
                      <p>
                        تلات سنين وأكتر من عشر شهور من عمرنا مش قليلين أبداً. فيهم ضحكنا كتير، واتكلمنا ساعات ومكنش بيخلص كلامنا، ومرّنا بأيام حلوة وأيام تقيلة وكنا بنسند بعض فيها. وكل ده هيفضل جوايا حاجة غالية، ومش هقدر أنساه.
                      </p>
                      <p>
                        كنتي جزء كبير من حياتي، وأكيد هتوحشيني، وهفضل أذكرك بخير كل ما أفكر في الفترة دي. بس بعد كل اللي حصل، شايف إن كل واحد فينا يكمّل في طريقه هو القرار الأصح لينا الاتنين.
                      </p>
                      <p>
                        أنتي إنسانة تستاهلي كل خير، وبتمنالك من قلبي تكوني كويسة، وتلاقي اللي يفرّحك ويقدّرك زي ما تستاهلي، وتحققي كل اللي نفسك فيه.
                      </p>
                      <p>
                        شكراً على كل لحظة حلوة عشناها مع بعض.
                      </p>
                      <p className="pt-3 text-rose-300/90 font-medium">
                        خلي بالك من نفسك.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : view === "story" ? (
          <motion.div
            key="story"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="min-h-screen w-full relative"
          >
            {/* Background Glows */}
            <div className="fixed inset-0 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-pink-300/40 blur-[150px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-rose-200/50 blur-[150px]" />
            </div>

            {/* Top Header Dates */}
            <div className="absolute top-8 left-8 md:left-12 flex flex-col items-start z-20">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#7a6558] opacity-70">Birthday</span>
              <span className="text-xl md:text-2xl font-light tracking-widest text-[#5c4a43]">{BIRTHDAY}</span>
            </div>

            <div className="absolute top-8 right-8 md:right-12 flex flex-col items-end z-20 text-right">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#7a6558] opacity-70">Moment of Us</span>
              <span className="text-xl md:text-2xl font-light tracking-widest text-[#5c4a43]">{ANNIVERSARY}</span>
            </div>

            {/* Heavy Corner Roses */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
              transition={{ duration: 3 }}
              className="fixed top-0 left-0 -translate-x-1/6 -translate-y-1/6 text-rose-200/50 w-96 h-96 pointer-events-none flex"
            >
              <RoseDecoration className="w-full h-full -rotate-45" />
              <RoseDecoration className="absolute top-20 left-20 w-1/2 h-1/2 rotate-12 opacity-50" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
              animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
              transition={{ duration: 3, delay: 0.5 }}
              className="fixed bottom-0 right-0 translate-x-1/6 translate-y-1/6 text-rose-200/50 w-[30rem] h-[30rem] pointer-events-none"
            >
              <RoseDecoration className="w-full h-full -rotate-12" />
              <RoseDecoration className="absolute bottom-32 right-32 w-1/3 h-1/3 rotate-45 opacity-60" />
            </motion.div>

            {/* Floating Petals/Leaves */}
            <div className="fixed inset-0 pointer-events-none z-0">
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    y: -100,
                    x: `${Math.random() * 100}%`,
                    opacity: 0,
                    rotate: 0,
                    scale: Math.random() * 0.5 + 0.5
                  }}
                  animate={{
                    y: '110vh',
                    opacity: [0, 0.6, 0],
                    rotate: 720,
                    x: `${(Math.random() * 100) + (Math.sin(i) * 10)}%`
                  }}
                  transition={{
                    duration: 15 + Math.random() * 20,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                    ease: "linear"
                  }}
                  className="absolute text-rose-300/40"
                >
                  {i % 3 === 0 ? <Heart size={14} fill="currentColor" /> : <RoseDecoration className="w-6 h-6" />}
                </motion.div>
              ))}
            </div>

            {/* Main Content Area */}
            <main className="relative z-10 px-6 pt-24 pb-36 md:pt-32 md:pb-44 max-w-5xl mx-auto flex flex-col items-center min-h-screen justify-start">
              {/* Title Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className="text-center mb-16"
              >
                <motion.div
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="flex items-center justify-center gap-6 mb-6"
                >
                  <div className="h-px w-24 bg-gradient-to-l from-pink-400 to-transparent" />
                  <RoseDecoration className="text-pink-400 w-8 h-8" />
                  <div className="h-px w-24 bg-gradient-to-r from-pink-400 to-transparent" />
                </motion.div>

                <h1 className="text-5xl md:text-8xl font-serif tracking-[0.25em] text-[#4a3b32] italic drop-shadow-sm">
                  OUR STORY
                </h1>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, delay: 1 }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-pink-300 to-transparent mt-8 max-w-[300px] mx-auto"
                />
              </motion.div>

              {/* Story Text Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5 }}
                className="bg-white/60 backdrop-blur-md p-12 md:p-20 rounded-[5rem] border border-pink-200/60 relative shadow-[0_10px_40px_rgba(200,150,160,0.15)]"
              >
                <RoseDecoration className="absolute top-8 left-8 w-12 h-12 text-[#c8b7a6] opacity-40 -rotate-12" />
                <RoseDecoration className="absolute bottom-8 right-8 w-12 h-12 text-[#c8b7a6] opacity-40 rotate-12" />

                <p
                  dir="rtl"
                  className="text-2xl md:text-4xl leading-[2] text-[#5c4a43] font-arabic font-normal text-center"
                  style={{ textShadow: "0 2px 10px rgba(255,255,255,0.6)" }}
                >
                  {STORY_TEXT.split('\n').map((line, i) => (
                    <span key={i} className="block mb-8">{line}</span>
                  ))}
                </p>

                <div className="mt-16 flex flex-col items-center gap-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      filter: ["drop-shadow(0 0 0px #ef4444)", "drop-shadow(0 0 10px #ef4444)", "drop-shadow(0 0 0px #ef4444)"]
                    }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Heart fill="#ef4444" className="text-red-500" size={48} />
                  </motion.div>
                  <span className="text-[#7a6558]/80 font-serif italic tracking-widest text-sm uppercase">Forever & Always</span>
                </div>
              </motion.div>

              <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ delay: 2 }}
                className="mt-24 text-[11px] uppercase tracking-[0.6em] text-[#7a6558] text-center"
              >
                An evening of love dedicated to Sandy
              </motion.footer>

              <div className="mt-12 flex flex-col items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView("journey")}
                  className="flex items-center gap-3 bg-white text-[#5c4a43] px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-[#fff0f4] transition-all border border-pink-200"
                >
                  Go to journey <Heart size={18} className="text-pink-500 fill-pink-500" />
                </motion.button>
                <button
                  onClick={() => setView("landing")}
                  className="text-[10px] uppercase tracking-[0.3em] text-[#7a6558]/60 hover:text-[#5c4a43] transition-colors"
                >
                  Back to cover
                </button>
              </div>
            </main>
          </motion.div>
        ) : view === "journey" ? (
          <motion.div
            key="journey"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen w-full relative pt-20 pb-36 md:pb-44 px-4 md:px-8"
          >
            {/* Journey Background */}
            <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-[#fff0f4] via-pink-50 to-[#fff0f4] z-0" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-6xl font-serif text-[#4a3b32] italic mb-20 text-center drop-shadow-sm">
                Our Journey
              </h2>

              <div className="relative w-full">
                {/* The Rose Petal Path */}
                <div className="absolute left-1/2 top-0 bottom-0 w-24 md:w-40 -translate-x-1/2 pointer-events-none z-0">
                  {/* Rose petals background texture */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundImage: 'url("https://images.unsplash.com/photo-1550005809-91ad75fb315f?auto=format&fit=crop&q=80&w=400")',
                      backgroundRepeat: 'repeat-y',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.7,
                      boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3), 0 0 20px rgba(225,29,72,0.3)'
                    }}
                  />

                  {/* Scattered Red Roses Inside the Path */}
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={`petal-${i}`}
                      className="absolute text-red-600 drop-shadow-md"
                      style={{
                        top: `${(100 / 40) * i + (Math.random() * 2)}%`,
                        left: `${15 + Math.random() * 70}%`,
                        transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 0.7})`,
                        opacity: 0.85
                      }}
                    >
                      <RoseDecoration className="w-5 h-5 md:w-8 md:h-8" />
                    </div>
                  ))}

                  {/* Fading at top and bottom */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#fff0f4] via-transparent to-[#fff0f4]" />

                  {/* Candles on the sides */}
                  {[...Array(24)].map((_, i) => (
                    <div
                      key={`candle-${i}`}
                      className="absolute flex items-center justify-center w-2 h-2 rounded-full bg-yellow-100 shadow-[0_0_12px_5px_rgba(253,224,71,0.8)] animate-pulse"
                      style={{
                        top: `${(100 / 24) * i + 2}%`,
                        left: i % 2 === 0 ? '-12px' : 'calc(100% + 4px)',
                        animationDelay: `${Math.random() * 2}s`,
                        animationDuration: `${1.5 + Math.random()}s`
                      }}
                    >
                      <div className="w-1 h-1 bg-white rounded-full" />
                    </div>
                  ))}
                </div>

                {JOURNEY_MEMORIES.map((memory, index) => (
                  <motion.div
                    key={memory.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className={`relative flex flex-col md:flex-row items-center justify-between mb-32 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Content Card (Left on Desktop via flex-row) */}
                    <div className="w-full md:w-5/12 bg-white/70 backdrop-blur-md p-6 rounded-3xl border border-pink-200/60 shadow-xl hover:scale-105 transition-transform duration-500 text-center relative z-10">
                      <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-4 border border-pink-100">
                        <ResilientImage
                          src={memory.image}
                          alt={memory.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-600 text-sm font-semibold mb-3">
                        {memory.date}
                      </span>
                      <h3 className="text-xl md:text-2xl font-arabic font-bold text-[#4a3b32] mb-3" dir="rtl">
                        {memory.title}
                      </h3>
                      <p className="text-[#7a6558] font-arabic leading-relaxed whitespace-pre-line" dir="rtl">
                        {memory.description}
                      </p>
                    </div>

                    {/* Center Rose Node (Hidden on very small screens, visible on md+) */}
                    <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="bg-[#fff0f4] p-2 rounded-full border border-pink-200 shadow-md">
                        <RoseDecoration className="w-8 h-8 text-pink-400" />
                      </div>
                    </div>

                    {/* The Secret Message component taking the empty space on the other side */}
                    <SecretMessage
                      buttonText={memory.secretButtonText}
                      message={memory.secretMessage}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="mt-20 text-center flex flex-col items-center gap-6">
                <RoseDecoration className="w-12 h-12 text-pink-400 mx-auto" />
                <p className="text-xl text-[#7a6558] italic font-serif">And many more memories to come...</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView("gallery")}
                  className="flex items-center gap-3 bg-white text-[#5c4a43] px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-[#fff0f4] transition-all border border-pink-200"
                >
                  Our Hands Gallery <Heart size={18} className="text-pink-500 fill-pink-500" />
                </motion.button>
                <button
                  onClick={() => setView("story")}
                  className="text-[10px] uppercase tracking-[0.3em] text-[#7a6558]/60 hover:text-[#5c4a43] transition-colors"
                >
                  Back to story
                </button>
              </div>
            </div>
          </motion.div>
        ) : view === "gallery" ? (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen w-full relative pt-20 pb-36 md:pb-44 px-4 overflow-x-hidden"
          >
            {/* Background */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#fdf4f5] via-pink-50 to-[#fff0f4] pointer-events-none z-0" />
            <div className="fixed inset-0 pointer-events-none z-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-pink-200/40"
                  style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                  animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
                >
                  <RoseDecoration className="w-10 h-10" />
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center mb-16"
              >
                <RoseDecoration className="w-10 h-10 text-pink-400 mx-auto mb-4" />
                <h2 className="text-4xl md:text-6xl font-serif text-[#4a3b32] italic">Our Hands</h2>
                <p className="text-[#7a6558] mt-3 font-arabic text-lg" dir="rtl">كل صورة فيها حكاية مختلفة .. المشترك بينهم حبك❤️</p>
              </motion.div>

              {/* Clothesline Section */}
              <div className="relative w-full mb-24">
                {/* The rope */}
                <div
                  className="absolute top-10 left-0 right-0 h-[3px] z-10"
                  style={{
                    background: 'linear-gradient(to right, transparent 2%, #a07850 5%, #a07850 95%, transparent 98%)',
                    boxShadow: '0 2px 6px rgba(100,60,20,0.25)'
                  }}
                />

                {/* Photos on the line */}
                <div className="flex justify-around items-start pt-4 flex-wrap gap-y-12">
                  {GALLERY_PHOTOS.map((photo, index) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, y: -40, rotate: 0 }}
                      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -4 : 4 }}
                      whileHover={{ rotate: 0, scale: 1.07, zIndex: 50 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.15 }}
                      className="flex flex-col items-center cursor-pointer relative z-20"
                      style={{ transformOrigin: 'top center' }}
                    >
                      {/* Clothespin */}
                      <div className="w-4 h-6 bg-amber-700 rounded-sm mb-1 shadow-md relative z-30">
                        <div className="absolute inset-x-0 top-1/2 h-[2px] bg-amber-900" />
                      </div>

                      {/* Polaroid Frame */}
                      <div className="bg-white p-3 pb-8 shadow-[0_8px_30px_rgba(0,0,0,0.15)] w-36 md:w-44">
                        <div className="w-full h-36 md:h-44 overflow-hidden bg-pink-50">
                          <ResilientImage
                            src={photo.src}
                            alt={photo.label}
                            className="w-full h-full object-cover"
                            fallbackUnsplash="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=400"
                          />
                        </div>
                        <p className="text-center mt-3 text-[#7a6558] font-arabic text-sm font-bold" dir="rtl">
                          {photo.label}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Love Envelope Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-lg mx-auto"
              >
                <LoveEnvelope />
              </motion.div>

              {/* Navigation buttons */}
              <div className="mt-16 text-center flex flex-col items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setView("book")}
                  className="flex items-center gap-3 bg-white text-[#5c4a43] px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-[#fff0f4] transition-all border border-pink-200"
                >
                  Our Photo Book <Heart size={18} className="text-pink-500 fill-pink-500" />
                </motion.button>
                <button
                  onClick={() => setView("journey")}
                  className="text-[10px] uppercase tracking-[0.3em] text-[#7a6558]/60 hover:text-[#5c4a43] transition-colors"
                >
                  Back to journey
                </button>
              </div>
            </div>
          </motion.div>
        ) : view === "book" ? (
          <motion.div
            key="book"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen w-full relative pt-20 pb-36 md:pb-44 px-4 flex flex-col items-center justify-start"
          >
            <div className="fixed inset-0 bg-gradient-to-b from-[#1a0e08] via-[#2c1810] to-[#1a0e08] pointer-events-none z-0" />
            <div className="fixed inset-0 pointer-events-none z-0 opacity-10"
              style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(200,160,100,0.3) 0px, transparent 1px, transparent 60px, rgba(200,160,100,0.3) 61px)' }}
            />
            <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center gap-10">
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
                <RoseDecoration className="w-8 h-8 text-rose-400 mx-auto mb-3" />
                <h2 className="text-3xl md:text-5xl font-serif text-amber-100 italic">Our Photo Book</h2>
              </motion.div>
              <BookViewer onBack={() => setView("gallery")} />
            </div>
          </motion.div>
        ) : view === "reasons" ? (
          <motion.div
            key="reasons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen w-full relative pt-20 pb-36 md:pb-44 px-4 bg-[#fff0f4] overflow-x-hidden"
          >
            {/* Scattered Background Photos */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden lg:block">
              {/* Left Side Photos */}
              <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} className="absolute top-10 left-[-2%] rotate-[-12deg] bg-white p-2 pb-6 shadow-xl w-40">
                <ResilientImage src="/gallery1.jpeg" className="w-full h-32 object-cover" />
              </motion.div>
              <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 0.3 }} transition={{ delay: 0.2 }} className="absolute top-[25%] left-[1%] rotate-[8deg] bg-white p-2 pb-6 shadow-xl w-36">
                <ResilientImage src="/gallery2.jpeg" className="w-full h-28 object-cover" />
              </motion.div>
              <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ delay: 0.4 }} className="absolute top-[45%] left-[-1%] rotate-[-5deg] bg-white p-2 pb-6 shadow-xl w-44">
                <ResilientImage src="/gallery3.jpeg" className="w-full h-36 object-cover" />
              </motion.div>
              <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 0.3 }} transition={{ delay: 0.6 }} className="absolute top-[65%] left-[0%] rotate-[15deg] bg-white p-2 pb-6 shadow-xl w-36">
                <ResilientImage src="/extra1.jpeg" className="w-full h-28 object-cover" />
              </motion.div>
              <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ delay: 0.8 }} className="absolute bottom-[5%] left-[-2%] rotate-[-10deg] bg-white p-2 pb-6 shadow-xl w-40">
                <ResilientImage src="/extra2.jpeg" className="w-full h-32 object-cover" />
              </motion.div>

              {/* Right Side Photos */}
              <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} className="absolute top-20 right-[-1%] rotate-[10deg] bg-white p-2 pb-6 shadow-xl w-40">
                <ResilientImage src="/gallery4.jpeg" className="w-full h-32 object-cover" />
              </motion.div>
              <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 0.3 }} transition={{ delay: 0.3 }} className="absolute top-[35%] right-[0%] rotate-[-8deg] bg-white p-2 pb-6 shadow-xl w-36">
                <ResilientImage src="/gallery5.jpeg" className="w-full h-28 object-cover" />
              </motion.div>
              <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ delay: 0.5 }} className="absolute top-[55%] right-[-2%] rotate-[15deg] bg-white p-2 pb-6 shadow-xl w-44">
                <ResilientImage src="/book1.jpeg" className="w-full h-36 object-cover" />
              </motion.div>
              <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 0.3 }} transition={{ delay: 0.7 }} className="absolute top-[75%] right-[1%] rotate-[-12deg] bg-white p-2 pb-6 shadow-xl w-36">
                <ResilientImage src="/extra3.jpeg" className="w-full h-28 object-cover" />
              </motion.div>
              <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 0.4 }} transition={{ delay: 0.9 }} className="absolute bottom-[10%] right-[-1%] rotate-[5deg] bg-white p-2 pb-6 shadow-xl w-40">
                <ResilientImage src="/extra4.jpeg" className="w-full h-32 object-cover" />
              </motion.div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-6xl font-arabic font-bold text-rose-600 mb-4">بحب فيكي إيه؟</h2>
                <div className="flex justify-center gap-2">
                  <Heart size={20} className="text-rose-400 fill-rose-400" />
                  <Heart size={24} className="text-rose-500 fill-rose-500" />
                  <Heart size={20} className="text-rose-400 fill-rose-400" />
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {REASONS.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index % 10) * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 flex items-center gap-4 shadow-sm"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </span>
                    <p className="font-arabic text-[#5c4a43] text-lg leading-relaxed text-right flex-grow" dir="rtl">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-16 text-center flex flex-col items-center gap-6"
              >
                <p className="font-arabic text-xl text-[#7a6558]" dir="rtl">
                  كل سبب من دول هو حقيقة من كل قلبي يا ساندي 💖
                </p>
                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setView("book")}
                    className="bg-black/40 text-rose-200 border border-rose-900/50 px-8 py-3.5 rounded-full font-arabic text-sm shadow-xl flex items-center gap-2 hover:bg-rose-950/20"
                  >
                    رجوع لكتاب الصور 📖
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setView("beauty")}
                    className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-10 py-3.5 rounded-full font-arabic text-sm shadow-xl flex items-center gap-2 hover:brightness-110 animate-bounce"
                  >
                    استكشاف سحرِك وجسدكِ المثِير 🔥💋
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : view === "beauty" ? (
          <motion.div
            key="beauty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen w-full relative pt-20 pb-36 md:pb-44 px-4 bg-gradient-to-b from-[#180306] via-[#0d0102] to-[#180306] overflow-x-hidden"
          >
            {/* Intimate Glows & floating elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <div className="absolute top-[10%] left-[-20%] w-[70%] h-[70%] rounded-full bg-rose-950/20 blur-[150px]" />
              <div className="absolute bottom-[10%] right-[-20%] w-[70%] h-[70%] rounded-full bg-pink-950/15 blur-[150px]" />

              {/* Scattered red rose petals inside background */}
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-rose-500/10"
                  style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                  animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }}
                  transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.4 }}
                >
                  <RoseDecoration className="w-12 h-12" />
                </motion.div>
              ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
              {/* Header */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-center mb-12"
              >
                <div className="flex justify-center gap-2 items-center mb-4">
                  <span className="text-2xl">✨</span>
                  <h2 className="text-4xl md:text-6xl font-arabic font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300">
                    تفاصيل مفاتنك وجسدكِ 🔞
                  </h2>
                  <span className="text-2xl">🔥</span>
                </div>
                <p className="text-rose-200/50 font-arabic text-sm max-w-md mx-auto" dir="rtl">
                  هنا تكمن كلمات عشقي وجنوني بجمالكِ وقوامكِ الساحر... استكشفيها بلمسة حب ❤️
                </p>
              </motion.div>

              {/* Main Content Sections - Replaced massive walls of text with an interactive explorer */}
              <SensualExplorer />

              {/* Sexy Whispers Grid */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="w-full mt-16 bg-black/35 backdrop-blur-lg p-8 md:p-12 rounded-[4rem] border border-rose-950/40 shadow-2xl"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-4xl font-arabic font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-300 via-pink-200 to-rose-300" dir="rtl">
                    همساتنا وكلامنا الخاص والمثير 💋
                  </h3>
                  <p className="text-rose-200/50 mt-2 font-arabic text-sm" dir="rtl">
                    دوسي على الكروت عشان تكشفي همسات الشوق والجنون الخاصة بينا...
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <IntimateWhisperCard
                    title="الشفاه 💋"
                    desc="نفسي أضمك وندوب في بوسة طويلة متخلصش، أدوق فيها طعم شفايفك الكرزية اللي بتجنني وتخليني مش قادر أقاومك."
                  />
                  <IntimateWhisperCard
                    title="العنق والجسد 🔥"
                    desc="ريحة رقبتك وتفاصيل جسمك بتخليني أفقد السيطرة.. لمس جسمك وخصرك الناعم بيملا قلبي وعقلي بالرغبة والإثارة الكاملة."
                  />
                  <IntimateWhisperCard
                    title="الحضن الدافئ 🫂"
                    desc="عايز أخدك في حضني جامد لحد ما نحس بدفا أجسامنا ونبض قلوبنا سوا، ونتوه في عالم تاني مفيش فيه غير أنا وإنتي وبس."
                  />
                  <IntimateWhisperCard
                    title="الهمسات الخاصة 🔞"
                    desc="بحب جنوننا سوا وكلامنا المثير اللي بيخلي الشوق يولع بيننا.. كل حتة في جسمك هي ملكي ومصدر جنوني وإثارتي ودلعي دايماً."
                  />
                </div>
              </motion.div>

              {/* Bottom Navigation Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-16 text-center flex flex-col items-center gap-6"
              >
                <p className="font-arabic text-2xl text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-pink-200" dir="rtl">
                  إنتي أنثى أحلامي ومصدر إثارتي وجنوني دايماً يا ساندي 💋🔥
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setView("reasons")}
                    className="bg-black/40 text-rose-200 border border-rose-900/50 px-8 py-3.5 rounded-full font-arabic text-sm shadow-xl flex items-center gap-2 hover:bg-rose-950/20"
                  >
                    رجوع للأسباب 💖
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setView("landing")}
                    className="bg-black/40 text-rose-200 border border-rose-900/50 px-8 py-3.5 rounded-full font-arabic text-sm shadow-xl flex items-center gap-2 hover:bg-rose-950/20"
                  >
                    البداية من الأول ❤️
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setView("surprise")}
                    className="bg-gradient-to-r from-yellow-500 via-pink-500 to-red-500 text-white px-10 py-3.5 rounded-full font-arabic text-sm shadow-xl flex items-center gap-2 hover:brightness-110 font-bold animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)] border border-yellow-200"
                  >
                    مفاجأة عيد الميلاد الكبرى! 🎂✨🎁
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : view === "surprise" ? (
          <motion.div
            key="surprise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen w-full relative"
          >
            <BirthdaySurprisePage onBack={() => setView("beauty")} />
          </motion.div>
        ) : null}

      </AnimatePresence>

      {/* Persistent audio player */}
      <audio
        ref={audioRef}
        src={activeAudioSrc}
        preload="auto"
        playsInline
        onEnded={handleSongEnded}
        onError={handleAudioError}
      />

      {/* Floating music toggle */}
      {!isLoading && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', bounce: 0.5 }}
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
        >
          <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-pink-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity text-xs font-arabic text-pink-500">
            {isMuted ? 'شغل الأغنية ❤️' : 'كتم الصوت'}
          </div>
          <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
            <motion.span
              animate={{ rotate: isMuted ? 0 : [0, -8, 8, -8, 0] }}
              transition={{ repeat: isMuted ? 0 : Infinity, duration: 2.5, repeatDelay: 4 }}
              className="text-xl"
            >
              {isMuted ? '🔇' : '🎵'}
            </motion.span>
          </div>
        </motion.button>
      )}

      <style>{`
        body {
          background-color: #fff0f4;
          transition: background-color 0.8s ease;
        }
      `}</style>
      <Analytics />
    </div>
  );
}

