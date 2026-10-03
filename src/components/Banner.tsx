import { useTranslation } from "react-i18next";

export type BannerProp = {
  bgUrl: string
};

function Banner({ bannerProp }: { bannerProp: BannerProp }) {
  const { t } = useTranslation();

  return (
    
    <section className={`flex flex-col h-screen w-screen p-8 items-center justify-center bg-[url(${bannerProp.bgUrl})] bg-no-repeat bg-cover`}>
      <h1 className="text-6xl md:text-7xl text-white font-semibold w-1/2">
        {t('welcome')}
      </h1>
      <p className="text-xl text-white/80 font-bold w-1/2 min-w-90">
        {t('welcome_sub')}
      </p>
    </section>
  );
}

export default Banner;