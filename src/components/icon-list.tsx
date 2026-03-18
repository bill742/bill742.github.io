import Link from "next/link";
import { FC, memo } from "react";

import { iconType } from "@/types/types";

const IconList: FC<{
  className?: string;
  hasText: boolean;
  iconInfos: Array<iconType>;
}> = memo(({ className, hasText, iconInfos }) => {
  const iconItems = iconInfos.map((icon) => {
    return (
      <li key={icon.id} className={hasText ? "min-w-25" : ""}>
        {icon.link && (
          <Link
            href={icon.link || ""}
            passHref
            className="text-muted-foreground hover:text-primary hover:bg-accent/50 flex flex-row items-center rounded-lg p-2 transition-colors duration-200"
            target="_blank"
            rel="noreferrer noopener"
          >
            <icon.icon
              size={icon.size}
              role={icon.role}
              aria-label={icon.label}
              className="transition-transform duration-200 hover:scale-110"
            />
            {hasText && <span className="ms-2">{icon.text}</span>}
          </Link>
        )}

        {!icon.link && (
          <>
            <div className="text-primary flex flex-col items-center gap-y-1 rounded-lg p-2">
              <icon.icon
                size={icon.size}
                role={icon.role}
                aria-label={icon.label}
                className=""
              />
              {hasText && <span>{icon.text}</span>}
            </div>
          </>
        )}
      </li>
    );
  });

  return <ul className={className}>{iconItems}</ul>;
});

IconList.displayName = "IconList";

export default IconList;
