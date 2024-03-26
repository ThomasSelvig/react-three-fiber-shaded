varying vec3 vUv;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  // clip space
  vec2 space = vUv.xy / u_resolution.xy * 2.0;// - 1.0;
  // adjust for aspect ratio ([-1, 1] but with "black bars")
  space.x *= u_resolution.x / u_resolution.y;

  vec2 center = vec2(0.0, 0.0);
  vec3 color = vec3(0.0);

  // circle
  if (distance(space, center) < 0.5) {
    color = vec3(
      // distance(space, center) * 2. * (sin((mod(u_time, 1.)-0.5)*3.14159)+1.)/2.,
      sin(u_time)/2. + .5,
      0.,
      0.
    );
  }
  // lines showing center
  if (abs(space.x) < 0.01 || abs(space.y) < 0.01) {
    color = vec3(0.0);
  }
  
  gl_FragColor = vec4(color, 1.0);
}