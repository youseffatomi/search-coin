import Image from "next/image";
import CloseCircle from "@/assets/icons/close-circle.svg";
export default function InpText({ placeholder, value, setValue }) {
  return (
    <div className="flex items-stretch gap-5  overflow-hidden pr-[16px] w-full border-solid border-[#E0E0E0] border-[1px] rounded-[8px]  text-[#212121] focus-within:border-primary transition-all">
      <input
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="block p-[16px] pr-0 flex-grow"
      />
      {value && value.length > 0 && (
        <button onClick={() => setValue("")} type="button">
          <Image src={CloseCircle} alt="close" />
        </button>
      )}
    </div>
  );
}
