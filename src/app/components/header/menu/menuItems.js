import MenuItem from "./menuItem";

export default function MenuItems() {
  return (
    <>
      <ul className="flex max-xl:w-full max-xl:flex-col">
            <MenuItem link="/">ピックアップ</MenuItem>
            <MenuItem link="/">はじめての方</MenuItem>
            <MenuItem link="/">漫画</MenuItem>
            <MenuItem link="/">車</MenuItem>
            <MenuItem link="/">FOOD</MenuItem>
          </ul>
    </>
  );
}
