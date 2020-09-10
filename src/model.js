import image from "./assets/image.png";
import {
  TitleBlock,
  ImageBlock,
  TextBlock,
  TextColumsBlock,
} from "./classes/blocks";
import { css } from "./utils";

export const model = [
  new TitleBlock("Конструктор сайтов на чистом Javascript", {
    tag: "h2",
    styles: css({
      background: "darkred",
      color: "#fff",
      "text-align": "center",
    }),
  }),

  new ImageBlock(image, {
    styles: "padding: 2rem 0; display: flex; justify-content: center;",
    alt: "my image",
    imageStyles: "width: 500px; height: auto;",
  }),

  new TextBlock(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quo.",
    {
      styles: "background: darkblue; color: yellow;",
    }
  ),

  new TextColumsBlock(["1 text", "2 text", "3 text", "2 text", "3 text"], {
    styles: "padding: 1rem;",
  }),
];
