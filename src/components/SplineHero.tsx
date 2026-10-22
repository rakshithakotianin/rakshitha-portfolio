import React, { useState, useEffect, Suspense, Component, ReactNode, ErrorInfo } from 'react';
import { Box, Sparkles, Layers, AlertCircle, RefreshCw, ExternalLink, Cpu } from 'lucide-react';
import { splineConfig } from '../data/portfolio';

// Lazy-load the official Spline React component so it does not block the main website bundle
const Spline = React.lazy(() => import('@splinetool/react-spline'));

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// Error Boundary specifically for WebGL/3D scene failures
class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('Spline 3D Scene encountered an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface SplineHeroProps {
  sceneUrl?: string;
  className?: string;
}

export const SplineHero: React.FC<SplineHeroProps> = ({
  sceneUrl = splineConfig.sceneUrl,
  className = '',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadFailed, setLoadFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced-motion accessibility preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  // Loading skeleton placeholder matching dark violet/blue palette
  const LoadingPlaceholder = () => (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-900/60 backdrop-blur-sm z-10">
      <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-violet-600/30 to-blue-500/30 animate-ping opacity-75" />
        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-violet-500/40 flex items-center justify-center text-violet-400">
          <RefreshCw className="w-6 h-6 animate-spin text-violet-400" />
        </div>
      </div>
      <p className="text-xs font-mono text-slate-300">Loading 3D Experience...</p>
      <p className="text-[11px] text-slate-500 font-mono mt-1">Initializing WebGL Canvas</p>
    </div>
  );

  // Fallback when scene fails to load or WebGL is unsupported
  const FailureFallback = () => (
    <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-slate-900/80 rounded-2xl border border-slate-800">
      <div className="w-12 h-12 rounded-xl bg-amber-950/40 border border-amber-800/40 flex items-center justify-center text-amber-400 mb-3">
        <AlertCircle className="w-6 h-6" />
      </div>
      <h4 className="text-sm font-semibold text-slate-200 mb-1">
        3D Scene Fallback Active
      </h4>
      <p className="text-xs text-slate-400 max-w-xs mb-4 leading-relaxed">
        Unable to initialize WebGL canvas or load the remote 3D assets. Core portfolio content remains fully accessible.
      </p>
      <button
        onClick={() => {
          setLoadFailed(false);
          setIsLoaded(false);
        }}
        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 transition-colors"
      >
        Retry Loading Scene
      </button>
    </div>
  );

  // Configurable Placeholder when user has not yet inserted their scene URL
  const SceneUrlPlaceholder = () => (
    <div className="relative h-full w-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-[#0d121c] border border-slate-800/90 shadow-2xl overflow-hidden group hover:border-violet-500/40 transition-all duration-300">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-800/50 text-[11px] font-mono text-violet-300">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>Interactive 3D Scene Ready</span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          @splinetool/react-spline
        </span>
      </div>

      {/* Central Visual 3D Tech Hologram Representation */}
      <div className="my-8 flex flex-col items-center justify-center text-center z-10">
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-4 flex items-center justify-center">
          {/* Concentric rotating rings */}
          <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute inset-3 rounded-full border border-dashed border-blue-400/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-violet-600/20 via-indigo-600/10 to-blue-500/20 blur-sm" />
          
          <div className="w-16 h-16 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-xl flex items-center justify-center text-violet-300 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <Box className="w-8 h-8 text-violet-400" />
          </div>
        </div>

        <h4 className="text-base font-bold font-heading text-white mb-1.5">
          Spline 3D Integration Slot
        </h4>
        <p className="text-xs text-slate-300 max-w-sm leading-relaxed mb-4">
          Positioned beside your introduction. Designed to load your interactive 3D export smoothly.
        </p>

        {/* Configuration instructions */}
        <div className="w-full max-w-xs p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-left font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5 text-violet-300 mb-1 font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>How to insert your scene:</span>
          </div>
          <p className="text-slate-400 text-[10px] leading-relaxed">
            Open <span className="text-slate-200">src/data/portfolio.ts</span> and paste your exported Spline URL into <span className="text-violet-300">splineConfig.sceneUrl</span>.
          </p>
        </div>
      </div>

      {/* Footer Attribution */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 z-10 font-mono">
        <span className="flex items-center gap-1 text-slate-400">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          WebGL & React Ready
        </span>
        <a
          href="https://spline.design"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-violet-300 transition-colors flex items-center gap-1"
        >
          <span>Spline 3D</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );

  // If no URL has been provided yet, render the configurable placeholder
  if (!sceneUrl || sceneUrl.trim() === '') {
    return (
      <div className={`w-full h-[380px] sm:h-[440px] lg:h-[480px] ${className}`}>
        <SceneUrlPlaceholder />
      </div>
    );
  }

  // If reduced motion is requested, render a static accessible view
  if (prefersReducedMotion) {
    return (
      <div className={`w-full h-[380px] sm:h-[440px] lg:h-[480px] ${className}`}>
        <div className="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-slate-900/60 rounded-2xl border border-slate-800">
          <Box className="w-10 h-10 text-violet-400 mb-3" />
          <h4 className="text-sm font-semibold text-slate-200 mb-1">
            Static 3D View (Reduced Motion Mode)
          </h4>
          <p className="text-xs text-slate-400 max-w-xs">
            Interactive 3D animations are paused in accordance with your system accessibility preferences.
          </p>
        </div>
      </div>
    );
  }

  if (loadFailed) {
    return (
      <div className={`w-full h-[380px] sm:h-[440px] lg:h-[480px] ${className}`}>
        <FailureFallback />
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden bg-slate-900/30 border border-slate-800/80 shadow-2xl ${className}`}
      aria-label="Interactive 3D Scene"
    >
      {/* Loading Skeleton */}
      {!isLoaded && <LoadingPlaceholder />}

      {/* Spline Component with Error Boundary and Suspense */}
      <SplineErrorBoundary fallback={<FailureFallback />}>
        <Suspense fallback={<LoadingPlaceholder />}>
          <div className="w-full h-full">
            <Spline
              scene={sceneUrl}
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                setLoadFailed(true);
                setIsLoaded(true);
              }}
              className="w-full h-full"
            />
          </div>
        </Suspense>
      </SplineErrorBoundary>

      {/* Attribution Badge */}
      <div className="absolute bottom-2.5 right-3 px-2.5 py-1 rounded-md bg-[#0b0f17]/80 backdrop-blur-md border border-slate-800/80 text-[10px] text-slate-400 font-mono flex items-center gap-1 z-20 pointer-events-auto">
        <span>3D Scene via</span>
        <a
          href="https://spline.design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:text-violet-300 underline underline-offset-2 flex items-center gap-0.5"
        >
          <span>Spline</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>
    </div>
  );
};
