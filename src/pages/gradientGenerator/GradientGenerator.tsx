import { ChevronDown, Settings2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Gradient } from "../../components/gradient/Gradient";

const DEFAULT_COLORS = {
  col0: "blue",
  col1: "purple",
  col2: "orange",
  col3: "yellow",
} as const;

type GradientColor =
  | "blue"
  | "purple"
  | "orange"
  | "yellow"
  | "green"
  | "white"
  | "black"
  | "grey"
  | "blue-light"
  | "green-light"
  | "yellow-light"
  | "purple-light"
  | "orange-light"
  | "grey-light"
  | "blue-dark"
  | "green-dark"
  | "yellow-dark"
  | "purple-dark"
  | "orange-dark"
  | "grey-dark"
  | "blue-mid-light"
  | "green-mid-light"
  | "yellow-mid-light"
  | "purple-mid-light"
  | "orange-mid-light"
  | "blue-mid-dark"
  | "green-mid-dark"
  | "yellow-mid-dark"
  | "purple-mid-dark"
  | "orange-mid-dark";

const COLOR_HEX: Record<GradientColor, string> = {
  blue: "#0065BD",
  purple: "#8E00C7",
  orange: "#FD7024",
  yellow: "#F0D60A",
  green: "#2FCF13",
  white: "#ffffff",
  black: "#000000",
  grey: "#858585",
  "blue-light": "#ECF6FF",
  "green-light": "#E9FFE5",
  "yellow-light": "#FFFBDF",
  "purple-light": "#FAECFF",
  "orange-light": "#FFDFCD",
  "grey-light": "#DDDDDD",
  "blue-dark": "#002341",
  "green-dark": "#10280C",
  "yellow-dark": "#423A00",
  "purple-dark": "#250033",
  "orange-dark": "#381A00",
  "grey-dark": "#454545",
  "blue-mid-light": "#A3D4FF",
  "green-mid-light": "#A5FF95",
  "yellow-mid-light": "#FFF184",
  "purple-mid-light": "#EFC2FF",
  "orange-mid-light": "#FFB38A",
  "blue-mid-dark": "#003B6F",
  "green-mid-dark": "#127900",
  "yellow-mid-dark": "#9E8D06",
  "purple-mid-dark": "#560077",
  "orange-mid-dark": "#852E00",
};

const COLOR_GROUPS: Array<{
  heading: string;
  options: readonly GradientColor[];
}> = [
  {
    heading: "Core colors",
    options: [
      "blue",
      "purple",
      "orange",
      "yellow",
      "green",
      "white",
      "black",
      "grey",
    ],
  },
  {
    heading: "Light",
    options: [
      "blue-light",
      "green-light",
      "yellow-light",
      "purple-light",
      "orange-light",
      "grey-light",
    ],
  },
  {
    heading: "Dark",
    options: [
      "blue-dark",
      "green-dark",
      "yellow-dark",
      "purple-dark",
      "orange-dark",
      "grey-dark",
    ],
  },
  {
    heading: "Mid light",
    options: [
      "blue-mid-light",
      "green-mid-light",
      "yellow-mid-light",
      "purple-mid-light",
      "orange-mid-light",
    ],
  },
  {
    heading: "Mid dark",
    options: [
      "blue-mid-dark",
      "green-mid-dark",
      "yellow-mid-dark",
      "purple-mid-dark",
      "orange-mid-dark",
    ],
  },
];

const MOBILE_BREAKPOINT = 600;
const SWIPE_OPEN_THRESHOLD = 90;
const MOBILE_HINT_DURATION_MS = 5000;

