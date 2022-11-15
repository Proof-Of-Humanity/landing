import Ecosystem from "@components/Ecosystem";
import UseCases from "@components/UseCases";
import Process from "@components/Process";
import Identity from "@components/Identity";
import Claim from "@components/Claim";
import Display from "@components/Display";

const Home = () => (
  <main>
    <Display />
    <UseCases />
    <Identity />
    <Ecosystem />
    <Process />
    <Claim />
  </main>
);

export default Home;
