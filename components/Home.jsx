import Footer from "./Footer";
import Header from "./Header";
import Welcome from "./Welcome";

function HomeContainer() {
  return (
    <div className="sm:center-item bg-zinc-600 min-h-screen">
      <div className="sm:center-item min-h-screen sm:min-h-fit flex-col p-8 bg-zinc-900 w-full sm:w-4/5 md:w-3/5 lg:w-2/4 rounded-md">
        <Header />
        <Welcome />
        <Footer />
      </div>
    </div>
  );
}

export default HomeContainer;
