import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  depth: number; // 1: deep (slow), 2: mid, 3: near (faster)
  pulseSpeed: number;
  pulseOffset: number;
  color: string;
}

interface GravityNode {
  x: number;
  y: number;
  radius: number;
  angle: number;
  angularSpeed: number;
  orbitRadius: number;
  color: string;
}

export const SpaceGravityCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    // Particle Generation
    const particleCount = prefersReducedMotion ? 25 : isMobile ? 35 : 75;
    const particles: Particle[] = [];

    const isDark = resolvedTheme === 'dark';
    const starColors = isDark 
      ? ['#10B981', '#38BDF8', '#8B5CF6', '#F8FAFC', '#94A3B8'] 
      : ['#059669', '#2563EB', '#7C3AED', '#64748B', '#0891B2'];

    for (let i = 0; i < particleCount; i++) {
      const depth = Math.random() < 0.6 ? 1 : Math.random() < 0.85 ? 2 : 3;
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: depth === 1 ? Math.random() * 1.2 + 0.6 : depth === 2 ? Math.random() * 1.6 + 1.0 : Math.random() * 2.2 + 1.4,
        speedY: (Math.random() - 0.5) * (depth === 1 ? 0.08 : depth === 2 ? 0.15 : 0.25),
        speedX: (Math.random() - 0.5) * (depth === 1 ? 0.05 : depth === 2 ? 0.1 : 0.18),
        opacity: Math.random() * 0.4 + 0.15,
        depth,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // Faint Orbital Gravity Nodes
    const nodes: GravityNode[] = [
      {
        x: width * 0.2,
        y: height * 0.35,
        radius: 2,
        angle: 0,
        angularSpeed: 0.003,
        orbitRadius: isMobile ? 60 : 120,
        color: isDark ? 'rgba(16, 185, 129, 0.4)' : 'rgba(5, 150, 105, 0.3)',
      },
      {
        x: width * 0.8,
        y: height * 0.65,
        radius: 2.5,
        angle: Math.PI,
        angularSpeed: -0.002,
        orbitRadius: isMobile ? 80 : 160,
        color: isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(37, 99, 235, 0.25)',
      },
    ];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile || prefersReducedMotion) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.08;

      // Smooth mouse interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.06;
        mouse.y += (mouse.targetY - mouse.y) * 0.06;
      }

      // Draw faint orbital guide tracks
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          node.angle += node.angularSpeed;
        }

        const scrollParallaxY = (scrollY * 0.08) % height;
        const currentCenterY = (node.y - scrollParallaxY + height) % height;

        ctx.beginPath();
        ctx.arc(node.x, currentCenterY, node.orbitRadius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.018)' : 'rgba(15, 23, 42, 0.025)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Orbiting satellite dot
        const satX = node.x + Math.cos(node.angle) * node.orbitRadius;
        const satY = currentCenterY + Math.sin(node.angle) * node.orbitRadius * 0.4;

        ctx.beginPath();
        ctx.arc(satX, satY, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      });

      // Draw particles & connections
      const maxConnectDistance = isMobile ? 80 : 130;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
        }

        // Parallax offset based on depth
        const depthSpeed = p.depth === 1 ? 0.04 : p.depth === 2 ? 0.12 : 0.22;
        const currentY = (p.y - scrollY * depthSpeed) % height;
        const renderY = currentY < 0 ? currentY + height : currentY;

        // Wrap horizontal bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Subtle mouse gravity influence on desktop
        let renderX = p.x;
        let finalY = renderY;

        if (mouse.active && !isMobile && !prefersReducedMotion) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - finalY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist && dist > 0) {
            const force = (1 - dist / maxDist) * 12 * (p.depth * 0.5);
            renderX -= (dx / dist) * force;
            finalY -= (dy / dist) * force;
          }
        }

        // Gentle breathing pulsation
        const pulse = Math.sin(frame * p.pulseSpeed + p.pulseOffset);
        const currentOpacity = Math.max(0.08, Math.min(0.65, p.opacity + pulse * 0.18));

        // Render Particle Dot
        ctx.beginPath();
        ctx.arc(renderX, finalY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.fill();

        // Connect nearby particles with delicate faint filaments
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (p.depth !== p2.depth) continue;

          const p2DepthSpeed = p2.depth === 1 ? 0.04 : p2.depth === 2 ? 0.12 : 0.22;
          const p2CurrentY = (p2.y - scrollY * p2DepthSpeed) % height;
          const p2RenderY = p2CurrentY < 0 ? p2CurrentY + height : p2CurrentY;

          const dx = renderX - p2.x;
          const dy = finalY - p2RenderY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDistance) {
            const lineOpacity = (1 - dist / maxConnectDistance) * (isDark ? 0.08 : 0.05);
            ctx.beginPath();
            ctx.moveTo(renderX, finalY);
            ctx.lineTo(p2.x, p2RenderY);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = lineOpacity;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [resolvedTheme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0 opacity-80 transition-opacity duration-500"
      aria-hidden="true"
    />
  );
};
