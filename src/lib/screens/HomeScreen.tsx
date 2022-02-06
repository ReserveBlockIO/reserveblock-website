import { HomeLearnSection } from "../components/Home/sections/HomeLearnSection";
import { HomeMasterNodesSection } from "../components/Home/sections/HomeMasternodesSection";
import { HomeWalletSection } from "../components/Home/sections/HomeWalletSection";
import { HomeBuildSection } from "../components/Home/sections/HomeBuildSection";
import { HomeNetworkSection } from "../components/Home/sections/HomeNetworkSection";
import { HomeCommunitySection } from "../components/Home/sections/HomeCommunitySection";
import { HomePressSection } from "../components/Home/sections/HomePressSection";
import { HomeIntroSection } from "../components/Home/sections/HomeIntroSection";

export const HomeScreen = () => {
  return (
    <div className="screen screen-home">
      <HomeIntroSection />

      <HomeLearnSection />
      <HomeMasterNodesSection />
      <HomeWalletSection />
      <HomeNetworkSection />
      <HomeBuildSection />

      <HomeCommunitySection />

      <HomePressSection />
    </div>
  );
};
