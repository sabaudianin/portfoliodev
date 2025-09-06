import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  const AVATAR = `${SITE.URL}/avatar.png`;
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
          src={AVATAR}
          width={160}
          height={160}
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
