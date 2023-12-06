import Card from "./Card";
export default function Cards({ meme }:CardsProps) {
  return (
    <>
          {meme.length < 1 ? (
            <p className="text-center text-danger">...loading</p>
          ) : (
            meme.map((meme:meme) => {
              return <Card meme={meme} key={meme.id} />;
            })
          )}
    </>
  );
}
