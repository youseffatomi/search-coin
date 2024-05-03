export default function Card({ children, className: CN }) {
  return (
    <div className={`p-[64px] rounded-[24px]  bg-white ${CN}`}>{children}</div>
  );
}
