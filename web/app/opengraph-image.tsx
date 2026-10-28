import { ImageResponse } from "next/og";

export const alt = "Santhivarshini D | Aspiring AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0b1020 0%, #1e1b4b 100%)",
          color: "#e6e9f5",
        }}
      >
        <div style={{ fontSize: 30, color: "#22d3ee", letterSpacing: 4 }}>
          PORTFOLIO
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, marginTop: 16 }}>
          Santhivarshini D
        </div>
        <div style={{ fontSize: 38, marginTop: 20, color: "#9aa3bd" }}>
          Aspiring AI Engineer · Full-Stack and Flutter Developer
        </div>
      </div>
    ),
    { ...size }
  );
}