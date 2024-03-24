import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomCardMedia = styled(CardMedia)({
  position: "relative",
  overflow: "hidden",
  borderRadius: "8px",
  width: "100%",
  transition: "opacity 0.3s, transform 0.3s",
  "&:hover": {
    opacity: 0.9,
    transform: "scale(0.9)",
  },
});

const CustomButton = styled(Button)({
    border: "3px solid black",
    color: "black",
    fontWeight: "bold",
    "&:hover": {
      border: "3px solid #3f51b5",
      backgroundColor: "#3f51b5",
      color: "white",
    },
  });
  

export default function PortfolioCard({
  header,
  subheader,
  description,
  body,
  media,
  techStack,
  url,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 900, backgroundColor: "inherit", boxShadow: "none"}}>
      <CardHeader title={header} subheader={subheader} />
      <CustomCardMedia component="img" image={media} alt="project-img" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
          <p style={{ fontSize: "20px", fontWeight: "600" }}>
            Tech Stacks: {techStack}
          </p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <CardActions>
          <CustomButton
           className="view-on-github"
            variant="outlined"
            href={url}
            target="_blank"
          >
            View on Github
          </CustomButton>
        </CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            paragraph
            style={{ fontWeight: "700", fontSize: "large" }}
          >
            Description:
          </Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
