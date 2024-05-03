export default function PrimaryButton({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className="block py-[16px] px-[24px] bg-primary text-white w-full rounded-[8px]"
    >
      {text}
    </button>
  );
}
