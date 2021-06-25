export default function getCategoryValues (category) {
  let categoryValues = {
    title: "",
    border: "border-postitblue",
    bg: "bg-postitblue",
    color: "blue",
  };

  switch (category) {
    case "development":
      categoryValues = {
        title: "Software Development",
        border: "border-postityellow",
        bg: "bg-postityellow",
        color: "yellow",
      }
      break;
    case "design":
      categoryValues = {
        title: "Collaborative Design",
        border: "border-postitpink",
        bg: "bg-postitpink",
        color: "pink",
      }
      break;
    case "mentoring":
      categoryValues = {
        title: "Advising/Mentoring",
        border: "border-postitgreen",
        bg: "bg-postitgreen",
        color: "green",
      }
      break;

    default:
      break;

  }

  return categoryValues;
}
