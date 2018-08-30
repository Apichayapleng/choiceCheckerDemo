export class YesNoQuestion{
    id: number;
    name: string;
    yesId?: number;
    noId?: number;
    yesResult?: number;
    noResult?: number;
    yesImage?: string;
    noImage?: string;
}

export const YesNoQuestions: YesNoQuestion[] = [
    {id: 1, name: "หลังล้างหน้าแล้ว คุณรู้สึกว่าผิวบริเวณใบหน้าตึงๆ หรือไม่", yesId: 2, noId: 5},
    {id: 2, name: "คุณรู้สึกบ่อยครั้งว่า ผิวบริเวณรอบๆ ปาก กับรอบๆ ตาแห้ง หรือ ลอกเป็นขุย หรือ เป็นผื่นแดง โดยเฉพาะเมื่ออยู่ในห้องแอร์ หรือบริเวณอากาศเย็น", yesId: 3, noId: 6},
    {id: 3, name: "แม้คุณทาโทนเนอร์หรือมอยเจอไรเซอร์เท่าไหร่ ก็ยังคงรู้สึกว่าหน้าแห้งๆ ตึงๆ ลอกเป็นขุย หรือมีผื่นแดง อยู่บ่อยครั้ง", yesId: 4, noId: 0},
    {id: 4, name: "เวลาคุณต้องเจอกับมลภาวะต่างๆ เช่น ฝุ่นละออง เกสรดอกไม้ เป็นต้น คุณจะรู้สึกคัน ผื่นแดงขึ้น", yesResult: 5, noResult: 4},
    {id: 5, name: "รูขุมขนบริเวณใบหน้าคุณเป็นแบบไหน", yesId: 6, noId: 7, yesImage: "", noImage: ""},
    {id: 6, name: "คุณรู้สึกอย่างไร เมื่อคุณใช้มือสัมผัสใบหน้าของคุณ", yesId: 8, noResult: 1},
    {id: 7, name: "คุณรู้สึกอย่างไร เมื่อคุณใช้มือสัมผัสใบหน้าของคุณ", yesId: 8, noId: 10},
    {id: 8, name: "คุณรู้สึกไหมว่า เมคอัพหลุดง่ายบริเวณทีโซน เวลาคุณแต่งหน้า", yesId: 9, noId: 10},
    {id: 9, name: "คุณรู้สึกไหมว่า เพิ่งล้างหน้าเสร็จ หรือเพิ่งใช้กระดาษซับมันเช็ด หน้ากลับมามันอีกแล้ว", yesResult: 2, noResult: 3},
    {id: 10, name: "คุณรู้สึกไหมว่า บริเวณแก้มของคุณรู้สึกตึง แห้ง หรือลอกบ่อยกว่าบริเวณอื่นๆ", yesResult: 3, noResult: 1}
];

export class YesNoResult{
    id: number;
    name: string;
}

export const YesNoResults: YesNoResult[] = [
  {id: 1, name: "ผิวปกติ"},
  {id: 2, name: "ผิวมัน"},
  {id: 3, name: "ผิวผสม"},
  {id: 4, name: "ผิวแห้ง"},
  {id: 5, name: "ผิวอ่อนแอ เปราะบาง"},
];