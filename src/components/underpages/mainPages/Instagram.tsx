import { useEffect, useState } from "react";
import GalleryPic from "../../macromodules/GalleryPic";
import EndOfPage from "../../macromodules/EndOfPage";

function Instagram() {
  const [feeds, setFeed] = useState<any[]>([]);

  useEffect(() => {
    const instagramData = async () => {
      const url = `https://graph.instagram.com/v15.0/me/media?fields=id,media_url,permalink&access_token=${process.env.REACT_APP_INSTAGRAM_KEY}`;
      const data = await fetch(url).then((res) => res.json());
      setFeed(data);
    };
    instagramData();
  }, []);



  return (
    <>
      <img
        src="./img/HintergrundPilz.jpg"
        alt="Michel Bundel Fotografie"
        className="backgroundIMG"
      />
      <div className="centerblock">
        <div className="centerblock__animation">
          <h1>Instagram</h1>
        </div>
        <div className="centerblock__content">
          {Object.values(feeds)[0]
            ?.slice(0, 15)
            .map((d: any) => {
              return (
                <GalleryPic
                  key={d.id}
                  imgSrc={d.media_url}
                  href={d.permalink}
                />
              );
            })}
        </div>
       
        <EndOfPage/>
      </div>
    </>
  );
}

export default Instagram;
