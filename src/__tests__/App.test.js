import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
// 1) Verifica che il componente Welcome sia montato correttamente:
describe("Welcome mounting", () => {
  it("correctly mounts the welcome component", () => {
    render(<App />);
    const welcome = screen.getByText(
      "Hey, nice to see you! Welcome in our EpiBooks Shop"
    );
    expect(welcome).toBeInTheDocument();
  });
});

//2) Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato:
describe("render cards", () => {
  it("shows as many cards as there are elements in array", () => {
    render(<App />);
    const cards = screen.getAllByAltText("card-image");
    expect(cards).toHaveLength(148);
  });
});

//3) Verifica che il componente CommentArea venga renderizzato correttamente.
describe("mounts of CommentArea", () => {
  it("correctly mounts the CommentArea component", () => {
    render(<App />);
    const buttons = screen.queryAllByText(/select/i);
    buttons.forEach((button) => {
      fireEvent.click(button);
      const commentArea = screen.getByText(/comments/i);
      expect(commentArea).toBeInTheDocument();
    });
  });
});

// 5) Verifica che, cliccando su un libro, il suo bordo cambi colore.
describe("change border color", () => {
  it("change the border color", () => {
    render(<App />);
    const buttons = screen.queryAllByText(/select/i);
    const cards = screen.getAllByAltText("card-image");
    const initialBorderColor = window.getComputedStyle(cards).borderColor;
    buttons.forEach((button) => {
      fireEvent.click(button);
      const borderColorAfterClick = window.getComputedStyle(cards).borderColor;
      expect(borderColorAfterClick).not.toEqual(initialBorderColor);
    });
  });
});
