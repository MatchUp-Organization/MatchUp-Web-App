import { useState } from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { User, Search } from "lucide-react";
import SearchBar from "../../components/ui/SearchBar";
import { Button } from "../../components/ui/Button/Button";
import ProfileFlyout from "../../components/ui/ProfileFlyout/ProfileFlyout";

export default function PageHeader() {
  const [showSportsMenu, setShowSportsMenu] = useState(false);

  const toggleSportsMenu = () => {
    setShowSportsMenu(!showSportsMenu);
  };

  const closeSportsMenu = () => {
    setShowSportsMenu(false);
  };

  return (
    <div className="flex gap-10 lg:gap-20 justify-between py-2 px-2 lg:px-5 bg-gray-200">
      <div className="flex items-center flex-shrink-0">
        <Link to="/index" className="flex flex-row items-center gap-2">
          <img src="/MatchUpLogoSimple.png" alt="MatchUp" className="h-10 w-10" />
          <span className="text-2xl">MatchUp</span>
        </Link>
      </div>
      <SearchBar />
      <div className="flex flex-shrink-0 md:gap-2 items-center">
        <div className="md:hidden">
          <Search />
        </div>
        <div className="flex items-center relative mr-3">
          <span className="cursor-pointer" onClick={toggleSportsMenu}>Sports</span>
          {showSportsMenu && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-white rounded-md shadow-lg py-1">
              <CustomLink to="/football" onClick={closeSportsMenu}>Football</CustomLink>
              <CustomLink to="/basketball" onClick={closeSportsMenu}>Basketball</CustomLink>
              <CustomLink to="/volleyball" onClick={closeSportsMenu}>Volleyball</CustomLink>
              <CustomLink to="/tennis" onClick={closeSportsMenu}>Tennis</CustomLink>
            </div>
          )}
        </div>
        <div className="flex items-center mr-3">
          <Link to="/about">About</Link>
        </div>
        <div className="flex items-center">
          <Link to="/account">Account</Link>
        </div>
        <ProfileFlyout>
          <Button variant="default" size="icon">
            <User />
          </Button>
        </ProfileFlyout>
      </div>
    </div>
  );
}

function CustomLink({ to, children, onClick }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname });
  const location = useLocation();

  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} onClick={handleClick} state={{ from: location }}>
        {children}
      </Link>
    </div>
  );
}