import type { ReactNode } from "react";

interface TVFrameProps {
  children: ReactNode;
  className?: string;
}

// Thin clay-stroke TV silhouette with small stand notch. No shadows, no fill.
export function TVFrame({ children, className = "" }: TVFrameProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="relative rounded-2xl overflow-hidden bg-mojo-cream-2"
        style={{ border: "1.5px solid var(--mojo-clay)" }}
      >
        {children}
      </div>
      {/* Stand notch */}
      <div className="flex justify-center">
        <div
          className="mt-2 h-3 w-16 rounded-b-md"
          style={{
            borderLeft: "1.5px solid var(--mojo-clay)",
            borderRight: "1.5px solid var(--mojo-clay)",
            borderBottom: "1.5px solid var(--mojo-clay)",
          }}
        />
      </div>
    </div>
  );
}
