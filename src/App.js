import React from "react";
import { useState, useEffect } from "react";
import { GiStarShuriken } from "react-icons/gi";

const App = () =>  {
  //Bgs  for teams
  const [teamBg, setTeamBg] = useState("Naruto20");

  //Idea for allocating Naruto bg images into an array
  const narutoBgs = [
    {
      src: "Naruto0",
    },
    {
      src: "Naruto1",
    },
    {
      src: "Naruto2",
    },
    {
      src: "Naruto3",
    },
    {
      src: "Naruto4",
    },
    {
      src: "Naruto5",
    },
    {
      src: "Naruto6",
    },
    {
      src: "Naruto7",
    },
    {
      src: "Naruto8",
    },
    {
      src: "Naruto9",
    },
    {
      src: "Naruto10",
    },
    {
      src: "Naruto11",
    },
    {
      src: "Naruto12",
    },
    {
      src: "Naruto13",
    },
    {
      src: "Naruto14",
    },
    {
      src: "Naruto15",
    },
    {
      src: "Naruto16",
    },
    {
      src: "Naruto17",
    },
    {
      src: "Naruto18",
    },
    {
      src: "Naruto19",
    },
    {
      src: "Naruto20",
    },
    {
      src: "Naruto21",
    },
    {
      src: "Naruto22",
    },
    {
      src: "Naruto23",
    },
    {
      src: "Naruto24",
    },
    {
      src: "Naruto25",
    },
    {
      src: "Naruto26",
    },
    {
      src: "Naruto27",
    },
    {
      src: "Naruto28",
    },
    {
      src: "Naruto29",
    },
    {
      src: "Naruto30",
    },
    {
      src: "Naruto31",
    },
    {
      src: "Naruto32",
    },
    {
      src: "Naruto33",
    },
    {
      src: "Naruto34",
    },
    {
      src: "Naruto35",
    },
    {
      src: "Naruto36",
    },
    {
      src: "Naruto37",
    },
    {
      src: "Naruto38",
    },
    {
      src: "Naruto39",
    },
    {
      src: "Naruto40",
    },
    {
      src: "Naruto41",
    },
    {
      src: "Naruto42",
    },
    {
      src: "Naruto43",
    },
    {
      src: "Naruto44",
    },
    {
      src: "Naruto46",
    },
    {
      src: "Naruto47",
    },
    {
      src: "Naruto48",
    },
    {
      src: "Naruto49",
    },
    {
      src: "Naruto50",
    },
    {
      src: "Naruto51",
    },
  ];

  //Idea for allocating character images into an array
  const charImages = [
    { charName: "Uzumaki-Naruto", charID: 0 },
    { charName: "Haruno-Sakura", charID: 1 },
    { charName: "Uchiha-Sasuke", charID: 2 },
    { charName: "Inuzuka-Kiba", charID: 3 },
    { charName: "Aburame-Shino", charID: 4 },
    { charName: "Hyuuga-Hinata", charID: 5 },
    { charName: "Nara-Shikamaru", charID: 6 },
    { charName: "Akimichi-Chouji", charID: 7 },
    { charName: "Yamanaka-Ino", charID: 8 },
    { charName: "Rock-Lee", charID: 9 },
    { charName: "Tenten", charID: 10 },
    { charName: "Hyuuga-Neji", charID: 11 },
    { charName: "Gaara", charID: 12 },
    { charName: "Kankuro", charID: 13 },
    { charName: "Temari", charID: 14 },
    { charName: "Kinuta-Dosu", charID: 15 },
    { charName: "Tsuchi-Kin", charID: 16 },
    { charName: "Abumi-Zaku", charID: 17 },
    { charName: "Young-Kakashi", charID: 18 },
    { charName: "Uchiha-Obito", charID: 19 },
    { charName: "Nohara-Rin", charID: 20 },
    { charName: "Hyuuga-Hanabi", charID: 21 },
    { charName: "Teuchi", charID: 22 },
    { charName: "Young-Minato", charID: 23 },
    { charName: "Young-Kushina", charID: 24 },
    { charName: "Young-Itachi", charID: 25 },
    { charName: "Young-Yahiko", charID: 26 },
    { charName: "Young-Konan", charID: 27 },
    { charName: "Young-Nagato", charID: 28 },
    { charName: "Young-Kabuto", charID: 29 },
    { charName: "Mahiru", charID: 30 },
    { charName: "Taiseki", charID: 31 },
    { charName: "Kakkou", charID: 32 },
    { charName: "Anbu-Kakashi", charID: 33 },
    { charName: "Tenzou", charID: 34 },
    { charName: "Anbu-Itachi", charID: 35 },
    { charName: "Corrupted-Obito", charID: 36 },
    { charName: "Kisame-Of-The-Cypher-Division", charID: 37 },
    { charName: "Umino-Iruka", charID: 38 },
    { charName: "Mizuki", charID: 39 },
    { charName: "Demon-Brothers", charID: 40 },
    { charName: "Zori-and-Waraji", charID: 41 },
    { charName: "Haku", charID: 42 },
    { charName: "Momochi-Zabuza", charID: 43 },
    { charName: "Oboro", charID: 44 },
    { charName: "Shigure", charID: 45 },
    { charName: "Shiore-Orochimaru", charID: 46 },
    { charName: "Akadou-Yoroi", charID: 47 },
    { charName: "Tsurugi-Misumi", charID: 48 },
    { charName: "Jiroubou", charID: 49 },
    { charName: "Kidoumaru", charID: 50 },
    { charName: "Tayuya", charID: 51 },
    { charName: "Sakon-and-Ukon", charID: 52 },
    { charName: "Kimimaro", charID: 53 },
    { charName: "Mitarashi-Anko", charID: 54 },
    { charName: "Gekko-Hayate", charID: 55 },
    { charName: "Shizune", charID: 56 },
    { charName: "Hatake-Kakashi", charID: 57 },
    { charName: "Yuhi-Kurenai", charID: 58 },
    { charName: "Sarutobi-Asuma", charID: 59 },
    { charName: "Maito-Gai", charID: 60 },
    { charName: "Uzumaki-Kushina", charID: 61 },
    { charName: "Namikaze-Minato", charID: 62 },
    { charName: "Yashamaru", charID: 63 },
    { charName: "Baki", charID: 64 },
    { charName: "Yakushi-Kabuto", charID: 65 },
    { charName: "Tsunade", charID: 66 },
    { charName: "Jiraiya", charID: 67 },
    { charName: "Orochimaru", charID: 68 },
    { charName: "Edo-Tensei-Hashirama", charID: 69 },
    { charName: "Edo-Tensei-Tobirama", charID: 70 },
    { charName: "Sarutobi-Hiruzen", charID: 71 },
    { charName: "Hokage-Minato", charID: 72 },
    { charName: "Masked-Man", charID: 73 },
    { charName: "Kyuubi-Naruto", charID: 74 },
    { charName: "Cursed-Seal-Lv1-Sasuke", charID: 75 },
    { charName: "Cursed-Seal-Sasuke", charID: 76 },
    { charName: "Butterfly-Chouji", charID: 77 },
    { charName: "Drunken-Lee", charID: 78 },
    { charName: "Shukaku-Gaara", charID: 79 },
    { charName: "Rehabilitated-Gaara", charID: 80 },
    { charName: "Hoshigaki-Kisame", charID: 81 },
    { charName: "Uchiha-Itachi", charID: 82 },
    { charName: "Rokushou-Aoi", charID: 83 },
    { charName: "Kurosuki-Raiga", charID: 84 },
    { charName: "Kazahana-Doto", charID: 85 },
    { charName: "Temujin", charID: 86 },
    { charName: "Uzumaki-Naruto-(S)", charID: 87 },
    { charName: "Haruno-Sakura-(S)", charID: 88 },
    { charName: "Sai", charID: 89 },
    { charName: "Inuzuka-Kiba-(S)", charID: 90 },
    { charName: "Aburame-Shino-(S)", charID: 91 },
    { charName: "Hyuuga-Hinata-(S)", charID: 92 },
    { charName: "Nara-Shikamaru-(S)", charID: 93 },
    { charName: "Akimichi-Chouji-(S)", charID: 94 },
    { charName: "Yamanaka-Ino-(S)", charID: 95 },
    { charName: "Rock-Lee-(S)", charID: 96 },
    { charName: "Tenten-(S)", charID: 97 },
    { charName: "Hyuuga-Neji-(S)", charID: 98 },
    { charName: "Sarutobi-Konohamaru", charID: 99 },
    { charName: "Hatake-Kakashi-(S)", charID: 100 },
    { charName: "Yamato", charID: 101 },
    { charName: "Maito-Gai-(S)", charID: 102 },
    { charName: "Sarutobi-Asuma-(S)", charID: 103 },
    { charName: "Ebisu", charID: 104 },
    { charName: "Shizune-(S)", charID: 105 },
    { charName: "Yamashiro-Aoba", charID: 106 },
    { charName: "Mitarashi-Anko-(S)", charID: 107 },
    { charName: "Izumo-and-Kotetsu", charID: 108 },
    { charName: "Shiranui-Genma", charID: 109 },
    { charName: "Namiashi-Raidou", charID: 110 },
    { charName: "Inuzuka-Hana", charID: 111 },
    { charName: "Inuzuka-Tsume", charID: 112 },
    { charName: "Aburame-Shibi", charID: 113 },
    { charName: "Hyuuga-Hiashi", charID: 114 },
    { charName: "Nara-Shikaku", charID: 115 },
    { charName: "Akimichi-Chouza", charID: 116 },
    { charName: "Yamanaka-Inoichi", charID: 117 },
    { charName: "Morino-Ibiki", charID: 118 },
    { charName: "Zaji", charID: 119 },
    { charName: "Nara-Ensui", charID: 120 },
    { charName: "Yamanaka-Santa", charID: 121 },
    { charName: "Aburame-Muta", charID: 122 },
    { charName: "Iou", charID: 123 },
    { charName: "Uzuki-Yugao", charID: 124 },
    { charName: "Anbu-Captain-Squad", charID: 125 },
    { charName: "Aburame-Torune", charID: 126 },
    { charName: "Yamanaka-Fu", charID: 127 },
    { charName: "Shimura-Danzo", charID: 128 },
    { charName: "Tsunade-(S)", charID: 129 },
    { charName: "Senju-Hashirama", charID: 130 },
    { charName: "Senju-Tobirama", charID: 131 },
    { charName: "Uchiha-Izuna", charID: 132 },
    { charName: "Uchiha-Madara", charID: 133 },
    { charName: "Uchiha-Shisui", charID: 134 },
    { charName: "Uchiha-Fugaku", charID: 135 },
    { charName: "Uchiha-Naori", charID: 136 },
    { charName: "Uchiha-Naka", charID: 137 },
    { charName: "Maito-Dai", charID: 138 },
    { charName: "Maki", charID: 139 },
    { charName: "Chiyo", charID: 140 },
    { charName: "Kankuro-(S)", charID: 141 },
    { charName: "Temari-(S)", charID: 142 },
    { charName: "Kazekage-Gaara", charID: 143 },
    { charName: "Ruka", charID: 144 },
    { charName: "Ao", charID: 145 },
    { charName: "Chojuro", charID: 146 },
    { charName: "Terumi-Mei", charID: 147 },
    { charName: "Akatsuchi", charID: 148 },
    { charName: "Kurotsuchi", charID: 149 },
    { charName: "Ittan", charID: 150 },
    { charName: "Monga", charID: 151 },
    { charName: "Kitsuchi", charID: 152 },
    { charName: "Ohnoki", charID: 153 },
    { charName: "Sabu", charID: 154 },
    { charName: "Atsui", charID: 155 },
    { charName: "Karui", charID: 156 },
    { charName: "Omoi", charID: 157 },
    { charName: "Samui", charID: 158 },
    { charName: "Shee", charID: 159 },
    { charName: "Darui", charID: 160 },
    { charName: "Motoi", charID: 161 },
    { charName: "Dodai", charID: 162 },
    { charName: "Mabui", charID: 163 },
    { charName: "Ay", charID: 164 },
    { charName: "Samurai-Troops", charID: 165 },
    { charName: "Mifune", charID: 166 },
    { charName: "Hanzo-of-the-Salamander", charID: 167 },
    { charName: "Ajisai", charID: 168 },
    { charName: "Nii-Yugito", charID: 169 },
    { charName: "Karatachi-Yagura", charID: 170 },
    { charName: "Roshi", charID: 171 },
    { charName: "Han", charID: 172 },
    { charName: "Utakata", charID: 173 },
    { charName: "Fuu", charID: 174 },
    { charName: "Killer-Bee", charID: 175 },
    { charName: "Hachibi-Bee", charID: 176 },
    { charName: "Hozuki-Suigetsu", charID: 177 },
    { charName: "Karin", charID: 178 },
    { charName: "Juugo", charID: 179 },
    { charName: "Cursed-Seal-Juugo", charID: 180 },
    { charName: "Uchiha-Sasuke-(S)", charID: 181 },
    { charName: "Cursed-Seal-Sasuke-(S)", charID: 182 },
    { charName: "Mangekyou-Sasuke", charID: 183 },
    { charName: "Yakushi-Kabuto-(S)", charID: 184 },
    { charName: "Orochimaru-(S)", charID: 185 },
    { charName: "White-Snake-Orochimaru", charID: 186 },
    { charName: "Fukasaku-and-Shima", charID: 187 },
    { charName: "Jiraiya-(S)", charID: 188 },
    { charName: "Sennin-Jiraiya", charID: 189 },
    { charName: "Sennin-Naruto", charID: 190 },
    { charName: "Three-Tails-Kyuubi-Naruto", charID: 191 },
    { charName: "Four-Tails-Kyuubi-Naruto", charID: 192 },
    { charName: "Six-Tails-Kyuubi-Naruto", charID: 193 },
    { charName: "Falls-Of-Truth", charID: 194 },
    { charName: "Fudou", charID: 195 },
    { charName: "Fuen", charID: 196 },
    { charName: "Fuuka", charID: 197 },
    { charName: "Kazuma", charID: 198 },
    { charName: "Sora", charID: 199 },
    { charName: "Chiriku", charID: 200 },
    { charName: "Yuukimaru", charID: 201 },
    { charName: "Kigiri", charID: 202 },
    { charName: "Nurari", charID: 203 },
    { charName: "Kihou", charID: 204 },
    { charName: "Gozu", charID: 205 },
    { charName: "Rinji", charID: 206 },
    { charName: "Guren", charID: 207 },
    { charName: "Mecha-Naruto", charID: 208 },
    { charName: "Mecha-Kurama", charID: 209 },
    { charName: "Satori", charID: 210 },
    { charName: "Kisame-Body-Double", charID: 211 },
    { charName: "Itachi-Body-Double", charID: 212 },
    { charName: "Deidara", charID: 213 },
    { charName: "Hiruko-Sasori", charID: 214 },
    { charName: "Sasori-of-the-Red-Sand", charID: 215 },
    { charName: "Puppet-Sasori", charID: 216 },
    { charName: "Hidan", charID: 217 },
    { charName: "Kakuzu", charID: 218 },
    { charName: "True-Form-Kakuzu", charID: 219 },
    { charName: "Hoshigaki-Kisame-(S)", charID: 220 },
    { charName: "Uchiha-Itachi-(S)", charID: 221 },
    { charName: "Biwa-Juuzou", charID: 222 },
    { charName: "Akatsuki-Orochimaru", charID: 223 },
    { charName: "Kyuusuke", charID: 224 },
    { charName: "Daibutsu", charID: 225 },
    { charName: "Yahiko", charID: 226 },
    { charName: "Konan", charID: 227 },
    { charName: "Konan-of-the-Rain", charID: 228 },
    { charName: "Uzumaki-Nagato", charID: 229 },
    { charName: "Animal-Path-Pain", charID: 230 },
    { charName: "Female-Animal-Path-Pain", charID: 231 },
    { charName: "Asura-Path-Pain", charID: 232 },
    { charName: "Human-Path-Pain", charID: 233 },
    { charName: "Naraka-Path-Pain", charID: 234 },
    { charName: "Preta-Path-Pain", charID: 235 },
    { charName: "Deva-Path-Pain", charID: 236 },
    { charName: "White-Zetsu", charID: 237 },
    { charName: "Black-Zetsu", charID: 238 },
    { charName: "Tobi", charID: 239 },
    { charName: "Akatsuki-Sasuke", charID: 240 },
    { charName: "Edo-Tensei-Asuma", charID: 241 },
    { charName: "Edo-Tensei-Dan", charID: 242 },
    { charName: "Edo-Tensei-Hizashi", charID: 243 },
    { charName: "Edo-Tensei-Shin", charID: 244 },
    { charName: "Edo-Tensei-Hayate", charID: 245 },
    { charName: "Edo-Tensei-Torune", charID: 246 },
    { charName: "Edo-Tensei-Ginkaku", charID: 247 },
    { charName: "Edo-Tensei-Kinkaku", charID: 248 },
    { charName: "Edo-Tensei-Kyuubi-Kinkaku", charID: 249 },
    { charName: "Edo-Tensei-Pakura", charID: 250 },
    { charName: "Edo-Tensei-Gari", charID: 251 },
    { charName: "Edo-Tensei-Fukai", charID: 252 },
    { charName: "Edo-Tensei-Hanzo", charID: 253 },
    { charName: "Edo-Tensei-Chiyo", charID: 254 },
    { charName: "Edo-Tensei-Chukichi", charID: 255 },
    { charName: "Edo-Tensei-Toroi", charID: 256 },
    { charName: "Edo-Tensei-Chen", charID: 257 },
    { charName: "Edo-Tensei-Yota", charID: 258 },
    { charName: "Edo-Tensei-Tatewaki", charID: 259 },
    { charName: "Edo-Tensei-Heiji", charID: 260 },
    { charName: "Edo-Tensei-Daimaru", charID: 261 },
    { charName: "Edo-Tensei-Chuukaku", charID: 262 },
    { charName: "Edo-Tensei-Sand-Jester-Nin", charID: 263 },
    { charName: "Edo-Tensei-Cloud-Plague-Nin", charID: 264 },
    { charName: "Edo-Tensei-Jiroubou", charID: 265 },
    { charName: "Edo-Tensei-Kidoumaru", charID: 266 },
    { charName: "Edo-Tensei-Tayuya", charID: 267 },
    { charName: "Edo-Tensei-Sakon-and-Ukon", charID: 268 },
    { charName: "Edo-Tensei-Kimimaro", charID: 269 },
    { charName: "Edo-Tensei-Haku", charID: 270 },
    { charName: "Edo-Tensei-Zabuza", charID: 271 },
    { charName: "Edo-Tensei-Jinin", charID: 272 },
    { charName: "Edo-Tensei-Ameyuri", charID: 273 },
    { charName: "Edo-Tensei-Kushimaru", charID: 274 },
    { charName: "Edo-Tensei-Jinpachi", charID: 275 },
    { charName: "Edo-Tensei-Fuguki", charID: 276 },
    { charName: "Edo-Tensei-Mangetsu", charID: 277 },
    { charName: "Edo-Tensei-Sandaime-Kazekage", charID: 278 },
    { charName: "Edo-Tensei-Rasa", charID: 279 },
    { charName: "Edo-Tensei-Ay", charID: 280 },
    { charName: "Edo-Tensei-Muu", charID: 281 },
    { charName: "Edo-Tensei-Gengetsu", charID: 282 },
    { charName: "Edo-Tensei-Deidara", charID: 283 },
    { charName: "Edo-Tensei-Sasori", charID: 284 },
    { charName: "Edo-Tensei-Kakuzu", charID: 285 },
    { charName: "Edo-Tensei-Nagato", charID: 286 },
    { charName: "Edo-Tensei-Itachi", charID: 287 },
    { charName: "Edo-Tensei-Yugito", charID: 288 },
    { charName: "Edo-Tensei-Yagura", charID: 289 },
    { charName: "Edo-Tensei-Roshi", charID: 290 },
    { charName: "Edo-Tensei-Han", charID: 291 },
    { charName: "Edo-Tensei-Utakata", charID: 292 },
    { charName: "Edo-Tensei-Fuu", charID: 293 },
    { charName: "Edo-Tensei-Hashirama-(S)", charID: 294 },
    { charName: "Edo-Tensei-Tobirama-(S)", charID: 295 },
    { charName: "Edo-Tensei-Hiruzen", charID: 296 },
    { charName: "Edo-Tensei-Minato", charID: 297 },
    { charName: "Edo-Tensei-Kyuubi-Minato", charID: 298 },
    { charName: "Edo-Tensei-Madara", charID: 299 },
    { charName: "Kyuubi-Naruto-(S)", charID: 300 },
    { charName: "Sennin-Kyuubi-Naruto", charID: 301 },
    { charName: "Eternal-Mangekyou-Sasuke", charID: 302 },
    { charName: "Byakugou-Sakura", charID: 303 },
    { charName: "Emotional-Energy-Sai", charID: 304 },
    { charName: "Commander-Kakashi", charID: 305 },
    { charName: "Butterfly-Chouji-(S)", charID: 306 },
    { charName: "Commander-Gaara", charID: 307 },
    { charName: "Captain-Kankuro", charID: 308 },
    { charName: "Captain-Temari", charID: 309 },
    { charName: "Samehada-Bee", charID: 310 },
    { charName: "White-Snake-Kabuto", charID: 311 },
    { charName: "Sennin-Kabuto", charID: 312 },
    { charName: "Rinnegan-Tobi", charID: 313 },
    { charName: "Uchiha-Obito-(S)", charID: 314 },
    { charName: "Guruguru", charID: 315 },
    { charName: "Regenerated-Madara", charID: 316 },
    { charName: "Juubi", charID: 317 },
    { charName: "Rikudou-Obito", charID: 318 },
    { charName: "Rikudou-Madara", charID: 319 },
    { charName: "Eighth-Gate-Gai", charID: 320 },
    { charName: "Rikudou-Naruto", charID: 321 },
    { charName: "Rinnegan-Sasuke", charID: 322 },
    { charName: "Dual-Mangekyou-Kakashi", charID: 323 },
    { charName: "Rehabilitated-Obito", charID: 324 },
    { charName: "Ootsutsuki-Kaguya", charID: 325 },
    { charName: "Ootsutsuki-Hamura", charID: 326 },
    { charName: "Ootsutsuki-Hagoromo", charID: 327 },
    { charName: "Ootsutsuki-Ashura", charID: 328 },
    { charName: "Ootsutsuki-Indra", charID: 329 },
    { charName: "Ootsutsuki-Toneri", charID: 330 },
    { charName: "Uzumaki-Boruto", charID: 331 },
    { charName: "Uchiha-Sarada", charID: 332 },
    { charName: "Mitsuki", charID: 333 },
    { charName: "Nara-Shikadai", charID: 334 },
    { charName: "Akimichi-Chouchou", charID: 335 },
    { charName: "Yamanaka-Inojin", charID: 336 },
    { charName: "Metal-Lee", charID: 337 },
    { charName: "Yuino-Iwabee", charID: 338 },
    { charName: "Kaminarimon-Denki", charID: 339 },
    { charName: "Kakei-Sumire", charID: 340 },
    { charName: "Izuno-Wasabi", charID: 341 },
    { charName: "Suzumeno-Namida", charID: 342 },
    { charName: "Kurogane-Tsubaki", charID: 343 },
    { charName: "Taketori-Houki", charID: 344 },
    { charName: "Kokubou-Renga", charID: 345 },
    { charName: "Kuroi-Hako", charID: 346 },
    { charName: "Shinki-of-the-Iron-Sand", charID: 347 },
    { charName: "Araya", charID: 348 },
    { charName: "Yodo", charID: 349 },
    { charName: "Yurui", charID: 350 },
    { charName: "Tarui", charID: 351 },
    { charName: "Toroi", charID: 352 },
    { charName: "Uzumaki-Himawari", charID: 353 },
    { charName: "Kawaki", charID: 354 },
    { charName: "Sarutobi-Mirai", charID: 355 },
    { charName: "Sarutobi-Konohamaru-(B)", charID: 356 },
    { charName: "Ise-Udon", charID: 357 },
    { charName: "Kazamatsuri-Moegi", charID: 358 },
    { charName: "Hyuuga-Hanabi-(B)", charID: 359 },
    { charName: "Mugino", charID: 360 },
    { charName: "Touno-Katasuke", charID: 361 },
    { charName: "Mitarashi-Anko-(B)", charID: 362 },
    { charName: "Hokage-Naruto", charID: 363 },
    { charName: "Uchiha-Sasuke-(B)", charID: 364 },
    { charName: "Uchiha-Sakura", charID: 365 },
    { charName: "Yamanaka-Sai", charID: 366 },
    { charName: "Hatake-Kakashi-(B)", charID: 367 },
    { charName: "Aburame-Shino-(B)", charID: 368 },
    { charName: "Nara-Shikamaru-(B)", charID: 369 },
    { charName: "Akimichi-Chouji-(B)", charID: 370 },
    { charName: "Yamanaka-Ino-(B)", charID: 371 },
    { charName: "Rock-Lee-(B)", charID: 372 },
    { charName: "Tenten-(B)", charID: 373 },
    { charName: "Hyuuga-Hiashi-(B)", charID: 374 },
    { charName: "Kazekage-Gaara-(B)", charID: 375 },
    { charName: "Kankuro-(B)", charID: 376 },
    { charName: "Nara-Temari", charID: 377 },
    { charName: "Mizukage-Chojuro", charID: 378 },
    { charName: "Tsuchikage-Kurotsuchi", charID: 379 },
    { charName: "Raikage-Darui", charID: 380 },
    { charName: "Akimichi-Karui", charID: 381 },
    { charName: "Omoi-(B)", charID: 382 },
    { charName: "Orochimaru-(B)", charID: 383 },
    { charName: "Shin-Clone", charID: 384 },
    { charName: "Uchiha-Shin", charID: 385 },
    { charName: "Shojoji-Of-The-Corpse-Clone", charID: 386 },
    { charName: "Ootsutsuki-Urashiki", charID: 387 },
    { charName: "Chakra-Fruit-Urashiki", charID: 388 },
    { charName: "Ootsutsuki-Kinshiki", charID: 389 },
    { charName: "Ootsutsuki-Momoshiki", charID: 390 },
    { charName: "Chakra-Fruit-Momoshiki", charID: 391 },
    { charName: "Karma-Boruto", charID: 392 },
    { charName: "Ootsutsuki-Boruto", charID: 393 },
    { charName: "Karma-Kawaki", charID: 394 },
    { charName: "Restored-Karma-Kawaki", charID: 395 },
    { charName: "Sennin-Mitsuki", charID: 396 },
    { charName: "Shigaraki-Sumire", charID: 397 },
    { charName: "Baryon-Naruto", charID: 398 },
    { charName: "Ao-(B)", charID: 399 },
    { charName: "Garou", charID: 400 },
    { charName: "Victor", charID: 401 },
    { charName: "Deepa", charID: 402 },
    { charName: "Delta", charID: 403 },
    { charName: "Kashin-Koji", charID: 404 },
    { charName: "Sennin-Koji", charID: 405 },
    { charName: "Boro", charID: 406 },
    { charName: "Rampage-Boro", charID: 407 },
    { charName: "Sanzu-Amado", charID: 408 },
    { charName: "Jigen", charID: 409 },
    { charName: "Ootsutsuki-Isshiki", charID: 410 },
    { charName: "Code", charID: 411 },
    { charName: "Santa-Claus", charID: 412 },
  ];
  //Spring method to fade in the entire app over .5 seconds on lunach

  //Test function for the character images being clicked to alert the img info
  //Stores teams data as objects into the local storage if present if not sets to empty array
  const data = JSON.parse(window.localStorage.getItem("Your_Teams") || "[]");
  const teamCount = parseInt(
    window.localStorage.getItem("Teams_Created") || parseInt(0)
  );

  const [selectedChars, setSelectedChars] = useState([" ", " ", " "]);

  //OnClick function for backgrounds removes Naruto text from the img src
  function handleBgSelection(bg) {
    setTeamBg(bg);
  }

  function isBgSelected(bg) {
    if (bg.src === teamBg) {
      return "bgSample selected " + bg.src;
    } else {
      return "bgSample ";
    }
  }
  // function to use when character clicked
  function handleSelectCharacter(char) {
    const arrayCopy = [...selectedChars];
    //Checks to see if selected character is already in the array if so do nothing
    //else add character to the array, reaching 3 characters update teammember state with the names
    //when reaching 3 character additional clicks will remove 0 index char and add latest click as
    //at index 2
    if (arrayCopy.includes(char.charID)) {
      const index = arrayCopy.findIndex((num) => num === char.charID);
      if (index !== -1) arrayCopy.splice(index, 1);
    } else {
      if (arrayCopy.length === 3) {
        arrayCopy.shift();
        setSelectedChars(arrayCopy);
      }
      arrayCopy.push(char.charName);
    }
    setTeamMembers(arrayCopy);
  }

  function highlightChar(i) {
    if (selectedChars.includes(i)) {
      return "selected";
    } else {
      return "charImage";
    }
  }

  //   const toggleClass = (name, id) => {
  //     //If the character is already in remove from array
  //     if (newArr.includes(name)) {
  //       let removed = newArr.findIndex(name);
  //       alert("NewArr " + newArr + " Removing :" + name + " Removed" + removed);
  //       return;
  //     }
  //     //Highlight and add to selectedChar and team arrays 3 distinct clicked on chars
  //     if (i.current < 3 && !newArr.includes(name)) {
  //       newArr2.push(id);
  //       newArr.push(name);
  //     }

  //   //After 3 chars names and ids are added set the states for team members and highlight chars
  //   if (newArr.length === 3) {
  //     const [n1, n2, n3] = newArr;
  //     setTeamMembers(() => n1 + " " + n2 + " " + n3);
  //     selectChar({ ...charImages, selectedChar: teamMembers});
  //     setSelectedChars({ ...charImages, selectedChar: teamMembers });
  //   }
  // };
  //On click for char image adds 3 distinct names as strings into an array upon completion fills the input
  //Figure out a way to remove ',' format must be NAME_NAME_NAME for the add team button to work
  // const addMember = (name, index) => {
  //   if (i.current < 3 && !newArr.includes(name)) {
  //     newArr.push(name);
  //     // toggleClass(index);
  //     // setCounter(newArr.length);
  //     // console.log(newArr);
  //   } else {
  //     return;
  //   }
  //   //Afer obtaining 3 distinct chars deconstuct the array adding space for quick team add and
  //   //setting team members as the team
  //   if (newArr.length === 3) {
  //     const [n1, n2, n3] = newArr;
  //     setTeamMembers(() => [n1 + " " + n2 + " " + n3]);
  //   }
  // };

  //Set intial teams array with 1 object containing a name, id, members array,
  //img src array and member id array
  const [teams, setTeams] = useState(data || []);
  //Get teams form previous visit if data is present.
  // useEffect(() => {
  //   data = window.localStorage.getItem("Your_Teams");
  //   data?setTeams(JSON.parse(data)) : alert("No previous teams...");
  // }, []);

  //Set intial team members
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamName, setTeamName] = useState("Streak");
  const [numOfTeams, setNumOfTeams] = useState(teams.length);
  const [teamNumber, setTeamNumber] = useState(teamCount);
  const [teamStars, setTeamStars] = useState(0);

  function addTeam() {
    //If no team name is given the button does nothing
    //For some reason does not work with newArr.length < 1-3
    if (!teamName) {
      return;
    }
    //Adding new teams information and setting it to the proper keys then adding
    //team content into the main div to be displayed
    const newTeam = {
      ID: teamMembers + " " + teamName,
      TeamNumber: teamNumber,
      Name: teamName,
      Background: teamBg,
      memberID: [1, 2, 3],
      Members: teamMembers,
      starNum: teamStars,
      imgSrc: [
        require("./char_images/" + teamMembers[0] + ".webp"),
        require("./char_images/" + teamMembers[1] + ".webp"),
        require("./char_images/" + teamMembers[2] + ".webp"),
      ],
    };
    //Adds newly created team into the teams array.
    //Increases total number of teams
    //Increases team number aka id
    //Splits team members into a size 3 array
    //Empty input name field cause its annoying having to delete
    setTeams((oldTeams) => [...oldTeams, newTeam]);
    setNumOfTeams(numOfTeams + 1);
    setTeamName(teamName);
    setTeamBg(teamBg);
    setTeamNumber(teamNumber + 1);
    setTeamName("Team" + numOfTeams);
    setTeamStars(0);
  }

  const StarRating = (props) => {
    const [hover, setHover] = useState(null);
    return (
      <div className="starHolder">
        {[...Array(10)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setTeamRating(props.team, ratingValue)}
              />
              <GiStarShuriken
                color={
                  ratingValue <= (hover || props.stars) ? "red" : "silver "
                }
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                className={props.stars > 6 ? "highRated" : " "}
              />
            </label>
          );
        })}
      </div>
    );
  };

  function removeTeam(id) {
    //Remove button logic looks for id that matches the clicked removed id and
    //removes the team with that id. If multiple teams get deleted
    //check to make sure the teamNumber is increasing correclty.
    const newTeams = teams.filter((team) => team.ID !== id);
    //Future idea to readjust team id's example delete team 2/4 and change 3 and 4 id by -1.
    // if (id < numOfTeams) {
    //  alert("Move higher numbers down by -1");
    //} else {
    //  alert("You removed a team = or lower than the max change no numbers");
    //}
    setTeams(newTeams);
  }

  function setTeamRating(id, stars) {
    const target = teams.findIndex((team) => team.TeamNumber === id);
    teams[target].starNum = stars;
    setTeamStars(stars);
  }

  function deleteAll() {
    localStorage.clear();
    setTeams([]);
    window.localStorage.setItem("Teams_Created", parseInt(0));
  }

  //Update number of teams when a team is added or removed.
  //Output just for testing purposes.
  useEffect(() => {
    setTeamStars(0);
    // console.log("Number of teams", numOfTeams);
    // console.log("Team Name", teamName);
    // console.log("Team members", teamMembers);
    // console.log("Team number", teamNumber);
    // console.log("Img src ", teamNumber);
    window.localStorage.setItem("Your_Teams", JSON.stringify(teams));
    window.localStorage.setItem("Teams_Created", teamNumber);
  }, [teams, teamNumber, teamStars, addTeam, setTeamStars, setTeamRating]);
  // componentDidMount();
  //console.log("Selected Chars " + selectedChars);
  return (
    <div className="App">
      <div className="charImageHolder">
        {" "}
        {charImages.map((charPic) => {
          return (
            <img
              key={charPic.charID}
              loading="lazy"
              draggable="true"
              //className={highlightChar(charPic.charID)}
              className={highlightChar(charPic.charName)}
              id={charPic.charID}
              alt={charPic.charName}
              src={require("./char_images/" + charPic.charName + ".webp")}
              //For some reason this onClick only highlights with  charID not charName
              onClick={() => handleSelectCharacter(charPic)}
              //onClick={() => toggleClass(charPic.charName, charPic.charID)}
              // onClick={() => addMember(charPic.charName, charPic.charID)}
            />
          );
        })}
      </div>
      {/* <Spring 
        from={{opacity: 0}}
        to={{opacity: 1}}
        config={{delay: 1200 , duration: 3000}}
        />  */}
      <div className="teamsSettingsHolder">
        <div className="teamSettings">
          <div className="nameCreate">
            <input
              label="Team Name"
              type="text"
              placeholder="Enter team name..."
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <input
              label="Team Members"
              type="text"
              placeholder="Enter 3 names or click 3 characters..."
              value={teamMembers}
              onChange={(e) => setTeamMembers(e.target.value)}
            />
            <p className="important">Select Background: {teamBg}</p>

            <br></br>
            <button className="btn" onClick={() => addTeam()}>
              Add Team
            </button>

            <button className="btn delete" onClick={() => deleteAll()}>
              !DELETE ALL!
            </button>

            <p className="important">
              Select 3 characters, a background and "Add Team". Name required.
            </p>
            <p className="important">
              <span className="important">You have {numOfTeams} team(s)!</span>
            </p>
            <div className="bgsHolder">
              {" "}
              {narutoBgs.map((bg) => {
                return (
                  <div
                    key={bg.src + "key"}
                    draggable="true"
                    className={isBgSelected(bg) + " " + bg.src}
                    loading="lazy"
                    onClick={() => handleBgSelection(bg.src)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="teamsHolder">
        <div className="mainTeamHolder">
          {teams.map((team) => {
            return (
              <>
                <div
                  key={teamCount}
                  className={"teamBox Narutobg " + team.Background}
                >
                  <p className="teamInfo" key={team.ID}>
                    Name: {team.Name} <br />
                    <StarRating stars={team.starNum} team={team.TeamNumber} />
                    Members: {team.Members + " "}
                  </p>
                  {/* MemberID {team.memberID} */}
                  <img
                    // onClick={() => speak(team.Members)}
                    loading="lazy"
                    src={team.imgSrc[0]}
                    alt={team.Members[0]}
                  />
                  <img
                    // onClick={() => speak(team.Name)}
                    loading="lazy"
                    src={team.imgSrc[1]}
                    alt={team.Members[1]}
                  />
                  <img
                    // onClick={() => speak(team.ID)}
                    loading="lazy"
                    src={team.imgSrc[2]}
                    alt={team.Members[2]}
                  />

                  <button
                    className="btn remove"
                    onClick={() => removeTeam(team.ID)}
                  >
                    Remove
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
