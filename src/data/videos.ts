export type RestaurantVideo = {
  id: string;
  title: string;
  description?: string;
  src?: string; // رابط الفيديو - يُضاف لاحقًا من صاحب المطعم
  poster?: string; // صورة غلاف الفيديو
  duration?: string;
};

// ملاحظة: روابط الفيديوهات (src) والمدد (duration) الحقيقية غير متوفرة حاليًا — استبدلها بالبيانات الفعلية عند توفرها.
export const videos: RestaurantVideo[] = [
  {
    id: "charcoal",
    title: "مشوياتنا على الفحم",
    description: "شوف طريقة الشوي على الفحم زي زمان",
    duration: "0:45",
    src: "/videos/hero.mp4",
    poster: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "kofta-prep",
    title: "تحضير الكفتة",
    description: "من التتبيلة للسيخ بأيدي الشيف",
    duration: "1:12",
  },
  {
    id: "atmosphere",
    title: " البسبوسة اختراع 😉",
    description: "جولة سريعة في أجواء أبو الحديد",
    duration: "0:58",
  },
  {
    id: "inside",
    title: "من داخل المطعم",
    description: "نظرة من جوه المطبخ والصالة",
    duration: "0:37",
  },
];
