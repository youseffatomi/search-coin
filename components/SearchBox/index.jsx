"use client";
import { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import Card from "../Card";
import InpText from "../Input/Text";
import { useRouter } from "next/navigation";

export default function SearchBox({ value }) {
  const [val, setVal] = useState(value);

  const Router = useRouter();

  const onSubmit = (e) => {
    e?.preventDefault();
    Router.push(`/coin/${val}`);
  };
  return (
    <div className="w-[604px]">
      <form onSubmit={onSubmit}>
        <Card className="grid gap-[32px]">
          <InpText placeholder="Currency Name" value={val} setValue={setVal} />
          <PrimaryButton text="Search" onClick={onSubmit} type="submit" />
        </Card>
      </form>
    </div>
  );
}
