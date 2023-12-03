import { useState } from "react"
import Signup from "./Signup"
import Login from "./Login"
import "./Account.css"
import AccountFeatureSwapper from "../../components/ui/AccountFeatureSwapper"

function AccountPageSwitcher() {
    const [accountState, setAccountState] = useState("register");

    if (accountState === "register") {
        return (
            <div className="account-container">
                <Signup />
                <AccountFeatureSwapper content={"Click Here"} onClickFunction={() => setAccountState("login")} />
            </div>
        )
    } else if (accountState === "login") {
        return (
            <div className="account-container">
                <Login />
                <AccountFeatureSwapper content={"Create an Account"} onClickFunction={() => setAccountState("register")} />
            </div>
        )
    }
}

export default function Account() {
    return (
        <AccountPageSwitcher />
    )
}