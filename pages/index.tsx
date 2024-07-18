import Ecosystem from "@components/Ecosystem";
import UseCases from "@components/UseCases";
import Process from "@components/Process";
import Identity from "@components/Identity";
import Claim from "@components/Claim";
import Display from "@components/Display";
import Introducing from "@components/Introducing";

const Home = () => (
  <main>
    <Display />
    <UseCases />
    <Identity />
    <Introducing />
    <Process />
    <Ecosystem />
    <Claim />
  </main>
);

export default Home;
