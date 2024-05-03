import Card from "@/components/Card";
import SearchBox from "@/components/SearchBox";
import axios from "axios";
import Image from "next/image";
import Danger from "@/assets/icons/danger.svg";

const Row = ({ name, val }) => (
  <div className="flex items-center justify-between text-[14px] border-b-[1px] border-solid [&:last-child]:border-0 py-[16px]">
    <span className="text-gray-600  ">{name}</span>
    <span className="text-gray-900 font-bold">{val}</span>
  </div>
);

export default async function CoinPage({ params }) {
  const Coin = await axios
    .get("https://api.coingecko.com/api/v3/coins/" + params.coin)
    .catch((e) => {});

  return (
    <div className="grid gap-[40px]">
      <SearchBox value={params.coin} />

      {/* showInfo */}
      {Coin?.data && (
        <Card>
          <Image
            src={Coin.data.image.small}
            width={64}
            height={64}
            alt="icon"
            className="mx-auto mb-[24px]"
          />

          <div className="grid gap-[16px]">
            <Row name="Name" val={Coin.data.name} />
            <Row name="Symbol" val={Coin.data.symbol} />
            <Row name="ID" val={Coin.data.id} />
          </div>
        </Card>
      )}

      {!Coin?.data && (
        <Card className="flex items-center gap-3">
          <Image src={Danger} alt="icon" />
          <span className="text-[14px] font-bold">
            There is no result for “{params.coin}
            ”!
          </span>
        </Card>
      )}
    </div>
  );
}
