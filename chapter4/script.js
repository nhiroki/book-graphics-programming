/*
 * Generates a random integer within the given range.
 * @param {number} range The range of the generated integer (0 <= x < range).
 */
export function generateRandomInt(range) {
  const random = Math.random();
  return Math.floor(random * range);
}

/**
 * Draws a rectangle.
 * @param {CanvasRenderingContext2D} ctx The context of the canvas.
 * @param {number} x The x-position origin of the rectangle.
 * @param {number} y The y-position origin of the rectangle.
 * @param {number} width The width of the rectangle.
 * @param {number} height The height of the rectangle.
 * @param {string} [color] The color of the rectangle.
 */
export function drawRect(ctx, x, y, width, height, color) {
  if (color != null)
    ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

/**
 * Draws a line.
 * @param {CanvasRenderingContext2D} ctx The context of the canvas.
 * @param {number} x1 The x-position of the line start.
 * @param {number} y1 The y-position of the line start.
 * @param {number} x2 The x-position of the line end.
 * @param {number} y2 The y-position of the line end.
 * @param {string} [color] The color of the line.
 * @param {number} [width=1] The width of the line.
 */
export function drawLine(ctx, x1, y1, x2, y2, color, width = 1) {
  if (color != null)
    ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.closePath();
  ctx.stroke();
}

/**
 * Draws a polygon.
 * @param {CanvasRenderingContext2D} ctx The context of the canvas.
 * @param {Array<number>} points The vertices of the polygon.
 * @param {string} [color] The color of the polygon.
 */
export function drawPolygon(ctx, points, color) {
  if (Array.isArray(points) !== true) {
    console.error('The first argument |points| should be an Array object.');
    return;
  }
  if (points.length < 6) {
    console.error('The number of elements of the first argument |points| ' +
                  'should be equal to or greater than 6.');
    return;
  }

  if (color != null)
    ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(points[0], points[1]);
  for (let i = 2; i < points.length; i += 2)
    ctx.lineTo(points[i], points[i + 1]);
  ctx.closePath();
  ctx.fill();
}

/**
 * Draws a circle.
 * @param {CanvasRenderingContext2D} ctx The context of the canvas.
 * @param {number} x The x-position of the center of the circle.
 * @param {number} y The y-position of the center of the circle.
 * @param {number} radius The radius of the circle.
 * @param {string} [color] The color of the circle.
 */
export function drawCircle(ctx, x, y, radius, color) {
  if (color != null)
    ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0.0, Math.PI * 2.0);
  ctx.closePath();
  ctx.fill();
}

/**
 * Draws a fan shape.
 * @param {CanvasRenderingContext2D} ctx The context of the canvas.
 * @param {number} x The x-position of the center of the fan shape.
 * @param {number} y The y-position of the center of the fan shape.
 * @param {number} radius The radius of the fan shape.
 * @param {number} startRadian The radian of the fan shape start.
 * @param {number} endRadian The radian of the fan shape end.
 * @param {string} [color] The color of the fan shape.
 */
export function drawFan(ctx, x, y, radius, startRadian, endRadian, color) {
  if (color != null)
    ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x, y,radius, startRadian, endRadian);
  ctx.closePath();
  ctx.fill();
}

/**
 * Draws a quadratic bezier curve.
 * @param {CanvasRenderingContext2D} ctx The context of the canvas.
 * @param {number} x1 The x-position of the curve start.
 * @param {number} y1 The y-position of the curve start.
 * @param {number} x2 The x-position of the curve end.
 * @param {number} y2 The y-position of the curve end.
 * @param {number} cx The x-position of the control point.
 * @param {number} cy The y-position of the control point.
 * @param {string} [color] The color of the curve.
 * @param {number} [width=1] The width of the curve.
 */
export function drawQuadraticBezier(
    ctx, x1, y1, x2, y2, cx, cy, color, width = 1) {
  if (color != null)
    ctx.strokeStyle = color;
  ctx.linewidth = width;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.quadraticCurveTo(cx, cy, x2, y2);
  ctx.closePath();
  ctx.stroke();
}

/**
 * Draws a cubic bezier curve.
 * @param {CanvasRenderingContext2D} ctx The context of the canvas.
 * @param {number} x1 The x-position of the curve start.
 * @param {number} y1 The y-position of the curve start.
 * @param {number} x2 The x-position of the curve end.
 * @param {number} y2 The y-position of the curve end.
 * @param {number} cx1 The x-position of the 1st control point.
 * @param {number} cy1 The y-position of the 1st control point.
 * @param {number} cx2 The x-position of the 2nd control point.
 * @param {number} cy2 The y-position of the 2nd control point.
 * @param {string} [color] The color of the curve.
 * @param {number} [width=1] The width of the curve.
 */
export function drawCubicBezier(
    ctx, x1, y1, x2, y2, cx1, cy1, cx2, cy2, color, width = 1) {
  if (color != null)
    ctx.strokeStyle = color;
  ctx.lineWidth = width;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.bezierCurveTo(cx1, cy1, cx2, cy2, x2, y2);
  ctx.closePath();
  ctx.stroke();
}
