import { type FC } from "react";

const Name: FC<{ data: { name: string; kanji: string; romaji: string } }> = ({ data: { name, kanji, romaji } }) => {
  return (
    <>
      {romaji}{" "}
      <small className="text-muted">
        ({kanji}, {name})
      </small>
    </>
  );
};

export default Name;
