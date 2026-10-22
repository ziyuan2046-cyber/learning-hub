import { illustrationPalettes } from './illustrations.js';

const esc = (v) => String(v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hash = (s) => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0; return h; };

function sun(p, x = 310, y = 68, r = 31) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${p.accent}" opacity=".88"/><circle cx="${x}" cy="${y}" r="${r + 13}" fill="${p.accent}" opacity=".08"/>`;
}
function birds(color = '#4C5D52', n = 3, x = 280, y = 80) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const bx = x + i * 24 - i % 2 * 9;
    const by = y + (i % 3) * 12;
    s += `<path d="M${bx} ${by}q7-7 14 0q7-7 14 0" fill="none" stroke="${color}" stroke-width="1.6" opacity=".75"/>`;
  }
  return s;
}
function hills(p, h = 135) {
  return `<path d="M0 ${h+92} C32 ${h+15} 76 ${h+30} 110 ${h+36} C160 ${h-20} 210 ${h-2} 250 ${h+35} C290 ${h+20} 338 ${h-5} 400 ${h+38} L400 240H0Z" fill="${p.land}" opacity=".66"/><path d="M0 ${h+118} C80 ${h+45} 142 ${h+75} 205 ${h+54} C260 ${h+36} 334 ${h+60} 400 ${h+22}V240H0Z" fill="${p.dark}" opacity=".78"/>`;
}
function water(p, y = 160) {
  return `<path d="M0 ${y} C60 ${y-8} 100 ${y+12} 156 ${y+2} C220 ${y-8} 274 ${y+10} 400 ${y-4}V240H0Z" fill="${p.dark}" opacity=".7"/><path d="M24 ${y+21}h72M244 ${y+27}h82M75 ${y+38}h54M154 ${y+18}h74" stroke="#F9F0D9" stroke-width="1.6" opacity=".45" stroke-linecap="round"/>`;
}
function lotus(p) {
  let s = '';
  for (let i = 0; i < 5; i++) {
    const x = 44 + i * 61, y = 163 + (i % 2) * 12;
    s += `<ellipse cx="${x}" cy="${y}" rx="${28-i*2}" ry="${9-i%2}" fill="${p.land}" opacity=".88" transform="rotate(${i%2?8:-8} ${x} ${y})"/>`;
    if (i !== 2) s += `<path d="M${x} ${y} Q${x-3} ${y-27} ${x} ${y-44}" stroke="${p.dark}" stroke-width="2" opacity=".7"/><path d="M${x} ${y-47} q-13-9-14 4 q9 6 14-4 q12-9 14 4 q-8 7-14-4" fill="${p.accent}" opacity=".9"/>`;
  }
  return s + `<path d="M41 147 Q78 130 107 147M263 174 Q294 154 333 174" fill="none" stroke="${p.dark}" stroke-width="2" opacity=".45"/>`;
}
function goose(p) {
  return `<path d="M198 147 C222 117 252 120 274 146 C294 169 274 194 242 188 L186 185 C155 183 151 156 173 147Z" fill="#FBF8EC" stroke="${p.dark}" stroke-width="2"/><path d="M254 131 C260 112 257 92 243 81 C232 72 218 82 225 94 C234 104 237 119 243 131" fill="none" stroke="${p.dark}" stroke-width="8" stroke-linecap="round"/><circle cx="224" cy="91" r="11" fill="#FBF8EC" stroke="${p.dark}" stroke-width="2"/><path d="M213 90 l-18 4 l15 8Z" fill="${p.accent}"/><circle cx="221" cy="88" r="2" fill="${p.dark}"/><path d="M191 187 q17 25 40 0M228 187 q18 24 40 0" fill="none" stroke="${p.accent}" stroke-width="5" stroke-linecap="round"/><path d="M180 161 q42-11 78 0" fill="none" stroke="${p.dark}" stroke-width="1" opacity=".3"/>`;
}
function farmer(p) {
  for (let i = 0; i < 12; i++) {
    const x = 20 + i * 32;
    return `<path d="M0 173 C65 153 130 183 198 160 C260 141 320 170 400 149V240H0Z" fill="${p.land}" opacity=".78"/><path d="M0 195 Q60 175 120 192T240 186T400 183V240H0Z" fill="${p.dark}" opacity=".9"/>`;
  }
}
function moon(p) {
  return `<circle cx="282" cy="72" r="43" fill="${p.accent}" opacity=".92"/><circle cx="302" cy="58" r="43" fill="${p.sky[0]}"/><path d="M45 175 C105 142 149 172 205 147 C272 116 333 161 400 132V240H0Z" fill="${p.land}" opacity=".78"/><path d="M0 203 Q97 181 190 201T400 190V240H0Z" fill="${p.dark}" opacity=".88"/><path d="M236 138q21-11 42 0v30q-21 14-42 0Z" fill="${p.dark}"/><path d="M249 149h11v11h-11Z" fill="${p.accent}"/>`;
}
function tree(p, x = 233) {
  return `<path d="M${x} 226V117" stroke="${p.dark}" stroke-width="13"/><path d="M${x} 162l-47-37M${x+5} 140l43-31" stroke="${p.dark}" stroke-width="7"/><path d="M${x-32} 87c-19-24-2-51 20-42c10-31 48-22 45 3c30 0 36 34 9 43Z" fill="${p.land}"/><path d="M${x-12} 97c-2 8 2 17 14 19" fill="none" stroke="${p.dark}" stroke-width="2"/>`;
}
function grapes(p) {
  let s = `<path d="M72 58 C152 20 284 42 335 90" fill="none" stroke="${p.dark}" stroke-width="5" opacity=".45"/><path d="M240 75 Q215 86 218 115" fill="none" stroke="${p.dark}" stroke-width="4"/>`;
  const xs = [195, 216, 237, 258, 279];
  xs.forEach((x, i) => { s += `<circle cx="${x}" cy="${78+i%3*19}" r="12" fill="${p.accent}" opacity=".88"/><circle cx="${x-3}" cy="${74+i%3*19}" r="3" fill="#F6E5C5" opacity=".5"/>`; });
  return s + `<path d="M151 183q30-19 59-9l-13 46h-31Z" fill="${p.dark}"/><path d="M182 174c18-22 43-20 47-2c-5 15-24 21-47 2Z" fill="${p.accent}"/>`;
}
function books(p) {
  return `<path d="M76 180h244v21H76z" fill="${p.dark}" opacity=".65"/><path d="M100 158h83v22h-83zM143 135h84v23h-84z" fill="${p.accent}"/><path d="M224 155h77v25h-77zM193 179h94v21h-94z" fill="${p.land}"/><path d="M111 126h94l-9 29h-90zM200 115h76l-5 39h-75z" fill="#FAF4E4" stroke="${p.dark}" stroke-width="1.4"/><path d="M264 112l17-57l28 8l-16 56Z" fill="${p.dark}"/><path d="M277 62l2-20M288 65l8-18" stroke="${p.accent}" stroke-width="4"/>`;
}
function scroll(p) {
  return `<path d="M100 58h200v129H100Z" fill="#FBF5E7" stroke="${p.dark}" stroke-width="1.5"/><path d="M91 52h218v14H91zM91 179h218v14H91z" fill="${p.accent}"/><path d="M124 86h151M124 104h122M124 122h139M124 140h88" stroke="${p.dark}" stroke-width="2.2" opacity=".48" stroke-linecap="round"/><circle cx="261" cy="155" r="16" fill="${p.accent}" opacity=".8"/>`;
}
function house(p) {
  return `<path d="M93 194h208v-67H93Z" fill="#FAF4E4"/><path d="M103 126L195 74l95 52Z" fill="${p.dark}"/><path d="M154 193v-50h45v50M238 193v-41h29v41" fill="${p.land}" opacity=".7"/><path d="M113 192h170" stroke="${p.accent}" stroke-width="5"/><circle cx="197" cy="150" r="17" fill="${p.accent}" opacity=".85"/><path d="M197 132v39M178 150h38" stroke="#FAF4E4" stroke-width="2"/>`;
}
function stars(p) {
  let s = `<circle cx="302" cy="61" r="31" fill="${p.accent}" opacity=".92"/>`;
  for (let i = 0; i < 17; i++) s += `<circle cx="${26+(i*67)%354}" cy="${27+(i*41)%116}" r="${i%4===0?2.1:1.2}" fill="#F4E9C5" opacity=".85"/>`;
  return s + `<path d="M0 185 Q80 157 146 174T278 163T400 176V240H0Z" fill="${p.dark}" opacity=".8"/>`;
}
function rain(p) {
  let s = '';
  for (let i = 0; i < 22; i++) s += `<path d="M${13+(i*43)%385} ${31+(i*27)%130}l-10 22" stroke="#D7E5E0" stroke-width="1.4" opacity=".68"/>`;
  return hills(p, 139) + s;
}
function willow(p) {
  let s = `<path d="M200 224V91" stroke="${p.dark}" stroke-width="10"/><path d="M198 117C138 76 98 91 70 59M201 132C258 88 298 94 330 56" fill="none" stroke="${p.dark}" stroke-width="4"/>`;
  for (let i = 0; i < 11; i++) s += `<path d="M${49+i*31} ${72+(i%4)*8}q-18 33 3 80q16-27-3-80" fill="none" stroke="${p.land}" stroke-width="2.2" opacity=".9"/>`;
  return s + `<path d="M0 208 Q95 177 200 204T400 188V240H0Z" fill="${p.land}" opacity=".62"/>`;
}
function pond(p) {
  return water(p, 167) + `<ellipse cx="219" cy="184" rx="42" ry="8" fill="${p.land}" opacity=".78"/><path d="M236 180q-5-37 4-58q20 23 0 58Z" fill="${p.accent}"/><path d="M125 159q-6-36 5-54q18 23 1 54Z" fill="${p.accent}" opacity=".78"/><path d="M266 142l34-10M269 146l26 8" stroke="${p.dark}" stroke-width="2"/><ellipse cx="281" cy="137" rx="17" ry="4" fill="${p.dark}" opacity=".55"/>`;
}
function egret(p) {
  return birds('#F8F4E6', 3, 281, 78) + hills(p, 141) + `<path d="M150 94v83M206 76v101" stroke="${p.dark}" stroke-width="3" opacity=".35"/><path d="M150 102h70" stroke="${p.dark}" stroke-width="2" opacity=".35"/>`;
}
function trees(p) {
  return tree(p, 130) + tree(p, 274) + `<path d="M0 197 Q95 169 198 193T400 181V240H0Z" fill="${p.land}" opacity=".65"/><circle cx="208" cy="165" r="15" fill="${p.accent}" opacity=".6"/>`;
}
function bird(p) {
  return `<path d="M0 197 Q92 164 201 187T400 174V240H0Z" fill="${p.land}" opacity=".7"/><path d="M191 121c24-37 87-35 97 19c-12-6-26-7-37 0c7 26-38 39-54 15c-13-2-19-17-6-34Z" fill="${p.dark}" opacity=".9"/><path d="M271 117l33-19M276 119l36 7" stroke="${p.dark}" stroke-width="2"/><path d="M112 92q24-19 46 0M84 110q30-20 59 1" fill="none" stroke="${p.accent}" stroke-width="2" opacity=".68"/>`;
}
function mountains(p) {
  return `<path d="M0 203L89 77l60 81l55-105l74 112l47-71l75 109V240H0Z" fill="${p.land}" opacity=".7"/><path d="M0 213L101 129l53 49l57-71l70 76l37-38l82 68V240H0Z" fill="${p.dark}" opacity=".75"/><path d="M112 159l28-30M133 166l23-27" stroke="${p.accent}" stroke-width="4" stroke-linecap="round"/>`;
}
function seasons(p) {
  return `<path d="M0 182 Q99 144 202 177T400 153V240H0Z" fill="${p.land}" opacity=".7"/><circle cx="78" cy="91" r="29" fill="${p.accent}" opacity=".7"/><path d="M211 72c-24 27 32 54 0 82c-23 26 18 41 0 72" fill="none" stroke="${p.dark}" stroke-width="5" opacity=".45"/><path d="M292 95l23 26l-19 21l-29-14Z" fill="${p.accent}" opacity=".6"/><path d="M306 148l26-7l5 31l-26 8Z" fill="${p.land}"/>`;
}
function mountainRiver(p) {
  return `<path d="M0 196L73 88l58 67l43-104l54 95l42-57l68 71l62-25V240H0Z" fill="${p.land}" opacity=".72"/><path d="M0 197l93 10l62-7l72 9l80-8l93 7V240H0Z" fill="${p.dark}" opacity=".72"/><path d="M236 185l44-12l40 11l-15 15h-57Z" fill="${p.accent}"/><path d="M282 173V130l38 31" fill="#FBF5E7"/><path d="M0 215h400" stroke="#F9EFD7" stroke-width="2" opacity=".35"/>`;
}
function lake(p) {
  return water(p, 151) + `<path d="M0 144Q80 123 150 141T300 132T400 145V240H0Z" fill="${p.land}" opacity=".55"/><path d="M244 157q30-28 58-4" fill="none" stroke="${p.dark}" stroke-width="2" opacity=".4"/><path d="M81 86q14-18 28 0M111 76q12-15 24 0" fill="none" stroke="${p.dark}" stroke-width="1.5" opacity=".5"/>`;
}
function lanterns(p) {
  let s = `<path d="M96 0v93M209 0v109M318 0v75" stroke="${p.dark}" stroke-width="2"/>`;
  [96, 209, 318].forEach((x, i) => {
    const y = 111 + i * 12;
    s += `<path d="M${x-18} ${y-17}h36v31h-36z" fill="${p.accent}" opacity=".9"/><path d="M${x-12} ${y-21}q12-13 24 0M${x-4} ${y+14}v15M${x+6} ${y+14}v15M${x-20} ${y-13}q-18 20 0 39M${x+20} ${y-13}q18 20 0 39" fill="none" stroke="${p.dark}" stroke-width="2"/>`;
  });
  return s + `<path d="M0 204Q100 171 203 198T400 185V240H0Z" fill="${p.dark}" opacity=".7"/>`;
}
function maple(p) {
  return `<path d="M0 204 Q94 172 198 199T400 183V240H0Z" fill="${p.land}" opacity=".7"/><path d="M293 228V109M293 162l-58-44M293 145l53-44" stroke="${p.dark}" stroke-width="8"/><path d="M199 87l11-35l16 22l23-11l-7 25l20 2l-16 18l17 15l-28 3l4 27l-22-17l-18 16l-3-27l-26 1l15-19l-17-17Z" fill="${p.accent}"/><path d="M308 67l10-28l13 18l19-9l-7 22l18 3l-14 14l14 12l-22 2l2 20l-18-13l-15 12l-3-20l-19 1l11-13l-13-13Z" fill="${p.accent}" opacity=".8"/>`;
}
function dragon(p) {
  return `<path d="M35 153C97 152 112 93 170 109C224 124 232 71 298 83C340 90 356 121 335 143C312 167 269 151 279 129C290 104 351 103 375 132" fill="none" stroke="${p.accent}" stroke-width="12" stroke-linecap="round" opacity=".9"/><path d="M58 155q46-20 90-4M189 98q-32-15-54 9M311 99q17-23 43-8" fill="none" stroke="${p.dark}" stroke-width="3"/><circle cx="362" cy="134" r="12" fill="${p.dark}"/><circle cx="365" cy="131" r="2" fill="#FAF2DD"/>`;
}
function leaf(p) {
  return `<path d="M0 208Q99 166 201 202T400 183V240H0Z" fill="${p.land}" opacity=".62"/><path d="M93 194C114 102 211 46 318 76C310 165 228 216 93 194Z" fill="${p.land}" opacity=".86"/><path d="M93 194C155 140 227 104 318 76M177 133l-6-42M222 111l27-31M141 161l-37-3" fill="none" stroke="${p.dark}" stroke-width="2" opacity=".55"/>`;
}
function boat(p) {
  return water(p, 156) + `<path d="M140 164l45-14l48 14l-19 24h-58Z" fill="${p.accent}"/><path d="M211 151V97l49 31" fill="#FAF4E3" stroke="${p.dark}" stroke-width="1.5"/><path d="M142 192q52 12 101 0" fill="none" stroke="#F9EFD7" stroke-width="2" opacity=".58"/>`;
}
function characters(p) {
  return `<path d="M137 66h127v139H137Z" fill="#FAF3E1" stroke="${p.dark}" stroke-width="1.5"/><path d="M156 89l45 0M176 89v62M156 160h39M207 90l36-10M214 125h32M214 141l27 23" stroke="${p.accent}" stroke-width="4" stroke-linecap="round"/><path d="M63 189Q112 169 171 193T310 188T400 180V240H0Z" fill="${p.land}" opacity=".55"/>`;
}
function lushan(p) {
  return `<path d="M0 201L55 131l41 45l49-97l60 91l38-55l63 56l44-28l50 55V240H0Z" fill="${p.land}" opacity=".65"/><path d="M0 212L92 148l37 35l50-51l33 63l80-48l39 53l69-28V240H0Z" fill="${p.dark}" opacity=".73"/><path d="M101 173l38-19M122 182l35-18" stroke="${p.accent}" stroke-width="2" opacity=".72"/>`;
}
function border(p) {
  return `<path d="M0 201L83 129l45 52l51-104l70 101l49-34l102 75V240H0Z" fill="${p.land}" opacity=".7"/><path d="M0 214Q92 177 197 211T400 190V240H0Z" fill="${p.dark}" opacity=".75"/><path d="M273 108h92v93h-92Z" fill="none" stroke="${p.dark}" stroke-width="3"/><path d="M273 124h29v-23l20 0v23h43M273 152h92M273 177h92" fill="none" stroke="${p.dark}" stroke-width="2"/><circle cx="317" cy="63" r="27" fill="${p.accent}"/>`;
}
function desert(p) {
  return `<path d="M0 195Q83 135 166 186T337 143T400 160V240H0Z" fill="${p.land}" opacity=".8"/><path d="M0 212Q107 164 212 201T400 178V240H0Z" fill="${p.dark}" opacity=".55"/><circle cx="322" cy="59" r="32" fill="${p.accent}"/><path d="M253 135l77-14M222 157l54-19" stroke="${p.dark}" stroke-width="2" opacity=".42"/>`;
}
function homeland(p) {
  return `<path d="M0 202Q94 166 195 200T400 178V240H0Z" fill="${p.land}" opacity=".62"/><path d="M108 203v-54l48-34l48 34v54M213 203v-42l43-25l39 25v42" fill="none" stroke="${p.dark}" stroke-width="4"/><path d="M126 172h17v31h-17zM147 172h17v31h-17zM236 175h14v28h-14z" fill="${p.accent}" opacity=".6"/>`;
}
function fish(p) {
  return water(p, 153) + `<path d="M113 139q38-34 83 0q-43 32-83 0Z" fill="${p.accent}" opacity=".86"/><path d="M196 139l29-20v40Z" fill="${p.accent}"/><circle cx="138" cy="136" r="2.2" fill="${p.dark}"/><path d="M155 127l15-15M155 151l15 14M70 103q35-28 68 0M250 176q31-22 60 0" fill="none" stroke="#F9EFD7" stroke-width="2" opacity=".65"/>`;
}
function crowd(p) {
  let s = `<path d="M0 206Q105 168 199 202T400 181V240H0Z" fill="${p.land}" opacity=".62"/>`;
  for (let i = 0; i < 8; i++) {
    const x = 42 + i * 44, y = 151 + i % 3 * 13;
    s += `<circle cx="${x}" cy="${y}" r="13" fill="${p.accent}" opacity="${.5 + i % 3 * .12}"/><path d="M${x-17} ${y+14}q3-24 17-24t18 24Z" fill="${p.dark}" opacity=".7"/>`;
  }
  return s;
}
function bell(p) {
  return `<path d="M0 207Q95 166 204 200T400 184V240H0Z" fill="${p.land}" opacity=".64"/><path d="M222 60h43v24h-43zM226 84h35l13 82h-61zM233 166h23v32h-23z" fill="${p.dark}"/><path d="M247 166v27" stroke="${p.accent}" stroke-width="4"/><path d="M285 89q22-7 28 11M291 98q24 7 22 22" fill="none" stroke="${p.accent}" stroke-width="2" opacity=".7"/>`;
}
function jade(p) {
  return `<path d="M0 205Q100 169 202 198T400 183V240H0Z" fill="${p.land}" opacity=".6"/><path d="M164 71h76v31h-76zM149 102h106l18 62H131Z" fill="${p.land}" stroke="${p.dark}" stroke-width="2"/><path d="M164 102h76l9 42h-94Z" fill="${p.accent}" opacity=".35"/><path d="M206 137v27M188 156h36" stroke="${p.dark}" stroke-width="2" opacity=".5"/>`;
}
function riverMoon(p) {
  return `<circle cx="278" cy="67" r="39" fill="${p.accent}" opacity=".9"/><path d="M0 164Q80 139 156 157T302 150T400 145V240H0Z" fill="${p.dark}" opacity=".6"/><path d="M0 186Q106 160 211 184T400 172V240H0Z" fill="${p.dark}" opacity=".9"/><path d="M196 179q64-17 124 0q-58 27-124 0Z" fill="${p.accent}" opacity=".28"/><path d="M217 168l55-35l50 34Z" fill="${p.dark}"/><path d="M234 168v-23M291 168v-20" stroke="${p.accent}" stroke-width="2"/>`;
}
function warSpring(p) {
  return `<path d="M0 205Q104 164 196 199T400 181V240H0Z" fill="${p.land}" opacity=".63"/><path d="M96 199v-67l38-24l39 24v67M217 199v-50l30-18l35 18v50" fill="none" stroke="${p.dark}" stroke-width="3"/><path d="M111 183h14v16h-14zM238 183h13v16h-13z" fill="${p.accent}" opacity=".6"/><path d="M55 193q15-26 31 0M324 187q12-21 25 0" fill="none" stroke="${p.accent}" stroke-width="2"/>`;
}
function petals(p) {
  let s = `<path d="M0 208Q95 165 199 202T400 181V240H0Z" fill="${p.land}" opacity=".6"/>`;
  for (let i = 0; i < 12; i++) s += `<ellipse cx="${39+(i*71)%340}" cy="${72+(i*41)%112}" rx="8" ry="4" fill="${p.accent}" opacity="${.38+i%4*.11}" transform="rotate(${20+i*23} ${39+(i*71)%340} ${72+(i*41)%112})"/>`;
  return s + `<path d="M206 161q26-20 50 0" fill="none" stroke="${p.dark}" stroke-width="2" opacity=".45"/>`;
}
function bamboo(p) {
  let s = `<path d="M217 226V48M269 226V69M167 226V89" stroke="${p.dark}" stroke-width="5"/><path d="M217 88h-45l21 32M269 132l43-21l-14 34M167 163l-49-27l8 37" fill="none" stroke="${p.land}" stroke-width="7"/><path d="M217 76q18-28 33-27M269 112q24-20 36-10M167 140q-20-25-38-18" fill="none" stroke="${p.accent}" stroke-width="3"/>`;
  for (let i = 0; i < 7; i++) s += `<path d="M${212-i*18} ${78+i*19}l-22-8M${267+i*7} ${99+i*16}l22-5" stroke="${p.land}" stroke-width="2"/>`;
  return s;
}
function drum(p) {
  return `<path d="M0 203Q99 169 201 199T400 184V240H0Z" fill="${p.land}" opacity=".62"/><ellipse cx="211" cy="135" rx="67" ry="33" fill="${p.accent}"/><path d="M144 135v51c0 18 30 32 67 32s67-14 67-32v-51" fill="${p.dark}" opacity=".8"/><path d="M150 159h122M159 179h104" stroke="${p.accent}" stroke-width="2" opacity=".55"/><path d="M289 102l39-44M303 115l45-20" stroke="${p.dark}" stroke-width="3" stroke-linecap="round"/>`;
}
function cup(p) {
  return `<path d="M0 206Q98 168 200 201T400 183V240H0Z" fill="${p.land}" opacity=".62"/><path d="M148 103h66l-9 67h-48Z" fill="#FAF3E0" stroke="${p.dark}" stroke-width="2"/><path d="M214 119h28q18 0 0 37h-28" fill="none" stroke="${p.dark}" stroke-width="2"/><path d="M161 109q14 15 36 0" fill="none" stroke="${p.accent}" stroke-width="3"/><path d="M324 91c-17-21 10-37 0-57" fill="none" stroke="${p.accent}" stroke-width="2" opacity=".7"/>`;
}
function village(p) {
  return `<path d="M0 208Q93 175 197 198T400 187V240H0Z" fill="${p.land}" opacity=".67"/><path d="M70 197v-50l49-31l51 31v50M221 197v-38l41-27l39 27v38" fill="#FAF4E4" stroke="${p.dark}" stroke-width="2"/><path d="M93 169h19v28H93zM244 173h15v24h-15z" fill="${p.accent}" opacity=".6"/><path d="M0 212Q104 187 201 207T400 198V240H0Z" fill="${p.dark}" opacity=".55"/><circle cx="295" cy="60" r="20" fill="${p.accent}" opacity=".6"/>`;
}
function autumnRoad(p) {
  return `<path d="M0 203Q92 165 207 198T400 173V240H0Z" fill="${p.land}" opacity=".72"/><path d="M0 195Q87 182 194 200T400 192" fill="none" stroke="${p.dark}" stroke-width="3" opacity=".7"/><path d="M233 194q-10-54 14-96M246 103l-25-15M247 109l22-17" stroke="${p.dark}" stroke-width="5"/><path d="M196 99l7-23l13 15l17-10l-3 29Z" fill="${p.accent}"/><path d="M154 143l19-8l8 20l-20 8Z" fill="${p.land}" opacity=".6"/>`;
}
function snow(p) {
  return `<path d="M0 195L89 108l55 59l62-101l58 81l41-31l95 65V240H0Z" fill="${p.land}" opacity=".7"/><path d="M0 209L91 143l54 42l63-65l56 78l45-21l91 41V240H0Z" fill="${p.dark}" opacity=".58"/>`;
}
function farewell(p) {
  return `<path d="M0 205Q98 168 197 198T400 182V240H0Z" fill="${p.land}" opacity=".66"/><path d="M82 201v-54l39-25l36 25v54M250 201v-58l42-25l42 25v58" fill="#FAF4E4" stroke="${p.dark}" stroke-width="2"/><path d="M69 143h53M237 142h56" stroke="${p.accent}" stroke-width="5"/><path d="M184 81q18-19 36 0M143 68q11-13 23 0M264 62q11-13 23 0" fill="none" stroke="${p.dark}" stroke-width="1.3" opacity=".5"/>`;
}
function stepMountain(p) {
  return `<path d="M0 202L84 130l40 45l48-105l64 93l44-63l82 68l38-24V240H0Z" fill="${p.land}" opacity=".7"/><path d="M224 199l22-24l19 20l18-19l18 23" fill="none" stroke="${p.dark}" stroke-width="3"/>`;
}
function timeline(p) {
  return `<path d="M0 205Q100 166 201 200T400 183V240H0Z" fill="${p.land}" opacity=".62"/><path d="M80 141h239" stroke="${p.dark}" stroke-width="2"/><circle cx="100" cy="141" r="8" fill="${p.accent}"/><circle cx="198" cy="141" r="8" fill="${p.accent}"/><circle cx="298" cy="141" r="8" fill="${p.accent}"/><path d="M100 131V88M198 131V81M298 131V97" stroke="${p.dark}" stroke-width="2"/>`;
}
function mind(p) {
  return `<path d="M0 207Q92 169 201 201T400 183V240H0Z" fill="${p.land}" opacity=".62"/><circle cx="211" cy="119" r="44" fill="none" stroke="${p.dark}" stroke-width="2"/><path d="M211 58v22M211 158v23M150 119h-20M293 119h24M170 78l15 16M252 145l15 15M253 78l-15 16M170 161l15-16" stroke="${p.accent}" stroke-width="3"/><circle cx="211" cy="119" r="13" fill="${p.accent}" opacity=".5"/>`;
}

