import { Settings2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Gradient } from "../../components/gradient/Gradient";

const DEFAULT_COLORS = {
  col0: "blue",
  col1: "purple",
  col2: "orange",
  col3: "yellow",
} as const;

const COLOR_OPTIONS = [
  "blue",
  "purple",
  "orange",
  "yellow",
  "green",
  "white",
  "black",
  "grey",
  "blue-light",
  "green-light",
  "yellow-light",
  "purple-light",
  "orange-light",
  "grey-light",
  "blue-dark",
  "green-dark",
  "yellow-dark",
  "purple-dark",
  "orange-dark",
  "grey-dark",
  "blue-mid-light",
  "green-mid-light",
  "yellow-mid-light",
  "purple-mid-light",
  "orange-mid-light",
  "blue-mid-dark",
  "green-mid-dark",
  "yellow-mid-dark",
  "purple-mid-dark",
  "orange-mid-dark",
] as const;

type GradientColor = (typeof COLOR_OPTIONS)[number];

export const GradientGenerator: React.FC = () => {
  const [colors, setColors] = useState<{
    col0: GradientColor;
    col1: GradientColor;
    col2: GradientColor;
    col3: GradientColor;
  }>(DEFAULT_COLORS);
  const [isControlsOpen, setIsControlsOpen] = useState(true);
  const [isGearVisible, setIsGearVisible] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isToggleShortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
      if (isToggleShortcut) {
        event.preventDefault();
        setIsControlsOpen((prev) => !prev);
      }

      if (event.key === "Escape") {
        setIsControlsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const colorControls = useMemo(
    () => [
      { id: "col0", label: "Color 1 (left)" },
      { id: "col1", label: "Color 2" },
      { id: "col2", label: "Color 3" },
      { id: "col3", label: "Color 4 (right)" },
    ] as const,
    []
  );

  return (
    <div className="bg-black w-screen h-screen fixed top-0 left-0">
      <Gradient {...colors} />

      <div
        className="fixed top-0 right-0 z-30 h-24 w-24"
        onMouseEnter={() => setIsGearVisible(true)}
        onMouseLeave={() => setIsGearVisible(false)}
      />

      <button
        aria-label="Open controls"
        onClick={() => setIsControlsOpen(true)}
        className={`fixed right-4 top-4 z-40 rounded-full border border-white/20 bg-black/60 p-2.5 text-white shadow-lg backdrop-blur-sm transition-all ${
          !isControlsOpen && isGearVisible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <Settings2 className="h-5 w-5" />
      </button>

      {isControlsOpen && (
        <aside className="fixed right-4 top-4 z-50 w-[22rem] rounded-xl border border-white/15 bg-black/75 p-4 text-white shadow-2xl backdrop-blur-md">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold">Gradient controls</h2>
              <p className="mt-1 text-xs text-white/70">
                Tune colors, then hide UI for clean screenshots.
              </p>
            </div>
            <button
              aria-label="Close controls"
              onClick={() => setIsControlsOpen(false)}
              className="rounded-md p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            {colorControls.map((control) => (
              <label
                key={control.id}
                className="block rounded-lg border border-white/10 bg-black/40 p-3"
              >
                <span className="mb-2 block text-xs font-medium text-white/90">
                  {control.label}
                </span>
                <select
                  value={colors[control.id]}
                  onChange={(event) =>
                    setColors((prev) => ({
                      ...prev,
                      [control.id]: event.target.value as GradientColor,
                    }))
                  }
                  className="w-full rounded-md border border-white/20 bg-black/70 px-3 py-2 text-sm text-white outline-none transition focus:border-white/40"
                >
                  {COLOR_OPTIONS.map((colorKey) => (
                    <option key={colorKey} value={colorKey} className="bg-black">
                      {colorKey}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setColors(DEFAULT_COLORS)}
              className="rounded-md border border-white/20 px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10"
            >
              Reset defaults
            </button>
            <button
              onClick={() => setIsControlsOpen(false)}
              className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-black transition hover:bg-white/90"
            >
              Hide UI for screenshots
            </button>
          </div>

          <p className="mt-3 text-[11px] text-white/55">
            Tip: Press Cmd/Ctrl + K to toggle controls.
          </p>
        </aside>
      )}
    </div>
  );
};
