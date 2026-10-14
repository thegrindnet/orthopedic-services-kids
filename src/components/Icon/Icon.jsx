import "./Icon.css";
const paths = {
  arrow: "M4 12h15m-6-6 6 6-6 6",
  phone:
    "M6 3h4l1 5-3 2a15 15 0 0 0 6 6l2-3 5 1v4c0 2-2 3-4 2C9 18 6 15 3 7c-1-2 0-4 3-4Z",
  pin: "M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6",
  check: "m5 12 4 4L19 6",
  heart: "M20 5c-3-3-6-1-8 1-2-2-5-4-8-1-4 4 2 10 8 15 6-5 12-11 8-15Z",
  foot: "M14 3c4 1 3 7 0 10-2 2-1 4-3 7-2 3-7 1-7-2 0-3 3-3 3-6 0-4 3-10 7-9Z",
  brace: "M8 3h8l-1 8 2 7 3 2v2H9l-2-9Zm0 4h8M7 12h8m-7 5h9",
  shoe: "M3 13h5l4 3 8 1 2 3v2H3ZM8 13l1-8 5 2v5l4 5m-5-5 3-1",
  knee: "M8 2v6l-3 7 2 7m9-20v6l-3 7 2 7M7 9h8m-9 6h8m-8 4h8",
  back: "M8 2 6 7 3 9l3 12h12l3-12-3-2-2-5M7 12h10M7 17h10M12 10v9",
  clock: "M12 7v6l4 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",
  mail: "M3 5h18v14H3ZM3 6l9 7 9-7",
  shield: "M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6Zm-5 9 3 3 6-6",
};
export default function Icon({ name = "arrow" }) {
  return (
    <svg
      className="symbol"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.arrow} />
    </svg>
  );
}
