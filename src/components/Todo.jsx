import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Todo({ text, priority }) {
  return (
    <>
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: "var(--color-purple)",
          padding: "6px", // відстань між чекбоксом і текстом
          "&.Mui-checked": {
            color: "var(--color-purple)",
          },
          "& .MuiSvgIcon-root": {
            fontSize: 30, // збільшує загальний розмір чекбокса
            border: "1px solid var(--color-purple)", // кастомний контур
            borderRadius: "5px", // якщо треба скруглення
            boxSizing: "content-box", // щоб рамка не «з’їдала» розмір
            padding: "3px", // робить відстань від галочки до контуру більшою
          },
          "& .MuiSvgIcon-root path": {
            strokeWidth: 1.2, // тонший контур галочки
          },
        }}
      />
    </>
  );
}
