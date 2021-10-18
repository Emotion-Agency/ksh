varying vec2 vUv;
varying float vParallax;

uniform sampler2D uTexture;
uniform float uStrength;
uniform float uTime;
uniform float uVisible;


vec4 tex(in vec2 st) { return texture2D(uTexture, st); }

void main() {

    vec2 uv = vUv;

    uv-= 0.5;
    uv*= 0.95;
    uv+= 0.5;

    uv.y += vParallax;

   if(uv.y > 1.) {
      discard;
   }

    if(uv.y < 0.) {
      discard;
   }

	vec2 newUv = uv;


	newUv+= (sin(newUv.y*10. + (uTime / 5.)) / 500.) * (uStrength* 0.15);
	newUv+= (sin(newUv.x*10. + (uTime / 15.)) / 500.) * (uStrength * 0.15);

    vec4 img = tex(newUv);


    vec4 finalTexture = img;


    gl_FragColor = finalTexture * uVisible;
}
