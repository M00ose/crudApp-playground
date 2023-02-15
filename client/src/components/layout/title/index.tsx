import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import { smartergood, logoSM } from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={ logoSM } alt="Smarter Good" width="28px" />
        ) : (
          <img src={smartergood} alt="Smarter Good" width="100px" />
        )}
      </Link>
    </Button>
  );
};
