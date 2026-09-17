export default function HomePage() {
  const siteName = "CSMJU";
  const description = "เว็บไซต์รวบรวมข้อมูลรายวิชา";
  const courseCount: number = 5;
  const isOpen: boolean = true;

  const topics: string[] = ["HTML", "CSS", "TypeScript", "Next.js"];

  return (
    <main className="page">
      {/* ชื่อเว็บไซต์ */}
      <article className="Name">
        <h1 className="Name">{siteName}</h1>
      </article>

      {/* รายละเอียดเว็บไซต์ */}
      <section className="intro">
        <p>{description}</p>

        <div className="infoBox">
          <div className="infoItem">
            <h3>จำนวนรายวิชา</h3>
            <p>{courseCount} รายวิชา</p>
          </div>

          <div className="infoItem">
            <h3>สถานะระบบ</h3>
            <p className={isOpen ? "statusOpen" : "statusClosed"}>
              {isOpen ? "เปิดใช้งาน" : "ปิดใช้งาน"}
            </p>
          </div>
        </div>
      </section>

      {/* หัวข้อ */}
      <section className="intro">
        <h2 className="sectionTitle">หัวข้อที่เกี่ยวข้อง</h2>

        <ul className="topicList">
          {topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      {/* รายละเอียด */}
      <section className="intro">
        <h2>เว็บไซต์นี้เหมาะสำหรับ</h2>

        <p>
          เว็บไซต์นี้เหมาะสำหรับนักเรียนและนักศึกษาที่ต้องการค้นหา
          และรวบรวมข้อมูลเกี่ยวกับรายวิชาต่าง ๆ
        </p>
      </section>
    </main>
  );
}
