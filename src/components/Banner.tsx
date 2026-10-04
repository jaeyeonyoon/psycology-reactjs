import { useTranslation } from "react-i18next";
import Container from './Container';

export type BannerProp = {
  imgUrl: string;
  title: string;
  subTitle: string;
};

function Banner({ bannerProp }: { bannerProp: BannerProp }) {
  const { t } = useTranslation();

  return (
    <Container>
      {/* TODO: Fix spacing between word and image. */}
      <section
        className={`flex sm:flex-col lg:flex-row h-screen p-4 items-center justify-center bg-amber-500`}
      >
        <div className="m-5">
          <h1 className="text-6xl md:text-7xl text-white font-semibold w-1/2">
            {t(bannerProp.title)}
          </h1>
          <p className="text-xl text-white/80 font-bold w-1/2 min-w-90">
            {t(bannerProp.subTitle)}
          </p>
        </div>
        <div className="max-w-1/2">
          <img src={bannerProp.imgUrl} />
        </div>
      </section>
    </Container>
  );
}

export default Banner;