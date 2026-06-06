import "./index.css";
import { Composition, Folder } from "remotion";
import { GoobusPageVideo, GoobusShowcase } from "./GoobusPageVideo";
import { pageVideos } from "./pageData";

const fps = 30;
const width = 1080;
const height = 1920;
const durationInFrames = 8 * fps;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Goobus-Paginas">
        {pageVideos.map((page, index) => (
          <Composition
            key={page.id}
            id={`Goobus-${page.id}`}
            component={GoobusPageVideo}
            durationInFrames={durationInFrames}
            fps={fps}
            width={width}
            height={height}
            defaultProps={{ page, index }}
          />
        ))}
      </Folder>
      <Folder name="Goobus-Showcase">
        <Composition
          id="Goobus-todas-as-paginas"
          component={GoobusShowcase}
          durationInFrames={pageVideos.length * 5 * fps}
          fps={fps}
          width={width}
          height={height}
          defaultProps={{ pages: pageVideos }}
        />
      </Folder>
    </>
  );
};
