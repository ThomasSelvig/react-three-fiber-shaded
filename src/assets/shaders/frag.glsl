varying vec3 vUv;
uniform float u_time;
uniform float ex;

void main() {
  vec2 center = vec2(0.0, 0.0);
  // vUv is already view space (fullscreen is [-1, 1])
  // adjust for aspect ratio ([-1, 1] but with "black bars")
  vec2 space = vec2(vUv.x * 16. / 9., vUv.y);
  vec3 color = vec3(0.0);
  // vec3 color = vec3(u_time / 10.);

  color.r = 0.5 + 0.5 * sin(u_time + space.x * 10.0);
  // circle
  if (distance(space, center) < 0.5) {
    color = vec3(1.0);
  }
  // lines showing center
  if (abs(space.x) < 0.01 || abs(space.y) < 0.01) {
    color = vec3(0.0);
  }
  
  gl_FragColor = vec4(color, 1.0);
}