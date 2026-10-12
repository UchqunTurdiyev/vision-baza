// Target kursi sahifasidagi formalar matni — sahifa va modal bir xil gapirishi uchun.
const ACCENT = { fontStyle: "italic" as const, fontWeight: 500, color: "#818CF8" };
const STRONG = { color: "#FFFFFF", fontWeight: 600 };

// «Kursga yozilish» / «Joyimni band qilish» tugmalari
export const courseFormCopy = {
  eyebrow: "Kursga yozilish · 30 soniya",
  title: (
    <>
      Shogirdlik kursiga <span style={ACCENT}>yoziling</span>
    </>
  ),
  subtitle: (
    <>
      Ism va telefon — boshqa hech narsa kerak emas. Administrator{" "}
      <strong style={STRONG}>24 soat ichida</strong> qo&apos;ng&apos;iroq qilib,
      tarif va sanani tasdiqlaydi.
    </>
  ),
  ctaText: "Kursga yozilish",
  fineprint: "Keyingi qadam: administrator qo'ng'irog'i",
};

// «Qo'shimcha ma'lumot olish» tugmalari — yozilish emas, savol-javob
export const infoFormCopy = {
  eyebrow: "Majburiyatsiz · 30 soniya",
  title: (
    <>
      Qo&apos;shimcha <span style={ACCENT}>ma&apos;lumot oling</span>
    </>
  ),
  subtitle: (
    <>
      Raqamingizni qoldiring — administrator{" "}
      <strong style={STRONG}>24 soat ichida</strong> qo&apos;ng&apos;iroq qilib, kurs, tariflar va
      savollaringizga javob beradi. Hech narsaga majbur emassiz.
    </>
  ),
  ctaText: "Ma'lumot olish",
  fineprint: "Qo'ng'iroqdan keyin qaror qilasiz",
};
