import { useEffect, useRef, useState, useCallback } from 'react';
import { burgerFrames } from '../animation/frames';
import './ScrollFrameAnimation.css';

/**
 * Reusable Scroll-Driven Image Sequence Animation Component with Brand Reveal Overlay
 *
 * @param {Object} props
 * @param {string[]} [props.frames] - Array of image URLs. Defaults to auto-detected burgerFrames.
 * @param {string} [props.scrollLength='400vh'] - Total scrollable height of the sticky section (e.g., '400vh').
 * @param {function} [props.onFrameChange] - Optional callback (frameIndex, progress) on frame updates.
 * @param {string} [props.className=''] - Optional additional container class name.
 * @param {string} [props.title='JACKPOT'] - Brand title revealed at animation conclusion.
 * @param {string} [props.tagline='THE FOODIE STANDARD'] - Tagline revealed below title.
 * @param {React.ReactNode} [props.children] - Optional overlay content inside sticky wrapper.
 */
export default function ScrollFrameAnimation({
  frames = burgerFrames,
  scrollLength = '400vh',
  onFrameChange,
  className = '',
  title = 'JACKPOT',
  tagline = 'THE FOODIE STANDARD',
  children,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const rafIdRef = useRef(null);

  const [isLoading, setIsLoading] = useState(() => Boolean(frames && frames.length > 0));
  const [loadProgress, setLoadProgress] = useState(0);

  // Render a specific frame on the canvas with object-fit: cover scaling
  const renderFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const images = imagesRef.current;
    if (!images || images.length === 0) return;

    const safeIdx = Math.max(0, Math.min(frameIdx, images.length - 1));
    const img = images[safeIdx];
    if (!img) return;

    // Retina / High-DPI support
    const dpr = window.devicePixelRatio || 1;
    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    const targetWidth = Math.round(displayWidth * dpr);
    const targetHeight = Math.round(displayHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    // Aspect ratio cover calculation
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Compute frame index based on scroll position and trigger render
  const updateFrameOnScroll = useCallback(() => {
    if (!containerRef.current || !imagesRef.current.length) return;

    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;

    if (totalScrollable <= 0) return;

    // Calculate normalized progress (0 to 1)
    const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
    const totalFrames = imagesRef.current.length;

    // Map progress linearly to frame index (0 to totalFrames - 1)
    const targetFrame = Math.min(
      Math.floor(progress * totalFrames),
      totalFrames - 1
    );

    if (targetFrame !== currentFrameRef.current) {
      currentFrameRef.current = targetFrame;
      renderFrame(targetFrame);
      if (onFrameChange) {
        onFrameChange(targetFrame, progress);
      }
    }

    // Interpolate brand text overlay animation during the last 20% of scroll
    if (overlayRef.current) {
      const startProgress = 0.80; // begins animating in at 80% scroll
      const endProgress = 0.98;   // fully settled by 98% scroll

      let overlayProgress = 0;
      if (progress >= startProgress) {
        overlayProgress = Math.min(
          Math.max((progress - startProgress) / (endProgress - startProgress), 0),
          1
        );
      }

      // Smooth deceleration curve
      const eased = overlayProgress * (2 - overlayProgress);
      const translateY = (1 - eased) * 35; // slide up 35px -> 0px
      const scale = 0.92 + eased * 0.08;   // scale 0.92 -> 1.0

      overlayRef.current.style.opacity = eased.toFixed(3);
      overlayRef.current.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
      overlayRef.current.style.visibility = eased > 0.005 ? 'visible' : 'hidden';
    }
  }, [onFrameChange, renderFrame]);

  // Preload all frames before beginning playback
  useEffect(() => {
    if (!frames || frames.length === 0) {
      return;
    }

    let isCancelled = false;
    let loadedCount = 0;
    const total = frames.length;
    const loadedImages = new Array(total);

    frames.forEach((url, idx) => {
      const img = new Image();
      img.onload = () => {
        if (isCancelled) return;
        loadedImages[idx] = img;
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / total) * 100));

        if (loadedCount === total) {
          imagesRef.current = loadedImages;
          setIsLoading(false);
        }
      };

      img.onerror = () => {
        if (isCancelled) return;
        console.warn(`Could not preload frame ${idx + 1} at ${url}`);
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / total) * 100));

        if (loadedCount === total) {
          imagesRef.current = loadedImages;
          setIsLoading(false);
        }
      };

      img.src = url;
    });

    return () => {
      isCancelled = true;
    };
  }, [frames]);

  // Setup scroll and resize listeners with requestAnimationFrame throttling
  useEffect(() => {
    if (isLoading) return;

    // Draw initial frame and overlay matching current scroll position immediately
    updateFrameOnScroll();
    renderFrame(currentFrameRef.current);

    const onScroll = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = requestAnimationFrame(() => {
        updateFrameOnScroll();
        rafIdRef.current = null;
      });
    };

    const onResize = () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(() => {
        renderFrame(currentFrameRef.current);
        updateFrameOnScroll();
        rafIdRef.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isLoading, renderFrame, updateFrameOnScroll]);

  return (
    <div
      ref={containerRef}
      className={`scroll-frame-container ${className}`}
      style={{ height: scrollLength }}
    >
      {isLoading && (
        <div className="scroll-frame-loader">
          <div className="scroll-frame-spinner" />
          <div className="scroll-frame-loader-content">
            <span className="scroll-frame-loader-title">Loading Burger Reveal</span>
            <span className="scroll-frame-loader-progress">{loadProgress}%</span>
            <div className="scroll-frame-progress-bar-container">
              <div
                className="scroll-frame-progress-bar"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="scroll-frame-sticky-wrapper">
        <canvas ref={canvasRef} className="scroll-frame-canvas" />

        {/* Animated Brand Reveal Overlay (End of Scroll Sequence) */}
        <div ref={overlayRef} className="scroll-frame-brand-overlay">
          <h2 className="scroll-frame-brand-title">{title}</h2>
          <div className="scroll-frame-brand-badge">
            <span
              className="material-symbols-outlined text-secondary text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <p className="scroll-frame-brand-tagline">{tagline}</p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