export const GradientGenerator: React.FC = () => {
  const startsInMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  const [colors, setColors] = useState<{
    col0: GradientColor;
    col1: GradientColor;
    col2: GradientColor;
    col3: GradientColor;
  }>(DEFAULT_COLORS);
  const [grain, setGrain] = useState(1);
  const [colorStrength, setColorStrength] = useState(1.2);
  const [reactToMouse, setReactToMouse] = useState(true);
  const [isControlsOpen, setIsControlsOpen] = useState(!startsInMobile);
  const [isMobile, setIsMobile] = useState(startsInMobile);
  const [showMobileSwipeHint, setShowMobileSwipeHint] = useState(false);
  const [isNearGearArea, setIsNearGearArea] = useState(false);
  const [activeColorPicker, setActiveColorPicker] = useState<
    "col0" | "col1" | "col2" | "col3" | null
  >(null);

  const openControls = () => {
    setIsControlsOpen(true);
    setActiveColorPicker(null);
    setShowMobileSwipeHint(false);
  };

  const closeControls = () => {
    setIsControlsOpen(false);
    setActiveColorPicker(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setShowMobileSwipeHint(false);
      return;
    }

    setShowMobileSwipeHint(true);
    const timeoutId = window.setTimeout(() => {
      setShowMobileSwipeHint(false);
    }, MOBILE_HINT_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) {
      setIsControlsOpen(false);
      setActiveColorPicker(null);
    }
  }, [isMobile]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isToggleShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isToggleShortcut) {
        event.preventDefault();
        if (isControlsOpen) {
          closeControls();
        } else {
          openControls();
        }
      }

      if (event.key === "Escape") {
        closeControls();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isControlsOpen]);

  useEffect(() => {
    if (isMobile) {
      setIsNearGearArea(false);
      return;
    }

    const detectNearGearArea = (event: MouseEvent) => {
      const nearTop = event.clientY <= 120;
      const nearRight = window.innerWidth - event.clientX <= 120;
      setIsNearGearArea(nearTop && nearRight);
    };

    const handleMouseLeaveWindow = () => {
      setIsNearGearArea(false);
    };

    window.addEventListener("mousemove", detectNearGearArea);
    window.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mousemove", detectNearGearArea);
      window.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      return;
    }

    const swipeState = {
      startX: 0,
      startY: 0,
      touchCanOpen: false,
      mouseCanOpen: false,
    };

    const onTouchStart = (event: TouchEvent) => {
      if (isControlsOpen) {
        swipeState.touchCanOpen = false;
        return;
      }

      if (showMobileSwipeHint) {
        setShowMobileSwipeHint(false);
      }

      const touch = event.touches[0];
      swipeState.startX = touch.clientX;
      swipeState.startY = touch.clientY;
      swipeState.touchCanOpen = true;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (!swipeState.touchCanOpen || isControlsOpen) {
        return;
      }

      const touch = event.changedTouches[0];
      const swipeDistance = swipeState.startY - touch.clientY;
      const horizontalDistance = Math.abs(swipeState.startX - touch.clientX);
      const isMostlyVertical = horizontalDistance < 80;
      if (swipeDistance > SWIPE_OPEN_THRESHOLD && isMostlyVertical) {
        openControls();
      }

      swipeState.touchCanOpen = false;
    };

    const onMouseDown = (event: MouseEvent) => {
      if (event.button !== 0 || isControlsOpen) {
        swipeState.mouseCanOpen = false;
        return;
      }

      if (showMobileSwipeHint) {
        setShowMobileSwipeHint(false);
      }

      swipeState.startX = event.clientX;
      swipeState.startY = event.clientY;
      swipeState.mouseCanOpen = true;
    };

    const onMouseUp = (event: MouseEvent) => {
      if (!swipeState.mouseCanOpen || isControlsOpen) {
        return;
      }

      const swipeDistance = swipeState.startY - event.clientY;
      const horizontalDistance = Math.abs(swipeState.startX - event.clientX);
      const isMostlyVertical = horizontalDistance < 80;
      if (swipeDistance > SWIPE_OPEN_THRESHOLD && isMostlyVertical) {
        openControls();
      }

      swipeState.mouseCanOpen = false;
    };

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isMobile, isControlsOpen, showMobileSwipeHint]);

  const colorControls = useMemo(
    () =>
      [
        { id: "col0", label: "Color 1 (left)" },
        { id: "col1", label: "Color 2" },
        { id: "col2", label: "Color 3" },
        { id: "col3", label: "Color 4 (right)" },
      ] as const,
    [],
  );

  const controlsContent = (
    <>
      <div
        className={`flex items-start justify-between gap-4 ${isMobile ? "mb-6" : "mb-4"}`}
      >
        <div>
          <h2 className={`${isMobile ? "text-base" : "text-sm"} font-semibold`}>
            Gradient controls
          </h2>
          <p
            className={`mt-1 text-white/70 ${isMobile ? "text-sm" : "text-xs"}`}
          >
            Tune colors, then hide UI for clean screenshots.
          </p>
        </div>
        <button
          aria-label="Close controls"
          onClick={closeControls}
          className="rounded-md p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className={isMobile ? "space-y-4" : "space-y-3"}>
        {!isMobile && (
          <div className="rounded-lg border border-white/10 bg-black/40 p-3">
            <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-white/90">
              <input
                type="checkbox"
                checked={reactToMouse}
                onChange={(event) => setReactToMouse(event.target.checked)}
                className="h-4 w-4 rounded border-white/30 bg-black/70 accent-white"
              />
              React to mouse cursor
            </label>
            <p className="mt-2 text-[11px] text-white/55">
              Disable for static, non-interactive screenshot captures.
            </p>
          </div>
        )}

        {colorControls.map((control) => (
          <div
            key={control.id}
            className={`rounded-lg border border-white/10 bg-black/40 ${isMobile ? "p-4" : "p-3"}`}
          >
            <span
              className={`mb-2 block font-medium text-white/90 ${
                isMobile ? "text-sm" : "text-xs"
              }`}
            >
              {control.label}
            </span>
            <button
              type="button"
              onClick={() =>
                setActiveColorPicker((prev) =>
                  prev === control.id ? null : control.id,
                )
              }
              className={`flex w-full items-center justify-between rounded-md border border-white/20 bg-black/70 text-left text-sm text-white transition hover:border-white/35 ${
                isMobile ? "px-3 py-2.5" : "px-3 py-2"
              }`}
            >
              <span className="flex items-center gap-2">
                <span
                  className="h-4 w-4 rounded-sm border border-white/40"
                  style={{ backgroundColor: COLOR_HEX[colors[control.id]] }}
                />
                {colors[control.id]}
              </span>
              <ChevronDown className="h-4 w-4 text-white/70" />
            </button>

            {activeColorPicker === control.id && (
              <div className="mt-2 max-h-60 overflow-y-auto rounded-md border border-white/15 bg-black/85 p-2">
                {COLOR_GROUPS.map((group) => (
                  <div key={group.heading} className="mb-3 last:mb-0">
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-white/60">
                      {group.heading}
                    </p>
                    <div className="grid grid-cols-6 gap-2">
                      {group.options.map((colorKey) => {
                        const isSelected = colors[control.id] === colorKey;
                        return (
                          <button
                            key={colorKey}
                            type="button"
                            title={colorKey}
                            onClick={() => {
                              setColors((prev) => ({
                                ...prev,
                                [control.id]: colorKey,
                              }));
                              setActiveColorPicker(null);
                            }}
                            className={`rounded border transition ${
                              isMobile ? "h-10 w-10" : "h-8 w-8"
                            } ${
                              isSelected
                                ? "border-white ring-1 ring-white/50"
                                : "border-white/25 hover:border-white/60"
                            }`}
                            style={{ backgroundColor: COLOR_HEX[colorKey] }}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div
        className={`rounded-lg border border-white/10 bg-black/40 ${isMobile ? "mt-5 p-4" : "mt-4 p-3"}`}
      >
        <div className="mb-2 flex items-center justify-between">
          <span
            className={`${isMobile ? "text-sm" : "text-xs"} font-medium text-white/90`}
          >
            Film grain
          </span>
          <span className={`${isMobile ? "text-sm" : "text-xs"} text-white/70`}>
            {grain.toFixed(2)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={grain}
          onChange={(event) => setGrain(Number(event.target.value))}
          className="w-full accent-white"
        />
        <p
          className={`${isMobile ? "mt-2 text-xs" : "mt-1 text-[11px]"} text-white/55`}
        >
          Controls only the grey grain overlay on top.
        </p>
      </div>

      <div
        className={`rounded-lg border border-white/10 bg-black/40 ${isMobile ? "mt-5 p-4" : "mt-4 p-3"}`}
      >
        <div className="mb-2 flex items-center justify-between">
          <span
            className={`${isMobile ? "text-sm" : "text-xs"} font-medium text-white/90`}
          >
            Color strength
          </span>
          <span className={`${isMobile ? "text-sm" : "text-xs"} text-white/70`}>
            {colorStrength.toFixed(2)}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={3}
          step={0.01}
          value={colorStrength}
          onChange={(event) => setColorStrength(Number(event.target.value))}
          className="w-full accent-white"
        />
        <p
          className={`${isMobile ? "mt-2 text-xs" : "mt-1 text-[11px]"} text-white/55`}
        >
          Controls global color intensity boost (default 1.20).
        </p>
      </div>

      <div className={`mt-5 flex gap-2 ${isMobile ? "flex-col" : ""}`}>
        <button
          onClick={() => {
            setColors(DEFAULT_COLORS);
            setGrain(1);
            setColorStrength(1.2);
            setReactToMouse(true);
            setActiveColorPicker(null);
          }}
          className={`rounded-md border border-white/20 text-xs font-medium text-white transition hover:bg-white/10 ${
            isMobile ? "px-3 py-3" : "px-3 py-2"
          }`}
        >
          Reset defaults
        </button>
        <button
          onClick={closeControls}
          className={`rounded-md bg-white text-xs font-semibold text-black transition hover:bg-white/90 ${
            isMobile ? "px-3 py-3" : "px-3 py-2"
          }`}
        >
          Hide UI for screenshots
        </button>
      </div>

      <p
        className={`${isMobile ? "mt-4 text-xs" : "mt-3 text-[11px]"} text-white/55`}
      >
        Tip: Press Cmd/Ctrl + K to toggle controls.
      </p>

      <p
        className={`${isMobile ? "mt-4 text-[11px]" : "mt-3 text-[10px]"} text-white/45`}
      >
        Attribution: Basis implementation adapted from{" "}
        <a
          href="https://codepen.io/bclarke/pen/MWEGRga"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-white/30 underline-offset-2 hover:text-white/75"
        >
          this CodePen effect
        </a>{" "}
        by{" "}
        <a
          href="https://www.reddit.com/r/Frontend/comments/rvudot/who_can_replicate_this_background_effect/"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-white/30 underline-offset-2 hover:text-white/75"
        >
          Chuck_Loads (Reddit post)
        </a>
        ; film grain basis adapted from{" "}
        <a
          href="https://maximmcnair.com/p/webgl-film-grain"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-white/30 underline-offset-2 hover:text-white/75"
        >
          Maxim McNair
        </a>
        .
      </p>

      {isMobile && (
        <div
          className="h-20"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        />
      )}
    </>
  );

  return (
    <div className="bg-black w-screen h-screen fixed top-0 left-0">
      <Gradient
        {...colors}
        grain={grain}
        colorStrength={colorStrength}
        reactToMouse={reactToMouse}
      />

      {isMobile && (
        <div
          className={`fixed inset-0 z-40 flex items-center justify-center px-4 transition-opacity duration-300 ${
            showMobileSwipeHint
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          onClick={() => setShowMobileSwipeHint(false)}
        >
          <div
            className="w-full max-w-xs rounded-lg border border-white/20 bg-black/70 p-3 text-white/90 shadow-md backdrop-blur-md"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold">
                  Talente Spenden Gradient Generator
                </p>
                <p className="mt-1 text-[11px] text-white/75">
                  Swipe up anywhere for adapting gradient params.
                </p>
              </div>
              <button
                aria-label="Close hint"
                onClick={() => setShowMobileSwipeHint(false)}
                className="rounded-md p-1 text-white/65 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {!isMobile && (
        <button
          aria-label="Open controls"
          onClick={openControls}
          className={`fixed right-4 top-4 z-40 rounded-lg border border-white/15 bg-black/55 p-2 text-white/85 shadow-md backdrop-blur-md transition-all hover:border-white/30 hover:bg-black/70 hover:text-white ${
            !isControlsOpen && isNearGearArea
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <Settings2 className="h-5 w-5" />
        </button>
      )}

      {isMobile ? (
        <div
          className={`fixed inset-0 z-50 flex items-start justify-center pt-48 transition-opacity duration-200 ${
            isControlsOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/35 transition-opacity duration-200 ${
              isControlsOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeControls}
            aria-hidden
          />
          <aside
            className={`relative z-10 max-h-[calc(100vh-8rem)] w-full overflow-y-auto rounded-t-2xl border-t border-white/15 bg-black/80 p-5 text-white shadow-2xl backdrop-blur-md transition-all duration-200 ${
              isControlsOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
          >
            {controlsContent}
          </aside>
        </div>
      ) : (
        isControlsOpen && (
          <aside className="fixed right-4 top-4 z-50 max-h-[calc(100vh-2rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-xl border border-white/15 bg-black/75 p-4 text-white shadow-2xl backdrop-blur-md">
            {controlsContent}
          </aside>
        )
      )}
    </div>
  );
};
