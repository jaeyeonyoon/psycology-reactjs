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
    <div
      className={`w-screen bg-[url('${bannerProp.imgUrl}')] bg-cover bg-center  bg-no-repeat`}
    >
      <Container>
        <section
          id="home"
          className={`flex lg:flex-row h-screen p-4 items-center justify-center`}
        >
          <div className="m-5">
            <h1 className="text-[#FEED9F] text-6xl md:text-7xl  font-semibold w-1/2">
              {t(bannerProp.title)}
            </h1>
            <p className="text-xl text-white font-bold w-1/2 min-w-90">
              {t(bannerProp.subTitle)}
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default Banner;