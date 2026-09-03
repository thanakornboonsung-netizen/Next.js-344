import type { Band } from "@/types/band";
export const bands: Band[] = [
  {
    id: 1,
    name: "Serious Bacon",
    genre: "Pop",
    description: "วงดนตรีไทยแนว Pop ที่มีเอกลักษณ์โดดเด่น และมีเพลงที่ได้รับความนิยม",
    image: "/images/bands/SeriousBacon.png",
    members: [
      {
        id: 1,
        name: "เมือง",
        role: "Vocal / Guitar",
        image: "/images/member/images (1).jpg",
      },
      {
        id: 2,
        name: "เค้ก",
        role: "Vocal / Guitar",
        image: "/images/member/cakeseriousbacon.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "Dept",
    genre: "Indie Pop",
    description: "วงดนตรีไทยแนว Indie Pop ที่มีสไตล์ดนตรีเป็นเอกลักษณ์และมีเพลงที่โดดเด่น",
    image: "/images/bands/Dept.jpg",
    members: [
      {
        id: 1,
        name: "เบนซ์",
        role: "Vocal / Guitar ",
        image: "/images/member/images.jpg",
      },
      {
        id: 2,
        name: "ลุค",
        role: "Guitar / Piano ",
        image: "/images/member/luke_-_dept.jpg",
      },
    ],
  },

  {
    id: 3,
    name: "Safeplanet",
    genre: "Indie Pop / Alternative",
    description: "วงดนตรีไทยที่มีเอกลักษณ์ด้านดนตรีแนว Indie Pop และ Alternative พร้อมบรรยากาศของเพลงที่โดดเด่น",
    image: "/images/bands/SafePlanet.jpg",
    members: [
      {
        id: 1,
        name: "เอเลียต",
        role: "Vocal / Guitar",
        image: "/images/member/alien.jpg",
      },
      {
        id: 2,
        name: "ดอย",
        role: "Drums",
        image: "/images/member/doy.jpg",
      },
      {
        id: 3,
        name: "ยี่",
        role: "Bass",
        image: "/images/member/yi.jpg",
      },
    ],
  },
];
