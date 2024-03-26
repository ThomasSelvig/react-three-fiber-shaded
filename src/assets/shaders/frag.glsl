varying vec3 vUv;

void main() {
  vec2 center = vec2(0.0, 0.0);
  // vUv is already view space (fullscreen is [-1, 1])
  // adjust for aspect ratio ([-1, 1] but with "black bars")
  vec2 space = vec2(vUv.x * 16. / 9., vUv.y);
  vec3 color = vec3(0.0);

  // circle
  if (distance(space, center) < 0.5) {
    color = vec3(1.0);
  }
  // lines showing center
  if (abs(space.x) < 0.01 || abs(space.y) < 0.01) {
    color = vec3(0.0);
  }
  // aspect ratio border showing [-1, 1] space (black bars)
  // if (abs(space.x) > 1. || abs(space.y) > 1.) {
  //   color = vec3(0.0);
  // }

  // gl_FragColor = vec4(0.0, vUv.x, vUv.y, 1.0);
  gl_FragColor = vec4(color, 1.0);
}