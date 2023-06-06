import { Badge, Box, Typography, badgeClasses, styled } from "@mui/material";

export const StylesCard = styled(Box)`
  width: 200px;
  height: 300px;
  border: 1px solid #cbcbcb;
  border-radius: 4px;
`;

export const CardImage = styled("img")`
  width: 100%;
  display: block;
`;

export const CardDescriptionWrapper = styled("article")`
  font-size: 12px;
  padding: 0 8px;
  margin: 4px 0;
`;

export const CardTitle = styled(Typography)`
  font-weight: 600;
  padding: 4px 8px;
  background-color: #849fcd;
  color: #fff;
`;

export const CardDescriptionInfo = styled(Typography)`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
`;

export const StyledAppBadge = styled(Badge)`
  .${badgeClasses.badge} {
    margin-right: 16px;
  }
`;

export const CardBadge = styled(Box)`
  display: flex;
  align-items: center;
  padding: 4px;

  svg {
    font-size: 16px;
    margin-right: 4px;
  }
`;
