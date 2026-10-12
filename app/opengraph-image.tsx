// Ijtimoiy tarmoqlar (Telegram, Facebook, Instagram) uchun havola rasmi — 1200×630 PNG.
// Bosh sahifa va ichki sahifalar o'z rasmini bermasa, shu ishlatiladi.
import { ImageResponse } from "next/og";

export const alt = "Vision Group — Performance Marketing & Target kursi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #080F28 0%, #15244F 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: "#818CF8" }}>
          VISION GROUP · SHOGIRDLIK KURSI
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
            Performance Marketing &amp; Target kursi
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "rgba(255,255,255,0.8)", lineHeight: 1.4 }}>
            2 oyda: to&apos;g&apos;ri target, Pixel + CAPI va CRM integratsiyasi — real biznesda.
          </div>
        </div>
        <div style={{ display: "flex", gap: 48, fontSize: 30, color: "#818CF8" }}>
          <span>$120K+ byudjet</span>
          <span>12+ biznes</span>
          <span>vision-group.uz</span>
        </div>
      </div>
    ),
    size
  );
}
