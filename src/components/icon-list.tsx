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
            className="text-muted-foreground hover:text-primary hover:border-primary border-border flex size-8 items-center justify-center border transition-colors duration-200"
            target="_blank"
            rel="noreferrer noopener"
          >
            <icon.icon
              size={icon.size}
              role={icon.role}
              aria-label={icon.label}
              className="size-4"
            />
            {hasText && <span className="ms-2">{icon.text}</span>}
          </Link>
        )}

        {!icon.link && (
          <div className="text-primary flex flex-col items-center gap-y-1 rounded-lg p-2">
            <icon.icon
              size={icon.size}
              role={icon.role}
              aria-label={icon.label}
              className=""
            />
            {hasText && <span>{icon.text}</span>}
          </div>
        )}
      </li>
    );
  });

  return <ul className={className}>{iconItems}</ul>;
});

IconList.displayName = "IconList";

export default IconList;
