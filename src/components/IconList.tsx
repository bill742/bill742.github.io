import Link from "next/link";
import { FC, memo } from "react";

import { iconType } from "@/types/iconTypes";

const IconList: FC<{
  className?: string;
  hasText: boolean;
  iconInfos: Array<iconType>;
}> = memo(({ className, hasText, iconInfos }) => {
  const iconItems = iconInfos.map((icon) => {
    return (
      <li key={icon.id} className={hasText ? "flex flex-row" : ""}>
        {icon.link && (
          <Link
            href={icon.link || ""}
            passHref
            className="flex flex-row"
            target="_blank"
            rel="noreferrer noopener"
          >
            <icon.icon
              size={icon.size}
              role={icon.role}
              aria-label={icon.label}
            />
            {hasText && <span className="ms-2">{icon.text}</span>}
          </Link>
        )}

        {!icon.link && (
          <>
            <icon.icon
              size={icon.size}
              role={icon.role}
              aria-label={icon.label}
            />

            {hasText && <span className="ms-2">{icon.text}</span>}
          </>
        )}
      </li>
    );
  });

  return <ul className={className}>{iconItems}</ul>;
});

IconList.displayName = "IconList";

export default IconList;
