import TopNavIcons from "./TopNavIcons";
import TopNavTitle from "./TopNavTitle";

const TopNav = () => {
  return (
    <nav className="h-16 flex items-center justify-between mt-5">
      <TopNavTitle />
      <TopNavIcons />
    </nav>
  );
};

export default TopNav;
