import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { PageVideo } from "./pageData";

const emerald = "#0fb874";
const navy = "#071b33";
const ink = "#f7fbff";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

const clamp = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
};

const fade = (frame: number, start: number, duration: number) =>
  interpolate(frame, [start, start + duration], [0, 1], {
    ...clamp,
    easing: ease,
  });

const rise = (frame: number, start: number, duration: number, distance = 44) =>
  interpolate(frame, [start, start + duration], [distance, 0], {
    ...clamp,
    easing: ease,
  });

const LogoMark: React.FC<{ scale?: number }> = ({ scale = 1 }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 18 * scale,
        transform: `scale(${scale})`,
        transformOrigin: "left center",
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: 20,
          background: navy,
          display: "grid",
          placeItems: "center",
          boxShadow: "0 18px 42px rgba(0,0,0,.24)",
        }}
      >
        <div style={{ width: 38, display: "grid", gap: 8 }}>
          <div style={{ height: 7, borderRadius: 8, background: emerald }} />
          <div style={{ height: 7, width: 30, borderRadius: 8, background: ink }} />
          <div
            style={{
              height: 7,
              width: 22,
              borderRadius: 8,
              background: "rgba(255,255,255,.64)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
          fontSize: 52,
          lineHeight: 1,
          fontWeight: 800,
          color: "#fff",
        }}
      >
        GOO<span style={{ color: emerald }}>BUS</span>
      </div>
    </div>
  );
};

const ProgressRail: React.FC<{ frame: number }> = ({ frame }) => {
  const fill = interpolate(frame, [0, 240], [0, 1], clamp);
  return (
    <div
      style={{
        position: "absolute",
        left: 82,
        right: 82,
        bottom: 58,
        height: 5,
        borderRadius: 999,
        background: "rgba(255,255,255,.16)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${fill * 100}%`,
          height: "100%",
          borderRadius: 999,
          background: emerald,
        }}
      />
    </div>
  );
};

