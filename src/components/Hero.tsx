import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useRef } from "react";

interface HeroProps {
  onNavigate?: (page: "contact" | "how-it-works") => void;
}

// Declare YouTube API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function Hero({ onNavigate }: HeroProps) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    // Check if script is already loaded
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Initialize player
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player('youtube-player', {
          height: '100%',
          width: '100%',
          videoId: 'jkmwHiFci18',
          playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            start: 3,
            end: 33,
            loop: 1,
            enablejsapi: 1,
            iv_load_policy: 3,
            disablekb: 1,
            fs: 0,
            cc_load_policy: 0,
            autohide: 1,
          },
          events: {
            onReady: (event: any) => {
              try {
                event.target.playVideo();
                event.target.mute();
                
                // Check video time every 100ms and loop at 33 seconds
                intervalRef.current = setInterval(() => {
                  try {
                    if (playerRef.current && 
                        typeof playerRef.current.getCurrentTime === 'function' &&
                        typeof playerRef.current.seekTo === 'function') {
                      const currentTime = playerRef.current.getCurrentTime();
                      if (currentTime >= 33) {
                        playerRef.current.seekTo(3);
                      }
                    }
                  } catch (error) {
                    // Silently handle errors if player is not ready
                    console.debug('Player not ready for time check');
                  }
                }, 100);
              } catch (error) {
                console.error('Error in onReady:', error);
              }
            },
            onStateChange: (event: any) => {
              try {
                // Keep video playing
                if (event.data === window.YT.PlayerState.ENDED || event.data === window.YT.PlayerState.PAUSED) {
                  event.target.seekTo(3);
                  event.target.playVideo();
                }
              } catch (error) {
                console.debug('Player state change error:', error);
              }
            },
          },
        });
      }
    };

    // Wait for API to be ready
    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        try {
          playerRef.current.destroy();
        } catch (error) {
          console.debug('Error destroying player:', error);
        }
      }
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background - Plays from 3 to 33 seconds */}
      <div className="absolute inset-0 z-0">
        <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            id="youtube-player"
            className="absolute top-1/2 left-1/2 pointer-events-none"
            style={{
              transform: 'translate(-50%, -50%) scale(1.2)',
              width: '100vw',
              height: '56.25vw', // 16:9 aspect ratio
              minHeight: '100vh',
              minWidth: '177.77vh', // 16:9 aspect ratio
            }}
          />
        </div>
        
        {/* Solid overlays to hide YouTube branding - top bars */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900 via-slate-900/95 to-transparent z-[5] pointer-events-none"></div>
        
        {/* Navy overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/80 to-blue-900/85"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Text Content - Centered */}
        <div className="text-white text-center max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            We Apply Jobs for You
          </h1>
          
          <p className="text-xl mb-6 text-gray-200 leading-relaxed">
            Stop wasting hours tailoring resumes and applying to dozens of roles manually.
          </p>
          
          <p className="text-lg mb-8 text-gray-300 leading-relaxed">
            Our experts and AI handle it all: resume tailoring, cover letters, applications, and strategy. You focus on your growth and interviews.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => onNavigate?.("contact")}
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg group rounded-full"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => onNavigate?.("how-it-works")}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm px-8 py-6 text-lg rounded-full"
            >
              <Play className="mr-2 w-5 h-5" />
              See How It Works
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
