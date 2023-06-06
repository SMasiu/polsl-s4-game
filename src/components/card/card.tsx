import { Box } from "@mui/material";
import {
  CardBadge,
  CardDescriptionInfo,
  CardDescriptionWrapper,
  CardImage,
  CardTitle,
  StyledAppBadge,
  StylesCard,
} from "./card.styles";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";

export const Card = () => {
  return (
    <StyledAppBadge
      badgeContent={
        <CardBadge>
          <LocalGasStationIcon /> 5
        </CardBadge>
      }
      color="primary"
    >
      <StylesCard>
        <CardTitle>Tiger 2</CardTitle>
        <CardImage src="/cards/tiger2.webp" />
        <CardDescriptionWrapper>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, qui.
        </CardDescriptionWrapper>
        <CardDescriptionInfo>
          <strong>Atak</strong> 20
        </CardDescriptionInfo>
        <CardDescriptionInfo>
          <strong>HP</strong> 120
        </CardDescriptionInfo>
      </StylesCard>
    </StyledAppBadge>
  );
};
