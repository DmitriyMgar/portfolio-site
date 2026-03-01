"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
}

interface NebulaStar {
  x: number;
  y: number;
  size: number;
  brightness: number;
  color: string;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

export default function SpaceBackground() {
  const nebulaCanvasRef = useRef<HTMLCanvasElement>(null);
  const distantStarsCanvasRef = useRef<HTMLCanvasElement>(null);
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const meteorsCanvasRef = useRef<HTMLCanvasElement>(null);
  
  const starsRef = useRef<Star[]>([]);
  const distantStarsRef = useRef<Star[]>([]);
  const nebulaStarsRef = useRef<NebulaStar[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationRef = useRef<number>(0);
  const lastMeteorTime = useRef<number>(0);

  const { scrollYProgress } = useScroll();

  const starsRotation = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const distantStarsRotation = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const sunOffsetY = useTransform(scrollYProgress, [0, 0.6, 1], [140, 70, 0]);

  const lightX = useTransform(scrollYProgress, [0, 0.6, 1], [30, 30, 40]);
  const lightY = useTransform(scrollYProgress, [0, 0.6, 1], [100, 80, 40]);
  const earthShadow = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, transparent 10%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.95) 85%)`;

  const initStars = useCallback((width: number, height: number) => {
    const diagonal = Math.sqrt(width * width + height * height);

    const stars: Star[] = [];
    const starCount = Math.floor((diagonal * diagonal) / 2000);
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * diagonal * 1.5,
        y: (Math.random() - 0.5) * diagonal * 1.5,
        size: Math.random() * 1.5 + 0.5,
        brightness: Math.random() * 0.7 + 0.3,
      });
    }
    starsRef.current = stars;

    const distantStars: Star[] = [];
    const distantStarCount = Math.floor((diagonal * diagonal) / 1200);
    for (let i = 0; i < distantStarCount; i++) {
      distantStars.push({
        x: (Math.random() - 0.5) * diagonal * 1.5,
        y: (Math.random() - 0.5) * diagonal * 1.5,
        size: Math.random() * 0.5 + 0.3,
        brightness: Math.random() * 0.3 + 0.2,
      });
    }
    distantStarsRef.current = distantStars;

    const nebulaStars: NebulaStar[] = [];
    const nebulaColors = [
      "255, 180, 100", 
      "255, 200, 120", 
      "255, 160, 80",  
      "255, 220, 150", 
      "200, 255, 200", 
    ];

    const cluster1X = diagonal * 0.35;
    const cluster1Y = -diagonal * 0.25;
    const cluster1Size = diagonal * 0.4;
    for (let i = 0; i < 800; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.random() * cluster1Size; 
      nebulaStars.push({
        x: cluster1X + Math.cos(angle) * distance,
        y: cluster1Y + Math.sin(angle) * distance,
        size: Math.random() * 0.8 + 0.2,
        brightness: Math.random() * 0.5 + 0.2,
        color: nebulaColors[Math.floor(Math.random() * 4)], 
      });
    }

    const cluster2X = -diagonal * 0.3;
    const cluster2Y = -diagonal * 0.1;
    const cluster2Size = diagonal * 0.25;
    for (let i = 0; i < 300; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.random() * cluster2Size;
      nebulaStars.push({
        x: cluster2X + Math.cos(angle) * distance,
        y: cluster2Y + Math.sin(angle) * distance,
        size: Math.random() * 0.6 + 0.2,
        brightness: Math.random() * 0.4 + 0.15,
        color: Math.random() > 0.3 ? nebulaColors[4] : nebulaColors[1], 
      });
    }

    nebulaStarsRef.current = nebulaStars;
  }, []);

  const drawStaticCanvas = useCallback((
    ctx: CanvasRenderingContext2D, 
    items: any[], 
    drawFn: (ctx: CanvasRenderingContext2D, item: any) => void
  ) => {
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(centerX, centerY);
    
    items.forEach((item) => drawFn(ctx, item));
    
    ctx.restore();
  }, []);

  const createMeteor = useCallback((width: number, height: number): Meteor => {
    return {
      x: Math.random() * width * 1.5,
      y: -50,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 8 + 4,
      opacity: Math.random() * 0.6 + 0.4,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
    };
  }, []);

  const drawMeteors = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    meteorsRef.current.forEach((meteor) => {
      const tailX = meteor.x + Math.cos(meteor.angle + Math.PI) * meteor.length;
      const tailY = meteor.y + Math.sin(meteor.angle + Math.PI) * meteor.length;

      const gradient = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(tailX, tailY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(meteor.x, meteor.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
      ctx.fill();
    });
  }, []);

  const updateMeteors = useCallback(
    (width: number, height: number, time: number) => {
      if (time - lastMeteorTime.current > 2000 + Math.random() * 3000) {
        if (meteorsRef.current.length < 3) {
          meteorsRef.current.push(createMeteor(width, height));
          lastMeteorTime.current = time;
        }
      }

      meteorsRef.current = meteorsRef.current.filter((meteor) => {
        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        return meteor.y < height + 100 && meteor.x > -100;
      });
    },
    [createMeteor]
  );

  useEffect(() => {
    const nebulaCanvas = nebulaCanvasRef.current;
    const distantStarsCanvas = distantStarsCanvasRef.current;
    const starsCanvas = starsCanvasRef.current;
    const meteorsCanvas = meteorsCanvasRef.current;
    
    if (!nebulaCanvas || !distantStarsCanvas || !starsCanvas || !meteorsCanvas) return;

    const nebulaCtx = nebulaCanvas.getContext("2d", { alpha: true });
    const distantStarsCtx = distantStarsCanvas.getContext("2d", { alpha: true });
    const starsCtx = starsCanvas.getContext("2d", { alpha: true });
    const meteorsCtx = meteorsCanvas.getContext("2d", { alpha: true });
    
    if (!nebulaCtx || !distantStarsCtx || !starsCtx || !meteorsCtx) return;

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const diagonal = Math.ceil(Math.sqrt(w * w + h * h));

      nebulaCanvas.width = w;
      nebulaCanvas.height = h;
      
      distantStarsCanvas.width = diagonal;
      distantStarsCanvas.height = diagonal;
      
      starsCanvas.width = diagonal;
      starsCanvas.height = diagonal;
      
      meteorsCanvas.width = w;
      meteorsCanvas.height = h;

      initStars(w, h);

      // Draw all static layers ONCE
      drawStaticCanvas(nebulaCtx, nebulaStarsRef.current, (ctx, star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.color}, ${star.brightness})`;
        ctx.fill();
      });

      drawStaticCanvas(distantStarsCtx, distantStarsRef.current, (ctx, star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();
      });

      drawStaticCanvas(starsCtx, starsRef.current, (ctx, star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();
      });
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      updateMeteors(meteorsCanvas.width, meteorsCanvas.height, time);
      drawMeteors(meteorsCtx);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [initStars, drawStaticCanvas, drawMeteors, updateMeteors]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none">
      {/* Layer 1: Nebula canvas */}
      <canvas ref={nebulaCanvasRef} className="absolute inset-0" />

      {/* Layer 2: Distant Stars (rotates via CSS GPU acceleration) */}
      <motion.canvas 
        ref={distantStarsCanvasRef} 
        className="absolute top-1/2 left-1/2"
        style={{ 
          x: "-50%", 
          y: "-50%",
          rotate: distantStarsRotation,
          willChange: "transform"
        }} 
      />

      {/* Layer 3: Near Stars (rotates via CSS GPU acceleration) */}
      <motion.canvas 
        ref={starsCanvasRef} 
        className="absolute top-1/2 left-1/2"
        style={{ 
          x: "-50%", 
          y: "-50%",
          rotate: starsRotation,
          willChange: "transform"
        }} 
      />

      {/* Layer 4: Sun */}
      <motion.div
        className="absolute inset-0"
        style={{
          rotate: starsRotation,
          y: sunOffsetY,
          transformOrigin: "center center",
          willChange: "transform"
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            left: "calc(50% - 35vw)",
            bottom: "calc(50% - 25vh)",
            width: "15vw",
            height: "15vw",
            minWidth: "80px",
            minHeight: "80px",
            maxWidth: "200px",
            maxHeight: "200px",
            background: "radial-gradient(circle, rgba(255,250,230,0.95) 0%, rgba(255,220,150,0.7) 15%, rgba(255,180,80,0.4) 35%, rgba(255,140,50,0.15) 55%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Layer 5: Earth */}
      <div
        className="absolute left-1/2 bottom-0"
        style={{
          width: "min(1400px, 180vw)",
          height: "min(1400px, 180vw)",
          transform: "translateX(-50%) translateY(60%)",
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/818a987dae7caf523fe871435c4.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        <motion.div 
          className="absolute inset-0"
          style={{
            background: earthShadow,
            WebkitMaskImage: "url('/images/818a987dae7caf523fe871435c4.png')",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            maskImage: "url('/images/818a987dae7caf523fe871435c4.png')",
            maskSize: "contain",
            maskPosition: "center",
            maskRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Layer 6: Meteors */}
      <canvas ref={meteorsCanvasRef} className="absolute inset-0" />
    </div>
  );
}
