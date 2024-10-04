import React from "react";
import { useState, useEffect } from "react";
import { GiStarShuriken } from "react-icons/gi";

const App = () => {
  //Bgs  for teams
  const [teamBg, setTeamBg] = useState("Naruto20");

  //Idea for allocating Naruto bg images into an array
  const narutoBgs = [
    {
      src: "Naruto0"
    },
    {
      src: "Naruto1"
    },
    {
      src: "Naruto2"
    },
    {
      src: "Naruto3"
    },
    {
      src: "Naruto4"
    },
    {
      src: "Naruto5"
    },
    {
      src: "Naruto6"
    },
    {
      src: "Naruto7"
    },
    {
      src: "Naruto8"
    },
    {
      src: "Naruto9"
    },
    {
      src: "Naruto10"
    },
    {
      src: "Naruto11"
    },
    {
      src: "Naruto12"
    },
    {
      src: "Naruto13"
    },
    {
      src: "Naruto14"
    },
    {
      src: "Naruto15"
    },
    {
      src: "Naruto16"
    },
    {
      src: "Naruto17"
    },
    {
      src: "Naruto18"
    },
    {
      src: "Naruto19"
    },
    {
      src: "Naruto20"
    },
    {
      src: "Naruto21"
    },
    {
      src: "Naruto22"
    },
    {
      src: "Naruto23"
    },
    {
      src: "Naruto24"
    },
    {
      src: "Naruto25"
    },
    {
      src: "Naruto26"
    },
    {
      src: "Naruto27"
    },
    {
      src: "Naruto28"
    },
    {
      src: "Naruto29"
    },
    {
      src: "Naruto30"
    },
    {
      src: "Naruto31"
    },
    {
      src: "Naruto32"
    },
    {
      src: "Naruto33"
    },
    {
      src: "Naruto34"
    },
    {
      src: "Naruto35"
    },
    {
      src: "Naruto36"
    },
    {
      src: "Naruto37"
    },
    {
      src: "Naruto38"
    },
    {
      src: "Naruto39"
    },
    {
      src: "Naruto40"
    },
    {
      src: "Naruto41"
    },
    {
      src: "Naruto42"
    },
    {
      src: "Naruto43"
    },
    {
      src: "Naruto44"
    },
    {
      src: "Naruto46"
    },
    {
      src: "Naruto47"
    },
    {
      src: "Naruto48"
    },
    {
      src: "Naruto49"
    },
    {
      src: "Naruto50"
    },
    {
      src: "Naruto51"
    },
    {
      src: "Naruto52"
    },
    {
      src: "Naruto53"
    },
    {
      src: "Naruto54"
    },
    {
      src: "Naruto55"
    },
    {
      src: "Naruto56"
    },
    {
      src: "Naruto57"
    },
    {
      src: "Naruto59"
    },
    {
      src: "Naruto60"
    },
    {
      src: "Naruto61"
    },
    {
      src: "Naruto62"
    },
    {
      src: "Naruto63"
    },
    {
      src: "Naruto64"
    },
    {
      src: "Naruto65"
    },
    {
      src: "Naruto66"
    },
    {
      src: "Naruto67"
    },
    {
      src: "Naruto68"
    },
    {
      src: "Naruto69"
    },
    {
      src: "Naruto70"
    },
    {
      src: "Naruto71"
    }
  ];

  //Idea for allocating character images into an array
  const charImages = [
    {
      charName: "Uzumaki-Naruto",
      charId: 0
    },
    {
      charName: "Haruno-Sakura",
      charId: 1
    },
    {
      charName: "Uchiha-Sasuke",
      charId: 2
    },
    {
      charName: "Inuzuka-Kiba",
      charId: 3
    },
    {
      charName: "Aburame-Shino",
      charId: 4
    },
    {
      charName: "Hyuuga-Hinata",
      charId: 5
    },
    {
      charName: "Nara-Shikamaru",
      charId: 6
    },
    {
      charName: "Akimichi-Chouji",
      charId: 7
    },
    {
      charName: "Yamanaka-Ino",
      charId: 8
    },
    {
      charName: "Rock-Lee",
      charId: 9
    },
    {
      charName: "Tenten",
      charId: 10
    },
    {
      charName: "Hyuuga-Neji",
      charId: 11
    },
    {
      charName: "Gaara",
      charId: 12
    },
    {
      charName: "Kankuro",
      charId: 13
    },
    {
      charName: "Temari",
      charId: 14
    },
    {
      charName: "Kinuta-Dosu",
      charId: 15
    },
    {
      charName: "Tsuchi-Kin",
      charId: 16
    },
    {
      charName: "Abumi-Zaku",
      charId: 17
    },
    {
      charName: "Young-Kakashi",
      charId: 18
    },
    {
      charName: "Uchiha-Obito",
      charId: 19
    },
    {
      charName: "Nohara-Rin",
      charId: 20
    },
    {
      charName: "Hyuuga-Hanabi",
      charId: 21
    },
    {
      charName: "Teuchi",
      charId: 22
    },
    {
      charName: "Young-Minato",
      charId: 23
    },
    {
      charName: "Young-Kushina",
      charId: 24
    },
    {
      charName: "Young-Itachi",
      charId: 25
    },
    {
      charName: "Young-Yahiko",
      charId: 26
    },
    {
      charName: "Young-Konan",
      charId: 27
    },
    {
      charName: "Young-Nagato",
      charId: 28
    },
    {
      charName: "Young-Kabuto",
      charId: 29
    },
    {
      charName: "Mahiru",
      charId: 30
    },
    {
      charName: "Taiseki",
      charId: 31
    },
    {
      charName: "Kakkou",
      charId: 32
    },
    {
      charName: "Anbu-Kakashi",
      charId: 33
    },
    {
      charName: "Tenzou",
      charId: 34
    },
    {
      charName: "Anbu-Itachi",
      charId: 35
    },
    {
      charName: "Corrupted-Obito",
      charId: 36
    },
    {
      charName: "Kisame-Of-The-Cypher-Division",
      charId: 37
    },
    {
      charName: "Jounin-Tsunade",
      charId: 38
    },
    {
      charName: "Jounin-Jiraya",
      charId: 39
    },
    {
      charName: "Jounin-Orochimaru",
      charId: 40
    },
    {
      charName: "Umino-Iruka",
      charId: 41
    },
    {
      charName: "Mizuki",
      charId: 42
    },
    {
      charName: "Demon-Brothers",
      charId: 43
    },
    {
      charName: "Zori-and-Waraji",
      charId: 44
    },
    {
      charName: "Gatou",
      charId: 45
    },
    {
      charName: "Haku",
      charId: 46
    },
    {
      charName: "Momochi-Zabuza",
      charId: 47
    },
    {
      charName: "Oboro",
      charId: 48
    },
    {
      charName: "Shigure",
      charId: 49
    },
    {
      charName: "Shiore-Orochimaru",
      charId: 50
    },
    {
      charName: "Akadou-Yoroi",
      charId: 51
    },
    {
      charName: "Tsurugi-Misumi",
      charId: 52
    },
    {
      charName: "Jiroubou",
      charId: 53
    },
    {
      charName: "Kidoumaru",
      charId: 54
    },
    {
      charName: "Tayuya",
      charId: 55
    },
    {
      charName: "Sakon-and-Ukon",
      charId: 56
    },
    {
      charName: "Kimimaro",
      charId: 57
    },
    {
      charName: "Mitarashi-Anko",
      charId: 58
    },
    {
      charName: "Gekko-Hayate",
      charId: 59
    },
    {
      charName: "Shizune",
      charId: 60
    },
    {
      charName: "Hatake-Kakashi",
      charId: 61
    },
    {
      charName: "Yuhi-Kurenai",
      charId: 62
    },
    {
      charName: "Sarutobi-Asuma",
      charId: 63
    },
    {
      charName: "Maito-Gai",
      charId: 64
    },
    {
      charName: "Uzumaki-Kushina",
      charId: 65
    },
    {
      charName: "Namikaze-Minato",
      charId: 66
    },
    {
      charName: "Yashamaru",
      charId: 67
    },
    {
      charName: "Baki",
      charId: 68
    },
    {
      charName: "Yakushi-Kabuto",
      charId: 69
    },
    {
      charName: "Tsunade",
      charId: 70
    },
    {
      charName: "Jiraiya",
      charId: 71
    },
    {
      charName: "Orochimaru",
      charId: 72
    },
    {
      charName: "Edo-Tensei-Hashirama",
      charId: 73
    },
    {
      charName: "Edo-Tensei-Tobirama",
      charId: 74
    },
    {
      charName: "Sarutobi-Hiruzen",
      charId: 75
    },
    {
      charName: "Hokage-Minato",
      charId: 76
    },
    {
      charName: "Masked-Man",
      charId: 77
    },
    {
      charName: "Kyuubi-Naruto",
      charId: 78
    },
    {
      charName: "Cursed-Seal-Lv1-Sasuke",
      charId: 79
    },
    {
      charName: "Cursed-Seal-Sasuke",
      charId: 80
    },
    {
      charName: "Butterfly-Chouji",
      charId: 81
    },
    {
      charName: "Drunken-Lee",
      charId: 82
    },
    {
      charName: "Shukaku-Gaara",
      charId: 83
    },
    {
      charName: "Rehabilitated-Gaara",
      charId: 84
    },
    {
      charName: "Hoshigaki-Kisame",
      charId: 85
    },
    {
      charName: "Uchiha-Itachi",
      charId: 86
    },
    {
      charName: "Rokushou-Aoi",
      charId: 87
    },
    {
      charName: "Kurosuki-Raiga",
      charId: 88
    },
    {
      charName: "Rouga-Nadare",
      charId: 89
    },
    {
      charName: "Kakuyoku-Fubuki",
      charId: 90
    },
    {
      charName: "Fuyukuma-Mizore",
      charId: 91
    },
    {
      charName: "Kazahana-Doto",
      charId: 92
    },
    {
      charName: "Temujin",
      charId: 93
    },
    {
      charName: "Haido",
      charId: 94
    },
    {
      charName: "Uzumaki-Naruto-(S)",
      charId: 95
    },
    {
      charName: "Haruno-Sakura-(S)",
      charId: 96
    },
    {
      charName: "Sai",
      charId: 97
    },
    {
      charName: "Inuzuka-Kiba-(S)",
      charId: 98
    },
    {
      charName: "Aburame-Shino-(S)",
      charId: 99
    },
    {
      charName: "Hyuuga-Hinata-(S)",
      charId: 100
    },
    {
      charName: "Nara-Shikamaru-(S)",
      charId: 101
    },
    {
      charName: "Akimichi-Chouji-(S)",
      charId: 102
    },
    {
      charName: "Yamanaka-Ino-(S)",
      charId: 103
    },
    {
      charName: "Rock-Lee-(S)",
      charId: 104
    },
    {
      charName: "Tenten-(S)",
      charId: 105
    },
    {
      charName: "Hyuuga-Neji-(S)",
      charId: 106
    },
    {
      charName: "Sarutobi-Konohamaru",
      charId: 107
    },
    {
      charName: "Hatake-Kakashi-(S)",
      charId: 108
    },
    {
      charName: "Yamato",
      charId: 109
    },
    {
      charName: "Maito-Gai-(S)",
      charId: 110
    },
    {
      charName: "Sarutobi-Asuma-(S)",
      charId: 111
    },
    {
      charName: "Umino-Iruka-(S)",
      charId: 112
    },
    {
      charName: "Ebisu",
      charId: 113
    },
    {
      charName: "Shizune-(S)",
      charId: 114
    },
    {
      charName: "Yamashiro-Aoba",
      charId: 115
    },
    {
      charName: "Mitarashi-Anko-(S)",
      charId: 116
    },
    {
      charName: "Izumo-and-Kotetsu",
      charId: 117
    },
    {
      charName: "Shiranui-Genma",
      charId: 118
    },
    {
      charName: "Namiashi-Raidou",
      charId: 119
    },
    {
      charName: "Inuzuka-Hana",
      charId: 120
    },
    {
      charName: "Inuzuka-Tsume",
      charId: 121
    },
    {
      charName: "Aburame-Shibi",
      charId: 122
    },
    {
      charName: "Hyuuga-Hiashi",
      charId: 123
    },
    {
      charName: "Nara-Shikaku",
      charId: 124
    },
    {
      charName: "Akimichi-Chouza",
      charId: 125
    },
    {
      charName: "Yamanaka-Inoichi",
      charId: 126
    },
    {
      charName: "Morino-Ibiki",
      charId: 127
    },
    {
      charName: "Zaji",
      charId: 128
    },
    {
      charName: "Nara-Ensui",
      charId: 129
    },
    {
      charName: "Yamanaka-Santa",
      charId: 130
    },
    {
      charName: "Aburame-Muta",
      charId: 131
    },
    {
      charName: "Hyuuga-Tokuma",
      charId: 132
    },
    {
      charName: "Iou",
      charId: 133
    },
    {
      charName: "Uzuki-Yugao",
      charId: 134
    },
    {
      charName: "Anbu-Captain-Squad",
      charId: 135
    },
    {
      charName: "Aburame-Torune",
      charId: 136
    },
    {
      charName: "Yamanaka-Fu",
      charId: 137
    },
    {
      charName: "Shimura-Danzo",
      charId: 138
    },
    {
      charName: "Tsunade-(S)",
      charId: 139
    },
    {
      charName: "Senju-Hashirama",
      charId: 140
    },
    {
      charName: "Senju-Tobirama",
      charId: 141
    },
    {
      charName: "Uchiha-Izuna",
      charId: 142
    },
    {
      charName: "Uchiha-Madara",
      charId: 143
    },
    {
      charName: "Uchiha-Shisui",
      charId: 144
    },
    {
      charName: "Uchiha-Fugaku",
      charId: 145
    },
    {
      charName: "Uchiha-Naori",
      charId: 146
    },
    {
      charName: "Uchiha-Naka",
      charId: 147
    },
    {
      charName: "Maito-Dai",
      charId: 148
    },
    {
      charName: "Shira",
      charId: 149
    },
    {
      charName: "Maki",
      charId: 150
    },
    {
      charName: "Chiyo",
      charId: 151
    },
    {
      charName: "Kankuro-(S)",
      charId: 152
    },
    {
      charName: "Temari-(S)",
      charId: 153
    },
    {
      charName: "Kazekage-Gaara",
      charId: 154
    },
    {
      charName: "Ruka",
      charId: 155
    },
    {
      charName: "Ao",
      charId: 156
    },
    {
      charName: "Chojuro",
      charId: 157
    },
    {
      charName: "Terumi-Mei",
      charId: 158
    },
    {
      charName: "Akatsuchi",
      charId: 159
    },
    {
      charName: "Kurotsuchi",
      charId: 160
    },
    {
      charName: "Ittan",
      charId: 161
    },
    {
      charName: "Monga",
      charId: 162
    },
    {
      charName: "Kitsuchi",
      charId: 163
    },
    {
      charName: "Ohnoki",
      charId: 164
    },
    {
      charName: "Sabu",
      charId: 165
    },
    {
      charName: "Atsui",
      charId: 166
    },
    {
      charName: "Karui",
      charId: 167
    },
    {
      charName: "Omoi",
      charId: 168
    },
    {
      charName: "Samui",
      charId: 169
    },
    {
      charName: "Shee",
      charId: 170
    },
    {
      charName: "Darui",
      charId: 171
    },
    {
      charName: "Motoi",
      charId: 172
    },
    {
      charName: "Furui",
      charId: 173
    },
    {
      charName: "Dodai",
      charId: 174
    },
    {
      charName: "Mabui",
      charId: 175
    },
    {
      charName: "Ay",
      charId: 176
    },
    {
      charName: "Samurai-Troops",
      charId: 177
    },
    {
      charName: "Mifune",
      charId: 178
    },
    {
      charName: "Hanzo-Of-The-Salamander",
      charId: 179
    },
    {
      charName: "Ajisai",
      charId: 180
    },
    {
      charName: "Nii-Yugito",
      charId: 181
    },
    {
      charName: "Karatachi-Yagura",
      charId: 182
    },
    {
      charName: "Roshi",
      charId: 183
    },
    {
      charName: "Han",
      charId: 184
    },
    {
      charName: "Utakata",
      charId: 185
    },
    {
      charName: "Fuu",
      charId: 186
    },
    {
      charName: "Killer-Bee",
      charId: 187
    },
    {
      charName: "Hachibi-Bee",
      charId: 188
    },
    {
      charName: "Hozuki-Suigetsu",
      charId: 189
    },
    {
      charName: "Karin",
      charId: 190
    },
    {
      charName: "Juugo",
      charId: 191
    },
    {
      charName: "Cursed-Seal-Juugo",
      charId: 192
    },
    {
      charName: "Uchiha-Sasuke-(S)",
      charId: 193
    },
    {
      charName: "Cursed-Seal-Sasuke-(S)",
      charId: 194
    },
    {
      charName: "Mangekyou-Sasuke",
      charId: 195
    },
    {
      charName: "Yakushi-Kabuto-(S)",
      charId: 196
    },
    {
      charName: "Orochimaru-(S)",
      charId: 197
    },
    {
      charName: "White-Snake-Orochimaru",
      charId: 198
    },
    {
      charName: "Fukasaku-and-Shima",
      charId: 199
    },
    {
      charName: "Jiraiya-(S)",
      charId: 200
    },
    {
      charName: "Sennin-Jiraiya",
      charId: 201
    },
    {
      charName: "Sennin-Naruto",
      charId: 202
    },
    {
      charName: "Three-Tails-Kyuubi-Naruto",
      charId: 203
    },
    {
      charName: "Four-Tails-Kyuubi-Naruto",
      charId: 204
    },
    {
      charName: "Six-Tails-Kyuubi-Naruto",
      charId: 205
    },
    {
      charName: "Falls-Of-Truth",
      charId: 206
    },
    {
      charName: "Fudou",
      charId: 207
    },
    {
      charName: "Fuen",
      charId: 208
    },
    {
      charName: "Fuuka",
      charId: 209
    },
    {
      charName: "Kazuma",
      charId: 210
    },
    {
      charName: "Sora",
      charId: 211
    },
    {
      charName: "Kyuubi-Sora",
      charId: 212
    },
    {
      charName: "Chiriku",
      charId: 213
    },
    {
      charName: "Yuukimaru",
      charId: 214
    },
    {
      charName: "Kigiri",
      charId: 215
    },
    {
      charName: "Nurari",
      charId: 216
    },
    {
      charName: "Kihou",
      charId: 217
    },
    {
      charName: "Gozu",
      charId: 218
    },
    {
      charName: "Rinji",
      charId: 219
    },
    {
      charName: "Guren",
      charId: 220
    },
    {
      charName: "Mecha-Naruto",
      charId: 221
    },
    {
      charName: "Mecha-Kurama",
      charId: 222
    },
    {
      charName: "Shizuka",
      charId: 223
    },
    {
      charName: "Satori",
      charId: 224
    },
    {
      charName: "Kisame-Body-Double",
      charId: 225
    },
    {
      charName: "Itachi-Body-Double",
      charId: 226
    },
    {
      charName: "Deidara",
      charId: 227
    },
    {
      charName: "Hiruko-Sasori",
      charId: 228
    },
    {
      charName: "Sasori-Of-The-Red-Sand",
      charId: 229
    },
    {
      charName: "Puppet-Sasori",
      charId: 230
    },
    {
      charName: "Hidan",
      charId: 231
    },
    {
      charName: "Kakuzu",
      charId: 232
    },
    {
      charName: "True-Form-Kakuzu",
      charId: 233
    },
    {
      charName: "Hoshigaki-Kisame-(S)",
      charId: 234
    },
    {
      charName: "Uchiha-Itachi-(S)",
      charId: 235
    },
    {
      charName: "Biwa-Juuzou",
      charId: 236
    },
    {
      charName: "Akatsuki-Orochimaru",
      charId: 237
    },
    {
      charName: "Kyuusuke",
      charId: 238
    },
    {
      charName: "Daibutsu",
      charId: 239
    },
    {
      charName: "Yahiko",
      charId: 240
    },
    {
      charName: "Konan",
      charId: 241
    },
    {
      charName: "Konan-Of-The-Rain",
      charId: 242
    },
    {
      charName: "Uzumaki-Nagato",
      charId: 243
    },
    {
      charName: "Animal-Path-Pain",
      charId: 244
    },
    {
      charName: "Female-Animal-Path-Pain",
      charId: 245
    },
    {
      charName: "Asura-Path-Pain",
      charId: 246
    },
    {
      charName: "Human-Path-Pain",
      charId: 247
    },
    {
      charName: "Naraka-Path-Pain",
      charId: 248
    },
    {
      charName: "Preta-Path-Pain",
      charId: 249
    },
    {
      charName: "Deva-Path-Pain",
      charId: 250
    },
    {
      charName: "White-Zetsu",
      charId: 251
    },
    {
      charName: "Black-Zetsu",
      charId: 252
    },
    {
      charName: "Tobi",
      charId: 253
    },
    {
      charName: "Akatsuki-Sasuke",
      charId: 254
    },
    {
      charName: "Edo-Tensei-Asuma",
      charId: 255
    },
    {
      charName: "Edo-Tensei-Dan",
      charId: 256
    },
    {
      charName: "Edo-Tensei-Hizashi",
      charId: 257
    },
    {
      charName: "Edo-Tensei-Shin",
      charId: 258
    },
    {
      charName: "Edo-Tensei-Hayate",
      charId: 259
    },
    {
      charName: "Edo-Tensei-Torune",
      charId: 260
    },
    {
      charName: "Edo-Tensei-Ginkaku",
      charId: 261
    },
    {
      charName: "Edo-Tensei-Kinkaku",
      charId: 262
    },
    {
      charName: "Edo-Tensei-Kyuubi-Kinkaku",
      charId: 263
    },
    {
      charName: "Edo-Tensei-Pakura",
      charId: 264
    },
    {
      charName: "Edo-Tensei-Gari",
      charId: 265
    },
    {
      charName: "Edo-Tensei-Fukai",
      charId: 266
    },
    {
      charName: "Edo-Tensei-Hanzo",
      charId: 267
    },
    {
      charName: "Edo-Tensei-Chiyo",
      charId: 268
    },
    {
      charName: "Edo-Tensei-Chukichi",
      charId: 269
    },
    {
      charName: "Edo-Tensei-Toroi",
      charId: 270
    },
    {
      charName: "Edo-Tensei-Chen",
      charId: 271
    },
    {
      charName: "Edo-Tensei-Yota",
      charId: 272
    },
    {
      charName: "Edo-Tensei-Tatewaki",
      charId: 273
    },
    {
      charName: "Edo-Tensei-Heiji",
      charId: 274
    },
    {
      charName: "Edo-Tensei-Daimaru",
      charId: 275
    },
    {
      charName: "Edo-Tensei-Chuukaku",
      charId: 276
    },
    {
      charName: "Edo-Tensei-Sand-Jester-Nin",
      charId: 277
    },
    {
      charName: "Edo-Tensei-Cloud-Plague-Nin",
      charId: 278
    },
    {
      charName: "Edo-Tensei-Jiroubou",
      charId: 279
    },
    {
      charName: "Edo-Tensei-Kidoumaru",
      charId: 280
    },
    {
      charName: "Edo-Tensei-Tayuya",
      charId: 281
    },
    {
      charName: "Edo-Tensei-Sakon-and-Ukon",
      charId: 282
    },
    {
      charName: "Edo-Tensei-Kimimaro",
      charId: 283
    },
    {
      charName: "Edo-Tensei-Haku",
      charId: 284
    },
    {
      charName: "Edo-Tensei-Zabuza",
      charId: 285
    },
    {
      charName: "Edo-Tensei-Jinin",
      charId: 286
    },
    {
      charName: "Edo-Tensei-Ameyuri",
      charId: 287
    },
    {
      charName: "Edo-Tensei-Kushimaru",
      charId: 288
    },
    {
      charName: "Edo-Tensei-Jinpachi",
      charId: 289
    },
    {
      charName: "Edo-Tensei-Fuguki",
      charId: 290
    },
    {
      charName: "Edo-Tensei-Mangetsu",
      charId: 291
    },
    {
      charName: "Edo-Tensei-Sandaime-Kazekage",
      charId: 292
    },
    {
      charName: "Edo-Tensei-Rasa",
      charId: 293
    },
    {
      charName: "Edo-Tensei-Ay",
      charId: 294
    },
    {
      charName: "Edo-Tensei-Muu",
      charId: 295
    },
    {
      charName: "Edo-Tensei-Gengetsu",
      charId: 296
    },
    {
      charName: "Edo-Tensei-Deidara",
      charId: 297
    },
    {
      charName: "Edo-Tensei-Sasori",
      charId: 298
    },
    {
      charName: "Edo-Tensei-Kakuzu",
      charId: 299
    },
    {
      charName: "Edo-Tensei-Nagato",
      charId: 300
    },
    {
      charName: "Edo-Tensei-Itachi",
      charId: 301
    },
    {
      charName: "Edo-Tensei-Yugito",
      charId: 302
    },
    {
      charName: "Edo-Tensei-Yagura",
      charId: 303
    },
    {
      charName: "Edo-Tensei-Roshi",
      charId: 304
    },
    {
      charName: "Edo-Tensei-Han",
      charId: 305
    },
    {
      charName: "Edo-Tensei-Utakata",
      charId: 306
    },
    {
      charName: "Edo-Tensei-Fuu",
      charId: 307
    },
    {
      charName: "Edo-Tensei-Hashirama-(S)",
      charId: 308
    },
    {
      charName: "Edo-Tensei-Tobirama-(S)",
      charId: 309
    },
    {
      charName: "Edo-Tensei-Hiruzen",
      charId: 310
    },
    {
      charName: "Edo-Tensei-Minato",
      charId: 311
    },
    {
      charName: "Edo-Tensei-Kyuubi-Minato",
      charId: 312
    },
    {
      charName: "Edo-Tensei-Madara",
      charId: 313
    },
    {
      charName: "Kyuubi-Naruto-(S)",
      charId: 314
    },
    {
      charName: "Sennin-Kyuubi-Naruto",
      charId: 315
    },
    {
      charName: "Eternal-Mangekyou-Sasuke",
      charId: 316
    },
    {
      charName: "Byakugou-Sakura",
      charId: 317
    },
    {
      charName: "Emotional-Energy-Sai",
      charId: 318
    },
    {
      charName: "Commander-Kakashi",
      charId: 319
    },
    {
      charName: "Butterfly-Chouji-(S)",
      charId: 320
    },
    {
      charName: "Commander-Gaara",
      charId: 321
    },
    {
      charName: "Captain-Kankuro",
      charId: 322
    },
    {
      charName: "Captain-Temari",
      charId: 323
    },
    {
      charName: "Samehada-Bee",
      charId: 324
    },
    {
      charName: "White-Snake-Kabuto",
      charId: 325
    },
    {
      charName: "Sennin-Kabuto",
      charId: 326
    },
    {
      charName: "Rinnegan-Tobi",
      charId: 327
    },
    {
      charName: "Uchiha-Obito-(S)",
      charId: 328
    },
    {
      charName: "Guruguru",
      charId: 329
    },
    {
      charName: "Regenerated-Madara",
      charId: 330
    },
    {
      charName: "Juubi",
      charId: 331
    },
    {
      charName: "Rikudou-Obito",
      charId: 332
    },
    {
      charName: "Rikudou-Madara",
      charId: 333
    },
    {
      charName: "Eighth-Gate-Gai",
      charId: 334
    },
    {
      charName: "Rikudou-Naruto",
      charId: 335
    },
    {
      charName: "Rinnegan-Sasuke",
      charId: 336
    },
    {
      charName: "Dual-Mangekyou-Kakashi",
      charId: 337
    },
    {
      charName: "Rehabilitated-Obito",
      charId: 338
    },
    {
      charName: "Ootsutsuki-Kaguya",
      charId: 339
    },
    {
      charName: "Ootsutsuki-Hamura",
      charId: 340
    },
    {
      charName: "Ootsutsuki-Hagoromo",
      charId: 341
    },
    {
      charName: "Ootsutsuki-Ashura",
      charId: 342
    },
    {
      charName: "Ootsutsuki-Indra",
      charId: 343
    },
    {
      charName: "Ootsutsuki-Toneri",
      charId: 344
    },
    {
      charName: "Uzumaki-Boruto",
      charId: 345
    },
    {
      charName: "Uchiha-Sarada",
      charId: 346
    },
    {
      charName: "Mitsuki",
      charId: 347
    },
    {
      charName: "Nara-Shikadai",
      charId: 348
    },
    {
      charName: "Akimichi-Chouchou",
      charId: 349
    },
    {
      charName: "Yamanaka-Inojin",
      charId: 350
    },
    {
      charName: "Metal-Lee",
      charId: 351
    },
    {
      charName: "Yuino-Iwabee",
      charId: 352
    },
    {
      charName: "Kaminarimon-Denki",
      charId: 353
    },
    {
      charName: "Kakei-Sumire",
      charId: 354
    },
    {
      charName: "Izuno-Wasabi",
      charId: 355
    },
    {
      charName: "Suzumeno-Namida",
      charId: 356
    },
    {
      charName: "Kurogane-Tsubaki",
      charId: 357
    },
    {
      charName: "Taketori-Houki",
      charId: 358
    },
    {
      charName: "Kokubou-Renga",
      charId: 359
    },
    {
      charName: "Kuroi-Hako",
      charId: 360
    },
    {
      charName: "Shinki-Of-The-Iron-Sand",
      charId: 361
    },
    {
      charName: "Araya",
      charId: 362
    },
    {
      charName: "Yodo",
      charId: 363
    },
    {
      charName: "Yurui",
      charId: 364
    },
    {
      charName: "Tarui",
      charId: 365
    },
    {
      charName: "Toroi",
      charId: 366
    },
    {
      charName: "Uzumaki-Himawari",
      charId: 367
    },
    {
      charName: "Kawaki",
      charId: 368
    },
    {
      charName: "Sarutobi-Mirai",
      charId: 369
    },
    {
      charName: "Sarutobi-Konohamaru-(B)",
      charId: 370
    },
    {
      charName: "Ise-Udon",
      charId: 371
    },
    {
      charName: "Kazamatsuri-Moegi",
      charId: 372
    },
    {
      charName: "Hyuuga-Hanabi-(B)",
      charId: 373
    },
    {
      charName: "Mugino",
      charId: 374
    },
    {
      charName: "Touno-Katasuke",
      charId: 375
    },
    {
      charName: "Mitarashi-Anko-(B)",
      charId: 376
    },
    {
      charName: "Morino-Ibiki-(B)",
      charId: 377
    },
    {
      charName: "Hokage-Naruto",
      charId: 378
    },
    {
      charName: "Uchiha-Sasuke-(B)",
      charId: 379
    },
    {
      charName: "Uchiha-Sakura",
      charId: 380
    },
    {
      charName: "Yamanaka-Sai",
      charId: 381
    },
    {
      charName: "Hatake-Kakashi-(B)",
      charId: 382
    },
    {
      charName: "Aburame-Shino-(B)",
      charId: 383
    },
    {
      charName: "Nara-Shikamaru-(B)",
      charId: 384
    },
    {
      charName: "Akimichi-Chouji-(B)",
      charId: 385
    },
    {
      charName: "Yamanaka-Ino-(B)",
      charId: 386
    },
    {
      charName: "Rock-Lee-(B)",
      charId: 387
    },
    {
      charName: "Tenten-(B)",
      charId: 388
    },
    {
      charName: "Maito-Gai-(B)",
      charId: 389
    },
    {
      charName: "Hyuuga-Hiashi-(B)",
      charId: 390
    },
    {
      charName: "Kazekage-Gaara-(B)",
      charId: 391
    },
    {
      charName: "Kankuro-(B)",
      charId: 392
    },
    {
      charName: "Nara-Temari",
      charId: 393
    },
    {
      charName: "Mizukage-Chojuro",
      charId: 394
    },
    {
      charName: "Tsuchikage-Kurotsuchi",
      charId: 395
    },
    {
      charName: "Akatsuchi-(B)",
      charId: 396
    },
    {
      charName: "Ohnoki-(B)",
      charId: 397
    },
    {
      charName: "Raikage-Darui",
      charId: 398
    },
    {
      charName: "Akimichi-Karui",
      charId: 399
    },
    {
      charName: "Omoi-(B)",
      charId: 400
    },
    {
      charName: "Killer-Bee-(B)",
      charId: 401
    },
    {
      charName: "Log",
      charId: 402
    },
    {
      charName: "Orochimaru-(B)",
      charId: 403
    },
    {
      charName: "Hozuki-Suigetsu-(B)",
      charId: 404
    },
    {
      charName: "Juugo-(B)",
      charId: 405
    },
    {
      charName: "Karin-(B)",
      charId: 406
    },
    {
      charName: "Shin-Clone",
      charId: 407
    },
    {
      charName: "Uchiha-Shin",
      charId: 408
    },
    {
      charName: "Shojoji-Of-The-Corpse-Clone",
      charId: 409
    },
    {
      charName: "Onomichi-Hassaku",
      charId: 410
    },
    {
      charName: "Fuefuki-Kyohou",
      charId: 411
    },
    {
      charName: "Hebiichigo",
      charId: 412
    },
    {
      charName: "Oniyuzu-Ichirouta",
      charId: 413
    },
    {
      charName: "Kurosuki-Buntan",
      charId: 414
    },
    {
      charName: "Karatachi-Kagura",
      charId: 415
    },
    {
      charName: "Hoshigaki-Shizuma",
      charId: 416
    },
    {
      charName: "Samehada-Fusion-Shizuma",
      charId: 417
    },
    {
      charName: "White-Zetsu-Monster",
      charId: 418
    },
    {
      charName: "Ootsutsuki-Urashiki",
      charId: 419
    },
    {
      charName: "Chakra-Fruit-Urashiki",
      charId: 420
    },
    {
      charName: "Ootsutsuki-Kinshiki",
      charId: 421
    },
    {
      charName: "Ootsutsuki-Momoshiki",
      charId: 422
    },
    {
      charName: "Chakra-Fruit-Momoshiki",
      charId: 423
    },
    {
      charName: "Karma-Boruto",
      charId: 424
    },
    {
      charName: "Ootsutsuki-Boruto",
      charId: 425
    },
    {
      charName: "Karma-Kawaki",
      charId: 426
    },
    {
      charName: "Restored-Karma-Kawaki",
      charId: 427
    },
    {
      charName: "Sennin-Mitsuki",
      charId: 428
    },
    {
      charName: "Lightning-Suit-Denki",
      charId: 429
    },
    {
      charName: "Shigaraki-Sumire",
      charId: 430
    },
    {
      charName: "Baryon-Naruto",
      charId: 431
    },
    {
      charName: "Ao-(B)",
      charId: 432
    },
    {
      charName: "Garou",
      charId: 433
    },
    {
      charName: "Victor",
      charId: 434
    },
    {
      charName: "Deepa",
      charId: 435
    },
    {
      charName: "Delta",
      charId: 436
    },
    {
      charName: "Kashin-Koji",
      charId: 437
    },
    {
      charName: "Sennin-Koji",
      charId: 438
    },
    {
      charName: "Boro",
      charId: 439
    },
    {
      charName: "Rampage-Boro",
      charId: 440
    },
    {
      charName: "Sanzu-Amado",
      charId: 441
    },
    {
      charName: "Jigen",
      charId: 442
    },
    {
      charName: "Ootsutsuki-Isshiki",
      charId: 443
    },
    {
      charName: "Code",
      charId: 444
    },
    {
      charName: "Ada",
      charId: 445
    },
    {
      charName: "Daemon",
      charId: 446
    }
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
        require("./char_images/" + teamMembers[2] + ".webp")
      ]
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
                key={index}
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
  }, [teams, teamNumber, teamStars, setTeamStars]);
  // componentDidMount();
  //console.log("Selected Chars " + selectedChars);
  return (
    <div className="App">
      <div className="charImageHolder">
        {" "}
        {charImages.map((charPic, index) => {
          return (
            <img
              key={index}
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
            <button className="btn add" onClick={() => addTeam()}>
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
          {teams.map((team, index) => {
            return (
              <>
                <div
                  key={index}
                  className={"teamBox Narutobg " + team.Background}
                >
                  <p key={index} className="teamInfo">
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
