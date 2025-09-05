import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const title = "Rafal Bobko - Frontend Dev";
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fff",
          fontSize: 60,
          fontWeight: 800,
          letterSpacing: -1,
        }}
      >
        {title}
      </div>
    ),
    { ...size }
  );
}
