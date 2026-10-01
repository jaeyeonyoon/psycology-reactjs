import { useTranslation } from "react-i18next";


function Home() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="bg-white p-4 shadow rounded">Card 1</div>
      <div className="bg-white p-4 shadow rounded">Card 1</div>
      <div className="bg-white p-4 shadow rounded">Card 1</div>
    </div>
  );
}

export default Home;