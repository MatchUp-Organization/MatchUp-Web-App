import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom";
import { Menu, Bell, User, Search } from "lucide-react";
import SearchBar from "../../components/ui/SearchBar";
import { Button } from "../../components/ui/Button/Button";
import ProfileFlyout from "../../components/ui/ProfileFlyout/ProfileFlyout";

export default function PageHeader() {
    return (
        <div className="flex gap-10 lg:gap-20 justify-between py-2 px-2 lg:px-5 bg-highlight">
            <div className="flex items-center flex-shrink-0">
                <Link to="/" className="text-3xl">
                    MatchUp
                </Link>
            </div>
            <SearchBar />
            <div className="flex flex-shrink-0 md:gap-2">
                <div className="md:hidden">
                    <Search />
                </div>
                <div className="flex items-center">
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
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })
    const location = useLocation()

    return (
        <div className={isActive ? "active" : ""} >
            <Link to={to} {...props} state={{ from: location }}>
                {children}
            </Link>
        </div>
    )
}