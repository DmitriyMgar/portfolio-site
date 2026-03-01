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
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const meteorsCanvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const distantStarsRef = useRef<Star[]>([]);
  const nebulaStarsRef = useRef<NebulaStar[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const animationRef = useRef<number>(0);
  const lastMeteorTime = useRef<number>(0);
  const currentRotation = useRef<number>(0);
  const currentDistantRotation = useRef<number>(0);

  const { scrollYProgress } = useScroll();

  const starsRotation = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const distantStarsRotation = useTransform(scrollYProgress, [0, 1], [0, 5]);
  // Солнце поднимается из-за земли к концу страницы (смещение по Y в пикселях)
  const sunOffsetY = useTransform(scrollYProgress, [0, 0.6, 1], [140, 70, 0]);

  // Координаты источника света (Солнца) относительно Земли в процентах
  // По оси X свет чуть левее центра (Солнце находится на 50% - 35vw)
  const lightX = useTransform(scrollYProgress, [0, 0.6, 1], [30, 30, 40]);
  // По оси Y свет поднимается снизу вверх
  const lightY = useTransform(scrollYProgress, [0, 0.6, 1], [100, 80, 40]);
  
  // Динамическая тень на Земле (градиент: прозрачно там, где свет; чёрное там, где тень)
  const earthShadow = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, transparent 10%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.95) 85%)`;

  const initStars = useCallback((width: number, height: number) => {
    const diagonal = Math.sqrt(width * width + height * height);

    // Ближние звёзды — крупнее и ярче
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

    // Дальние звёзды — мельче, тусклее, больше количество
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

    // Туманность — кластеры плотно расположенных цветных точек
    const nebulaStars: NebulaStar[] = [];
    const nebulaColors = [
      "255, 180, 100", // orange
      "255, 200, 120", // light orange
      "255, 160, 80",  // deeper orange
      "255, 220, 150", // yellow-orange
      "200, 255, 200", // pale green (accent)
    ];

    // Кластер 1: справа вверху (основная туманность)
    const cluster1X = diagonal * 0.35;
    const cluster1Y = -diagonal * 0.25;
    const cluster1Size = diagonal * 0.4;
    for (let i = 0; i < 800; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * Math.random() * cluster1Size; // квадрат для плотности в центре
      nebulaStars.push({
        x: cluster1X + Math.cos(angle) * distance,
        y: cluster1Y + Math.sin(angle) * distance,
        size: Math.random() * 0.8 + 0.2,
        brightness: Math.random() * 0.5 + 0.2,
        color: nebulaColors[Math.floor(Math.random() * 4)], // в основном оранжевые
      });
    }

    // Кластер 2: слева (меньше, зеленоватый акцент)
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
        color: Math.random() > 0.3 ? nebulaColors[4] : nebulaColors[1], // больше зелёного
      });
    }

    nebulaStarsRef.current = nebulaStars;
  }, []);

  // Туманность — рисуется ОДИН раз (статичный canvas)
  const drawNebula = useCallback((ctx: CanvasRenderingContext2D) => {
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(centerX, centerY);
    nebulaStarsRef.current.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${star.color}, ${star.brightness})`;
      ctx.fill();
    });
    ctx.restore();
  }, []);

  // Звёзды — перерисовываются при скролле
  const drawStars = useCallback(
    (ctx: CanvasRenderingContext2D, rotation: number, distantRotation: number) => {
      const canvas = ctx.canvas;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Дальние звёзды (белые, мелкие)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((distantRotation * Math.PI) / 180);
      distantStarsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();
      });
      ctx.restore();

      // 2. Ближние звёзды (белые, крупнее)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate((rotation * Math.PI) / 180);
      starsRef.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
        ctx.fill();
      });
      ctx.restore();
    },
    []
  );

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
    const starsCanvas = starsCanvasRef.current;
    const meteorsCanvas = meteorsCanvasRef.current;
    if (!nebulaCanvas || !starsCanvas || !meteorsCanvas) return;

    const nebulaCtx = nebulaCanvas.getContext("2d");
    const starsCtx = starsCanvas.getContext("2d");
    const meteorsCtx = meteorsCanvas.getContext("2d");
    if (!nebulaCtx || !starsCtx || !meteorsCtx) return;

    const redrawStars = () => {
      drawStars(starsCtx, currentRotation.current, currentDistantRotation.current);
    };

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      nebulaCanvas.width = w;
      nebulaCanvas.height = h;
      starsCanvas.width = w;
      starsCanvas.height = h;
      meteorsCanvas.width = w;
      meteorsCanvas.height = h;

      initStars(w, h);
      drawNebula(nebulaCtx); // туманность рисуется только здесь
      redrawStars();
    };

    resize();
    window.addEventListener("resize", resize);

    const unsubscribeRotation = starsRotation.on("change", (v) => {
      currentRotation.current = v;
      redrawStars();
    });

    const unsubscribeDistantRotation = distantStarsRotation.on("change", (v) => {
      currentDistantRotation.current = v;
      redrawStars();
    });

    const animate = (time: number) => {
      updateMeteors(meteorsCanvas.width, meteorsCanvas.height, time);
      drawMeteors(meteorsCtx);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
      unsubscribeRotation();
      unsubscribeDistantRotation();
    };
  }, [initStars, drawNebula, drawStars, drawMeteors, updateMeteors]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Layer 1: Nebula canvas (static, drawn once) */}
      <canvas ref={nebulaCanvasRef} className="absolute inset-0" />

      {/* Layer 2: Stars canvas (redraws on scroll) */}
      <canvas ref={starsCanvasRef} className="absolute inset-0" />

      {/* Layer 3: Sun (rotates with stars, BEHIND Earth) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          rotate: starsRotation,
          y: sunOffsetY,
          transformOrigin: "center center",
        }}
      >
        {/* Sun - pure glow, no hard edges */}
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

      {/* Layer 4: Earth (PNG, static, ON TOP of sun) */}
      <div
        className="absolute left-1/2 bottom-0 pointer-events-none"
        style={{
          width: "min(1400px, 180vw)",
          height: "min(1400px, 180vw)",
          transform: "translateX(-50%) translateY(60%)",
        }}
      >
        {/* Сама Земля */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/818a987dae7caf523fe871435c4.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        
        {/* Динамическая тень: маскируется по форме Земли */}
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

      {/* Layer 5: Meteors canvas */}
      <canvas ref={meteorsCanvasRef} className="absolute inset-0" />
    </div>
  );
}