const motifs = { lotus, goose, farmer, moon, tree, grapes, books, scroll, house, stars, rain, willow, pond, egret, trees, bird, mountains, seasons, 'mountain-river': mountainRiver, lake, lanterns, maple, dragon, leaf, boat, characters, lushan, border, desert, homeland, fish, crowd, bell, jade, 'river-moon': riverMoon, 'war-spring': warSpring, petals, bamboo, drum, cup, village, 'autumn-road': autumnRoad, snow, farewell, 'step-mountain': stepMountain, timeline, mind };

export function illustration(id, options = {}) {
  const p = illustrationPalettes[id] || illustrationPalettes['classic-books'];
  const small = options.small ? ' is-small' : '';
  const motif = motifs[p.motif] || books;
  const overlay = options.overlay ?? true;
  const seed = hash(id);
  const grain = `<filter id="grain-${seed}"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .05"/></feComponentTransfer></filter>`;
  return `<div class="illus${small}" aria-hidden="true"><svg viewBox="0 0 400 240" role="img"><defs><linearGradient id="sky-${seed}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${p.sky[0]}"/><stop offset="1" stop-color="${p.sky[1]}"/></linearGradient>${grain}</defs><rect width="400" height="240" fill="url(#sky-${seed})"/>${sun(p)}${birds(p.dark, 2, 55, 50)}${motif(p)}<rect width="400" height="240" filter="url(#grain-${seed})" opacity=".8"/>${overlay ? `<rect y="172" width="400" height="68" fill="url(#fade-${seed})"/>` : ''}<linearGradient id="fade-${seed}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="${p.dark}" stop-opacity="0"/><stop offset="1" stop-color="${p.dark}" stop-opacity=".22"/></linearGradient></svg></div>`;
}
