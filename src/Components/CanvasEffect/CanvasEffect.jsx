import React, { useEffect } from 'react';

const CanvasEffect = () => {
  useEffect(() => {
    const canvas = document.getElementById('nokey');
    let can_w = window.innerWidth;
    let can_h = window.innerHeight;
    const ctx = canvas.getContext('2d');

    const BALL_NUM = 30;

    const ball_color = {
      r: 207,
      g: 255,
      b: 4
    };

    const R = 2;
    const balls = [];
    const alpha_f = 0.03;
    const link_line_width = 0.8;
    const dis_limit = 260;

    const mouse_ball = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      r: 0,
      type: 'mouse'
    };

    function getRandomSpeed(pos) {
      const min = -1;
      const max = 1;
      switch (pos) {
        case 'top':
          return [randomNumFrom(min, max), randomNumFrom(0.1, max)];
        case 'right':
          return [randomNumFrom(min, -0.1), randomNumFrom(min, max)];
        case 'bottom':
          return [randomNumFrom(min, max), randomNumFrom(min, -0.1)];
        case 'left':
          return [randomNumFrom(0.1, max), randomNumFrom(min, max)];
        default:
          return;
      }
    }

    function randomArrayItem(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }

    function randomNumFrom(min, max) {
      return Math.random() * (max - min) + min;
    }

    function randomSidePos(length) {
      return Math.ceil(Math.random() * length);
    }

    function getRandomBall() {
      const pos = randomArrayItem(['top', 'right', 'bottom', 'left']);
      switch (pos) {
        case 'top':
          return {
            x: randomSidePos(can_w),
            y: -R,
            vx: getRandomSpeed('top')[0],
            vy: getRandomSpeed('top')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          };
        case 'right':
          return {
            x: can_w + R,
            y: randomSidePos(can_h),
            vx: getRandomSpeed('right')[0],
            vy: getRandomSpeed('right')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          };
        case 'bottom':
          return {
            x: randomSidePos(can_w),
            y: can_h + R,
            vx: getRandomSpeed('bottom')[0],
            vy: getRandomSpeed('bottom')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          };
        case 'left':
          return {
            x: -R,
            y: randomSidePos(can_h),
            vx: getRandomSpeed('left')[0],
            vy: getRandomSpeed('left')[1],
            r: R,
            alpha: 1,
            phase: randomNumFrom(0, 10)
          };
        default:
          return;
      }
    }

    function renderBalls() {
      balls.forEach((b) => {
        if (!b.hasOwnProperty('type')) {
          ctx.fillStyle = `rgba(${ball_color.r},${ball_color.g},${ball_color.b},${b.alpha})`;
          ctx.beginPath();
          ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true);
          ctx.closePath();
          ctx.fill();
        }
      });
    }

    function updateBalls() {
      const new_balls = [];
      balls.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x > -50 && b.x < can_w + 50 && b.y > -50 && b.y < can_h + 50) {
          new_balls.push(b);
        }

        b.phase += alpha_f;
        b.alpha = Math.abs(Math.cos(b.phase));
      });

      balls.length = 0;
      Array.prototype.push.apply(balls, new_balls);
    }

    function renderLines() {
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const fraction = getDisOf(balls[i], balls[j]) / dis_limit;
          if (fraction < 1) {
            const alpha = (1 - fraction).toString();
            ctx.strokeStyle = `rgba(150,150,150,${alpha})`;
            ctx.lineWidth = link_line_width;
            ctx.beginPath();
            ctx.moveTo(balls[i].x, balls[i].y);
            ctx.lineTo(balls[j].x, balls[j].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function getDisOf(b1, b2) {
      const delta_x = Math.abs(b1.x - b2.x);
      const delta_y = Math.abs(b1.y - b2.y);
      return Math.sqrt(delta_x * delta_x + delta_y * delta_y);
    }

    function addBallIfy() {
      if (balls.length < BALL_NUM) {
        balls.push(getRandomBall());
      }
    }

    function render() {
      ctx.clearRect(0, 0, can_w, can_h);

      renderBalls();
      renderLines();
      updateBalls();
      addBallIfy();

      window.requestAnimationFrame(render);
    }

    function initBalls(num) {
      for (let i = 1; i <= num; i++) {
        balls.push({
          x: randomSidePos(can_w),
          y: randomSidePos(can_h),
          vx: getRandomSpeed('top')[0],
          vy: getRandomSpeed('top')[1],
          r: R,
          alpha: 1,
          phase: randomNumFrom(0, 10)
        });
      }
    }

    function initCanvas() {
      canvas.setAttribute('width', window.innerWidth);
      canvas.setAttribute('height', window.innerHeight);

      can_w = parseInt(canvas.getAttribute('width'));
      can_h = parseInt(canvas.getAttribute('height'));
    }

    window.addEventListener('resize', () => {
      console.log('Window Resize...');
      initCanvas();
    });

    function goMovie() {
      initCanvas();
      initBalls(BALL_NUM);
      window.requestAnimationFrame(render);
    }

    goMovie();

    // Mouse effect
    canvas.addEventListener('mouseenter', () => {
      balls.push(mouse_ball);
    });

    canvas.addEventListener('mouseleave', () => {
      const new_balls = balls.filter((b) => !b.hasOwnProperty('type'));
      balls.length = 0;
      Array.prototype.push.apply(balls, new_balls);
    });

    canvas.addEventListener('mousemove', (e) => {
      mouse_ball.x = e.pageX;
      mouse_ball.y = e.pageY;
    });
  }, []);

  return (
    <div>
      <canvas id="nokey"></canvas>
    </div>
  );
};

export default CanvasEffect;
