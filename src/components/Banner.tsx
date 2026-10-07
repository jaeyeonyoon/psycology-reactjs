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
      <section
        className={`flex sm:flex-col lg:flex-row h-screen p-4 items-center justify-center`}
      >
        <div className="max-w-1/2 mx-10">
          <img className="rounded-2xl shadow" src={bannerProp.imgUrl} />
        </div>
        <div className="m-5">
          <h1 className="text-6xl md:text-7xl text-black font-semibold w-1/2">
            {t(bannerProp.title)}
          </h1>
          <p className="text-xl text-black/80 font-bold w-1/2 min-w-90">
            {t(bannerProp.subTitle)}
          </p>
        </div>
      </section>
    </Container>
  );
}

export default Banner;