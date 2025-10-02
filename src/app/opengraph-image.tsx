/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs"; // ułatwia base64 przez Buffer (Edge też da się, ale to najprostsze)

export default async function Image() {
  // 1) Wczytaj avatar z /public bezpośrednio z dysku (build-safe)
  const fileUrl = new URL("../../public/avatar.png", import.meta.url);
  const arrayBuffer = await fetch(fileUrl).then((r) => r.arrayBuffer());

  // 2) Zrób data URL (string) – <img src> tego wymaga
  const base64 = Buffer.from(arrayBuffer).toString("base64");
  const avatarSrc = `data:image/png;base64,${base64}`;

  const TITLE = SITE.NAME;
  const SUB = SITE.DESC;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "#0a0a0a",
          color: "#fff",
          fontFamily: "Inter, ui-sans-serif, system-ui",
        }}
      >
        <img
          src={avatarSrc}
          width={160}
          height={160}
          alt=""
          style={{
            objectFit: "cover",
            borderRadius: 9999,
            position: "absolute",
            top: 72,
            left: 72,
            border: "4px solid rgba(255,255,255,.2)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            textAlign: "center",
            padding: "0 80px",
            maxWidth: 1000,
          }}
        >
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1 }}>
            {TITLE}
          </div>
          <div style={{ fontSize: 28, opacity: 0.85 }}>{SUB}</div>
        </div>
      </div>
    ),
    size
  );
}
