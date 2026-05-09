import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    function update() {
      const atBottom =
        window.scrollY + window.innerHeight >= document.body.scrollHeight - 8;
      if (atBottom) {
        const lastId = sectionIds[sectionIds.length - 1];
        if (document.getElementById(lastId)) setActive(lastId);
        return;
      }
      const mid = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      });
      setActive(current);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [sectionIds]);

  return active;
}