export const GoobusPageVideo: React.FC<{ page: PageVideo; index: number }> = ({
  page,
  index,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const headlineOpacity = fade(frame, 0.32 * fps, 0.7 * fps);
  const cardOpacity = fade(frame, 0.72 * fps, 0.65 * fps);
  const bulletsOpacity = fade(frame, 1.25 * fps, 0.7 * fps);
  const imageScale = interpolate(frame, [0, 8 * fps], [1.08, 1.0], clamp);
  const sweepX = interpolate(frame, [0.8 * fps, 3.2 * fps], [-280, 1500], clamp);
  const outro = interpolate(frame, [7.2 * fps, 8 * fps], [1, 0.92], clamp);

  return (
    <AbsoluteFill
      style={{
        background: navy,
        fontFamily: "Inter, Arial, sans-serif",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <Img
        src={staticFile(page.image)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${imageScale})`,
          opacity: 0.62,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(3,13,27,.96) 0%, rgba(5,20,38,.88) 42%, rgba(5,20,38,.42) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(145deg, rgba(15,184,116,.30), transparent 34%, rgba(255,255,255,.08) 78%, transparent)",
          opacity: 0.84,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -160,
          left: sweepX,
          width: 220,
          height: 1160,
          transform: "rotate(22deg)",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent)",
          filter: "blur(2px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 82,
          top: 62,
          opacity: fade(frame, 0, 0.6 * fps),
        }}
      >
        <LogoMark />
      </div>

      <div
        style={{
          position: "absolute",
          left: 82,
          top: 190,
          width: 760,
          transform: `translateY(${rise(frame, 0.22 * fps, 0.74 * fps)}px) scale(${outro})`,
          opacity: headlineOpacity,
        }}
      >
        <div
          style={{
            color: emerald,
            fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
            fontSize: 25,
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: 4,
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            gap: 16,
          }}
        >
          <span
            style={{
              width: 54,
              height: 5,
              borderRadius: 5,
              background: emerald,
              display: "inline-block",
            }}
          />
          {page.section}
        </div>
        <div
          style={{
            fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
            fontSize: 78,
            lineHeight: 0.96,
            fontWeight: 800,
            maxWidth: 880,
            textWrap: "balance",
          }}
        >
          {page.title}
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 31,
            lineHeight: 1.28,
            color: "rgba(255,255,255,.78)",
            maxWidth: 790,
          }}
        >
          {page.subtitle}
        </div>
      </div>

      <Sequence from={Math.round(1.05 * fps)}>
        <div
          style={{
            position: "absolute",
            right: 76,
            top: 146,
            width: 382,
            minHeight: 500,
            borderRadius: 30,
            padding: 34,
            background: "rgba(255,255,255,.94)",
            color: navy,
            boxShadow: "0 28px 80px rgba(0,0,0,.30)",
            border: "1px solid rgba(255,255,255,.62)",
            opacity: cardOpacity,
            transform: `translateY(${rise(frame, 0.88 * fps, 0.7 * fps, 34)}px)`,
          }}
        >
          <div
            style={{
              fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
              fontWeight: 800,
              fontSize: 24,
              color: emerald,
              marginBottom: 12,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
          <div
            style={{
              fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
              fontWeight: 800,
              fontSize: 37,
              lineHeight: 1.05,
              marginBottom: 22,
            }}
          >
            {page.label}
          </div>
          <div style={{ display: "grid", gap: 14, opacity: bulletsOpacity }}>
            {page.bullets.map((bullet, bulletIndex) => {
              const itemOpacity = fade(
                frame,
                (1.4 + bulletIndex * 0.16) * fps,
                0.42 * fps,
              );
              return (
                <div
                  key={bullet}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 13,
                    opacity: itemOpacity,
                    transform: `translateX(${interpolate(
                      itemOpacity,
                      [0, 1],
                      [24, 0],
                      clamp,
                    )}px)`,
                  }}
                >
                  <span
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 8,
                      background: "rgba(15,184,116,.16)",
                      display: "grid",
                      placeItems: "center",
                      color: emerald,
                      fontWeight: 900,
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ fontSize: 24, fontWeight: 700 }}>{bullet}</span>
                </div>
              );
            })}
          </div>
          <div
            style={{
              position: "absolute",
              left: 34,
              right: 34,
              bottom: 34,
              height: 62,
              borderRadius: 999,
              background: emerald,
              display: "grid",
              placeItems: "center",
              color: "#04271c",
              fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
              fontSize: 22,
              fontWeight: 800,
            }}
          >
            Solicitar orçamento
          </div>
        </div>
      </Sequence>

      <div
        style={{
          position: "absolute",
          left: 82,
          bottom: 82,
          fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
          fontWeight: 800,
          fontSize: 32,
          opacity: fade(frame, 1.7 * fps, 0.7 * fps),
        }}
      >
        goobuss.com
      </div>
      <ProgressRail frame={frame} />
    </AbsoluteFill>
  );
};

export const GoobusShowcase: React.FC<{ pages: PageVideo[] }> = ({ pages }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const sceneLength = 5 * fps;
  const current = Math.min(pages.length - 1, Math.floor(frame / sceneLength));
  const page = pages[current];
  const sceneFrame = frame - current * sceneLength;
  const localFade = fade(sceneFrame, 0, 0.55 * fps);

  return (
    <AbsoluteFill style={{ background: navy, overflow: "hidden" }}>
      <Img
        src={staticFile(page.image)}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${interpolate(sceneFrame, [0, sceneLength], [1.12, 1], clamp)})`,
          opacity: 0.55,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(90deg, rgba(3,13,27,.96), rgba(3,13,27,.74), rgba(3,13,27,.35))",
        }}
      />
      <div style={{ position: "absolute", left: 78, top: 58 }}>
        <LogoMark scale={0.78} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 78,
          top: 196,
          width: 960,
          opacity: localFade,
          transform: `translateY(${interpolate(localFade, [0, 1], [48, 0], clamp)}px)`,
        }}
      >
        <div
          style={{
            color: emerald,
            fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
            fontWeight: 800,
            letterSpacing: 4,
            fontSize: 24,
            textTransform: "uppercase",
          }}
        >
          {page.label}
        </div>
        <div
          style={{
            marginTop: 24,
            color: "#fff",
            fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
            fontWeight: 800,
            fontSize: 82,
            lineHeight: 0.98,
          }}
        >
          {page.title}
        </div>
        <div
          style={{
            marginTop: 26,
            maxWidth: 760,
            color: "rgba(255,255,255,.76)",
            fontFamily: "Inter, Arial, sans-serif",
            fontSize: 30,
            lineHeight: 1.32,
          }}
        >
          {page.subtitle}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 76,
          bottom: 70,
          color: "rgba(255,255,255,.68)",
          fontFamily: "Plus Jakarta Sans, Arial, sans-serif",
          fontSize: 28,
          fontWeight: 800,
        }}
      >
        {current + 1}/{pages.length}
      </div>
      <ProgressRail frame={frame} />
    </AbsoluteFill>
  );
};
