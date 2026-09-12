export type RestaurantVideo = {
  id: string;
  title: string;
  description?: string;
  src?: string; // رابط الفيديو - يُضاف لاحقًا من صاحب المطعم
  poster?: string; // صورة غلاف الفيديو
  duration?: string;
};

// ملاحظة: روابط الفيديوهات (src) والمدد (duration) الحقيقية غير متوفرة حاليًا — استبدلها بالبيانات الفعلية عند توفرها.
export const heroVideo: RestaurantVideo = {
  id: "hero",
  title: "ابو الحديد",
  description: "مين هو أبو الحديد !!",
  duration: "0:27",
  src: "/videos/hero.mp4",
};

export const videos: RestaurantVideo[] = [
  {
    id: "About",
    title: " أجواء ابوالحديد ",
    description: "عيش الاجواء مع ابو الحديد",
    duration: "0:27",
    src: "/videos/About.mp4",
    },
  {
    id: "foskia-prep",
    title: "تحضير الفسدقية",
    description: "الفسدقية اختراااع ",
    duration: "0:42",
    src: "/videos/fosdkia.mp4",
  },
  {
    id: "basbousa",
    title: " البسبوسة اختراع 😉",
    description: "جولة سريعة في أجواء أبو الحديد",
    duration: "0:50",
    src: "/videos/basbosa.mp4",
  },
  {
    id: "soany",
    title: "صواني",
    description: "سوااني ابو الحديد متتفوتش ",
    duration: "0:37",
    src: "/videos/soany.mp4",
  },
];
