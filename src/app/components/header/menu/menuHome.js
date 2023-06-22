import MenuItem from "./menuItem";

export default function MenuHome() {
  return (
    <>
      <ul className="flex max-xl:w-full max-xl:flex-col">
            <MenuItem link="/">コレクション一覧</MenuItem>
            <MenuItem link="/">ピックアップ</MenuItem>
            <MenuItem link="/">はじめての方</MenuItem>
          </ul>
    </>
  );
}
